# runtime-state

**Feature area:** Editor runtime
**Commands:** 5

Inspect live actor state during PIE sessions. Read cross-domain runtime snapshots, enumerate available properties, query individual property values, and write properties for diagnostic purposes.

## read

Read cross-domain runtime snapshots, enumerate properties, and query specific property values on PIE actors.

### `get_gameplay_effect_time_remaining`

Get remaining and total duration of one active gameplay effect on a PIE actor's ASC, by its active-effect handle.

### `get_runtime_property`

Read a specific property on a PIE actor or component.

### `get_runtime_state`

Get a tiered cross-domain snapshot of a PIE actor's runtime state.

### `list_runtime_properties`

Enumerate available properties on a PIE actor or component, with optional filtering.

## write

Write raw property values on PIE actors for diagnostic mutation (no replication or PostEditChange).

### `set_runtime_property`

Write a property on a PIE actor (raw local write -- no replication, RepNotify, or PostEditChangeProperty).

_Generated from commit `e20f9f14378e` at 2026-06-20T06:40:01Z._
