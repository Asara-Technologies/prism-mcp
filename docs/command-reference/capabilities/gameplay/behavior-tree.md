# behavior-tree

**Feature area:** Gameplay systems
**Commands:** 45

Inspect and author Behavior Tree assets and debug running BT instances in PIE. Commands cover tree structure reading, Blackboard key inspection, node class enumeration, Blueprint event listing, runtime state polling, breakpoint management, and full graph authoring with decorators, services, and tasks.

## manage

Control BT debugging flow such as continuing after breakpoint pauses.

### `bt_continue`

Continue after a BT polling breakpoint paused PIE.

## read

Inspect BT asset structure, Blackboard data, runtime state, active nodes, breakpoints, and debug targets.

### `bt_describe_runtime`

Return Behavior Tree public runtime diagnostic strings.

### `bt_get_active_nodes`

Return the active Behavior Tree node and public child-task scan.

### `bt_get_blackboard_runtime_values`

Read runtime Blackboard values for a BT target.

### `bt_get_break_state`

Return the current BT polling breakpoint pause state.

### `bt_get_runtime_state`

Inspect one active Behavior Tree component runtime state.

### `bt_list_breakpoints`

List session-scoped BT breakpoints.

### `bt_list_debug_targets`

List active Behavior Tree runtime debug targets.

### `find_blackboard_users`

Find Behavior Tree nodes that reference keys owned by a Blackboard or its descendants.

### `get_behavior_tree`

Inspect a Behavior Tree asset shell, graph presence, root state, and Blackboard binding.

### `get_blackboard_data`

Inspect Blackboard keys, key types, inheritance, and parent chain.

### `get_blackboard_so_claim_handle`

Read a runtime SO Claim Handle blackboard key as a PrismMCP Smart Object claim descriptor.

### `get_bt_node_property`

Read a reflected property from a Behavior Tree graph node, decorator, or service by GUID.

### `list_bt_node_blueprint_bases`

List Blueprint-creatable Behavior Tree BlueprintBase parent classes for a node kind.

### `list_bt_node_classes`

List supported Behavior Tree node classes for authoring.

### `list_overridable_bt_events`

List canonical Behavior Tree Blueprint events and whether each is already implemented.

## validate

Validate Behavior Tree structural integrity and Blackboard key consistency.

### `validate_behavior_tree`

Validate a Behavior Tree asset graph and return structured warnings/errors.

## write

Author BT graph nodes, decorators, services, and tasks. Set node properties and manage breakpoints.

### `add_blackboard_key`

Add a local Blackboard key using a supported UE 5.7 key type.

### `add_composite`

Add a Selector, Sequence, or SimpleParallel composite node under a Behavior Tree composite parent.

### `add_decorator`

Add a native Behavior Tree decorator subnode to a composite or task node.

### `add_service`

Add a native Behavior Tree service subnode to a composite or task node.

### `add_subtree_reference`

Add a static or dynamic Behavior Tree subtree reference task under a composite parent.

### `add_task`

Add a native Behavior Tree task node under a composite parent.

### `bt_clear_breakpoints`

Clear session-scoped BT breakpoints.

### `bt_remove_breakpoint`

Remove a session-scoped BT breakpoint.

### `bt_set_breakpoint`

Set a session-scoped polling breakpoint on a BT execution index.

### `create_behavior_tree`

Create a UBehaviorTree asset and initialize its editor graph shell.

### `create_blackboard_data`

Create a UBlackboardData asset with an optional parent Blackboard.

### `create_bt_decorator_blueprint`

Create a Behavior Tree decorator Blueprint, stub void AI events, and list return-value callbacks.

### `create_bt_service_blueprint`

Create a Behavior Tree service Blueprint and stub canonical AI service events.

### `create_bt_task_blueprint`

Create a Behavior Tree task Blueprint and stub the canonical AI task events.

### `modify_blackboard_key`

Rename, retype, or change synchronization for a local Blackboard key.

### `remove_blackboard_key`

Remove a local Blackboard key, refusing by default when Behavior Trees reference it.

### `remove_bt_node`

Remove a Behavior Tree composite or task graph node by GUID, including its child subtree.

### `remove_bt_subnode`

Remove a Behavior Tree decorator or service subnode by GUID.

### `reorder_bt_node`

Move a Behavior Tree composite or task graph node within its current parent child order.

### `reorder_bt_subnode`

Move a Behavior Tree decorator or service subnode within its parent list.

### `reparent_bt_node`

Move a Behavior Tree composite or task graph node under a different composite parent.

### `set_behavior_tree_blackboard`

Bind or replace the Blackboard asset used by a Behavior Tree.

### `set_blackboard_parent`

Set or clear a Blackboard parent asset, rejecting cycles.

### `set_blackboard_so_claim_handle`

Set a runtime SO Claim Handle blackboard key from a PrismMCP Smart Object claim id.

### `set_bt_node_position`

Set the editor graph position for a Behavior Tree composite or task graph node.

### `set_bt_node_property`

Set a reflected property on a Behavior Tree graph node, decorator, or service by GUID.

### `set_subtree_reference`

Update the child tree or injection tag on an existing Behavior Tree subtree reference task.

### `update_behavior_tree`

Explicitly rebuild a Behavior Tree runtime asset from its editor graph.

_Generated from commit `00750b91e5c3` at 2026-06-09T06:28:33Z._
