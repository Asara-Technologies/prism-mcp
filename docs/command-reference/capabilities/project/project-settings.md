# project-settings

**Feature area:** Project operations
**Commands:** 6

Read and write UDeveloperSettings-derived project and editor settings. Enumerate available settings classes, inspect reflected config properties, persist changes, and reload from disk.

## manage

Reload UDeveloperSettings CDOs from their backing config files on disk.

### `reload_settings`

Reload a UDeveloperSettings CDO from disk config.

## read

Read reflected config properties and enumerate available UDeveloperSettings classes.

### `get_settings`

Read reflected config properties from a UDeveloperSettings class.

### `list_settings_classes`

List reflected UDeveloperSettings classes available to PrismMCP. Project settings are returned by default; editor settings require include_editor_settings=true.

## write

Persist config property values and manage legacy input mappings on UDeveloperSettings classes.

### `create_input_mapping`

Legacy input command: register a named action in the project's Input Settings and bind it to a keyboard/gamepad key. PrismMCP no longer creates legacy input_action Blueprint graph nodes. Prefer Enhanced Input asset commands and enhanced_input_action for new work.

### `reset_settings`

Reserved for explicit default-layer reset of UDeveloperSettings. V1 returns a diagnostic until reset semantics are proven.

### `set_settings`

Persist root config property values on a UDeveloperSettings class.

_Generated from commit `3456f5dc1efb` at 2026-06-20T19:52:28Z._
