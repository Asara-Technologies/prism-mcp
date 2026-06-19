# control-rig

**Feature area:** Animation
**Commands:** 40

Inspect and author Control Rig Blueprints and their RigVM graphs. Read hierarchy elements, variables, and graph structure. Author rig units, connections, and variables. Includes RigVM breakpoint debugging during PIE.

## manage

Control RigVM debugger flow such as continuing after breakpoints.

### `rigvm_debug_continue`

Continue after a RigVM breakpoint paused PIE.

## read

Inspect Control Rig hierarchy, graphs, variables, element transforms, unit types, and debugger state.

### `get_control_rig_info`

Get summary metadata for a Control Rig Blueprint asset.

### `get_rig_element_transform`

Read a Control Rig hierarchy element transform in global or local space.

### `get_rig_graph`

Get RigVM node, pin, link, and variable data for a Control Rig graph.

### `get_rig_graph_by_event`

Get the first Control Rig graph matching a ForwardSolve, BackwardSolve, or Interaction event.

### `get_rig_hierarchy`

Get authored Control Rig hierarchy elements and summary counts.

### `get_rig_unit_type_info`

Get pin and metadata details for one FRigUnit type.

### `get_rig_variable`

Get one member variable on a Control Rig Blueprint by name.

### `list_rig_graphs`

List RigVM graphs on a Control Rig Blueprint.

### `list_rig_unit_types`

List FRigUnit types available for add_rig_unit_node.

### `list_rig_variables`

List member variables on a Control Rig Blueprint.

### `rigvm_debug_get_break_state`

Return the current RigVM breakpoint pause state.

### `rigvm_debug_get_runtime_state`

Inspect public RigVM runtime debug/profiling state.

### `rigvm_debug_list_breakpoints`

List session-scoped RigVM breakpoints.

### `rigvm_debug_list_targets`

List live RigVMHost / Control Rig debug targets.

## write

Author RigVM graph nodes, connections, and variables. Build graphs batch-style and modify rig hierarchy elements.

### `add_rig_bone`

Add a user bone to a Control Rig hierarchy.

### `add_rig_control`

Add a control to a Control Rig hierarchy.

### `add_rig_graph`

Create a named Control Rig graph with an optional event node.

### `add_rig_null`

Add a null/space to a Control Rig hierarchy.

### `add_rig_unit_node`

Add a RigUnit node to the default Control Rig RigVM graph.

### `add_rig_variable`

Add an asset/member variable to a Control Rig Blueprint.

### `add_rig_variable_node`

Place a getter or setter node for an existing Control Rig member variable.

### `batch_set_rig_transforms`

Apply multiple Control Rig hierarchy transforms atomically in array order.

### `change_rig_variable_type`

Change a Control Rig member variable C++ type with reference safety checks.

### `compile_control_rig`

Recompile a Control Rig Blueprint VM and report compile state.

### `connect_rig_pins`

Connect two compatible RigVM pins by pin path.

### `create_control_rig`

Create a Control Rig Blueprint asset, optionally assigning a preview skeletal mesh.

### `disconnect_rig_pins`

Break a specific RigVM pin link or all links attached to one pin.

### `duplicate_rig_node`

Duplicate a supported RigVM node without duplicating its connections.

### `remove_rig_element`

Remove a leaf element from a Control Rig hierarchy.

### `remove_rig_graph`

Remove a named non-default Control Rig graph.

### `remove_rig_node`

Remove a node from the default Control Rig RigVM graph.

### `remove_rig_variable`

Remove a Control Rig member variable with reference safety checks.

### `rigvm_debug_clear_breakpoints`

Clear session-scoped RigVM breakpoints.

### `rigvm_debug_remove_breakpoint`

Remove a session-scoped RigVM breakpoint.

### `rigvm_debug_set_breakpoint`

Set a session-scoped RigVM visited-instruction breakpoint.

### `rigvm_debug_set_debug_mode`

Enable or disable public RigVM debug mode on a target.

### `set_rig_element_transform`

Set a Control Rig hierarchy element transform in global or local space.

### `set_rig_node_position`

Set the editor graph position of a Control Rig RigVM node.

### `set_rig_pin_default`

Set a RigVM pin default value by pin path.

_Generated from commit `e781acb47330` at 2026-06-19T07:41:40Z._
