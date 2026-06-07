# runtime-state

**Feature area:** Editor runtime
**Commands:** 5

[description pending]

## read

[description pending]

### `get_gameplay_effect_time_remaining`

Get remaining and total duration of one active gameplay effect on a PIE actor's ASC, by its active-effect handle.

### `get_runtime_property`

Read a specific property on a PIE actor or component.

### `get_runtime_state`

Get a tiered cross-domain snapshot of a PIE actor's runtime state.

### `list_runtime_properties`

Enumerate available properties on a PIE actor or component, with optional filtering.

## write

[description pending]

### `set_runtime_property`

Write a property on a PIE actor (raw local write -- no replication, RepNotify, or PostEditChangeProperty).

_Generated from commit `8812a051f27a` at 2026-06-07T19:01:04Z._
