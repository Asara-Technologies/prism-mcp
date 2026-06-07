# console

**Feature area:** Diagnostics
**Commands:** 9

[description pending]

## manage

[description pending]

### `apply_cvar_preset`

Apply a named CVar preset after validating all target CVars are writable.

### `execute_console_command`

Execute a UE console command with output capture and dangerous-command confirmation.

## read

[description pending]

### `get_cvar`

Read a console variable value, type, flags, default value, and help text.

### `list_cvar_presets`

List named CVar presets stored in PrismMCP settings.

### `list_cvars`

List console variables, optionally restricted by prefix.

### `search_cvars`

Search console variable names and help text for a case-insensitive substring.

## write

[description pending]

### `create_cvar_preset`

Create or replace a named CVar preset in PrismMCP settings.

### `delete_cvar_preset`

Delete a named CVar preset from PrismMCP settings.

### `set_cvar`

Set a writable console variable using ECVF_SetByConsole.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
