# PrismMCP Settings Reference

All settings are in **Project Settings > Plugins > PrismMCP**.

| Setting | Category | Type | Default | Restart | Security |
|---|---|---|---|---|---|
| `BindAddress` | Server | string | `127.0.0.1` | yes | Controls which network interface the transport listens on. Binding beyond localhost exposes editor commands to the network; review the [security and privacy guide](../guides/security-and-privacy.md) before doing so. |

> TCP listen address. Default 127.0.0.1 (loopback only). Setting to 0.0.0.0 binds all interfaces and exposes editor commands to anyone on the network -- use only on trusted networks.

| `Port` | Server | int | `55557` | yes |  |

> TCP port the MCP server listens on. Range 1024-65535. Changing this requires a server restart.

| `CacheMaxBytesMB` | Cache | int | `50` | no |  |

> Maximum result-cache size in megabytes. Applied live; shrinking the cap evicts entries immediately.

| `bAutoStartOnEditorLoad` | Behavior | bool | `True` | no |  |

> If enabled, the MCP server starts automatically when the editor loads. Takes effect on next editor restart.

| `CommandTimeoutSeconds` | Behavior | float | `30.000000` | no |  |

> How long a single MCP command may run on the game thread before the bridge returns a timeout error. Default 30s.

| `LogVerbosity` | Diagnostics | enum (Error, Warning, Display, Log, Verbose, VeryVerbose) | `Log` | no |  |

> Verbosity for the LogPrismMCP category. Applied live.

| `LogBufferLines` | Diagnostics | int | `10000` | no |  |

> Number of recent log lines retained for get_output_log. Higher values use more memory but preserve more history.

| `FoliageMaxInstancesPerCallDefault` | Foliage | int | `10000` | no |  |

> Default and hard ceiling for scatter_foliage_in_volume max_instances.

| `FoliageSlowResimulateThresholdMs` | Foliage | int | `5000` | no |  |

> Duration threshold in milliseconds for foliage_resimulate_slow warnings.

| `DangerousConsoleCommands` | Console | array | `("quit","exit","disconnect","restartlevel","open","travel","servertravel","obj gc")` | no |  |

> Console command prefixes that require confirm_dangerous=true before execute_console_command will run them.

| `CvarPresets` | Console | map | `()` | no |  |

> Named CVar presets created through PrismMCP. Each entry stores console variable names and string values.

| `bEnableHttpTransport` | HTTP Transport | bool | `False` | yes |  |

> Enable Streamable HTTP MCP transport alongside the existing TCP transport.

| `HttpPort` | HTTP Transport | int | `8080` | yes |  |

> Port for the HTTP MCP transport. Default 8080.

| `HttpBindAddress` | HTTP Transport | string | `127.0.0.1` | yes | Controls which network interface the HTTP transport listens on. Binding beyond localhost exposes editor commands to the network; review the [security and privacy guide](../guides/security-and-privacy.md) before doing so. |

> Bind address for the HTTP transport. Localhost (127.0.0.1 or ::1) is always allowed. A non-localhost address (LAN) is permitted only when Enable In-Process TLS is on with a valid cert/key and a bearer token; otherwise it is refused. See the [security and privacy guide](../guides/security-and-privacy.md).

| `MaxHttpSessions` | HTTP Transport | int | `8` | no |  |

> Maximum concurrent HTTP client sessions.

| `HttpSessionTimeoutSeconds` | HTTP Transport | int | `300` | no |  |

> Idle session timeout. Sessions with no activity are evicted.

| `HttpAuthMode` | HTTP Transport | enum (Auto, None, BearerToken) | `Auto` | no | Selects HTTP client authentication. BearerToken always requires a token; use it for any non-localhost exposure. See the [security and privacy guide](../guides/security-and-privacy.md). |

> Auto derives from bind address: localhost=no auth, non-localhost=Bearer token. Explicit overrides: None, BearerToken.

| `HttpBearerToken` | HTTP Transport | string | `(secret)` | no | Secret. Authenticates HTTP clients. Never commit it or paste it into shared configs. |

> Auto-generated on first LAN-mode start. Override to set a custom token.

| `bEnableHttpTls` | HTTP Transport | bool | `False` | yes |  |

> Terminate TLS inside the editor on the HTTP transport. Requires a certificate and key below. When enabled, the HTTP port serves HTTPS only (no plaintext). A non-localhost bind is permitted only when TLS is active with a valid cert/key and a bearer token. Changing this requires a server restart.

| `TlsCertPath` | HTTP Transport | filepath | `(FilePath="")` | yes | TLS certificate for the HTTP transport. See the [security and privacy guide](../guides/security-and-privacy.md) for the current TLS options and status. |

> Path to a PEM certificate for in-process TLS. Used when Enable In-Process TLS is on. For zero client setup, use a CA-trusted certificate (public CA or your studio's internal CA). Self-signed certs work but require per-client trust configuration. Changing this requires a server restart.

| `TlsKeyPath` | HTTP Transport | filepath | `(secret)` | yes | TLS key for the HTTP transport. See the [security and privacy guide](../guides/security-and-privacy.md) for the current TLS options and status. |

> Path to the unencrypted PEM private key matching the certificate above. Used when Enable In-Process TLS is on. Passphrase-protected keys are not supported in this version. This path is treated as a secret -- it is never logged or included in settings snapshots. Changing this requires a server restart.

| `AllowedOrigins` | HTTP Transport | array | `` | no | Restricts which web origins may call the HTTP transport; keep tight to prevent cross-origin abuse. |

> CORS allowed origins. Empty = restrictive default (no cross-origin). Add origins for browser-based clients.

| `AllowedIPs` | HTTP Transport | array | `` | no | Restricts which client IPs may connect; an empty list with a non-localhost bind is the broadest exposure. |

> Additional IP allowlist for LAN mode. Empty = any authenticated client.
