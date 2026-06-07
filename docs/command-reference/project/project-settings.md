# project-settings

**Feature area:** Project operations
**Commands:** 6

[description pending]

## manage

[description pending]

### `reload_settings`

Reload a UDeveloperSettings CDO from disk config.

## read

[description pending]

### `get_settings`

Read reflected config properties from a UDeveloperSettings class.

### `list_settings_classes`

List reflected UDeveloperSettings classes available to PrismMCP. Project settings are returned by default; editor settings require include_editor_settings=true.

## write

[description pending]

### `create_input_mapping`

Legacy input command: register a named action in the project's Input Settings and bind it to a keyboard/gamepad key. PrismMCP no longer creates legacy input_action Blueprint graph nodes. Prefer Enhanced Input asset commands and enhanced_input_action for new work.

### `reset_settings`

Reserved for explicit default-layer reset of UDeveloperSettings. V1 returns a diagnostic until reset semantics are proven.

### `set_settings`

Persist root config property values on a UDeveloperSettings class.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
