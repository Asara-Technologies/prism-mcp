# console

**Feature area:** Diagnostics
**Commands:** 9

Execute console commands and manage Console Variables (CVars). Read, write, and search CVars by name or help text, create named CVar presets, and apply preset bundles atomically.

## manage

Execute console commands with output capture and apply named CVar presets.

### `apply_cvar_preset`

Apply a named CVar preset after validating all target CVars are writable.

### `execute_console_command`

Execute a UE console command with output capture and dangerous-command confirmation.

## read

Read CVar values, list and search console variables by name or help text.

### `get_cvar`

Read a console variable value, type, flags, default value, and help text.

### `list_cvar_presets`

List named CVar presets stored in PrismMCP settings.

### `list_cvars`

List console variables, optionally restricted by prefix.

### `search_cvars`

Search console variable names and help text for a case-insensitive substring.

## write

Set writable CVars and create or delete named CVar presets.

### `create_cvar_preset`

Create or replace a named CVar preset in PrismMCP settings.

### `delete_cvar_preset`

Delete a named CVar preset from PrismMCP settings.

### `set_cvar`

Set a writable console variable using ECVF_SetByConsole.

_Generated from commit `e781acb47330` at 2026-06-19T07:41:40Z._
