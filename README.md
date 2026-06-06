<!--
  PrismMCP marketing surface README.
  Source content authored in T1.33 brainstorm 2026-05-09 + amended 2026-05-10 post-bifurcation.
  Spec of truth: github.com/Asara-Technologies/prism-mcp-source
                 docs/superpowers/specs/2026-05-10-prismmcp-marketing-surfaces-design.md
-->

> [!IMPORTANT]
> **Coming Soon.** Pre-launch preview. Pricing, links, and copy may change before public launch. [EULA](EULA.md) and [Privacy Policy](PRIVACY.md) are published as pre-launch drafts; final legal text publishes at general availability. Feedback from testers and reviewers welcome.

<div align="center">

<sub><strong>ASARA PRISMMCP</strong></sub>

# Direct AI access to Unreal Engine.<br/>A professional force multiplier.

**Plumbing handled. Ship more game.**

![UE 5.3 – 5.7](https://img.shields.io/badge/Unreal%20Engine-5.3%20%E2%80%93%205.7-313131?style=flat-square&labelColor=222)
![Platforms](https://img.shields.io/badge/Platforms-Win%20%C2%B7%20Mac%20%C2%B7%20Linux-313131?style=flat-square&labelColor=222)
![MCP compatible](https://img.shields.io/badge/MCP-compatible-7c4dff?style=flat-square&labelColor=222)

[**Get Professional**][buy] &nbsp;·&nbsp; [Try on Fab][fab] &nbsp;·&nbsp; [Watch Demo][demo]

[**Documentation**](docs/) &nbsp;·&nbsp; [**Coverage**](COVERAGE.md) &nbsp;·&nbsp; [**Releases**](https://github.com/Asara-Technologies/prism-mcp/releases)

[buy]: #pricing
[fab]: #
[demo]: #
[fab-product]: #
[direct-product]: #

</div>

---

## Engineers move faster. Everyone else stops waiting.<br/>*That's PrismMCP.*

Twenty years building games, from large studios to solo projects, from early
incubation to live ops. I know what we do day to day, and I built PrismMCP
with that in mind. How quickly we can understand a feature, debug an issue,
test, make a build, and get back to work matters as much as our ability to
make content. Maybe more. PrismMCP has both sides covered.

Engineer, designer, artist, producer. Whatever your role, PrismMCP bridges
the engineering gap that usually slows everyone else down.

I use PrismMCP personally and iterate on it daily, the same way we all
iterate on our games. If there's a workflow it doesn't cover, a bug, or a
plugin you need supported, let me know. I'll stand it up quickly, or get
back to you with a timeline. My whole career has been building
force-multiplying workflows. I'm truly excited to help with yours.

**Roger**, Asara Technologies

---

## PrismMCP ships in two SKUs

**Lite: gameplay authoring.** Level actors, Blueprints (full authoring surface including graph editing and live debugging), components, reflected authoring, AI behavior authoring (Blackboard, Behavior Tree, EQS, StateTree), foliage type authoring, content browser, selection, console, programmatic scripting, custom tool extensions, PIE. The surface you live in day to day. [Sold on Fab][fab-product].

**Professional: the full editor.** Everything in Lite plus the production toolchain: Smart Objects, Materials, UMG/Common UI, Animation & Rigging, cross-system debugging, Blueprint-to-C++ preview, Cinematics, Build & Ship, Profiling, Automation tests, Data, Localization, World Partition, Source Control, native type reflection, editor lifecycle, Live Coding. [Sold direct from Asara][direct-product].

The SKU boundary is enforced in the build, not by a runtime toggle. Lite is
built from the Core + Lite modules only; Professional is built from the Core +
Lite + Pro modules from the same source SHA.

> [!NOTE]
> **Full undo and redo on every write.** Every PrismMCP command participates in UE's transaction system. Hit Ctrl+Z to back out a change, or have your AI agent call `undo` and read `get_undo_history` programmatically to roll back cleanly.

### Capability matrix

| Capability | Coverage | Lite | Professional |
|:---|:---|:---:|:---:|
| **Level actors** | Spawn, transform, delete; outliner; tags | ✓ | ✓ |
| **Blueprint scaffolding** | Class, variables, CDO defaults, function calls | ✓ | ✓ |
| **Blueprint graph editing** | Broad node coverage, transactional rollback | ✓ | ✓ |
| **Blueprint live debugging** | Breakpoints, stepping, watches, call stack snapshots | ✓ | ✓ |
| **Blueprint-to-C++ conversion preview** | Selected function/event migration, staged native files, guided workflow | — | ✓ |
| **Components / SCS** | Authoring on actors and Blueprints | ✓ | ✓ |
| **Reflected authoring** | List/read/validate/set/reset reflected properties; struct describe; array/set/map mutation | ✓ | ✓ |
| **AI behavior authoring** | Blackboard, Behavior Tree, EQS, StateTree: full authoring surface | ✓ | ✓ |
| **Foliage type authoring** | UFoliageType assets, source assignment, reflected property edits | ✓ | ✓ |
| **Selection state** | Get and set; by class or tag | ✓ | ✓ |
| **Content Browser** | Folders, asset organization, moves, import/reimport | ✓ | ✓ |
| **Console + CVars** | Read state, set CVars | ✓ | ✓ |
| **Programmatic scripting** | Sandboxed Python with `execute_tool()`, structured results, rollback on failure | ✓ | ✓ |
| **Custom tool extensions** | C++ modules, Blueprint Toolsets, UFUNCTION commands, Python extension packs | ✓ | ✓ |
| **PIE** | Start, stop, Play From Here | ✓ | ✓ |
| **Smart Objects** | Definitions, slots, behaviors, World Conditions, world placement | — | ✓ |
| **Cross-system debugging** | BT runtime, Control Rig/RigVM, StateTree trace | — | ✓ |
| **Materials** | Instances, graph editing, layers, parameter collections | — | ✓ |
<<<<<<< Updated upstream
| **UMG / Common UI** | Widget tree, bindings, animations, EUW, CommonUI input | — | ✓ |
| **Animation & Rigging** | AnimBP, montages, Control Rig, IK Rig, IK Retargeter, Physics Assets | — | ✓ |
| **Cinematics** | LevelSequence, keyframes, MRQ rendering | — | ✓ |
=======
| **UMG / Common UI** | Widget tree, bindings, animations, Editor Utility Widgets, CommonUI input tables and PIE stacks | — | ✓ |
| **Animation & Rigging** | AnimBP, montages, Control Rig, IK Rig, IK Retargeter, Physics Asset body/primitive/constraint authoring | — | ✓ |
| **Cinematics** | LevelSequence, keyframes, Curve Editor selection/visibility, MRQ rendering | — | ✓ |
>>>>>>> Stashed changes
| **Build & Ship** | Cook, package, archive, deploy, launch | — | ✓ |
| **Profiling** | Frame stats, Trace, Insights, GPU timing | — | ✓ |
| **Automation tests** | Discover, run async, poll progress and results | — | ✓ |
| **Enhanced Input + Game Features** | Input Actions, Mapping Contexts; plugin lifecycle | — | ✓ |
| **Gameplay Tags** | Hierarchy, project CRUD, matching, queries | — | ✓ |
| **Gameplay Ability System** | Attributes, effects, abilities, cues, ASC runtime, debug | — | ✓ |
| **Data** | DataTables, DataAssets, Type System | — | ✓ |
| **Localization** | Targets, cultures, GatherText pipeline, String Tables | — | ✓ |
| **World Partition** | OFPA, DataLayers, streaming, level composition | — | ✓ |
| **Source Control** | Provider status, read commands, write commands | — | ✓ |
| **Native type reflection** | K2Node discriminators; Asset Registry queries | — | ✓ |
| **Editor lifecycle** | save_all, shutdown, project metadata | — | ✓ |
| **Live Coding** | Compile trigger, structured error capture | — | ✓ |

<<<<<<< Updated upstream
Full capability breakdown by module: [docs/capabilities/](docs/capabilities/)
=======
### Surface in detail

<details>
<summary><strong>Blueprints: full surface</strong></summary>

| Capability | Coverage | Lite | Professional |
|:---|:---|:---:|:---:|
| **Class authoring** | Create class, set CDO defaults, compile | ✓ | ✓ |
| **Variables** | Full UPROPERTY flag and metadata control | ✓ | ✓ |
| **Function calls on placed actors** | Call existing functions on placed BP actors | ✓ | ✓ |
| **Components** | Add, remove, reparent, transforms, attachment | ✓ | ✓ |
| **Graph reading** | 4 detail levels for token-cost control | ✓ | ✓ |
| **Graph authoring** | Broad node coverage, inline wiring, transactional rollback | ✓ | ✓ |
| **Graph tooling** | Auto-layout, comments, reroute knots, stale-reference scan | ✓ | ✓ |
| **Function authoring** | Signatures, params, returns, pure/const flags | ✓ | ✓ |
| **Dispatchers, delegates, interfaces** | With stub graph generation | ✓ | ✓ |
| **Live debugging** | Breakpoints, step controls, watches, pin eval, debug targets | ✓ | ✓ |

</details>

<details>
<summary><strong>Levels and World: full surface</strong></summary>

| Capability | Coverage | Lite | Professional |
|:---|:---|:---:|:---:|
| **Actor lifecycle** | Spawn, move, delete; transforms; tags | ✓ | ✓ |
| **Outliner** | Queries, folder CRUD, selection state | ✓ | ✓ |
| **Instance editing** | Variable editing, attach/detach, instance components | ✓ | ✓ |
| **Foliage type authoring** | UFoliageType asset creation, source assignment, reflected property edits | ✓ | ✓ |
| **Sub-levels** | Basic sub-level loads | ✓ | ✓ |
| **World Partition** | Actor load, pin, dirty-actor protection | — | ✓ |
| **DataLayers** | List, read/write membership, runtime state | — | ✓ |
| **Level composition** | Sub-levels, streaming, level instances at scale | — | ✓ |
| **Batch operations** | Multi-op transactions | — | ✓ |

</details>

<details>
<summary><strong>Editor surface: Lite and Professional</strong></summary>

| Capability | Coverage | Lite | Professional |
|:---|:---|:---:|:---:|
| **Console + CVars** | Read state, set CVars | ✓ | ✓ |
| **Output Log + Message Log** | Read with severity filter | ✓ | ✓ |
| **Usage stats** | Aggregate per-session call bytes and estimated tokens | ✓ | ✓ |
| **Programmatic scripting** | Run sandboxed Python snippets with `execute_tool(command, params)`, print capture, structured results, limits, and rollback on failure | ✓ | ✓ |
| **Custom tool extensions** | C++ modules, Blueprint Toolset DataAssets, tagged UFUNCTION commands, and Python extension packs surfaced through `tools/list` and `atlas_list_extensions` | ✓ | ✓ |
| **Selection state** | Get/set selected actors; select by class or tag | ✓ | ✓ |
| **Content Browser** | Folders, asset organization, moves, import/reimport pipeline presets with proper UE references | ✓ | ✓ |
| **PIE** | Start, stop, Play From Here | ✓ | ✓ |
| **Editor lifecycle** | save_all, shutdown_editor, project metadata | — | ✓ |
| **Live Coding control** | Compile trigger, structured error capture | — | ✓ |
| **Undo / redo** | Structured history queries | — | ✓ |

</details>

<details>
<summary><strong>Materials: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Material assets** | Create, recompile, auto-layout expressions | ✓ |
| **Expression graph** | Read at 3 detail levels; search by type, parameter, or value | ✓ |
| **Expression authoring** | Registered discriminators plus `Custom` escape hatch | ✓ |
| **Parameter authoring** | Scalar, vector, texture, static switch | ✓ |
| **Material instances (MIC)** | Create, reparent, override walk | ✓ |
| **Static switches** | Set, list | ✓ |
| **Material layers** | Assign layer functions and blends; full layer-stack read | ✓ |
| **Material parameter collections (MPC)** | Create, scalar/vector authoring with type inference, info readback | ✓ |

</details>

<details>
<summary><strong>UMG / Common UI: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Widget discovery** | List loaded UWidget classes; class inspection | ✓ |
| **Widget tree authoring** | Build or replace from recursive JSON hierarchy | ✓ |
| **Property bindings** | UMG native editor binding table CRUD | ✓ |
| **Event bindings** | Bind widget multicast delegates | ✓ |
| **Widget animations** | Track add, keyframe edit, animation modify and list | ✓ |
| **Editor Utility Widgets (EUW) and Blueprints (EUB)** | Create, spawn as tab, run | ✓ |
| **Common UI** | Activatable Widget Blueprints, asset discovery/settings/validation, input action data tables, action widget row handles, PIE stack controls, CommonInput state | ✓ |

</details>

<details>
<summary><strong>Animation and Rigging: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **AnimGraph authoring** | Via Blueprint stack: slot, blend, additive, state machine | ✓ |
| **Animation Montages** | Section CRUD, notify add/remove, float-curve key edits | ✓ |
| **Skeleton and SkeletalMesh inspection** | Bones, sockets, curves, morph targets | ✓ |
| **Control Rig** | Blueprint create, RigVM graph read/write, hierarchy edits, VM compile | ✓ |
| **Control Rig / RigVM runtime debugging** | Live targets, debug mode, event queue, instruction visit order, session-scoped breakpoints | ✓ |
| **IK Rig** | Solver stack (Limb, FullBodyIK, BodyMover, Pole, SetTransform, StretchLimb); goals; retarget chains | ✓ |
| **IK Retargeter** | Asset CRUD, rig binding, chain mapping, auto-map, pose edits | ✓ |

</details>

<details>
<summary><strong>Cinematics: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **LevelSequence lifecycle** | Create, open in editor, get metadata | ✓ |
| **Bindings** | List, add/remove possessable, set display names | ✓ |
| **Tracks and sections** | Typed tracks, section frame ranges, event endpoints | ✓ |
| **Keyframes** | Get/set values, per-key interpolation, tangent handles, batch add, string channels, defaults, baking | ✓ |
| **Curve Editor** | Open/close state, outliner channel selection, key selection, curve visibility | ✓ |
| **Composition** | Subsequence list/walk, camera-cut shots, shot camera binding | ✓ |
| **Playback and rendering** | Playback control; MoviePipeline render queue and status | ✓ |

</details>

<details>
<summary><strong>Build and Ship: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Build discovery** | Platforms, devices, build targets, project build metadata | ✓ |
| **Build sessions** | Shared session manager, progress, current step, log tail | ✓ |
| **Map builds** | Geometry, lighting, navigation, HLODs, texture and virtual texture streaming | ✓ |
| **Cook, package, archive** | RunUAT BuildCookRun sessions | ✓ |
| **Deploy and launch** | To discovered target devices; launch-after-deploy | ✓ |

</details>

<details>
<summary><strong>Profiling and Automation: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Frame stats** | Captures and queries | ✓ |
| **Trace sessions** | Start, stop, channel control | ✓ |
| **Insights integration** | Read trace data; query event streams | ✓ |
| **GPU & frame timing** | Per-queue GPU work, per-frame GPU cost, CPU-vs-GPU bottleneck classification, bookmark/region readback | ✓ |
| **Automation tests** | List tests, start async session, poll progress and results | ✓ |

</details>

<details>
<summary><strong>Input and Gameplay: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Enhanced Input** | Input Actions, Input Mapping Contexts, modifier and trigger config | ✓ |
| **Gameplay Tags** | Tag editing, ini-table CRUD, hierarchy management | ✓ |
| **Game Features / Modular Gameplay** | Plugin lifecycle, feature state | ✓ |
| **Gameplay Ability System** | AttributeSet discovery, init DataTables, ASC setup, GameplayEffect/Ability/Cue authoring, runtime controls, debug snapshots | ✓ |
| **Smart Objects** | Definition asset creation/readback, slot CRUD/readback, reflected slot property edits, behavior-definition class discovery/add/remove/list/get, World Condition struct discovery/add/remove/list/get/property edits, asset editor open/close, generic Smart Object spawn, component attach, component definition assignment, and component info | ✓ |

</details>

<details>
<summary><strong>Data: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **DataTable** | Row CRUD, struct schema lookup, batch updates | ✓ |
| **DataAsset** | CRUD, property edit, subclass listing | ✓ |
| **Type System** | UDS / User Defined Enum / Struct create, modify, get | ✓ |
| **Generic asset creation** | Factory-backed `create_asset` | ✓ |

</details>

<details>
<summary><strong>Localization: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Targets and cultures** | Create, get, list, delete, patch, and validate localization targets; add/remove cultures; set native culture | ✓ |
| **Pipeline** | GatherText, compile, export and import translations as async jobs with progress polling and structured diffs | ✓ |
| **Jobs and reports** | Job status, job list, paginated localization reports with per-category key listing | ✓ |
| **String Tables** | Create tables, set/remove entries, set namespace, list entries, table info | ✓ |
| **Inspection** | Read locres binaries, localization archives, and manifests | ✓ |

</details>

<details>
<summary><strong>Source Control: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Provider status** | Connected provider; branch and workspace info | ✓ |
| **Read commands** | File state, write-readiness, prepare-for-edit | ✓ |
| **Write commands** | Checkout, revert, submit (narrow, transaction-safe) | ✓ |

</details>

<details>
<summary><strong>Authoring discovery: Professional only</strong></summary>

*Not included in Lite. Available in Professional.*

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Native type reflection** | Search C++ classes, structs, enums; inspect UClass, UScriptStruct, UEnum | ✓ |
| **K2Node discriminators** | Discoverable K2Node types for graph authoring | ✓ |
| **Asset Registry queries** | Asset search, metadata, package dependencies, reverse references | ✓ |

</details>
>>>>>>> Stashed changes

---

## On the roadmap

The matrix above is today's shipped surface. Here's what's planned next. Order, scope, and timing are not committed; items move based on customer demand, engine changes, and effort.

**Authoring expansions**

- **Smart Objects follow-ups.** Parameters and bindings, persistent collections, runtime integrations, and StateTree interaction hooks.
- **Niagara.** System and emitter lifecycle, parameter access, limited graph mutation.
- **Audio.** Sound Cue graph, SoundClass/SoundMix, MetaSound asset and graph.

**Workflow expansions**

- **Editor tab and dock layout.** Sense and manipulate layout; save and restore named workspaces.
- **Source Control expansion.** Submit, branch, sync, merge orchestration on top of today's read and checkout surface.
- **Cross-platform builds.** Mac and Linux build axis.

<<<<<<< Updated upstream
<sub>*Professional gets the full roadmap. Lite also receives gameplay-authoring core expansions where they fit that SKU.*</sub>
=======
**Release and distribution**

- **End-to-end Pro release pipeline.** One-shot operator workflow chains Atlas-regenerated documentation, LLM-assisted release notes, per-engine build matrix, GitHub Release publication, asarawebsite refresh, and license-server catalog registration. v1 ships UE 5.7 / Win64; matrix architecture forward-compatible for 5.3-5.8 across Win/Mac/Linux. License-portal signed-URL downloads land in a separate follow-up.
- **Developer-facing /releases page on asaratechnologies.com.** Browse Pro release history, supported UE versions, and artifact metadata. Downloads stream from the license portal once that surface ships.

<sub>*Professional gets the full roadmap. Lite also receives gameplay-authoring core expansions where they fit that SKU, including Behavior Tree, StateTree, Foliage Type Authoring, and the shipped Blueprint debugging surface.*</sub>
>>>>>>> Stashed changes

---

## Built on the Model Context Protocol

Your AI tool connects to a running Unreal Editor through a small MCP shim. Commands flow as typed JSON-RPC calls; the editor responds with structured results.

```mermaid
flowchart LR
    A[Your AI Tool] --> B[MCP Shim]
    B --> C[PrismMCP<br/>in Editor]
    C --> D[Your Project]
```

Works with **Claude Code**, **Cursor**, **Claude Desktop**, and any MCP-compatible agent.

---

## Pricing

### Direct from Asara: annual license, no auto-renewal

| | Professional — Personal | Professional — Developer | Studio |
|:---|:---:|:---:|:---:|
| **Price** | **$99** per user / year | **$199** per user / year<br/><sub>5+ users $149 · 25+ $99 · 50+ Contact</sub> | **Contact** |
| **Eligibility** | Under $100K USD revenue | $100K+ USD revenue | Custom |
| **Coverage** | Full Pro surface | Full Pro surface | Pro plus full source |
| **Machine activations per user** | 2 | 5 | Custom |
| **Term** | 12 months, no auto-renewal | 12 months, no auto-renewal | Custom |
| **Support** | Direct email, priority triage | Direct email, priority triage | Dedicated time, private channel, custom feature work |
| **License** | Custom Asara EULA | Custom Asara EULA | Custom Asara EULA plus Source License Addendum |

<div align="center">

[**Get Professional**][direct-product] &nbsp;·&nbsp; [Read the EULA][eula]

[eula]: EULA.md

</div>

### On Fab: one-time purchase

| | Lite — Personal | Lite — Developer |
|:---|:---:|:---:|
| **Price** | **$20** per user | **$69** per user |
| **Eligibility** | Under $100K USD revenue · Individual students and personal learning | $100K+ USD revenue |
| **Coverage** | Gameplay-authoring core | Same scope as Personal |
| **Term** | One-time, version-frozen | One-time, version-frozen |
| **Support** | Fab community + public Asara issues | Fab community + public Asara issues |
| **License** | Fab Standard License (Epic) | Fab Standard License (Epic) |

<div align="center">

[**Try on Fab**][fab-product]

</div>

> [!NOTE]
> **Direct licenses are annual, no auto-renewal.** Your license is valid for 12 months from activation. You always get the latest version while your license is active. To keep using PrismMCP after the term ends, buy a new license. A short offline grace window covers the gap so a forgotten or in-flight purchase doesn't lock you out the moment the term flips. We send one reminder email 30 days before the term ends. *Lite (Fab) purchases are one-time and version-frozen, with no expiration.*

---

## Get started

Up and running in under 5 minutes. Full setup guide: [docs/getting-started/](docs/getting-started/)

**Compatibility:** UE 5.3 · 5.4 · 5.5 · 5.6 · 5.7 · Win · Mac · Linux

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

---

## Support

| Tier | What you get |
|:---|:---|
| **Lite — Personal · Lite — Developer** *(Fab)* | Fab community + public Asara GitHub issues |
| **Professional — Personal · Professional — Developer** *(Direct)* | Public issue triage + **direct email** + priority response |
| **Studio** *(Direct)* | Dedicated time, private channel, custom feature work |

Public issues: [github.com/Asara-Technologies/prism-mcp/issues][issues]<br/>
Professional & Studio contact: [support@asaratechnologies.com][support]<br/>
Privacy questions: [privacy@asaratechnologies.com][privacy-email]

[issues]: https://github.com/Asara-Technologies/prism-mcp/issues
[support]: mailto:support@asaratechnologies.com
[privacy-email]: mailto:privacy@asaratechnologies.com

---

## About Asara

Asara is a California game-tools company, founded in 2026. We build
force-multiplying tools for game developers, starting with PrismMCP:
direct AI access to the Unreal Engine editor.

<sub>*Asara Technologies LLC.*</sub>

---

## Legal

**Direct buyers** *(Professional, Studio)*

- [Asara End User License Agreement][eula]
- [Privacy Policy][privacy]
- [Source License Addendum][source-license] *(Studio)*
- [Refund Policy][refunds]

**Fab buyers** *(Lite — Personal, Lite — Developer)*

- [Fab Standard License][fab-eula] *(governed by Epic)*
- [Privacy Policy][privacy] *(Asara)*
- Refunds via [Fab's site policy][fab-refunds]

[privacy]: PRIVACY.md
[source-license]: https://www.asaratechnologies.com/legal/source-license/
[refunds]: REFUNDS.md
[fab-eula]: https://www.fab.com/eula
[fab-refunds]: https://fab.com/help/refund-policy

---

<div align="center">
<sub>

PrismMCP™ is a trademark of Asara Technologies LLC. Unreal Engine® is a
trademark of Epic Games, Inc.

© 2026 Asara Technologies LLC. All rights reserved.

</sub>
</div>
