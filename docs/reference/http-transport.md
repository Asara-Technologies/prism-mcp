# HTTP Transport — Feature Reference

Technical reference for the PrismMCP HTTP MCP transport. Covers routes,
headers, session lifecycle, multi-client behavior, protocol negotiation,
resources, cancellation, and configuration.

For setup instructions, see
[docs/guides/http-transport.md](../guides/http-transport.md).
For security posture and deployment hardening, see
[docs/guides/security-and-privacy.md](../guides/security-and-privacy.md).

---

## Routes

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/mcp` | Send a JSON-RPC request (initialize, tools/call, tools/list, resources/read, etc.) |
| `GET` | `/mcp` | Open an SSE stream for server-to-client notifications (scoped to session) |
| `DELETE` | `/mcp` | Close the current session cleanly |
| `OPTIONS` | `/mcp` | CORS preflight — returns allowed methods and origin policy |

All routes require a valid `Mcp-Session-Id` header except the initial
`POST /mcp initialize` request, which creates the session. This applies to both
the plaintext and the in-process TLS (HTTPS) transports: the server reads
`Mcp-Session-Id` as a standard request header (any casing), so unmodified
off-the-shelf MCP clients (Claude Desktop, Cursor, VS Code, Cline) hold a session
over HTTPS with no per-client request rewriting. See
[Query-string session-id fallback](#query-string-session-id-fallback) for the
fallback some scripted clients use.

### POST /mcp

Accepts a single JSON-RPC 2.0 request body. Returns either a JSON object
(for non-streaming responses) or a `text/event-stream` body (for streaming
responses when the client provides `_meta.progressToken`).

**Request:**
```
POST /mcp HTTP/1.1
Content-Type: application/json
Mcp-Protocol-Version: 2025-11-25
Mcp-Session-Id: <uuid>          (omit on the initial initialize call)
Authorization: Bearer <token>   (required in LAN mode; omit on localhost)

{ "jsonrpc": "2.0", "id": 1, "method": "tools/call",
  "params": { "name": "get_actor_info", "arguments": { ... } } }
```

**Response (non-streaming):**
```
HTTP/1.1 200 OK
Content-Type: application/json
Mcp-Session-Id: <uuid>

{ "jsonrpc": "2.0", "id": 1, "result": { ... } }
```

**Response (streaming, when `_meta.progressToken` provided):**
```
HTTP/1.1 200 OK
Content-Type: text/event-stream
Mcp-Session-Id: <uuid>

event: message
data: { "jsonrpc": "2.0", "method": "notifications/progress",
        "params": { "progressToken": "abc", "progress": 30, "total": 100 } }

event: message
data: { "jsonrpc": "2.0", "id": 1, "result": { ... } }
```

### GET /mcp

Opens a persistent SSE stream for server-initiated notifications (session
events, cancellations, progress updates). Scoped to a single session.
The connection stays open until the client disconnects or the session expires.

```
GET /mcp HTTP/1.1
Accept: text/event-stream
Mcp-Session-Id: <uuid>
```

This route is **optional** — clients that do not open an SSE stream receive
progress notifications inline in the `POST` response instead (when
`_meta.progressToken` is present).

### DELETE /mcp

Terminates the session. The server releases all session state and any pending
requests are cancelled.

```
DELETE /mcp HTTP/1.1
Mcp-Session-Id: <uuid>
```

```
HTTP/1.1 200 OK
```

### OPTIONS /mcp

CORS preflight. Returns the allowed origins, methods, and headers. The response
reflects the server's `AllowedOrigins` configuration.

---

## Headers

### Request Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Content-Type: application/json` | Yes (POST) | All POST bodies are JSON-RPC 2.0 |
| `Accept: text/event-stream` | Yes (GET) | Required to open SSE stream |
| `Mcp-Session-Id` | Yes (all except initialize) | Session UUID returned by the initialize response |
| `Mcp-Protocol-Version` | Recommended | Client's preferred MCP protocol version. Supported: `2025-11-25`, `2025-06-18` |
| `Authorization` | LAN mode only | `Bearer <token>` — required when `HttpAuthMode` is `BearerToken` |
| `Origin` | Browser clients | Validated against `AllowedOrigins`; reject with 403 if not allowed |

### Response Headers

| Header | Present | Description |
|--------|---------|-------------|
| `Mcp-Session-Id` | All responses | Session UUID. On `initialize`, this is the newly created session ID |
| `Content-Type` | All responses | `application/json` for single responses; `text/event-stream` for streaming |
| `Access-Control-Allow-Origin` | When Origin sent | Reflects the matched allowed origin |
| `Access-Control-Allow-Headers` | Preflight | Lists all headers the client may send |

---

## Session Lifecycle

```
Client                           Server
  |                                 |
  |-- POST /mcp (initialize) -----> |  No session ID sent
  |                                 |  Session created, UUID assigned
  |<-- 200 OK (Mcp-Session-Id) ---- |
  |                                 |
  |-- POST /mcp (tools/list) -----> |  Session ID included
  |<-- 200 OK -------------------- |
  |                                 |
  |-- GET /mcp (SSE) ------------- |  Optional: open notification stream
  |<-- 200 OK (stream open) ------- |
  |                                 |
  |-- POST /mcp (tools/call) -----> |
  |<-- notifications/progress ------ |  Via SSE stream (or inline if no SSE)
  |<-- result --------------------- |
  |                                 |
  |-- DELETE /mcp ----------------> |  Clean shutdown
  |<-- 200 OK -------------------- |  Session destroyed
  |                                 |
```

Sessions that receive no requests for `HttpSessionTimeoutSeconds` (default: 300
seconds) are evicted by the server. The client receives no notification — the
next request with an expired session ID returns `404 Not Found`. Re-run
`initialize` to create a new session.

---

## Multi-Client Behavior

Multiple AI clients can hold simultaneous sessions. Each session is fully
isolated — one client's tool calls do not affect another's session state.

**Execution serialization:** All tool calls dispatch to the Unreal Engine game
thread. Requests from different sessions queue behind one another in FIFO order.
A long-running tool call (e.g., `compile_plugin`) will delay other clients'
tool calls until it completes or is cancelled.

**Session limits:** Once `MaxHttpSessions` concurrent sessions exist, new
`initialize` requests are rejected with `503 Service Unavailable`. The default
limit is 8. Adjust in Project Settings if your team is larger.

**Idle timeout:** Sessions that have been inactive for `HttpSessionTimeoutSeconds`
(default 5 minutes) are evicted. Clients that hold long-lived sessions should
either close them when done or implement re-initialization on `404` responses.

**Resource reads** (lightweight, read-only) do not block tool execution.
A cheap model can read resources in parallel with an expensive model's tool
calls — but both share the same session limit. Resource reads do consume a
session slot.

---

## Protocol Negotiation

PrismMCP supports two MCP protocol versions:

| Version | Feature set |
|---------|------------|
| `2025-11-25` | Streamable HTTP, resources, progress notifications, cooperative cancellation, CORS |
| `2025-06-18` | Baseline JSON-RPC 2.0 tools, no streaming, no resources |

The client declares its preferred version in the `initialize` request
`protocolVersion` field. The server responds with the highest version both
parties support.

If the client requests `2025-06-18`, the server operates in compatibility mode:
- `POST /mcp` responses are always single JSON objects (never SSE)
- `resources/list` and `resources/read` are not available
- `GET /mcp` (SSE notification stream) is not available
- Cancellation notifications are accepted but have no effect

Clients negotiating `2025-06-18` continue to work — no client is broken by the
upgrade.

---

## Resources

Resources are read-only server-exposed data addressable by URI. Clients
discover them via `resources/list` and read them via `resources/read`. Unlike
tools, resources do not modify editor state.

### Available Resources

| URI | Description | Content-Type |
|-----|-------------|--------------|
| `unreal://project/info` | Project name, engine version | `application/json` |
| `unreal://build/status` | Current build state and last compile result | `application/json` |
| `unreal://plugins/list` | Enabled plugins — names and versions only | `application/json` |
| `unreal://logs/recent` | Recent editor log lines (last 200, redacted) | `text/plain` |
| `unreal://settings/schema` | PrismMCP settings schema (names, types, defaults, constraints) — schema only, no live or secret values | `application/json` |

Resources are available only to clients negotiating protocol version
`2025-11-25`.

### Privacy Constraints

All resources are subject to these constraints:

- No absolute file system paths in any response
- No source code content
- No credentials, API keys, or environment variables
- Plugin paths omitted from `plugins/list` — names and versions only
- Log redaction strips lines matching credential patterns before returning
- Maximum response size: 64 KB per resource

### Resource Response Format

```json
{
  "contents": [
    {
      "uri": "unreal://project/info",
      "mimeType": "application/json",
      "text": "{ \"projectName\": \"MyGame\", \"engineVersion\": \"5.7.0\" }"
    }
  ]
}
```

### Caching

Resources can be cached by clients. The `unreal://project/info`,
`unreal://plugins/list`, and `unreal://settings/schema` resources change only
on editor restart (the schema reflects the compiled settings class). The
`unreal://build/status` resource changes after compile operations.
`unreal://logs/recent` changes frequently and should not be cached.

---

## Cancellation

Clients can cancel an in-flight tool call by sending a `notifications/cancelled`
notification on the same session:

```json
{
  "jsonrpc": "2.0",
  "method": "notifications/cancelled",
  "params": { "requestId": 1 }
}
```

Cancellation is cooperative. The server marks the request cancelled and tool
implementations check the cancellation token periodically. Long-running tools
(compile, bulk operations) respond to cancellation within a few seconds.
Short-running tools may complete before the cancellation is processed — this
is not an error.

A cancelled request that has already completed is a no-op. A cancelled request
that is still in-flight returns error code `-32800` (request cancelled):

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": { "code": -32800, "message": "Request cancelled by client" }
}
```

---

## Configuration Reference

All settings are in **Project Settings > Plugins > PrismMCP > HTTP Transport**.

Settings marked `Restart required` take effect only after a full editor restart.

| Setting | Type | Default | Restart required | Description |
|---------|------|---------|-----------------|-------------|
| `bEnableHttpTransport` | bool | `false` | Yes | Enable the HTTP MCP transport. Off by default. |
| `HttpPort` | int32 | `8080` | Yes | TCP port the HTTP server listens on. Must not conflict with the TCP transport (55557) or other services. |
| `HttpBindAddress` | string | `127.0.0.1` | Yes | Bind address. `127.0.0.1` (or `::1`) for localhost-only; a non-localhost address (e.g. `0.0.0.0`, a LAN IP) is permitted only when in-process TLS is active with a valid cert/key and a bearer token. |
| `bEnableHttpTls` | bool | `false` | Yes | Enable in-process TLS on the HTTP transport. When on, `HttpPort` serves **HTTPS only** (no plaintext on that port) and a non-localhost bind becomes permitted (with a valid cert and a bearer token). Off = plaintext on `HttpPort` (localhost only). |
| `TlsCertPath` | FilePath | (empty) | Yes | PEM certificate for in-process TLS. Used when `bEnableHttpTls` is on. Use a CA-trusted cert for zero client setup. |
| `TlsKeyPath` | FilePath | (empty) | Yes | Unencrypted PEM private key matching the cert. **Secret** — never logged or included in settings snapshots/panel pushes (presence only). Passphrase-protected keys are not supported. |
| `MaxHttpSessions` | int32 | `8` | No | Maximum concurrent sessions. New initialize requests return 503 when the limit is reached. |
| `HttpSessionTimeoutSeconds` | int32 | `300` | No | Idle session eviction threshold in seconds. Sessions with no activity past this threshold are removed. |
| `HttpAuthMode` | enum | `Auto` | Yes | `Auto`: no auth on `127.0.0.1`, Bearer token on any other address. `None`: no auth always (not recommended outside localhost). `BearerToken`: always require token. |
| `HttpBearerToken` | string | (generated) | No | Bearer token for LAN mode. Auto-generated on first LAN-mode startup. Clear to rotate (new token generated on next restart). |
| `AllowedOrigins` | string array | (empty) | No | CORS allowed origins. Empty means all origins are blocked unless the request has no Origin header. Add `http://localhost` and similar as needed. |
| `AllowedIPs` | string array | (empty) | No | IP allowlist. When non-empty, requests from IPs not in this list are rejected with 403. Empty means any authenticated IP is allowed. |

### Port model (in-process TLS)

When `bEnableHttpTls` is on, `HttpPort` serves **HTTPS only** — there is no separate HTTPS
port and no plaintext on that port. There is no simultaneous plaintext+TLS dual-listen. The
in-process TLS listener is **HTTP/1.1 only** (no HTTP/2 / no ALPN negotiation — HTTP/1.1
satisfies the MCP Streamable HTTP contract). `GET /mcp` is a 405 stub (SSE streaming is not
implemented on either the plaintext or TLS path). On any cert or bind failure with TLS
enabled, the server binds nothing on `HttpPort` and logs an error — it never falls back to
plaintext.

The HTTPS listener reads `Mcp-Session-Id` as a standard request header (any casing). It is
built on a plugin-vendored libwebsockets 4.3.x LTS (not the engine's bundled 3.0.0, which
lacked the read-arbitrary-header-by-name API); the vendored copy is link-isolated from the
engine's own libwebsockets. The exact libwebsockets runtime version is logged once at listener
startup (`FMCPTlsHttpListener: libwebsockets runtime version <ver>`) — a quick way to confirm
the listener is running on the expected library.

**Platform support:** in-process HTTPS is shipped and verified on **Win64** (source-engine
build). Mac/Linux libwebsockets prebuilts are a tracked follow-up; on platforms without the
vendored library the TLS listener is compile-disabled (it does not silently no-op).

#### Query-string session-id fallback

For clients/tools that cannot set a request header (some scripted clients, simple
`curl`/`fetch` snippets), the session id may instead be passed on the query string:

```
POST /mcp?mcp-session-id=<uuid> HTTP/1.1
```

This is a **fallback**, not the recommended path. Prefer the `Mcp-Session-Id` header:

- **Security caveat (URL leak):** session ids in URLs can leak via server/proxy logs, browser
  history, diagnostics bundles, and copied links. PrismMCP never logs the session-id value
  itself (header- or query-sourced; it is redacted like the bearer token), but you cannot
  control logging in the network path between the client and the server.
- **Precedence:** if a request carries the session id **both** as a header and as a query arg,
  the **header wins**; a differing query value is ignored (and a value-free conflict note is
  logged at Verbose).

An empty, whitespace-only, or over-length (> 128 chars) session id from either source is
treated as absent, yielding `400 "Mcp-Session-Id header required for non-initialize requests"`.

#### Troubleshooting: client 400s after a successful initialize

If a client `initialize`s fine but every follow-up request returns
`400 Mcp-Session-Id header required for non-initialize requests`, the client is not sending the
session id back. Confirm the client echoes the `Mcp-Session-Id` value (returned in the
`initialize` response header) as a request header on subsequent calls, or use the query-string
fallback above. The listener's Verbose log line `session id read source = header|query-fallback`
shows which channel (if any) carried the id for a given request.
