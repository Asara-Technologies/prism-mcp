# data-layers

**Feature area:** World and level authoring
**Commands:** 5

Manage World Partition Data Layers. List layer instances with editor/runtime state, query per-actor memberships, set visibility, and control runtime load states.

## read

List Data Layer instances and query per-actor Data Layer memberships.

### `get_actor_data_layers`

Return the DataLayer memberships for a loaded actor by stable actor handle.

### `list_data_layers`

List DataLayer instances in the current editor world with editor and runtime state.

## write

Set actor Data Layer memberships, control editor visibility, and set runtime load states.

### `set_actor_data_layers`

Replace a loaded actor's DataLayer memberships by stable actor handle.

### `set_data_layer_editor_visible`

Set a DataLayer instance's editor viewport visibility by asset path or instance name.

### `set_data_layer_runtime_state`

Set a runtime DataLayer instance state to Unloaded, Loaded, or Activated.

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
