# ik-retargeter

**Feature area:** Animation
**Commands:** 8

Create and configure IK Retargeter assets. Assign source/target IK Rigs, manage retarget poses, map chains between skeletons automatically or manually, and inspect current mapping state.

## read

Inspect IK Retargeter rig bindings, chain mappings, and retarget pose summaries.

### `get_ik_retargeter_info`

Get IK Retargeter rig bindings, chain mappings, and retarget pose summaries.

## write

Create retargeters, assign rigs, add poses, map chains automatically or manually, and set bone rotation deltas.

### `add_retarget_pose`

Add a source or target retarget pose.

### `auto_map_retarget_chains`

Auto-map retarget chains using Exact, Fuzzy, or Clear mode.

### `create_ik_retargeter`

Create an IK Retargeter asset, optionally assigning source and target IK Rigs.

### `set_current_retarget_pose`

Set the active source or target retarget pose.

### `set_ik_retargeter_rigs`

Assign source and/or target IK Rigs to an IK Retargeter asset.

### `set_retarget_chain_mapping`

Map one target retarget chain to a source chain, or clear it with null/empty source_chain.

### `set_retarget_pose_bone`

Set named retarget-pose bone rotation deltas in degrees.

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
