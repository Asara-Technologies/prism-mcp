# contextual-anim

**Feature area:** Animation
**Commands:** 24

Inspect and author Contextual Animation scene assets. Read roles, sections, anim sets, tracks, warp points, IK targets, and selection criteria. Author new sections, sets, and tracks, and validate structural integrity of scene assets.

## read

Read scene asset metadata, roles, sections, anim sets, tracks, warp points, IK targets, and selection criteria. Validate structural integrity.

### `contextual_anim.get_anim_set`

Full detail for one anim set within a section: random weight, tracks, warp points.

### `contextual_anim.get_anim_track`

Full detail for one track within an anim set, including all authored fields and selection criteria.

### `contextual_anim.get_roles_asset`

Role definitions detail from a UContextualAnimRolesAsset: name, is_character, capsule, mesh.

### `contextual_anim.get_scene_asset`

Full ContextualAnimSceneAsset summary: roles asset, primary role, radius, collision behavior, sample rate, advanced bools, and section count.

### `contextual_anim.get_section`

Full detail for one section (by index or name): sync flag, anim sets, warp point definitions.

### `contextual_anim.list_ik_target_definitions`

List IK target definitions per role from the scene asset's IKTargetParams (alpha provider + per-role IK target def containers).

### `contextual_anim.list_roles`

List role names declared on the scene asset, via the GetRoles() reflection fast-path.

### `contextual_anim.list_sections`

List the scene asset's sections by index and name with anim-set counts.

### `contextual_anim.list_selection_criteria`

List the instanced selection criteria on a track (index, class, type, properties).

### `contextual_anim.list_warp_point_definitions`

List a section's warp point definitions (target name, mode, socket, params).

### `contextual_anim.validate_scene_asset`

Structural validity of a scene asset: has_valid_data plus a list of issues (missing roles asset, empty sections, role/track mismatches, dangling primary role).

## write

Add and configure sections, anim sets, and tracks within Contextual Animation scene assets.

### `contextual_anim.add_anim_set`

Append an anim set to a section. Tracks are added via add_anim_track.

### `contextual_anim.add_anim_track`

Append a track to an anim set. The track's role must be declared in the roles asset.

### `contextual_anim.add_ik_target_definition`

Add an IK target definition for a role on the scene asset's IKTargetParams. Creates the per-role container if it does not yet exist.

### `contextual_anim.add_role`

Append a role definition to a UContextualAnimRolesAsset.

### `contextual_anim.add_section`

Append a section to a scene asset. Sub-elements are added via add_anim_set etc.

### `contextual_anim.add_selection_criterion`

Add an instanced selection criterion of a given class to a track.

### `contextual_anim.add_warp_point_definition`

Append a warp point definition to a section (target name, mode, optional socket).

### `contextual_anim.create_roles_asset`

Create a new UContextualAnimRolesAsset at a content path. Roles are added afterwards via add_role.

### `contextual_anim.create_scene_asset`

Create a new UContextualAnimSceneAsset at a content path. Fields are populated afterwards via add_* / property-write commands.

### `contextual_anim.remove_anim_track`

Remove a track from an anim set by index.

### `contextual_anim.remove_role`

Remove a role definition from a roles asset. Refuses with role_in_use when a scene asset's track references the role, unless force is true.

### `contextual_anim.remove_section`

Remove a section from a scene asset by index or name.

### `contextual_anim.set_scene_roles`

Assign the RolesAsset reference on a scene asset, with an optional PrimaryRole.

_Generated from commit `3456f5dc1efb` at 2026-06-20T19:52:28Z._
