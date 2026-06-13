# gameplay-tags

**Feature area:** Gameplay systems
**Commands:** 10

Query and mutate the Gameplay Tag hierarchy. List tags with source and restricted metadata, find tag referencers across assets, evaluate tag queries, and add/remove/rename tags in config-backed sources with dry-run support.

## read

List the tag hierarchy with source metadata, find tag referencers across assets, evaluate tag queries, and match containers.

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

Validate tag write inputs without mutating project settings (dry-run pre-flight).

### `validate_gameplay_tags`

Validate Gameplay Tag write inputs without mutating project settings.

## write

Add, remove, and rename Gameplay Tags in config-backed sources with redirect support and dry-run mode.

### `add_gameplay_tag`

Add an explicit Gameplay Tag to a writable config-backed source, or preview with dry_run.

### `remove_gameplay_tag`

Remove an explicit leaf Gameplay Tag from a writable config-backed source, or preview with dry_run.

### `rename_gameplay_tag`

Leaf-rename an explicit Gameplay Tag, creating a redirect by default, or preview with dry_run.

_Generated from commit `b939b51256dd` at 2026-06-13T22:48:19Z._
