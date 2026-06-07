# components

**Feature area:** Blueprint authoring
**Commands:** 11

[description pending]

## read

[description pending]

### `get_blueprint_component_hierarchy`

Read the full component hierarchy for a Blueprint, including current SCS, inherited SCS, and native components with editability metadata.

### `get_blueprint_component_properties`

List UPROPERTY values on a specific Blueprint component template.

### `get_blueprint_components`

Legacy alias for get_blueprint_component_hierarchy.

### `get_component_properties`

Legacy alias for get_blueprint_component_properties.

## write

[description pending]

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

_Generated from commit `8812a051f27a` at 2026-06-07T19:01:04Z._
