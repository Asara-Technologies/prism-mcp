# level-management

**Feature area:** World and level authoring
**Commands:** 9

Manage sub-levels and level instances in the editor world. Create levels, spawn level instances, load/unload streaming sub-levels, set the active editing level, and inspect level metadata and dirty state.

## read

Inspect level metadata, list streaming sub-levels and level instances, and query level instance transforms.

### `get_level_info`

Return metadata about the current editor level, including the active editing level, dirty state, selected world settings, and optional sub-level summary.

### `get_level_instance_info`

Return referenced world, transform, runtime behavior, and load state for one ALevelInstance actor.

### `list_level_instances`

List all ALevelInstance actors in the current editor world.

### `list_sub_levels`

List streaming sub-levels and level instance actors in the current editor world, including load state, edit target state, and level-instance handles.

## write

Create levels, spawn level instances, set the active editing level, load/unload sub-levels, and configure level instance references.

### `create_level`

Create a new blank map asset at a /Game content path and save it immediately so other commands can reference it.

### `create_level_instance`

Spawn an ALevelInstance actor in the current editor world that references an existing map asset.

### `set_current_level`

Set the active editor level that receives newly spawned actors. Accepts PersistentLevel, a loaded level short name, or a level package path.

### `set_level_instance_world`

Set the referenced world/map asset on an existing ALevelInstance actor.

### `set_sub_level_loaded`

Load or unload a streaming sub-level or level instance by name or level package path in the editor.

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
