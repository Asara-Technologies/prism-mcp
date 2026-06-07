# game-features

**Feature area:** Gameplay systems
**Commands:** 12

[description pending]

## manage

[description pending]

### `change_game_feature_state`

Request a Game Feature plugin lifecycle transition. Returns immediately; poll get_game_feature_state for async completion.

## read

[description pending]

### `describe_game_feature_action_class`

Return schema and defaults for a concrete UGameFeatureAction class.

### `get_game_feature_action`

Full property readback for a specific GameFeature action.

### `get_game_feature_dependencies`

Inspect forward and reverse Game Feature plugin dependency declarations.

### `get_game_feature_plugin`

Inspect one Game Feature plugin, including metadata, dependencies, lifecycle state, and action summaries when available.

### `get_game_feature_state`

Read the current lifecycle state for one Game Feature plugin. Intended as a fresh poll target.

### `list_game_feature_actions`

List actions on a plugin's GameFeatureData asset with stable indices for property-path editing.

### `list_game_feature_plugins`

List discovered Game Feature plugins with current lifecycle state and action counts when available.

## write

[description pending]

### `add_game_feature_action`

Add a concrete UGameFeatureAction subclass to a plugin's GameFeatureData asset.

### `create_game_feature_plugin`

Scaffold a content-only Game Feature plugin under Project/Plugins/GameFeatures with a .uplugin and GameFeatureData asset.

### `remove_game_feature_action`

Remove one action by index from a plugin's GameFeatureData asset.

### `set_game_feature_plugin_metadata`

Update descriptor metadata and Game Feature dependency declarations in a plugin's .uplugin file.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
