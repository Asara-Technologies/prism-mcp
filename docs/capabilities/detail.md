# PrismMCP Capability Details

Detailed per-module capability tables. See the [README](../../README.md) for the top-level capability matrix.

---

## Blueprints: full surface

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
| **Blueprint-to-C++ preview** | Selected function/event migration, staged native files, guided workflow reports, compile/backmap recovery, Mode A/D helpers | -- | ✓ |

## Blueprint-to-C++ preview: Professional only

| Phase | Representative commands | Project mutation |
|:---|:---|:---:|
| Analyze | `dev_bpc_analyze_blueprint_convertibility`, `dev_bpc_project_conversion_coverage_report` | No |
| Guided workflow | `dev_bpc_generate_guided_conversion_workflow` | No, except optional markdown report output |
| Dry-run preview | `dev_bpc_convert_function`, `dev_bpc_convert_class_mode_b`, `dev_bpc_convert_class_mode_d`, `dev_bpc_convert_type_assets` with `dry_run: true` | No |
| Stage generated code | Path A, Mode B, Mode D, and type-asset conversion with `dry_run: false` | Generated files and Prism sidecars only |
| Rebuild and diagnose | `dev_bpc_external_rebuild`, `dev_bpc_compile_and_diagnose_conversion`, `dev_bpc_backmap_errors` | Build artifacts |
| Verify and prove | `dev_bpc_verify_conversion`, `dev_bpc_run_parity_tests`, `dev_bpc_generate_public_proof_report` | Parity manifests or optional report output |
| Apply explicit asset changes | Mode A graph patch/restore, Mode B reference patch, Mode D reparent preview/apply/remove | Only when the specific apply command is called |

## Levels and World: full surface

| Capability | Coverage | Lite | Professional |
|:---|:---|:---:|:---:|
| **Actor lifecycle** | Spawn, move, delete; transforms; tags | ✓ | ✓ |
| **Outliner** | Queries, folder CRUD, selection state | ✓ | ✓ |
| **Instance editing** | Variable editing, attach/detach, instance components | ✓ | ✓ |
| **Foliage type authoring** | UFoliageType asset creation, source assignment, reflected property edits | ✓ | ✓ |
| **Sub-levels** | Basic sub-level loads | ✓ | ✓ |
| **World Partition** | Actor load, pin, dirty-actor protection | -- | ✓ |
| **DataLayers** | List, read/write membership, runtime state | -- | ✓ |
| **Level composition** | Sub-levels, streaming, level instances at scale | -- | ✓ |
| **Batch operations** | Multi-op transactions | -- | ✓ |

## Editor surface: Lite and Professional

| Capability | Coverage | Lite | Professional |
|:---|:---|:---:|:---:|
| **Console + CVars** | Read state, set CVars | ✓ | ✓ |
| **Output Log + Message Log** | Read with severity filter | ✓ | ✓ |
| **Usage stats** | Aggregate per-session call bytes and estimated tokens | ✓ | ✓ |
| **Programmatic scripting** | Run sandboxed Python snippets with `execute_tool(command, params)` | ✓ | ✓ |
| **Custom tool extensions** | C++ modules, Blueprint Toolset DataAssets, tagged UFUNCTION commands, Python extension packs | ✓ | ✓ |
| **Selection state** | Get/set selected actors; select by class or tag | ✓ | ✓ |
| **Content Browser** | Folders, asset organization, moves, import/reimport pipeline presets | ✓ | ✓ |
| **PIE** | Start, stop, Play From Here | ✓ | ✓ |
| **Editor lifecycle** | save_all, shutdown_editor, project metadata | -- | ✓ |
| **Live Coding control** | Compile trigger, structured error capture | -- | ✓ |
| **Undo / redo** | Structured history queries | -- | ✓ |

## Materials: Professional only

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

## UMG / Common UI: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Widget discovery** | List loaded UWidget classes; class inspection | ✓ |
| **Widget tree authoring** | Build or replace from recursive JSON hierarchy | ✓ |
| **Property bindings** | UMG native editor binding table CRUD | ✓ |
| **Event bindings** | Bind widget multicast delegates | ✓ |
| **Widget animations** | Track add, keyframe edit, animation modify and list | ✓ |
| **Editor Utility Widgets (EUW) and Blueprints (EUB)** | Create, spawn as tab, run | ✓ |
| **Common UI** | Activatable Widget Blueprints, asset discovery/settings/validation, input action data tables | ✓ |

## Animation and Rigging: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **AnimGraph authoring** | Via Blueprint stack: slot, blend, additive, state machine | ✓ |
| **Animation Montages** | Section CRUD, notify add/remove, float-curve key edits | ✓ |
| **Skeleton and SkeletalMesh inspection** | Bones, sockets, curves, morph targets | ✓ |
| **Control Rig** | Blueprint create, RigVM graph read/write, hierarchy edits, VM compile | ✓ |
| **Control Rig / RigVM runtime debugging** | Live targets, debug mode, event queue, breakpoints | ✓ |
| **IK Rig** | Solver stack; goals; retarget chains | ✓ |
| **IK Retargeter** | Asset CRUD, rig binding, chain mapping, auto-map, pose edits | ✓ |

## Cinematics: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **LevelSequence lifecycle** | Create, open in editor, get metadata | ✓ |
| **Bindings** | List, add/remove possessable, set display names | ✓ |
| **Tracks and sections** | Typed tracks, section frame ranges, event endpoints | ✓ |
| **Keyframes** | Get/set values, per-key interpolation, tangent handles, batch add | ✓ |
| **Composition** | Subsequence list/walk, camera-cut shots, shot camera binding | ✓ |
| **Playback and rendering** | Playback control; MoviePipeline render queue and status | ✓ |

## Build and Ship: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Build discovery** | Platforms, devices, build targets, project build metadata | ✓ |
| **Build sessions** | Shared session manager, progress, current step, log tail | ✓ |
| **Map builds** | Geometry, lighting, navigation, HLODs, texture and virtual texture streaming | ✓ |
| **Cook, package, archive** | RunUAT BuildCookRun sessions | ✓ |
| **Deploy and launch** | To discovered target devices; launch-after-deploy | ✓ |

## Profiling and Automation: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Frame stats** | Captures and queries | ✓ |
| **Trace sessions** | Start, stop, channel control | ✓ |
| **Insights integration** | Read trace data; query event streams | ✓ |
| **GPU & frame timing** | Per-queue GPU work, bottleneck classification, bookmark readback | ✓ |
| **Automation tests** | List tests, start async session, poll progress and results | ✓ |

## Input and Gameplay: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Enhanced Input** | Input Actions, Input Mapping Contexts, modifier and trigger config | ✓ |
| **Gameplay Tags** | Tag editing, ini-table CRUD, hierarchy management | ✓ |
| **Game Features / Modular Gameplay** | Plugin lifecycle, feature state | ✓ |
| **Gameplay Ability System** | AttributeSet discovery, init DataTables, ASC setup, GameplayEffect/Ability/Cue authoring | ✓ |
| **Smart Objects** | Definition assets, slots, behaviors, World Conditions, world placement | ✓ |

## Data: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **DataTable** | Row CRUD, struct schema lookup, batch updates | ✓ |
| **DataAsset** | CRUD, property edit, subclass listing | ✓ |
| **Type System** | UDS / User Defined Enum / Struct create, modify, get | ✓ |
| **Generic asset creation** | Factory-backed `create_asset` | ✓ |

## Localization: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Targets and cultures** | Create, get, list, delete, patch, and validate; add/remove cultures | ✓ |
| **Pipeline** | GatherText, compile, export and import translations as async jobs | ✓ |
| **Jobs and reports** | Job status, job list, paginated reports | ✓ |
| **String Tables** | Create tables, set/remove entries, set namespace, list entries | ✓ |
| **Inspection** | Read locres binaries, localization archives, and manifests | ✓ |

## Source Control: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Provider status** | Connected provider; branch and workspace info | ✓ |
| **Read commands** | File state, write-readiness, prepare-for-edit | ✓ |
| **Write commands** | Checkout, revert, submit (narrow, transaction-safe) | ✓ |

## Authoring discovery: Professional only

| Capability | Coverage | Professional |
|:---|:---|:---:|
| **Native type reflection** | Search C++ classes, structs, enums; inspect UClass, UScriptStruct, UEnum | ✓ |
| **K2Node discriminators** | Discoverable K2Node types for graph authoring | ✓ |
| **Asset Registry queries** | Asset search, metadata, package dependencies, reverse references | ✓ |
