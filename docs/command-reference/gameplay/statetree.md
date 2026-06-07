# statetree

**Feature area:** Gameplay systems
**Commands:** 48

[description pending]

## lifecycle

[description pending]

### `compile_state_tree`

Compile a StateTree asset and return structured compiler diagnostics.

### `state_tree_resume_analysis`

Resume paused StateTree trace analysis.

### `state_tree_step_analysis`

Step StateTree trace analysis by a supported flat event mapping.

## manage

[description pending]

### `configure_gameplay_interaction_state_tree_schema`

Set Gameplay Interaction StateTree schema actor classes for Smart Object interaction authoring.

### `send_state_tree_event`

Send a gameplay tag event to a running StateTree instance in PIE.

### `state_tree_debugger_status`

Return StateTree trace debugger availability and active analysis state.

## read

[description pending]

### `get_state_tree_event_queue`

Return pending events in a StateTree instance's event queue.

### `get_state_tree_run_status`

Return the full runtime state snapshot for a StateTree instance in PIE.

### `get_state_tree_schema_info`

Return context-data descriptors declared by one StateTree schema.

### `get_state_tree_task_status`

Return per-task completion status for a StateTree instance in PIE.

### `list_state_tree_bindings`

List StateTree editor property bindings authored with FPropertyBindingPath.

### `list_state_tree_instances`

Enumerate active UStateTreeComponent instances in the PIE world.

### `list_state_tree_node_classes`

Return schema-filtered StateTree node classes for ST.2 placement commands.

### `list_state_tree_nodes`

Return StateTree editor nodes already placed in root, state, and transition node arrays.

### `list_state_tree_parameters`

List root and state parameter bag entries on a StateTree.

### `list_state_tree_states`

Return a flat list of state IDs, names, types, parent IDs, and child IDs.

### `list_state_tree_transitions`

Return StateTree transitions on all states or one state.

### `list_supported_schemas`

Return StateTree schema classes visible to this editor, flagging the v1-supported schemas.

### `read_state_tree`

Read a StateTree asset at summary, standard, full, or focus detail level.

### `state_tree_get_pause_state`

Return StateTree trace-analysis pause state.

### `state_tree_list_breakpoints`

List transient StateTree editor-data breakpoints.

### `state_tree_list_traces`

List live StateTree trace descriptors when the trace debugger is enabled.

## write

[description pending]

### `add_state_tree_binding`

Bind a source StateTree property path to a target StateTree property path.

### `add_state_tree_blueprint_node`

Add a Blueprint-backed StateTree task, condition, consideration, evaluator, or global task node.

### `add_state_tree_node`

Add a native StateTree task, condition, consideration, evaluator, or global task node.

### `add_state_tree_parameter`

Add a root or state parameter to a StateTree parameter bag.

### `add_state_tree_state`

Add a state under a parent or at the top level. Supports state, group, linked, linked_asset, subtree.

### `add_state_tree_transition`

Add a StateTree transition to a source state.

### `create_state_tree`

Create a UStateTree asset using a v1-supported schema.

### `create_state_tree_condition_blueprint`

Create a Blueprint class derived from UStateTreeConditionBlueprintBase.

### `create_state_tree_consideration_blueprint`

Create a Blueprint class derived from UStateTreeConsiderationBlueprintBase.

### `create_state_tree_evaluator_blueprint`

Create a Blueprint class derived from UStateTreeEvaluatorBlueprintBase.

### `create_state_tree_task_blueprint`

Create a Blueprint class derived from UStateTreeTaskBlueprintBase.

### `move_state_tree_node`

Move a placed StateTree editor node within its current owner array.

### `remove_state_tree_binding`

Remove a StateTree editor property binding by target path.

### `remove_state_tree_node`

Remove a placed StateTree editor node by node_id.

### `remove_state_tree_parameter`

Remove a root or state parameter from a StateTree parameter bag.

### `remove_state_tree_state`

Remove a leaf state. States with children are rejected.

### `remove_state_tree_transition`

Remove a StateTree transition by transition GUID.

### `reparent_state_tree_state`

Move a state to a new parent, or top-level when new_parent_id is omitted.

### `set_state_tree_node_properties`

Patch root or nested editable properties on a placed StateTree node template or instance payload.

### `set_state_tree_state_properties`

Set state properties atomically: name, selection_behavior, linked_subtree_id, linked_asset_path.

### `set_state_tree_transition_properties`

Edit scalar routing properties on a StateTree transition.

### `state_tree_attach_analysis`

Attach StateTree debugger analysis to editor/latest trace.

### `state_tree_clear_breakpoints`

Clear transient StateTree editor-data breakpoints.

### `state_tree_detach_analysis`

Detach the active StateTree debugger analysis session.

### `state_tree_remove_breakpoint`

Remove a transient StateTree breakpoint.

### `state_tree_set_breakpoint`

Set a transient StateTree editor-data breakpoint.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
