# Configuration

PrismMCP settings are configured through the Unreal Editor's Project Settings panel and through shim command-line arguments.

## Editor settings

Open **Project Settings > Plugins > PrismMCP** to access the plugin configuration panel. Key settings:

- **Port** -- TCP port the MCP server listens on. Default: `55557`. Change this if the port conflicts with another service.
- **Log Verbosity** -- Controls how much detail PrismMCP writes to the editor's Output Log. Options range from silent through verbose. Higher verbosity is useful for diagnosing connection issues.
- **Auto Start** -- Whether the MCP server starts automatically when the editor launches. Enabled by default.

For the full settings table with types, defaults, restart requirements, and security notes, see the [Settings Reference](../guides/settings.md).

## Shim options

The PrismMCP shim executable supports these arguments:

| Argument | Default | Description |
|---|---|---|
| `--port` | `55557` | TCP port to connect to the editor's MCP server |

The shim runs as a stdio bridge: your MCP client launches it as a subprocess, and the shim forwards JSON-RPC messages between the client and the running editor over TCP.

## Security

PrismMCP includes safety controls to limit what commands can do:

- **Read/Write classification** -- Every command is classified as Read (observes state only) or Write (modifies the project). Your security policy can restrict write access.
- **Sandboxing** -- Write operations are bounded to the editor session. PrismMCP does not execute arbitrary shell commands, access the filesystem outside the project, or make network requests on your behalf.

Refer to the [Settings Reference](../guides/settings.md) for detailed security configuration options.

## Logging and diagnostics

If something is not working:

1. Open the Output Log in the editor (Window > Developer Tools > Output Log).
2. Filter by `LogPrismMCP` to see only PrismMCP messages.
3. Increase log verbosity in Project Settings if needed.
4. Check that the port matches between the editor settings and your MCP client configuration.
5. Send a `ping` command from your client to verify the connection is live.
