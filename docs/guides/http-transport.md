# HTTP Transport — Getting Started

PrismMCP includes an optional HTTP transport that runs the MCP server over
HTTP instead of (or alongside) the default stdio/TCP transport. It supports
multiple simultaneous AI client connections and is the recommended path for
studio/team setups.

This guide covers three scenarios:

- **Localhost (2 minutes)** — single developer, no auth, no TLS, zero config
- **LAN / Studio (10 minutes)** — multiple developers sharing one editor instance
- **Troubleshooting** — symptom-to-fix table for the most common problems

The HTTP transport is **disabled by default**. The existing stdio/TCP transport
continues to work unchanged after you enable it.

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
   [Security and Privacy](../guides/security-and-privacy.md#in-process-tls-troubleshooting)).
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
