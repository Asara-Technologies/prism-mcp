# ik-rig

**Feature area:** Animation
**Commands:** 13

Create and configure IK Rig assets. Add solvers, goals, and retarget chains to a skeleton. Inspect rig structure including solver stacks and goal-bone assignments.

## read

Inspect IK Rig skeleton, solvers, goals, and retarget chain configuration.

### `get_ik_rig_info`

Get skeleton, solver, goal, and retarget-chain details for an IK Rig asset.

### `list_ik_solver_types`

List built-in IK Rig solver types accepted by add_ik_solver.

## write

Create IK Rigs, add solvers and goals, and define retarget chains for skeleton assets.

### `add_ik_goal`

Add an IK goal for a skeleton bone, optionally connecting it to a solver.

### `add_ik_retarget_chain`

Add a retarget chain to an IK Rig.

### `add_ik_solver`

Add a solver to an IK Rig solver stack.

### `create_ik_rig`

Create an IK Rig asset and assign its preview skeletal mesh.

### `remove_ik_goal`

Remove an IK goal by name.

### `remove_ik_retarget_chain`

Remove a retarget chain from an IK Rig.

### `remove_ik_solver`

Remove a solver from an IK Rig solver stack by index.

### `set_ik_bone_excluded`

Include or exclude a bone from all IK solvers.

### `set_ik_goal_property`

Set PositionAlpha, RotationAlpha, CurrentTransform, or editable goal fields.

### `set_ik_rig_root_bone`

Set the retarget root bone for an IK Rig.

### `set_ik_solver_property`

Set enabled, StartBone, EndBone, or an editable solver/settings property.

_Generated from commit `00750b91e5c3` at 2026-06-09T06:28:33Z._
