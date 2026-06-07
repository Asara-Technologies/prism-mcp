# pcg

**Feature area:** World and level authoring
**Commands:** 34

[description pending]

## lifecycle

[description pending]

### `build_pcg_graph`

Batch-construct a PCG graph from a manifest.

## manage

[description pending]

### `auto_layout_pcg_graph`

Auto-layout PCG graph nodes.

### `connect_pcg_pins`

Connect PCG output to input pin.

### `disconnect_pcg_pins`

Disconnect a specific PCG edge.

### `duplicate_pcg_node`

Duplicate a PCG node.

### `open_pcg_graph_editor`

Open a PCG graph in the editor.

### `pcg_bind_component`

Bind a PCG graph asset to an actor via UPCGComponent.

### `pcg_cleanup`

Clean up PCG-generated output on a bound component.

### `pcg_generate`

Trigger PCG generation on a bound component.

### `pcg_list_bindings`

List all PCG component bindings on an actor.

### `pcg_unbind_component`

Remove a PCG graph binding from an actor.

### `recompile_pcg_graph`

Recompile a PCG graph with diagnostics.

### `search_pcg_graph`

Search PCG graph nodes.

## read

[description pending]

### `get_pcg_graph`

Inspect a PCG graph asset.

### `get_pcg_node`

Inspect one PCG node.

### `get_pcg_node_schema`

Describe a PCG node type schema.

### `list_pcg_connections`

List PCG graph edges.

### `list_pcg_graph_assets`

List standalone PCG graph assets.

### `list_pcg_graph_parameters`

Read PCG graph user parameters. Optionally target a bound instance on an actor.

### `list_pcg_node_presets`

Enumerate presets for a PCG node type.

### `list_pcg_node_types`

Enumerate exposed PCG node types.

## validate

[description pending]

### `validate_pcg_connection`

Dry-run validate a PCG pin connection.

### `validate_pcg_graph`

Validate PCG graph topology and compile diagnostics.

## write

[description pending]

### `add_pcg_comment`

Add a PCG graph comment.

### `add_pcg_graph_parameter`

Add a PCG graph parameter to the base graph asset.

### `add_pcg_node`

Add a node to a PCG graph.

### `create_pcg_graph_asset`

Create a standalone PCG graph asset.

### `move_pcg_node`

Move a PCG node.

### `remove_pcg_comment`

Remove a PCG graph comment.

### `remove_pcg_graph_parameter`

Remove a PCG graph parameter. In instance mode, resets to base default.

### `remove_pcg_node`

Remove a PCG node.

### `set_pcg_graph_parameter`

Set a PCG graph parameter value. Optionally target a bound instance on an actor.

### `update_pcg_comment`

Update a PCG graph comment.

### `update_pcg_node`

Mutate PCG node settings and metadata.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
