# gameplay-tags

**Feature area:** Gameplay systems
**Commands:** 10

[description pending]

## read

[description pending]

### `evaluate_gameplay_tag_query`

Evaluate a structured Gameplay Tag query object against a container and return a diagnostic trace.

### `find_gameplay_tag_referencers`

Find assets that reference a specific gameplay tag via asset registry SearchableName dependencies. Supports child-tag expansion and class filter.

### `get_gameplay_tag`

Return metadata for one Gameplay Tag, including existence, hierarchy, source, and restricted details.

### `list_gameplay_tag_hierarchy`

Return the loaded Gameplay Tag hierarchy with source and restricted metadata.

### `list_gameplay_tag_sources`

List Gameplay Tag sources and classify config-backed writable support.

### `match_gameplay_tag_container`

Match a Gameplay Tag container against one tag or another container using exact or parent semantics.

## validate

[description pending]

### `validate_gameplay_tags`

Validate Gameplay Tag write inputs without mutating project settings.

## write

[description pending]

### `add_gameplay_tag`

Add an explicit Gameplay Tag to a writable config-backed source, or preview with dry_run.

### `remove_gameplay_tag`

Remove an explicit leaf Gameplay Tag from a writable config-backed source, or preview with dry_run.

### `rename_gameplay_tag`

Leaf-rename an explicit Gameplay Tag, creating a redirect by default, or preview with dry_run.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
