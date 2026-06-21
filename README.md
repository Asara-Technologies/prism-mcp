# PrismMCP

**Your AI agent, inside the Unreal Editor.** [Product page](https://www.asaratechnologies.com/products/prism-mcp)

> **Beta** -- [contact us](mailto:sales@asaratechnologies.com) for access or a trial.

1,678 commands across 58 editor systems — authoring, world building, gameplay, debugging, Blueprint-to-C++. All agent-controllable through one MCP connection. UE 5.3--5.8. Windows, Mac, Linux.

Fab listings cover UE 5.6--5.8. Need an older engine version? PrismMCP Pro supports UE 5.3 through 5.8.

---

## Quick start

Add PrismMCP to your MCP client config:

PrismMCP ships as precompiled binaries and works with both Blueprint-only and C++ projects. No source compilation or project conversion is required.

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

Works with Claude Code, Cursor, Claude Desktop, and any MCP-compatible agent.

Full setup: [docs/getting-started/](docs/getting-started/)

**Download or redeem your license:** [asaratechnologies.com/products/prism-mcp/downloads](https://www.asaratechnologies.com/products/prism-mcp/downloads)

Source-built engine note: Pro declares Epic's experimental `ContextualAnimation` plugin as
an enabled optional dependency. If your custom engine omits that plugin, PrismMCP still
loads; ContextualAnimation commands report `plugin_unavailable` until the plugin is compiled
and available.

---

## Two tiers

One tool, two tiers. The full UE authoring surface ships as **Lite** through [Epic Fab](https://www.fab.com/). **Pro** adds the production toolkit -- diagnostics, profiling, source control, build pipeline, and debugger integration -- direct from Asara.

See the full feature breakdown: **[asaratechnologies.com/products/prism-mcp/features](https://www.asaratechnologies.com/products/prism-mcp/features)**

Browse commands: **[asaratechnologies.com/products/prism-mcp/commands](https://www.asaratechnologies.com/products/prism-mcp/commands/)** | [GitHub reference](docs/command-reference/)

---

## Documentation

| | |
|:---|:---|
| [Getting started](docs/getting-started/) | Installation, client connection, configuration |
| [Command Reference](docs/command-reference/) | 1,686 commands by module ([browse on website](https://www.asaratechnologies.com/products/prism-mcp/commands/)) |
| [Guides](docs/guides/) | Security, HTTP transport, cluster loading, settings reference |
| [Examples](docs/examples/) | C++, Blueprint, and Python workflows |

---

## Support

- **Issues:** [github.com/Asara-Technologies/prism-mcp/issues](https://github.com/Asara-Technologies/prism-mcp/issues)
- **Pro and Studio:** [support@asaratechnologies.com](mailto:support@asaratechnologies.com)

---

## Legal

- [EULA](EULA.md) | [Privacy](PRIVACY.md) | [Refunds](REFUNDS.md)
- Fab buyers: governed by [Fab Standard License](https://www.fab.com/eula)

---

*© 2026 Asara Technologies LLC. Unreal Engine is a trademark of Epic Games, Inc.*
