# Localization

**Commands:** 25 | **Tier:** Pro

String Table asset authoring and localization target management. Agents can create `UStringTable` assets with seed entries, read and modify entry source strings and metadata, rename table namespaces, and manage all CRUD operations on string entries. Localization target commands cover the full project localization config surface — list and inspect game and engine targets, create and delete game targets, manage supported cultures and the native culture designation, configure gather/export/compile settings via patch, and validate targets against both config and on-disk manifest/archive state.

## Key capabilities

- Create `UStringTable` assets with optional seed entries including key, source string, and per-entry metadata
- List all entries or read a single key from a String Table; add or replace entry source strings and metadata; remove entries by key; rename the table namespace
- List localization targets (game, engine, or all) with structured summaries including native culture, supported cultures with word counts, conflict status, and dependency count
- Read full target configuration for one target including gather config, export/compile settings, dependencies, required modules, and file paths
- Create game localization targets with native culture and initial culture list; delete targets with dry-run preview and explicit confirm flag (engine target creation/deletion blocked)
- Add and remove supported cultures from targets; change the native culture designation (validates against ICU culture codes; cannot remove the native culture)
- Validate localization targets with two-pass checks: config validation (native culture set, cultures defined, gather sources) and manifest/archive analysis (per-culture archive/locres existence, word counts, conflict status)
- Patch localization target configuration with merge-patch semantics covering gather flags, export settings (collapse mode, PO format, comments, source locations), compile settings (format pattern validation, whitespace, rich text tags), dependency target arrays, and required module names

## Systems covered

- `UStringTable`, `FStringTableRegistry`
- `ULocalizationSettings`, `ULocalizationProjectSettings`
- `FLocalizationTargetSettings` gather/export/compile config
- ICU culture code validation
- Localization manifest and archive on-disk inspection
- `FLocalizationTargetDescriptor` dependency chain
