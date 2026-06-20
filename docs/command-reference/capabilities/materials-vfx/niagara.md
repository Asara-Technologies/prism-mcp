# niagara

**Feature area:** Materials and VFX
**Commands:** 75

Inspect and author Niagara particle systems and emitters. Read module inputs, dynamic input schemas, and script graphs. Build graphs with batch node placement, compile systems, capture sim caches, validate stack readiness, and apply auto-layout.

## graph_authoring

[description pending]

### `auto_layout_niagara_graph`

Apply a deterministic grid layout to Niagara graph nodes.

## lifecycle

Build Niagara graphs batch-style, compile systems, capture sim caches, and abort async tasks.

### `abort_niagara_task`

Abort a Niagara compile or sim-cache capture task.

### `build_niagara_graph`

Batch-add Niagara graph nodes and connections.

### `capture_niagara_sim_cache_immediate`

Capture the current Niagara component frame into a sim cache.

### `capture_niagara_sim_cache_multi_frame`

Start a multi-frame Niagara sim-cache capture.

### `compile_niagara_system`

Request a Niagara system compile.

## manage

[description pending]

### `apply_niagara_stack_fix`

Apply a fix identified by validate_niagara_system's fix descriptors.

### `configure_niagara_sim_cache_params`

Configure capture parameters for a Niagara sim-cache asset in the MCP session.

### `niagara_component_activate`

Activate a Niagara component.

### `niagara_component_deactivate`

Deactivate a Niagara component.

## read

Inspect Niagara system, emitter, and script graphs. Read module inputs, dynamic input schemas, stale references, and node metadata.

### `analyze_niagara_function`

Inspect a Niagara script graph inputs, outputs, nodes, and referenced scripts.

### `find_stale_niagara_references`

Find missing or stale references in a Niagara graph.

### `get_dynamic_input_schema`

Get the schema for a dynamic input from an asset or from one in the stack.

### `get_module_input`

Inspect one Niagara module input.

### `get_niagara_capture_status`

Poll a Niagara sim-cache capture task.

### `get_niagara_compile_status`

Poll a Niagara compile task.

### `get_niagara_emitter_info`

Return compact Niagara emitter metadata and parent reference.

### `get_niagara_sim_cache_info`

Read Niagara sim-cache metadata.

### `get_niagara_system_info`

Return compact Niagara system metadata and emitter handles.

### `get_niagara_system_topology`

Return a structural map of a Niagara system with tiered detail. Use depth='structure' for navigation, 'modules' (default) for planning, 'full' for complete type schemas.

### `get_renderer_properties`

Inspect a Niagara renderer and editable properties.

### `get_stack_module_info`

Inspect one Niagara stack module.

### `get_user_parameter`

List Niagara user parameters, or inspect one by name.

### `list_compatible_dynamic_inputs`

Discover dynamic input scripts compatible with a specific module input's type.

### `list_data_interface_types`

List loaded Niagara data interface classes.

### `list_module_inputs`

List inputs for a Niagara stack module.

### `list_niagara_graphs`

List editable graphs for a Niagara script asset.

### `list_niagara_node_discriminators`

List Niagara graph node discriminators supported by the N.3 graph mutator.

### `list_renderers`

List Niagara renderers for an emitter handle.

### `list_stack_modules`

List Niagara stack modules in a section.

### `list_stack_sections`

List Niagara stack sections for a system or emitter stack.

### `niagara_component_get_user_parameters`

Read user variable override values from a Niagara component instance.

### `read_niagara_graph`

Read nodes, pins, and links from a Niagara script graph.

### `search_niagara_graph`

Search node titles, names, comments, and pin names in a Niagara script graph.

## validate

[description pending]

### `reconstruct_niagara_node`

Reconstruct a Niagara graph node pins from its current definition.

### `validate_niagara_system`

Validate Niagara system compile and runtime readiness signals.

## write

Add modules, set inputs, connect pins, create emitters and systems, and configure Niagara stack entries.

### `add_emitter_to_system`

Add an emitter asset to a Niagara system and return the new system handle.

### `add_module_to_section`

Add a Niagara module script or SetParameters module to a stack section. Use mode='set_parameters' with parameters array to create a SetParameters module.

### `add_niagara_graph_comment`

Add a comment box to a Niagara graph.

### `add_niagara_node`

Add a supported Niagara graph node.

### `add_renderer`

Add a Niagara renderer to an emitter.

### `add_set_parameter_entry`

Add a parameter variable to an existing SetParameters module.

### `add_user_parameter`

Add a Niagara system user parameter.

### `clear_niagara_sim_cache`

Clear captured frames and metadata from a Niagara sim-cache asset.

### `connect_niagara_pins`

Connect two Niagara graph pins.

### `create_niagara_blueprint_wrapper`

Create a Blueprint actor class with a pre-configured Niagara component.

### `create_niagara_emitter`

Create a UNiagaraEmitter asset, optionally inheriting from another emitter.

### `create_niagara_script`

Create a Niagara module, function, or dynamic input script asset.

### `create_niagara_sim_cache`

Create a Niagara sim-cache asset.

### `create_niagara_system`

Create a UNiagaraSystem asset.

### `disconnect_niagara_pin`

Disconnect a Niagara graph pin.

### `insert_niagara_reroute`

Insert a Niagara reroute node where supported by the public editor API.

### `modify_niagara_graph_comment`

Modify a Niagara graph comment box.

### `move_niagara_node`

Move a Niagara graph node.

### `niagara_component_set_asset`

Set a Niagara component system asset.

### `niagara_component_set_rate_scale`

Set a Niagara component rate scale via custom time dilation.

### `niagara_component_set_user_parameter`

Set a Niagara component user parameter.

### `remove_dynamic_input`

Revert a module input from dynamic input mode back to local value.

### `remove_emitter_from_system`

Remove an emitter handle from a Niagara system by handle GUID or display name.

### `remove_module_from_section`

Remove a Niagara module from a stack section.

### `remove_niagara_graph_comment`

Remove a Niagara graph comment box.

### `remove_niagara_node`

Remove a Niagara graph node by id, name, or title.

### `remove_renderer`

Remove a Niagara renderer from an emitter.

### `remove_set_parameter_entry`

Remove a parameter variable from a SetParameters module.

### `remove_user_parameter`

Remove a Niagara system user parameter.

### `reorder_module`

Move a Niagara module to a new index in its section.

### `reorder_renderer`

Move a Niagara renderer to a new index.

### `set_dynamic_input`

Set a module input to use a specific dynamic input function.

### `set_dynamic_input_value`

Set a value on a nested input within a dynamic input chain.

### `set_emitter_parent`

Set an emitter asset's parent emitter reference.

### `set_module_enabled`

Enable or disable a Niagara stack module.

### `set_module_input`

Set a Niagara module input local value.

### `set_niagara_pin_default`

Set a Niagara graph pin default string value.

### `set_renderer_property`

Set a single editable property on a Niagara renderer.

### `set_user_parameter`

Set a Niagara system user parameter design-time default.

_Generated from commit `e20f9f14378e` at 2026-06-20T06:40:01Z._
