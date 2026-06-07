# foliage

**Feature area:** World and level authoring
**Commands:** 25

Place and manage foliage instances in the editor world. Commands cover seeded scatter and erase operations with surface snapping, procedural foliage volumes, World Partition-aware routing, instance inspection, and foliage type enumeration.

## lifecycle

Spawn procedural foliage volumes bound to spawner assets.

### `spawn_procedural_foliage_volume`

Spawn an AProceduralFoliageVolume and bind it to a spawner asset.

## manage

Scatter and erase foliage instances using brush, volume, or advanced WP-aware operations with surface snapping and paint-layer filters.

### `apply_foliage_brush`

Pro-only foliage brush gesture for scatter or erase using the same direct foliage mutation path as the advanced volume commands.

### `erase_foliage_advanced`

Pro-only convex-aware foliage erase across loaded routed IFAs, with optional type and target-level filters.

### `erase_foliage_in_volume`

Erase foliage instances inside a box or sphere shape across loaded editor levels.

### `resimulate_procedural_foliage`

Synchronously resimulate one procedural foliage volume.

### `scatter_foliage_advanced`

Pro-only seeded foliage scatter with WP-aware routing, convex shapes, typed surface snapping, landscape paint-layer filters, and level-instance refusal.

### `scatter_foliage_in_volume`

Seeded foliage scatter inside a box or sphere shape, optionally snapping candidates to world-static surfaces.

## read

List foliage instances and types, inspect individual instances, read procedural spawner state, and query routing targets.

### `get_foliage_instance`

Read one foliage instance by opaque handle.

### `get_foliage_routing_targets`

Pro-only foliage router inspection across loaded levels, World Partition, and level instances.

### `get_foliage_type_info`

Read a UFoliageType's subclass, source, and authoring fields.

### `get_procedural_foliage_spawner_info`

Inspect a UProceduralFoliageSpawner asset.

### `list_foliage_instances`

List foliage instances across loaded editor levels with optional type, bounds, limit, and offset filters.

### `list_foliage_types`

Enumerate UFoliageType assets referenced by InstancedFoliageActors in scope.

## write

Add explicit foliage instances, configure procedural foliage types and spawners, and modify instance transforms.

### `add_foliage_instances`

Add explicit foliage instances to the current editor level from transform objects.

### `add_procedural_foliage_type`

Append a UFoliageType to a procedural foliage spawner.

### `clear_procedural_foliage`

Clear generated foliage instances owned by one procedural foliage volume.

### `create_foliage_type`

Create a UFoliageType asset (InstancedStaticMesh or Actor subclass).

### `create_procedural_foliage_spawner`

Create a UProceduralFoliageSpawner asset.

### `remove_foliage_instances`

Remove foliage instances by opaque handles.

### `remove_procedural_foliage_type`

Remove matching UFoliageType entries from a procedural foliage spawner.

### `set_foliage_instance_custom_data`

Report UE foliage per-instance custom data support for a foliage instance handle.

### `set_foliage_instance_transform`

Set one foliage instance world transform by opaque handle.

### `set_foliage_type_property`

Write a reflected UPROPERTY on a UFoliageType asset.

### `set_foliage_type_source`

Replace the UFoliageType source mesh (ISM) or actor class (Actor).

### `set_procedural_foliage_spawner_property`

Write a reflected property on a UProceduralFoliageSpawner asset.

_Generated from commit `acf91a617efb` at 2026-06-07T21:47:41Z._
