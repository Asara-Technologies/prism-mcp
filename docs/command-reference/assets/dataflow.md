# dataflow

**Feature area:** Assets and content
**Commands:** 27

Inspect and author Dataflow graphs used by Geometry Collection and Chaos destruction assets. Read node schemas and evaluation state, connect and disconnect pins, evaluate nodes, and apply auto-layout.

## manage

Connect and disconnect pins, evaluate nodes, open graph editors, auto-layout, and reposition nodes.

### `auto_layout_dataflow_graph`

Auto-layout a Dataflow graph left-to-right.

### `connect_dataflow_pins`

Connect two Dataflow pins.

### `disconnect_dataflow_pins`

Disconnect two Dataflow pins.

### `evaluate_dataflow_node`

Evaluate a Dataflow node outputs.

### `evaluate_dataflow_terminal`

Evaluate a Dataflow terminal node.

### `open_dataflow_editor`

Open a Dataflow graph in the editor.

### `reposition_dataflow_node`

Move one or more Dataflow nodes.

## read

Inspect Dataflow graph structure, node schemas, evaluation status, and debug draw state.

### `get_dataflow_debug_draw_state`

Read Dataflow debug draw state.

### `get_dataflow_evaluation_status`

Read Dataflow evaluation status.

### `get_dataflow_info`

Inspect a Dataflow graph asset.

### `get_dataflow_node_info`

Inspect one Dataflow node.

### `get_dataflow_node_schema`

Describe a Dataflow node type.

### `get_dataflow_perf_data`

Read cached Dataflow perf data.

### `list_dataflow_assets`

List Dataflow graph assets.

### `list_dataflow_connections`

List Dataflow graph connections.

### `list_dataflow_node_types`

List registered Dataflow node types.

### `list_dataflow_variables`

List Dataflow asset variables.

## validate

Validate Dataflow graph connectivity and node configuration.

### `validate_dataflow_connection`

Dry-run a Dataflow pin connection.

## write

Add Dataflow nodes, build graphs batch-style, and set node properties.

### `add_dataflow_comment`

Add a comment box to a Dataflow graph.

### `add_dataflow_node`

Add a node to a Dataflow graph.

### `add_dataflow_variable`

Add a Dataflow asset variable.

### `create_dataflow_asset`

Create a Dataflow graph asset.

### `remove_dataflow_node`

Remove a node or comment from a Dataflow graph.

### `remove_dataflow_variable`

Remove a Dataflow asset variable.

### `set_dataflow_debug_draw`

Toggle Dataflow debug draw for a node.

### `set_dataflow_variable`

Set a Dataflow asset variable.

### `update_dataflow_node`

Set reflected Dataflow node properties.

_Generated from commit `acf91a617efb` at 2026-06-07T21:47:41Z._
