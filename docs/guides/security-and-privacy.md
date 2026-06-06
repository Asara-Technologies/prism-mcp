# Security and Privacy — HTTP Transport

This document covers the security model for PrismMCP's HTTP transport: what
is protected, what is not, what data the server exposes, and how to harden a
deployment beyond the defaults.

Intended audience: studio technical leads and IT admins evaluating PrismMCP
for team use.

---

## Overview

By default, PrismMCP binds **localhost only**, and a non-localhost bind is **refused at
server start** with a diagnostic unless in-process TLS is active. The TCP transport has no
authentication or encryption and is always localhost-only. The HTTP transport serves
plaintext on `127.0.0.1` out of the box (zero setup on loopback).

**In-process TLS (HTTP transport).** PrismMCP can terminate TLS itself, inside the editor,
using a BYO certificate and key — no external proxy required. Enable **Enable In-Process
TLS** and set **TLS Certificate Path** + **TLS Key Path** (PEM; the key must be
unencrypted). When TLS is enabled, the HTTP port serves **HTTPS only** (no plaintext on that
port), and a **non-localhost (LAN) bind is permitted** — but only when all of the following
hold: TLS is enabled with a valid cert/key, the auth mode is Bearer Token (or Auto), and a
bearer token is set. If the certificate is invalid or the listener cannot bind, PrismMCP
binds **nothing** on the port and logs a loud error — it never silently downgrades to
plaintext.

For **zero client-side setup**, use a **CA-trusted certificate** (a public CA, or your
studio's internal CA that clients already trust). A self-signed certificate works but
requires a per-client trust step (see Troubleshooting); self-signed auto-generation is not
in this version.

| Deployment | PrismMCP bind | How it is reached | TLS | Setup |
|------------|---------------|-------------------|-----|-------|
| Localhost (`127.0.0.1`) | localhost | directly | n/a (loopback) | Zero |
| LAN (in-process TLS) | LAN IP | directly over HTTPS | Terminated in-editor (BYO cert) | Moderate (cert + token) |
| LAN (reverse proxy) | localhost | TLS reverse proxy on the LAN IP -> 127.0.0.1 | Terminated at the proxy | Moderate |
| Remote (internet-facing) | localhost (forced) | TLS reverse proxy + auth | Terminated at the proxy | Full — deferred to a future release |

The **reverse-proxy path remains fully supported** for studios that already run one, or who
prefer to terminate TLS outside the editor.

The existing stdio/TCP transport is unchanged and is likewise localhost-only.

---

## Threat Model

### Localhost

**Threat surface:** Any process running on the same machine as the editor.

**Controls in place:**
- Bound to `127.0.0.1` — not reachable from the network by design
- Origin header validation — blocks cross-site request forgery from browser tabs
- No authentication — same posture as the existing TCP transport

**What is not protected:** A malicious process on the same machine can connect
and call MCP tools. This is inherent to localhost binding and consistent with
how every developer tool (language servers, debuggers, local build systems)
works. Do not run untrusted software on the same machine as PrismMCP.

### LAN (via reverse proxy)

PrismMCP does not bind the LAN directly — it stays on `127.0.0.1` and a TLS-terminating
reverse proxy on the workstation listens on the LAN IP and forwards to the local PrismMCP
port. The threat model below applies to that proxy front.

**Threat surface:** Any device on the same network segment that can reach the
reverse proxy's listening IP.

**Controls in place:**
- The reverse proxy terminates TLS — token and request body are encrypted in transit
- Bearer token required on every request — unauthenticated requests are
  rejected before reaching the MCP protocol layer
- Origin validation on all requests
- Rate limiting — 5 failed auth attempts per IP triggers a 60-second cooldown
- Optional IP allowlist — restrict access to specific machines
- PrismMCP never opens a network-facing socket itself (localhost-only bind is enforced)

**What is not protected without additional hardening:** An attacker who
obtains the Bearer token can connect from any network-accessible machine. Token
management (distribution, rotation, revocation) is the primary operational
security concern in LAN mode.

**What is not in scope:** Network segmentation, firewall rules, VPN
requirements — these are your organization's infrastructure decisions. PrismMCP
enforces auth and TLS at the application layer; network-level controls are
complementary.

### Remote (Internet-Facing)

Remote deployments are not supported in this release. The OAuth 2.0 PKCE
implementation is designed but deferred until demand materializes. Do not
expose the HTTP transport to the internet without OAuth and a hardened reverse
proxy configuration.

---

## Data Exposure

### What the MCP Resources API exposes

The `resources/read` API exposes a limited, privacy-reviewed catalog of
read-only editor data. See the
[Feature Reference](../reference/http-transport.md#resources) for the full
URI list.

In summary:

| Resource | What it contains |
|----------|-----------------|
| `unreal://project/info` | Project name, engine version |
| `unreal://build/status` | Last compile result (success/fail), error count |
| `unreal://plugins/list` | Plugin names and versions only |
| `unreal://logs/recent` | Recent editor log lines, redacted |

### What is never exposed

The following data is never included in any MCP response, tool result, or
resource read, by design:

- **Source code content** — PrismMCP does not read or return `.cpp`, `.h`,
  or script file contents
- **Absolute file system paths** — paths are represented as Unreal asset paths
  (`/Game/...`) without the machine's directory prefix
- **Plugin installation paths** — `plugins/list` returns names and versions;
  it does not return file locations
- **Credentials and API keys** — log redaction strips lines matching common
  credential patterns (Bearer tokens, API key formats, password assignments)
  before returning `unreal://logs/recent`
- **Environment variables** — not accessible via any MCP primitive
- **Other sessions' data** — session state is isolated; one client cannot
  observe another client's session ID, request history, or results

### Log redaction

The `unreal://logs/recent` resource applies redaction before returning content.
Lines matching these patterns are replaced with `[REDACTED]`:

- Lines containing `Bearer `, `api_key`, `apikey`, `password`, `secret`,
  `token=`, `key=` (case-insensitive)
- Lines containing strings that match a hex or base64 pattern above 32
  characters in a key-value context

Redaction is best-effort. Do not log credentials in `UE_LOG` calls — the
primary defense is not logging sensitive data in the first place.

---

## Token Management

### Generation

A bearer token is required for any non-localhost bind (with or without in-process
TLS). Set or rotate the token explicitly:

- In the **control panel** (Connections & Transports > HTTP Bearer Token):
  **Regenerate** creates a fresh token; **Show** reveals it on demand; **Copy** copies it.
  The token value is never written to the Output Log and is never included in the routine
  settings push to the panel — it travels only in the explicit reveal response.
- Or set it directly in **Editor Preferences > Plugins > PrismMCP > HTTP Transport >
  Bearer Token**.

The token is enforced by PrismMCP's auth preprocessor (both in-process TLS and
reverse-proxy paths). It is stored per-user with the rest of PrismMCP settings in
`EditorPerProjectUserSettings.ini`.

### Distribution

Distribute the token to teammates via a secure channel — a password manager,
internal secrets vault, or direct message. Do not send it over email or post
it in a shared chat channel visible to people outside the team.

### Rotation

To rotate the token:

1. Open the control panel **Connections & Transports** section
2. Click **Regenerate** under HTTP Bearer Token (or set a new value in
   **Editor Preferences > Plugins > PrismMCP > HTTP Transport > Bearer Token**)
3. Distribute the new token to your team and update the reverse proxy

After rotation, existing clients using the old token receive `401 Unauthorized`
until they are updated.

### Revocation

There is no individual token revocation — tokens are single-tenant (one token
per project). Revocation is rotation: generate a new token and update clients.

### Storage security

The `bearer-token.txt` file has no special OS-level permissions. Apply
appropriate file ACLs if your threat model requires it (e.g., `icacls
bearer-token.txt /inheritance:r /grant:r "%USERNAME%:R"`).

The token in `Saved/Config` follows your project's normal config security.
Ensure `Saved/` is in `.gitignore` (it is by default in Unreal projects).

---

## TLS Details

PrismMCP terminates TLS **in-process** using a plugin-vendored libwebsockets 4.3
listener with OpenSSL (`FMCPTlsHttpListener`). The engine's `FHttpServerModule`
has no TLS support; the secure listener is independent. When in-process TLS is
enabled, the HTTP port serves HTTPS only — plaintext is never served on that port,
and any cert/bind failure results in nothing being bound (never a silent downgrade).

A **reverse proxy** remains a fully supported alternative for studios that prefer
to terminate TLS outside the editor.

### Minimum TLS version

The in-process listener negotiates TLS via OpenSSL; the minimum version depends on
the engine's bundled OpenSSL (1.1.1t supports TLS 1.2+). If using a reverse proxy
instead, configure it to enforce TLS 1.2 minimum (TLS 1.3 preferred). The Caddy
default is TLS 1.2+. For nginx, set `ssl_protocols TLSv1.2 TLSv1.3`.

### Certificate options

| Option | Trust | Effort | Suitable for |
|--------|-------|--------|--------------|
| CA-trusted (public or internal CA) | Automatic (clients already trust the CA) | Medium | Studio LAN — **recommended for zero client setup** |
| Self-signed | Manual per-client trust step | Low | Solo developer or small team |
| mkcert local CA | System trust store | Low | Team workstations on the same machine |
| Public CA (Let's Encrypt) | Universal | Medium | Internet-facing (not recommended for LAN) |

For most studio LAN setups, a CA-trusted certificate (your studio's internal CA)
is the right balance — zero client-side configuration, no per-client trust steps.
A self-signed cert works but requires each client to trust it explicitly (see
In-Process TLS Troubleshooting below).

Self-signed **auto-generation** is not in this version; bring your own cert.

### SSE and proxy buffering (reverse-proxy path)

If using a reverse proxy, configure it to disable response buffering for the
`/mcp` route. SSE streams and long-running tool calls require an open
connection; a proxy that buffers the response will appear to hang. See the
nginx config in the Getting Started guide for the required directives.

---

## Logging and Audit

### What is logged

On every connection attempt:

```
LogPrismMCP: Display: HTTP connection from <client-ip> session=<uuid> tier=BearerToken
```

On every authentication failure:

```
LogPrismMCP: Warning: Auth rejected: missing or invalid Bearer token [IP: <client-ip> attempt: 3/5]
```

On rate limit trigger:

```
LogPrismMCP: Warning: Rate limit: IP <client-ip> cooldown for 60s after 5 failed attempts
```

On session creation and destruction:

```
LogPrismMCP: Display: Session created: <uuid> client=Claude-Code/1.0 protocol=2025-11-25
LogPrismMCP: Display: Session destroyed: <uuid> duration=142s reason=client-delete
```

### What is never logged

- Bearer tokens (the value is never written to the log)
- TLS certificate content
- Request or response bodies
- Any user secret, credential, API key, or password

### Log location

PrismMCP logs through the standard Unreal Engine log system. In the editor,
logs appear in the Output Log panel and in the project's `Saved/Logs/`
directory. Log retention and rotation follow Unreal's standard behavior.

Connection audit history is not stored separately from the standard log files.
If your organization requires persistent audit records, configure log
archival at the OS or infrastructure level.

---

## Hardening Checklist — LAN Deployment

Before making a PrismMCP HTTP endpoint accessible on a studio LAN:

**Option A — In-process TLS (recommended)**

- [ ] `Enable In-Process TLS` is on
- [ ] `TLS Certificate Path` and `TLS Key Path` point to a valid PEM cert/key pair
- [ ] Certificate is CA-trusted (studio internal CA or public CA) for zero client setup; or self-signed with per-client trust configured
- [ ] `HttpBindAddress` set to `0.0.0.0` or your workstation's LAN IP
- [ ] `HttpAuthMode` is `Auto` or `BearerToken` — not `None`
- [ ] Bearer token set and distributed via a secure channel, not via chat or email
- [ ] Bearer token not checked into source control (verify `Saved/` is in `.gitignore`)
- [ ] `AllowedIPs` configured to restrict to known team machine IPs (optional but recommended)
- [ ] `AllowedOrigins` configured for any browser-based clients; empty if browser access is not needed
- [ ] `MaxHttpSessions` set to a realistic team size — overly large values allow resource exhaustion
- [ ] `Saved/Logs/` is on a disk with sufficient space for log growth

**Option B — Reverse proxy**

- [ ] `HttpBindAddress` left at `127.0.0.1` (the reverse proxy fronts the LAN)
- [ ] Reverse proxy listens on the LAN IP and forwards to `127.0.0.1:<HttpPort>`
- [ ] `HttpAuthMode` is `Auto` or `BearerToken` — not `None`
- [ ] Reverse proxy is running and TLS is terminating on the proxy
- [ ] Reverse proxy enforces TLS 1.2+ and strong cipher suites
- [ ] Bearer token distributed via a secure channel, not via chat or email
- [ ] Bearer token not checked into source control (verify `Saved/` is in `.gitignore`)
- [ ] Same IP/origin/session/log checks as above
- [ ] Firewall inbound rule on the reverse proxy port is restricted to your studio network segments, not `0.0.0.0/0`
- [ ] Verify: `initialize` with correct token returns 200
- [ ] Verify: `initialize` without token returns 401
- [ ] Verify: `initialize` from a non-allowlisted IP returns 403 (if `AllowedIPs` is configured)

---

## Comparison with Other UE Transport Options

| | PrismMCP HTTP (LAN) | Epic UE 5.8 MCP | UE Remote Control |
|---|---|---|---|
| Auth | Bearer token (auto) | n/a — Epic 5.8 ships an MCP *client* toolset, not a server | API key (manual) |
| TLS | In-process (BYO/CA-trusted cert) + reverse proxy | n/a — no Epic MCP server; engine `HTTPServer` has no TLS | Optional |
| Multi-client | Yes (8 concurrent) | n/a | Yes |
| localhost zero-setup | Yes | n/a | No |
| Resources API | Yes (MCP 2025-11-25) | n/a (client adapter) | No (REST-only) |
| MCP protocol | 2025-11-25 / 2025-06-18 | client toolset (beta) | N/A |
| Remote (internet-facing) | Deferred | n/a | Limited |

**Verified positioning (not speculation).** As of UE 5.8, Epic ships an experimental MCP
**client** toolset (`MCPClientToolset`) that connects out to external MCP servers — it is not
an MCP server and terminates no TLS. The engine `HTTPServer` module has no TLS support in 5.7
or 5.8 (verified by source survey). PrismMCP provides an MCP *server* with in-process HTTPS
(BYO/CA-trusted cert) — a capability Epic's stack does not offer for an MCP server. UE Remote
Control is a different primitive — it exposes properties and functions via REST, not MCP
tools. PrismMCP's localhost mode requires no setup at all.

---

## In-Process TLS Troubleshooting

- **Server refuses to start with a cert error.** PrismMCP validates the BYO cert/key at
  start and logs the specific problem (`FMCPTlsCertProvider:` / `PrismMCPBridge: refusing
  HTTPS start --`). Causes and fixes: cert/key paths not both set; a file is unreadable
  (check the path + permissions); the PEM does not parse; the cert and key **do not match**;
  the cert is **expired** or **not yet valid**; the key is **passphrase-protected** (only
  unencrypted PEM keys are supported in this version — re-export the key without a
  passphrase). The key path is treated as a secret and is never logged.
- **Client rejects the certificate (`SELF_SIGNED_CERT_IN_CHAIN`, `fetch failed`).** Most MCP
  clients are Node-based and reject self-signed certs even when the OS trusts them. For zero
  client setup, use a **CA-trusted cert** (public CA or your studio's internal CA). For a
  self-signed cert, configure per-client trust: set `NODE_EXTRA_CA_CERTS=<path-to-ca.pem>` in
  the client's environment, or import the CA into the OS trust store and enable the client's
  system-CA option (VS Code "System Certificates", Cursor "Electron Fetch"). Avoid the
  insecure global `NODE_TLS_REJECT_UNAUTHORIZED=0`.
- **Client connects but reports a hostname/IP mismatch.** The certificate's
  subjectAltName (SAN) must cover the hostname or IP the client uses to reach the server. A
  missing SAN is logged as a warning at start. Re-issue the cert with the correct SAN, or
  reach the server by a name/IP the cert already covers.
- **Port already in use on the secure path.** If the HTTPS listener cannot bind `HttpPort`,
  PrismMCP logs a port-in-use diagnostic and binds nothing (no plaintext fallback). Free the
  port or change `HTTP Port`, then restart.
- **Restart required.** Enabling/disabling TLS and changing the cert/key paths are
  restart-required (no hot-swap), so there is never a dual-bind window.

---

## License Credential Handling (Phase 3)

### What is stored

- **Lease file** (`Saved/Config/<platform>/PrismMCP/license-lease.json`): the server-signed
  lease envelope containing the payload, Ed25519 signature, and key ID. This is a credential
  at rest -- it proves entitlement. The payload includes a `client_machine_hash` binding so
  a stolen file cannot be used on another machine.

### What is transmitted

- **Activation request**: email, license key, machine hash (SHA-256, never raw), machine
  hostname, plugin version/date/channel.
- **Refresh/deactivate requests**: machine hash + current lease envelope + plugin metadata.
- All requests go to `https://license.asaratechnologies.com` over HTTPS.

### What is hashed

- **Machine identity**: `SHA-256("PrismMCP-machine:" + <raw source>)`. The raw source
  (Windows MachineGuid registry value) never leaves the machine. The hash is a one-way
  pseudonymous identifier.

### What is never logged

- License key (not in any `UE_LOG` at any verbosity)
- Email (not in any `UE_LOG` after the activation request scope ends)
- Raw machine identity source (only the hash appears)
- Lease JSON (never in panel push events or log output)

### Redaction

`FPrismMCPRedactor::Sanitize(input, secrets)` replaces any occurrence of a secret string
with `[REDACTED]`. Applied before every log line and JS push event that might contain
user-supplied data. Server error messages that echo the submitted key are sanitized before
display.
