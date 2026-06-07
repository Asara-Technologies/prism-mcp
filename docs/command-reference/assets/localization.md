# localization

**Feature area:** Assets and content
**Commands:** 25

Drive the Unreal Localization pipeline. Run GatherText, compile manifests into .locres, export/import PO translations, inspect archives and manifests, generate coverage reports, and manage String Table assets and localization target configuration.

## lifecycle

Compile localization targets and run the GatherText pipeline with async job tracking.

### `compile_localization`

Compile a localization target's manifest and archives into .locres files with maximum validation.

### `run_localization_gather`

Launch the GatherText pipeline for a localization target. Returns a job ID for polling.

## manage

Export and import PO translations, patch localization target configuration.

### `export_translations`

Export translations to PO format for a specific culture. Returns a job ID for polling.

### `import_translations`

Import PO file translations into a target's archive for a specific culture. Returns a job ID.

### `patch_localization_target`

Patch localization target settings via structured JSON partial input.

## read

Poll localization jobs, read manifests and archives, generate coverage reports, and inspect String Table assets.

### `get_localization_job`

Poll the status of an async localization job and retrieve results when complete.

### `get_localization_report`

Generate a localization coverage report with summary or key-level drill-down.

### `get_localization_target`

Read full configuration for one localization target.

### `get_string_table_info`

Read String Table asset metadata: path, table ID, namespace, and entry count.

### `inspect_localization_archive`

Read translations from a target's archive for a specific culture with status classification and filtering.

### `inspect_localization_manifest`

Read entries from a localization target's manifest with optional namespace/key filtering and pagination.

### `inspect_locres`

Read compiled .locres binary file contents for a target and culture.

### `list_localization_jobs`

List active and recent localization jobs, optionally filtered by target or status.

### `list_localization_targets`

List project localization targets with structured config data.

### `list_string_table_entries`

List every entry in a String Table, or read one key when key is supplied.

## validate

Validate localization data integrity and translation completeness.

### `validate_localization_target`

Validate localization target config and translation coverage. Reports config issues and manifest/archive analysis when available.

## write

Create and modify String Table entries, configure localization targets, and author translation records.

### `add_target_culture`

Add a supported culture to a localization target.

### `create_localization_target`

Create a new localization target with a native culture and optional additional cultures.

### `create_string_table`

Create a UStringTable asset, optionally with an initial namespace and entries.

### `delete_localization_target`

Delete a localization target and its on-disk files. Requires confirm=true to actually delete.

### `remove_string_table_entry`

Remove one String Table entry and its metadata.

### `remove_target_culture`

Remove a supported culture from a localization target.

### `set_native_culture`

Change the native culture of a localization target. The culture must already be in the supported list.

### `set_string_table_entry`

Add or replace one String Table entry, optionally patching string metadata.

### `set_string_table_namespace`

Set a String Table asset namespace.

_Generated from commit `97eb6ac57a6b` at 2026-06-07T21:12:52Z._
