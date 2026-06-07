# physics-asset

**Feature area:** Animation
**Commands:** 23

Inspect and author Physics Assets for skeletal meshes. Read body and constraint configurations, list collision shapes and disabled pairs, add/remove bodies and constraints, and configure physics simulation modes and mass properties.

## read

Inspect physics bodies, constraints, collision shapes, disabled pairs, mass scales, and physics simulation modes.

### `get_physics_asset_body_mass_scale`

Read a body's DefaultInstance.MassScale from a UPhysicsAsset by bone name. Default is 1.0.

### `get_physics_asset_body_physics_mode`

Read a body's PhysicsType (default | kinematic | simulated) from a UPhysicsAsset by bone name.

### `get_physics_asset_info`

Summary metadata for a UPhysicsAsset: body / constraint / disabled-pair counts, preview mesh path, and the RBAN solver settings block.

### `get_physics_asset_preview_mesh`

Read the preview USkeletalMesh path from a UPhysicsAsset. Returns an empty string when no preview mesh is set.

### `list_physics_asset_bodies`

List all rigid bodies in a UPhysicsAsset with body index, physics mode, mass scale, and per-primitive-type shape counts.

### `list_physics_asset_constraints`

List joint constraints in a UPhysicsAsset. Each row carries body1, body2, linear motion modes and limit, and the three angular DOFs (swing1, swing2, twist) with their motions and limits.

### `list_physics_asset_disabled_collision_pairs`

List body-body pairs in CollisionDisableTable. Each row carries body_a and body_b (lexically sorted for deterministic diffs). Pairs whose body indices fall out of range are silently dropped.

### `list_physics_asset_shapes`

List sphere, capsule, and box collision primitives across all bodies in a UPhysicsAsset, with optional body_name filter. Each row carries shape_type, shape_name, body_name, bone-local center (and rotation for capsule/box), and type-specific dimensions.

## write

Add and remove bodies and constraints, configure shapes, set mass and physics modes, and manage collision disable pairs.

### `add_physics_asset_body`

Append a USkeletalBodySetup for the given bone to a UPhysicsAsset. Fails with body-already-exists when a body for that bone already exists.

### `add_physics_asset_constraint`

Add a joint constraint between two existing bodies. Refuses when a constraint already exists between the pair (in either ordering).

### `create_physics_asset_from_mesh`

Create a new UPhysicsAsset alongside a USkeletalMesh via FPhysicsAssetUtils::CreateFromSkeletalMesh. Optionally assigns the new asset to the mesh's PhysicsAsset slot (default: true).

### `disable_physics_asset_body_collision`

Disable collision between two bodies in a UPhysicsAsset. Idempotent: re-disabling an already-disabled pair succeeds and the response's was_already_disabled field reflects the prior state.

### `enable_physics_asset_body_collision`

Enable (re-enable) collision between two bodies in a UPhysicsAsset. Idempotent: re-enabling an already-enabled pair succeeds; the response's was_disabled field reflects the prior state.

### `remove_physics_asset_body`

Remove a USkeletalBodySetup from a UPhysicsAsset by bone name. Cascades through ConstraintSetup, removing every constraint that references the body. The response includes the number of constraints removed.

### `remove_physics_asset_constraint`

Remove the joint constraint between two bodies. Either bone ordering resolves the same constraint.

### `remove_physics_asset_shape`

Remove a named primitive (sphere, capsule, or box) from a body's AggGeom. Cross-type: removes the shape regardless of primitive type.

### `set_physics_asset_body_mass_scale`

Set a body's DefaultInstance.MassScale. Must be a finite positive value.

### `set_physics_asset_body_physics_mode`

Set a body's PhysicsType to 'default', 'kinematic', or 'simulated'.

### `set_physics_asset_box`

Add or replace a named box primitive on a body. Cross-type replacement applies when the name matches an existing sphere or capsule on the body.

### `set_physics_asset_capsule`

Add or replace a named capsule (sphyl) primitive on a body. Cross-type replacement applies when the name matches an existing sphere or box on the body.

### `set_physics_asset_constraint_limits`

Update limits on a constraint between two bodies. PATCH semantics: any field omitted preserves its existing value. Both bone orderings resolve to the same constraint. Linear and angular limits each validate as finite non-negative; motion enums must be free/limited/locked.

### `set_physics_asset_preview_mesh`

Set or clear the preview USkeletalMesh on a UPhysicsAsset. Pass an empty (or omitted) skeletal_mesh_path to clear the binding.

### `set_physics_asset_sphere`

Add or replace a named sphere primitive on a body in a UPhysicsAsset. If a sphere/capsule/box with the same name already exists on the body, it is replaced with the new sphere (cross-type replacement).

_Generated from commit `97eb6ac57a6b` at 2026-06-07T21:12:52Z._
