# Connecting Your MCP Client

PrismMCP uses the Model Context Protocol (MCP) to communicate with AI coding assistants. After installing the plugin, configure your client to connect to the PrismMCP shim process.

## MCP client configuration

The shim process bridges your MCP client to the running editor. All clients use the same JSON configuration block pointing at the PrismMCP shim executable:

```json
{
  "mcpServers": {
    "prismmcp": {
      "command": "path/to/PrismMCP-Shim",
      "args": ["--port", "55557"]
    }
  }
}
```

Replace `path/to/PrismMCP-Shim` with the actual path to the shim executable inside your plugin install. Typical locations:

- **Project plugin:** `{ProjectRoot}/Plugins/PrismMCP/Binaries/{Platform}/PrismMCP-Shim`
- **Engine plugin:** `{EngineRoot}/Plugins/Marketplace/PrismMCP/Binaries/{Platform}/PrismMCP-Shim`

The default port is **55557**. Change it if your project uses a different port (see [Configuration](configuration.md)).

## Claude Code

Add the MCP server with the CLI:

```bash
claude mcp add prismmcp -- path/to/PrismMCP-Shim --port 55557
```

Or add the configuration block above to your `.mcp.json` file in the project root.

## Cursor

1. Open Cursor Settings (Ctrl+Shift+P > "Cursor Settings").
2. Navigate to the **MCP** section.
3. Click **Add MCP Server**.
4. Enter the shim path and arguments as shown above.

## Claude Desktop

Edit `claude_desktop_config.json` (located in your Claude Desktop configuration directory) and add the `prismmcp` entry to the `mcpServers` object:

```json
{
  "mcpServers": {
    "prismmcp": {
      "command": "path/to/PrismMCP-Shim",
      "args": ["--port", "55557"]
    }
  }
}
```

Restart Claude Desktop to pick up the change.

## Other MCP clients

Any MCP-compatible client that supports stdio transport can connect using the same configuration pattern. Consult your client's documentation for where to place the server configuration.

## Verifying the connection

After configuring your client, send a `ping` command. You should receive:

```json
{"message": "pong"}
```

If the ping succeeds, the connection is live and you can start issuing commands.

Next step: [First Commands](first-commands.md)
