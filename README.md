# PrismMCP

**[asaratechnologies.com/products/prism-mcp](https://www.asaratechnologies.com/products/prism-mcp)** -- product page, pricing, and demos.

Your AI agent, inside the Unreal Editor.

> **Status:** Beta -- [contact us](mailto:sales@asaratechnologies.com) for access or a trial.

Authoring, world building, gameplay, full debugging, and Blueprint-to-C++ conversion. 2,000+ commands across 60+ editor systems, all agent-controllable through one MCP connection. UE 5.3--5.7. Windows, Mac, Linux.

---

## Quick start

Add PrismMCP to your MCP client config:

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

---

## Two tiers

One tool, two tiers. Core authoring ships as **Lite** through [Epic Fab](https://www.fab.com/). The full editor surface unlocks with **Pro**, direct from Asara.

See the full feature breakdown: **[asaratechnologies.com/products/prism-mcp/features](https://www.asaratechnologies.com/products/prism-mcp/features)**

Command reference by module: [docs/capabilities/](docs/capabilities/)

---

## Documentation

| | |
|:---|:---|
| [Getting started](docs/getting-started/) | Installation, client connection, configuration |
| [Capabilities](docs/capabilities/) | Command reference by module -- Lite with full schemas, Pro with descriptions |
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
