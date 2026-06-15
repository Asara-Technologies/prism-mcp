# materials

**Feature area:** Materials and VFX
**Commands:** 29

Inspect and author Material and Material Instance assets. Read expression graphs, parameter hierarchies, static switches, and layer stacks. Add expressions and parameters, connect pins, set overrides, compile shaders, and apply auto-layout.

## graph_authoring

[description pending]

### `auto_layout_material`

Arrange material expressions into a readable grid.

## lifecycle

[description pending]

### `compile_material`

Force material shader recompilation and report available status.

## read

Read material graphs, parameter hierarchies, instance state, layer stacks, static switches, and collection parameters.

### `get_collection_info`

Read a Material Parameter Collection's scalar and vector parameters.

### `get_instance_info`

Return full state of a material instance: parent chain, all parameters, overrides, layers.

### `get_material_expression`

Read one material expression by m# ID or GUID.

### `get_material_graph`

Read a material expression graph.

### `get_material_info`

Return summary material metadata.

### `get_material_layers`

Read the full layer stack of a material instance.

### `get_parameter_hierarchy`

Walk the inheritance chain for a parameter showing where the value comes from.

### `get_static_switches`

List all static switch parameters with current values.

### `search_material_graph`

Search material expressions by type, label, property, or value.

## write

Add expressions and parameters, connect to material outputs, set parameter overrides, and manage material instance layers.

### `add_material_expression`

Add a material expression by discriminator.

### `add_material_parameter`

Create a material parameter expression.

### `clear_parameter_override`

Remove a parameter override, reverting to inherited value.

### `connect_expression`

Connect one expression output to another expression input.

### `connect_to_material_output`

Connect an expression output to a material attribute.

### `create_material`

Create a UMaterial asset.

### `create_material_instance`

Create a UMaterialInstanceConstant asset from a parent material.

### `create_parameter_collection`

Create a UMaterialParameterCollection asset with optional scalar and vector parameters.

### `disconnect_expression`

Disconnect an expression input.

### `remove_collection_parameter`

Remove a scalar or vector parameter from a Material Parameter Collection.

### `remove_expression`

Remove a material expression and all connections to it.

### `set_collection_parameter`

Set or add a scalar/vector parameter default value on a Material Parameter Collection.

### `set_expression_property`

Set a reflected property on a material expression.

### `set_instance_parent`

Reparent a material instance to a different parent material.

### `set_material_layer`

Assign a material layer function to a slot on a layered material instance.

### `set_parameter_metadata`

Update parameter display metadata.

### `set_parameter_override`

Set a scalar/vector/texture parameter override by name.

### `set_static_switch`

Set a static switch parameter value (triggers shader permutation recompile).

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
