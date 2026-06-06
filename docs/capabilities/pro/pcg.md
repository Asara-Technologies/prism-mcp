# Procedural Content Generation

**Commands:** 34 | **Tier:** Pro

PCG graph authoring and runtime component binding for UE's `UPCGGraph` system. Agents can build PCG graphs from node type discovery through validation and recompile: discover exposed `UPCGSettings` subclasses, inspect per-type pin and property schemas, place and configure nodes (with preset support), wire outputs to inputs with pre-validation, manage typed graph parameters with instance-override support per actor component, add organizational comment boxes, validate topology, and batch-construct entire graphs from a manifest. Component binding commands attach PCG graphs to actors and trigger or clean up generation.

## Key capabilities

- Create standalone `UPCGGraph` assets; list assets from the Asset Registry; inspect graph topology at summary, standard, full, or focus detail; open the graph editor
- List exposed `UPCGSettings` subclasses with optional category and search filters; get full node schemas (pins, editable properties, presets); list type presets
- Add nodes via registered type name with optional position, title, property values, and preset selection; read, update, reposition, remove, and duplicate nodes by stable GUID handles
- Dry-run pin connection validation; connect and disconnect output/input pin pairs; list all graph edges optionally filtered by node
- List, add, set, and remove typed graph parameters (with instance-override mode targeting per-actor PCG component instances)
- Add, update, and remove editor comment boxes by GUID identity
- Validate graph topology (disconnected required pins, null settings, UE compile output); recompile the graph; search nodes by type, title, or settings value; auto-layout with DAG-based positioning
- Batch-construct a full graph from a manifest with nodes, connections, parameters, and comments in one call with pre-validation
- Bind a `UPCGGraph` asset to an actor via `UPCGComponent`; list PCG component bindings on an actor; trigger PCG generation; clean up generated output

## Systems covered

- `UPCGGraph`, `UPCGNode`, `UPCGSettings` (PCG system)
- `FPCGPinProperties` pin connection validation
- `UPCGComponent` actor binding and generation
- PCG node type registry (exposed `UPCGSettings` subclasses)
- Graph parameter `FInstancedPropertyBag` with instance-override support
- PCG compiler and `LogPCG` capture
