# Physics Asset Authoring

**Commands:** 23 | **Tier:** Pro

`UPhysicsAsset` authoring aligned with the UE PhysicsAssetEditor (PhAT) surface, plus PrismMCP-superset additions for collision-disable table read/write and preview mesh management. Agents can create physics assets from skeletal meshes, build and configure body setups with sphere, capsule, and box primitives, author constraints between bone pairs with full linear and angular motion and limit control, and manage the collision-disable table for ragdoll stability. All mutations open `FScopedTransaction` and run the full `NotifyAssetChanged` sequence so PhAT viewports reflect edits without reloading.

## Key capabilities

- Create `UPhysicsAsset` from a `USkeletalMesh` via `FPhysicsAssetUtils::CreateFromSkeletalMesh`; get asset info (body count, constraint count, collision-disable pair count, solver settings summary, preview mesh path)
- List all physics bodies (name, index, physics mode, mass scale, shape counts); list all shapes across an asset optionally filtered by body; list constraints with per-axis linear and angular motion/limit data; list disabled collision pairs from the `CollisionDisableTable`
- Add and remove body setups for skeleton bones; add, replace, and remove named sphere, capsule, and box primitives on bodies; set body physics mode (default, kinematic, simulated) and mass scale
- Add constraints between bone pairs; set constraint linear and angular motion modes and limits via PATCH semantics (omitted fields preserve existing values); remove constraints by bone pair (tries both orderings)
- Disable and enable collision between body pairs in the `CollisionDisableTable` (idempotent); read the full disable table with normalized name pairs
- Set and clear the preview mesh via `Interface_PreviewMeshProvider::SetPreviewMesh` with bone-name validation against the mesh's RefSkeleton
- Access solver settings, advanced body-instance fields, and constraint profile sub-fields via the generic `get_reflected_property` / `set_reflected_property` surface through three registered `IPrismPropertyProvider` instances

## Systems covered

- `UPhysicsAsset`, `USkeletalBodySetup`, `UPhysicsConstraintTemplate`
- `FKAggregateGeom` (sphere, capsule, box primitive shapes)
- `FConstraintInstance` linear/angular motion and limit config
- `CollisionDisableTable` ragdoll collision pair management
- `FPhysicsAssetUtils::CreateFromSkeletalMesh`
- `Interface_PreviewMeshProvider` preview mesh binding
- `FSolverIterations` / `FPhysicsAssetSolverSettings` via reflected property providers
