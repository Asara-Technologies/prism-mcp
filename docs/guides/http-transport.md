# HTTP Transport

PrismMCP includes an optional HTTP transport that runs the MCP server over
HTTP instead of (or alongside) the default stdio/TCP transport. It supports
multiple simultaneous AI client connections and is the recommended path for
studio/team setups.

This document covers setup, protocol reference, and troubleshooting:

- **[Localhost Setup](#localhost-setup)** (2 minutes) — single developer, no auth, no TLS, zero config
- **[LAN Setup](#lan-setup)** (10 minutes) — multiple developers sharing one editor instance
- **[Protocol Reference](#routes)** — routes, headers, sessions, resources, cancellation
- **[Configuration Reference](#configuration-reference)** — all HTTP transport settings
- **[Troubleshooting](#troubleshooting)** — symptom-to-fix table

The HTTP transport is **disabled by default**. The existing stdio/TCP transport
continues to work unchanged after you enable it.

For security posture and deployment hardening, see
[Security and Privacy](security-and-privacy.md).

---

## Prerequisites

- PrismMCP installed and enabled in an Unreal Engine 5.7+ project
- Editor running (the HTTP server starts with the editor, not at project load)
- For LAN setup: a machine accessible on your studio network

---

## Localhost Setup

**2 minutes. No auth. No TLS. No reverse proxy.**

This is the right setup for a single developer using one or more AI clients on
the same machine.

### 1. Enable the transport

Open **Project Settings** (Edit menu or keyboard shortcut).
Navigate to **Plugins > PrismMCP > HTTP Transport**.

Check **Enable HTTP Transport** and click **Save**. Leave all other settings at
their defaults.

Default values:
- Port: `8080`
- Bind Address: `127.0.0.1` (localhost only)
- Auth: `Auto` (no auth on localhost)

### 2. Restart the editor

A full editor restart is required for the HTTP server to start. Live Coding
does not restart the HTTP server.

On restart, you should see this in the Output Log:

```
LogPrismMCP: Display: HTTP transport started on 127.0.0.1:8080
```

If you see an error instead, see [Troubleshooting](#troubleshooting).

### 3. Connect your AI client

#### Claude Code

```bash
claude mcp add prism-http --transport streamablehttp --url http://localhost:8080/mcp
```

#### Cursor

Add to your MCP config (`.cursor/mcp.json` or global MCP settings):

```json
{
  "mcpServers": {
    "prism-http": {
      "transport": "streamablehttp",
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

#### Any MCP client (generic)

The transport endpoint is `http://localhost:8080/mcp`. All requests are
standard MCP Streamable HTTP (2025-11-25).

Verify the server is running with a manual initialize:

```bash
curl -s -X POST http://localhost:8080/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","clientInfo":{"name":"test","version":"0.1"},"capabilities":{}}}' \
  | python -m json.tool
```

You should receive an `initialize` result with `serverInfo.name: "PrismMCP"`.
Follow up with a `tools/list` call using the `Mcp-Session-Id` from the response
header:

```bash
SESSION=<value from Mcp-Session-Id response header>

curl -s -X POST http://localhost:8080/mcp \
  -H "Content-Type: application/json" \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}' \
  | python -m json.tool
```

---

## LAN Setup

**10 minutes. Bearer token + TLS required.**

This setup lets multiple developers on the same network connect their AI clients
to a single editor instance — for example, a shared asset-authoring workstation.

> **LAN mode requires TLS + a bearer token.** PrismMCP refuses a non-localhost
> bind unless TLS is genuinely active and authenticated. You have two ways to
> get TLS: **in-process TLS** (PrismMCP terminates TLS itself with your cert —
> no proxy) or a **reverse proxy** (covered below). Both are supported.

### Enable in-process TLS (no reverse proxy)

1. In **Project Settings > Plugins > PrismMCP > HTTP Transport**, check **Enable
   In-Process TLS**.
2. Set **TLS Certificate Path** and **TLS Key Path** to your PEM cert and
   **unencrypted** PEM key. For zero client-side setup, use a **CA-trusted
   certificate** (a public CA, or your studio's internal CA that clients already
   trust). A self-signed cert works but requires a per-client trust step (see
   [Security and Privacy](security-and-privacy.md#in-process-tls-troubleshooting)).
3. Set **HTTP Bind Address** to `0.0.0.0` (or your workstation's LAN IP), set
   **Auth Mode** to `Bearer Token` (or `Auto`), and ensure a **Bearer Token** is
   set.
4. **Restart** the server. The HTTP port now serves **HTTPS only**.

> Self-signed **auto-generation** is not in this version — bring your own cert.
> A CA-trusted cert is the clean, zero-client-config path.

### 1. Set the bind address (reverse-proxy path)

In **Project Settings > Plugins > PrismMCP > HTTP Transport**, set:

- **HTTP Bind Address**: `0.0.0.0` (or your workstation's specific LAN IP)

Save the settings. Do not restart yet.

### 2. Set up TLS via reverse proxy

Choose one option.

#### Option A — Caddy (one command)

[Caddy](https://caddyserver.com/) auto-provisions a self-signed certificate
for local domain names:

```bash
caddy reverse-proxy --from https://myworkstation:8443 --to localhost:8080
```

Replace `myworkstation` with a hostname your teammates can resolve (mDNS `.local`
or a hosts-file entry works). Caddy writes its certificate to its data directory
automatically. Your teammates' clients must trust the certificate; for
self-signed certs, distribute Caddy's root CA from `~/.local/share/caddy/pki/`.

For a persistent setup, create a `Caddyfile`:

```
https://myworkstation:8443 {
    reverse_proxy localhost:8080
}
```

Run with `caddy run`.

#### Option B — nginx

Install nginx and add a server block:

```nginx
server {
    listen 8443 ssl;
    server_name myworkstation;

    ssl_certificate     /etc/ssl/certs/myworkstation.crt;
    ssl_certificate_key /etc/ssl/private/myworkstation.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    location /mcp {
        proxy_pass         http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
        proxy_set_header   Host $host;
        proxy_buffering    off;
        proxy_read_timeout 300s;
    }
}
```

`proxy_buffering off` and `proxy_read_timeout 300s` are required — SSE streams
and long-running tool calls will be cut short without them.

Generate a self-signed cert for local use:

```bash
openssl req -x509 -newkey rsa:4096 -keyout myworkstation.key \
  -out myworkstation.crt -days 365 -nodes \
  -subj "/CN=myworkstation"
```

For a team setup where browsers and AI clients need to trust the cert, consider
[mkcert](https://github.com/FiloSottile/mkcert) — it installs a local CA into
your system trust store automatically.

### 3. Retrieve the Bearer token

Restart the editor after changing the bind address. On first LAN-mode startup,
PrismMCP generates a cryptographically random Bearer token and logs it once:

```
LogPrismMCP: Display: HTTP transport started in LAN mode on 0.0.0.0:8080
LogPrismMCP: Display: Bearer token written to: C:\Users\<user>\AppData\Local\PrismMCP\bearer-token.txt
LogPrismMCP: Warning: Distribute this token securely to your team.
```

The token is also visible in **Project Settings > Plugins > PrismMCP > HTTP
Transport > HTTP Bearer Token**. You can rotate it by clearing the field and
restarting — a new token will be generated.

Distribute the token to your teammates via a secure channel (password manager,
internal secrets vault, direct message — not email, not Slack channels visible
to people outside the team).

### 4. Connect team AI clients

Each teammate configures their AI client to hit the reverse proxy endpoint:

#### Claude Code

```bash
claude mcp add prism-http \
  --transport streamablehttp \
  --url https://myworkstation:8443/mcp \
  --header "Authorization: Bearer YOUR_TOKEN"
```

#### Cursor

```json
{
  "mcpServers": {
    "prism-http": {
      "transport": "streamablehttp",
      "url": "https://myworkstation:8443/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN"
      }
    }
  }
}
```

### 5. Verify the connection

Run through this checklist before declaring the setup done:

- [ ] Reverse proxy is running and accessible from teammate machines
- [ ] TLS cert is trusted by teammate machines (or teammates have acknowledged the cert)
- [ ] `curl -k https://myworkstation:8443/mcp` returns a response (not "connection refused")
- [ ] Initialize request with token succeeds (HTTP 200, session ID in response header)
- [ ] Initialize request without token fails (HTTP 401)
- [ ] `tools/list` with a valid session returns the full tool list

---

## Troubleshooting

| Symptom | Expected log line | Likely cause | Fix |
|---|---|---|---|
| Connection refused | (nothing in log) | HTTP transport not enabled | Enable **bEnableHttpTransport** in Project Settings and restart the editor |
| Connection refused | `HTTP transport failed to start on port 8080` | Port already in use | Change **HttpPort** to an unused port (e.g. 8081) |
| Connection refused | (port open, no response) | Firewall blocking port | Add a Windows Firewall inbound rule for the port |
| `401 Unauthorized` | `Auth rejected: missing or invalid Bearer token` | Token not sent or incorrect | Check that `Authorization: Bearer <token>` matches the token in Project Settings |
| `403 Forbidden` | `Request rejected: origin not allowed` | Origin header blocked | Add the client's origin to **AllowedOrigins** in Project Settings |
| `403 Forbidden` | `Request rejected: IP not in allowlist` | Client IP not permitted | Add the client IP to **AllowedIPs** or clear the list to allow all authenticated IPs |
| `404 Not Found` on `Mcp-Session-Id` | `Session not found: <id>` | Session expired or editor restarted | Re-run the `initialize` call to get a new session |
| `503 Service Unavailable` | `Session limit reached (max: 8)` | Too many concurrent sessions | Increase **MaxHttpSessions** in Project Settings, or have inactive clients call `DELETE /mcp` |
| SSE stream disconnects | `SSE connection closed: client disconnected` | Normal on idle timeout | Re-establish the SSE connection; this is expected after 5 minutes of inactivity |
| Tools not appearing | (no error) | Editor not fully loaded | Wait for the editor to finish loading the project before connecting |

If the log does not show anything related to PrismMCP after enabling the transport
and restarting, ensure the plugin is enabled in **Edit > Plugins > PrismMCP**.

---

# Protocol Reference

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
