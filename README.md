# PrismMCP

Direct AI access to the Unreal Engine editor.

> **Status:** Beta -- [contact us](mailto:sales@asaratechnologies.com) for access or a trial.

**1,316 commands** across **43+ systems** | UE 5.3--5.7 | Windows, Mac, Linux | Claude Code, Cursor, and any MCP client

---

## What PrismMCP does

PrismMCP gives your AI agent direct, structured access to a running Unreal Editor -- Blueprints, levels, materials, animation, build tooling, and more. Every write command participates in UE's transaction system, so changes are fully undoable. No glue code, no editor scripting layer: commands flow as typed JSON-RPC calls and the editor responds with structured results.

---

## Two editions

**Lite** covers the gameplay authoring core: Blueprint class and graph authoring (including live debugging), level actors and world editing, AI behavior trees (Blackboard, BT, EQS, StateTree), foliage type authoring, content browser, console and CVars, programmatic Python scripting, PIE, and custom tool extensions. Sold as a one-time purchase on Fab.

**Pro** is the full editor surface. Everything in Lite plus Materials, UMG and Common UI, Animation and Rigging, Cinematics, Gameplay Ability System, Blueprint-to-C++ conversion preview, Build and Ship, Profiling, Automation tests, Localization, World Partition, Source Control, native type reflection, editor lifecycle, and Live Coding. Annual license, sold direct from Asara. See [pricing below](#pricing).

The boundary is enforced in the build. Lite and Pro are compiled from the same source SHA; Lite excludes the Pro modules at build time.

---

## Capability highlights

| System | Commands | Tier |
|:---|:---:|:---:|
| Blueprint Authoring and Graph Editing | ~80 | Lite |
| Level Actors and World | ~40 | Lite |
| AI Behavior (BT, StateTree, EQS) | ~60 | Lite |
| Niagara VFX | ~64 | Pro |
| Materials and Material Instances | ~50 | Pro |
| Animation and Rigging | ~60 | Pro |
| Gameplay Ability System | ~70 | Pro |
| Blueprint-to-C++ | ~100 | Pro |

Full capability breakdown: [docs/capabilities/](docs/capabilities/)

---

## Getting started

Up and running in under five minutes. Full setup guide: [docs/getting-started/](docs/getting-started/)

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

Supported clients: Claude Code, Cursor, Claude Desktop, and any MCP-compatible agent.

---

## Documentation

| Section | Contents |
|:---|:---|
| [Getting started](docs/getting-started/) | Installation, connecting your client, configuration, first commands |
| [Capabilities](docs/capabilities/) | Full command surface by system and tier |
| [Guides](docs/guides/) | Security and privacy, HTTP transport, cluster loading |
| [Reference](docs/reference/) | Settings, HTTP transport spec |
| [Examples](docs/examples/) | C++, Blueprint, and Python workflows |

---

## Pricing

### Direct from Asara -- annual license, no auto-renewal

| | Professional Personal | Professional Developer | Studio |
|:---|:---:|:---:|:---:|
| **Price** | $99 / user / year | $199 / user / year | Contact |
| **Volume** | -- | 5+ users $149, 25+ $99, 50+ Contact | -- |
| **Eligibility** | Under $100K USD revenue | $100K+ USD revenue | Custom |
| **Coverage** | Full Pro surface | Full Pro surface | Pro plus full source |
| **Machine activations** | 2 per user | 5 per user | Custom |
| **Support** | Direct email, priority triage | Direct email, priority triage | Dedicated time, private channel, custom feature work |

Licenses are 12 months from activation with no auto-renewal. You get every update released during your term. One reminder email goes out 30 days before expiry; a short offline grace window covers in-flight renewals.

[Read the EULA](EULA.md) -- [Contact sales](mailto:sales@asaratechnologies.com)

### On Fab -- one-time purchase

| | Lite Personal | Lite Developer |
|:---|:---:|:---:|
| **Price** | $20 / user | $69 / user |
| **Eligibility** | Under $100K USD revenue; individual students | $100K+ USD revenue |
| **Coverage** | Gameplay-authoring core | Same scope as Personal |
| **Term** | One-time, version-frozen | One-time, version-frozen |
| **Support** | Fab community + public Asara issues | Fab community + public Asara issues |

Full pricing details and volume quotes: [asaratechnologies.com](https://www.asaratechnologies.com)

---

## Support

| Tier | What you get |
|:---|:---|
| Lite (Fab) | Fab community + [public GitHub issues](https://github.com/Asara-Technologies/prism-mcp/issues) |
| Professional (Direct) | Public issue triage + direct email + priority response |
| Studio (Direct) | Dedicated time, private channel, custom feature work |

Professional and Studio: [support@asaratechnologies.com](mailto:support@asaratechnologies.com)

---

## About Asara

Asara is a California game-tools company, founded in 2026. We build force-multiplying tools for game developers, starting with PrismMCP: direct AI access to the Unreal Engine editor. Twenty years across studios large and small, incubation to live ops -- this is the tool we always needed and never had.

*Asara Technologies LLC.*

---

## Legal

**Direct buyers** (Professional, Studio)

- [End User License Agreement](EULA.md)
- [Privacy Policy](PRIVACY.md)
- [Refund Policy](REFUNDS.md)
- [Source License Addendum](https://www.asaratechnologies.com/legal/source-license/) (Studio)

**Fab buyers** (Lite)

- [Fab Standard License](https://www.fab.com/eula) (governed by Epic)
- [Privacy Policy](PRIVACY.md) (Asara)
- Refunds via [Fab's refund policy](https://fab.com/help/refund-policy)

---

*PrismMCP is a trademark of Asara Technologies LLC. Unreal Engine is a trademark of Epic Games, Inc.*

*© 2026 Asara Technologies LLC. All rights reserved.*
