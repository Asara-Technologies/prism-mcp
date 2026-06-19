# animation

**Feature area:** Animation
**Commands:** 36

Inspect and author animation assets including skeletal meshes, skeletons, anim montages, and state machines. Commands cover bone compatibility checks, retarget source discovery, montage section/notify/curve editing, and state machine graph construction.

## read

Query skeleton compatibility, inspect montage structure, read state machine graphs, and suggest bone mappings between skeletons.

### `check_skeleton_compatibility`

Compare two skeletons and return compatibility status, bone diff, and recommended retarget path.

### `get_anim_montage_info`

Read sections, notifies, curves, slots, and blend settings from a UAnimMontage.

### `get_retarget_job_status`

Poll the status of an async retarget batch job.

### `get_skeletal_mesh_info`

Inspect a USkeletalMesh asset and optionally include LODs, morph targets, and material slots.

### `get_skeleton_info`

Inspect a USkeleton asset and optionally include bones, sockets, curves, slots, notify names, and virtual bones.

### `get_state`

Get details about a state or conduit in an animation state machine.

### `list_retarget_sources`

List compatible skeletons and named retarget source poses registered on a skeleton asset.

### `list_states`

List all states in an animation state machine.

### `suggest_bone_mapping`

Analyze two skeleton bone hierarchies and suggest name-based bone correspondences. Read-only -- does not modify any asset.

## write

Create montages, add sections/notifies/curves, author state machine states and transitions, and add skeletal mesh sockets.

### `add_conduit`

Add a conduit node to an animation state machine. Conduits act as routing points with a single condition.

### `add_montage_curve`

Add a named float curve to the montage.

### `add_montage_notify`

Add an instant AnimNotify or duration-based AnimNotifyState.

### `add_montage_section`

Add a named section at a time position in the montage.

### `add_skeletal_mesh_socket`

Add a mesh-only socket to a USkeletalMesh asset.

### `add_state`

Add a new state to an animation state machine.

### `add_transition`

Add a transition between two states or conduits in an animation state machine.

### `create_anim_montage`

Create a new UAnimMontage asset from an existing UAnimSequence.

### `mark_skeleton_compatible`

Mark one skeleton as compatible with another. Compatibility is one-directional: call again with reversed arguments for bidirectional. Compatible skeletons can share animations via legacy retargeting.

### `merge_skeleton_bones`

Merge all bones from a source skeleton into a target skeleton. Bones already present in the target are skipped. This is a destructive, irreversible operation -- use dry_run first. Requires a USkeletalMesh that uses the source skeleton to be available in the content browser.

### `remove_montage_curve`

Remove a named float curve from the montage.

### `remove_montage_notify`

Remove a notify by its GUID.

### `remove_montage_section`

Remove a section and clear links that point to it.

### `remove_skeletal_mesh_socket`

Remove a mesh-only socket from a USkeletalMesh asset.

### `remove_state`

Remove a state or conduit from an animation state machine. Connected transitions are also removed.

### `remove_transition`

Remove a transition from an animation state machine by GUID.

### `retarget_anim_montage`

Retarget animation montages to a new skeleton via IK Retargeter (modern) or legacy FName-mapped path, preserving montage timeline data.

### `retarget_anim_sequence`

Retarget animation sequences to a new skeleton via IK Retargeter (modern) or legacy FName-mapped path.

### `retarget_blend_space`

Retarget blend spaces to a new skeleton via IK Retargeter (modern) or legacy FName-mapped path.

### `set_curve_points`

Replace all keys on an existing montage float curve.

### `set_montage_blend_settings`

Set montage blend in/out times and interpolation options.

### `set_notify_property`

Set a property on a notify instance via reflected property path.

### `set_section_link`

Set the next-section relationship. Use None to clear.

### `set_skeletal_mesh_lod_screen_sizes`

Set screen-size thresholds for existing USkeletalMesh LOD info entries.

### `set_skeletal_mesh_physics_asset`

Bind or clear the physics asset reference on a USkeletalMesh asset.

### `set_state_properties`

Set properties on an existing state or conduit. Supports entry state wiring and renaming.

### `set_transition_properties`

Set properties on an existing transition in an animation state machine.

_Generated from commit `e781acb47330` at 2026-06-19T07:41:40Z._
