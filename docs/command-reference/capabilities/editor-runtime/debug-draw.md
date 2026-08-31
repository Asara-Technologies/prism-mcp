# debug-draw

**Feature area:** Editor runtime
**Commands:** 12
**Plan:** Free

Draw debug shapes, lines, and text in the PIE viewport in real time. Bindings attach draw properties to runtime values that update as the game runs.

## shapes

Draw and manage debug shapes in the viewport.

### `draw_debug_shape`

Draw a debug shape (sphere, box, line, arrow, capsule, cylinder, cone, point) at a world location with configurable color, size, and lifetime.

### `draw_debug_text`

Draw debug text at a world location or attached to an actor.

### `update_debug_draw`

Update properties of an existing debug draw by handle.

### `remove_debug_draw`

Remove a specific debug draw by handle.

### `clear_debug_draws`

Remove all debug draws, optionally filtered by channel.

### `list_debug_draws`

List active debug draws with their handles, types, and properties.

### `get_debug_draw_state`

Get the current state of the debug draw system: active count, channel summary, frozen status.

### `freeze_debug_draw`

Freeze or unfreeze all debug draws. Frozen draws stop updating their bindings but remain visible.

## channels

Organize debug draws into named channels for batch visibility control.

### `list_debug_draw_channels`

List all debug draw channels and their draw counts.

### `set_debug_draw_channel`

Move a debug draw to a different channel.

## bindings

Bind debug draw properties to runtime values that update automatically.

### `list_debug_draw_bindings`

List active bindings on a debug draw.

### `resolve_debug_draw_binding`

Resolve a binding expression and return its current value without creating a draw.
