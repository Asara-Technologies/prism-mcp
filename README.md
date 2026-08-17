# PrismMCP

**Your AI agent, inside the Unreal Editor.** [Product page](https://www.asaratechnologies.com/products/prism-mcp)

> **Beta** -- [contact us](mailto:sales@asaratechnologies.com) for access or a trial.

1,710 commands across 60 editor systems — authoring, world building, gameplay, debugging, Blueprint-to-C++. All agent-controllable through one MCP connection. UE 5.3--5.8. Windows, Mac, Linux.

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

**Builds:** there is one PrismMCP artifact, and every plan installs it. Builds will be
published to this repository's
[Releases page](https://github.com/Asara-Technologies/prism-mcp/releases/latest). During the
beta, [contact us](mailto:sales@asaratechnologies.com) for a build. Pro is unlocked by
entering a license key inside the Unreal Editor after install, never on the website and never
over MCP.

Source-built engine note: PrismMCP declares Epic's experimental `ContextualAnimation` plugin as
an enabled optional dependency. If your custom engine omits that plugin, PrismMCP still
loads; ContextualAnimation commands report `plugin_unavailable` until the plugin is compiled
and available.

---

## Plans

One product, one download, two plans. The **Free** plan gives you the full
UE authoring surface. **Pro** adds the production toolkit: source control,
build pipeline, profiling, Blueprint-to-C++ conversion, and more.

Pro is $49/yr per user, covers 3 machines, runs for 12 months, and does not
auto-renew. Refunds are available for 30 days from the date of purchase.
Upgrading does not mean downloading a different build; you activate a
license key in the Unreal Editor.

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
- **Email:** [support@asaratechnologies.com](mailto:support@asaratechnologies.com)

---

## Legal

- [EULA](https://www.asaratechnologies.com/legal/eula/) | [Privacy](https://www.asaratechnologies.com/legal/privacy/) | [Refunds](https://www.asaratechnologies.com/legal/refunds/)

---

*© 2026 Asara Technologies LLC. Unreal Engine is a trademark of Epic Games, Inc.*
