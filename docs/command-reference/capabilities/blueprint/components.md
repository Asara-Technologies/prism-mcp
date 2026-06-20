# components

**Feature area:** Blueprint authoring
**Commands:** 11

Read and write Blueprint component hierarchies. Inspect Scene Component trees on Blueprint CDOs, add new components, set component properties, and manage attachment relationships.

## read

Inspect the Scene Component tree and read component properties on Blueprint CDOs.

### `get_blueprint_component_hierarchy`

Read the full component hierarchy for a Blueprint, including current SCS, inherited SCS, and native components with editability metadata.

### `get_blueprint_component_properties`

List UPROPERTY values on a specific Blueprint component template.

### `get_blueprint_components`

Legacy alias for get_blueprint_component_hierarchy.

### `get_component_properties`

Legacy alias for get_blueprint_component_properties.

## write

Add components to Blueprints, set component property values, and manage attachment hierarchies.

### `add_blueprint_component`

Add a component to a Blueprint SCS under an optional parent with relative transform and socket metadata.

### `remove_blueprint_component`

Remove an editable Blueprint SCS component. The default child policy promotes children.

### `reorder_blueprint_component`

Move an editable Blueprint SCS component to a new sibling index.

### `reparent_blueprint_component`

Move an editable Blueprint SCS scene component under a new scene component parent.

### `set_blueprint_component_attachment`

Set parent and/or socket metadata for an editable Blueprint SCS scene component.

### `set_blueprint_component_property`

Set a path-based property value on an editable Blueprint SCS component template.

### `set_blueprint_component_transform`

Set relative transform fields on an editable Blueprint SCS scene component.

_Generated from commit `e20f9f14378e` at 2026-06-20T06:40:01Z._
