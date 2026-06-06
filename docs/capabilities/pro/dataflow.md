# Dataflow Graph

**Commands:** 27 | **Tier:** Pro

`UDataflow` graph asset authoring for Chaos destruction and geometry pipeline workflows. Agents can create and inspect Dataflow assets, discover registered node types and their full pin/property schemas, place and wire nodes, manage graph variables (via `FInstancedPropertyBag`), add editor comment boxes, evaluate terminal nodes and individual node outputs, read per-output performance timing from cached evaluations, and toggle editor debug draw state on supported nodes. All mutations are transactional and mark the Dataflow package dirty for the standard Unreal save/undo flow.

## Key capabilities

- Create `UDataflow` assets with construction or simulation evaluation type; list assets from the Asset Registry; inspect graph topology (node count, connection count, variable count, dirty state); open in the editor
- List registered Dataflow node types with optional category and search filters; get full node type schemas including pins, editable properties, tags, and debug draw support; list presets for node types
- Add, inspect, update, reposition, remove, and duplicate graph nodes using stable GUID handles; auto-layout nodes in a left-to-right DAG arrangement
- Dry-run pin connection validation before committing; connect and disconnect output/input pin pairs with Dataflow's own connection validator; list all graph connections optionally filtered by node
- List, add, set, and remove graph variables (bool, int32, float, double, string, name, object, vector, rotator, transform) stored in the asset property bag
- Add, update, and remove editor comment boxes by GUID identity
- Validate graph topology (disconnected required pins, null settings, compile diagnostics); recompile the graph with `LogPCG`/Dataflow log capture
- Evaluate terminal nodes by name; evaluate all outputs on a node; poll session-local evaluation status; read cached per-output inclusive/exclusive timing and call counts from the most recent evaluation
- Toggle editor debug draw for supported nodes; read debug draw state and render parameter configuration

## Systems covered

- `UDataflow`, `FDataflowGraph`, `FDataflowNode` (Chaos Dataflow graph)
- `FDataflowConnection` pin connection validation
- `FInstancedPropertyBag` graph variable store
- Dataflow node type registry (registered `UScriptStruct`-backed node types)
- Evaluation context and perf snapshot (session-local, keyed by asset path)
- Editor debug draw state via Dataflow debug rendering hooks
