# umg

**Feature area:** UI
**Commands:** 28

Author and inspect UMG Widget Blueprints. Build widget trees from JSON hierarchies, bind properties and events, manage animations with keyframed tracks, compile widgets, and query widget type schemas and named slot bindings.

## lifecycle

Bind and unbind widget events and properties, build widget trees from JSON, and compile Widget Blueprints.

### `build_widget_tree`

Build or replace a Widget Blueprint tree from a recursive JSON hierarchy, including optional property bindings and event nodes.

### `compile_widget_blueprint`

Explicitly compile a Widget Blueprint and return structured error/warning diagnostics.

## manage

[description pending]

### `bind_widget_event`

Bind a widget multicast delegate by creating or reusing a native component-bound event node.

### `bind_widget_property`

Bind a widget property to a pure Blueprint function using UMG's native editor binding table.

### `unbind_widget_event`

Remove a native component-bound event node from a widget delegate.

### `unbind_widget_property`

Remove a native UMG property binding from a widget.

## read

Read widget trees, inspect widget types and bindings, list animations, query named slots, and enumerate Widget Blueprint assets.

### `get_named_slots`

Query named slot bindings across all widgets implementing INamedSlotInterface in a Widget Blueprint.

### `get_widget`

Read one widget from a Widget Blueprint tree.

### `get_widget_animations`

List or inspect widget animations on a Widget Blueprint.

### `get_widget_bindings`

Inspect native UMG property bindings, event bindings, and unbound bindable properties.

### `get_widget_tree`

Read a Widget Blueprint tree as recursive JSON.

### `get_widget_type_info`

Inspect one widget type's properties, events, containment, and child slot schema.

### `list_widget_blueprints`

List Widget Blueprint assets in a content folder.

### `list_widget_types`

List loaded UWidget subclasses with containment metadata.

## write

Add widgets, configure properties, author animation tracks with keyframes, and modify widget tree hierarchy.

### `add_animation_track`

Add a property animation track with keyframes.

### `add_widget`

Add one widget to an existing Widget Blueprint tree.

### `add_widget_to_viewport`

Return class path and z-order guidance for runtime viewport addition.

### `create_umg_widget_blueprint`

Create a Widget Blueprint asset with configurable folder, parent class, and root widget.

### `create_widget_animation`

Create a new widget animation with optional inline tracks.

### `modify_animation_track`

Replace keyframes on an existing animation track.

### `modify_widget`

Modify widget properties, slot properties, or name.

### `move_widget`

Reparent or reorder a widget.

### `remove_animation_track`

Remove a single property track from an animation.

### `remove_widget`

Remove a widget from the tree.

### `remove_widget_animation`

Delete an animation from a Widget Blueprint.

### `reparent_widget_blueprint`

Change a Widget Blueprint's parent class. Triggers recompile and returns compile diagnostics.

### `set_named_slot_content`

Assign or replace content in a named slot on a host widget.

### `set_widget_variable`

Set or clear the bIsVariable flag on a widget, controlling whether it is exposed as a Blueprint variable.

_Generated from commit `a150b373ce7a` at 2026-06-18T09:17:23Z._
