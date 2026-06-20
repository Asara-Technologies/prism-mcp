# validation

**Feature area:** Assets and content
**Tier:** Lite
**Commands:** 8

Discover, create, run, and manage Unreal Data Validation validators. Commands enumerate registered validators, create Blueprint validators, configure properties, run validation passes with flexible scoping, and manage project-level validation settings. Epic ships zero validation tools in their MCP plugin.

## read

Enumerate validators, inspect validator details, and retrieve cached validation results.

### `list_validators`

Enumerate all registered data validators with metadata, including enabled state, Blueprint vs C++ classification, and optional class filtering. Supports `include_disabled` and `asset_class_filter` parameters.

### `get_validator_details`

Deep inspect a specific validator's configuration, editable properties, and method overrides (CanValidateAsset, ValidateLoadedAsset, GetAssetsToValidateFromChangelist).

### `get_validation_results`

Retrieve results from the most recent `run_validation` call. Supports `summary` and `detailed` modes.

## write

Run validation passes, create Blueprint validators, toggle validator state, and configure project validation settings.

### `run_validation`

Execute a validation pass and return results. Supports five scoping modes: `asset` (single), `assets` (list), `path` (directory), `changelist`, and `all`. Configurable asset limit (default 1000, max 10000). Results cached for `get_validation_results`.

### `create_validator`

Create a new Blueprint validator asset subclassing UEditorValidatorBase. Use BPC tools to implement K2_ValidateLoadedAsset and K2_CanValidateAsset overrides.

### `set_validator_enabled`

Toggle a validator's enabled state. Reports previous state for audit trail.

### `configure_validator`

Set properties on a validator instance via reflection. Supports undo and change tracking.

### `configure_validation_settings`

Manage project-level DataValidation settings: `validate_on_save`, `load_assets_for_changelists`, `enable_material_validation`. Changes persist to DefaultEditor.ini via SaveConfig.
