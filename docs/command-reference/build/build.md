# build

**Feature area:** Build and deployment
**Commands:** 12

[description pending]

## lifecycle

[description pending]

### `cancel_build_session`

Cancel the currently active build session.

### `deploy_and_launch`

Deploy a staged packaged build to a target device, optionally launching it.

### `start_build_pipeline`

Start a cook, package, or archive BuildCookRun session through RunUAT.

## read

[description pending]

### `get_build_artifacts`

List output artifacts from the last completed build session.

### `get_build_session`

Poll the active or most recent build session for progress and state.

### `get_device_status`

Return live connection and authorization state for a target device.

### `get_pipeline_presets`

List suggested build pipeline presets.

### `get_project_build_info`

Return project-level build metadata and default build paths.

### `list_build_configurations`

Enumerate available Unreal build configurations.

### `list_build_targets`

Enumerate build targets for the current project.

### `list_devices`

Enumerate connected or known target devices, optionally filtered by platform.

### `list_target_platforms`

Enumerate target platforms known to this Unreal Engine install.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
