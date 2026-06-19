# asset-registry

**Feature area:** Assets and content
**Commands:** 18

Query and manage the Unreal Asset Registry. Commands browse folders, search by class or path, resolve content-to-disk paths, inspect dependencies and referencers, find orphaned assets, validate integrity, and perform batch move/copy/delete operations.

## manage

Perform batch asset operations, browse folders, fix up redirectors, and resolve content-to-disk paths.

### `batch_assets`

Perform multiple asset operations (move, copy, delete) in a single call.

### `browse_folder`

List all assets in a folder. Optionally filter by class and recurse into subfolders. Returns asset metadata including name, path, class, and disk size.

### `fixup_redirectors`

Fix up (consolidate) all redirectors in a given path, updating references and removing the redirector assets.

### `resolve_path`

Convert between content paths and disk paths. Accepts either format and returns both, plus existence and type information.

## read

Search and inspect assets by class, path, or name. Query dependencies, referencers, and import options.

### `find_assets`

Search for assets in the project using optional path, class, and name filters. Returns asset names, paths, package paths, and class names. Searches /Game and /PrismMCP by default.

### `find_orphaned_assets`

Find assets that are not referenced by any other asset. Useful for identifying unused content.

### `find_redirectors`

Find all asset redirectors in a given path. Redirectors are created when assets are moved or renamed.

### `get_asset_dependencies`

List all package-level dependencies of an asset — the assets it references. Optionally filter to hard or soft references only.

### `get_asset_info`

Get metadata for a single asset by its content-browser path. Returns the asset name, object path, package name, package path, and class. Accepts both /Game/Path/Asset and /Game/Path/Asset.Asset forms.

### `get_asset_referencers`

List all assets that reference (depend on) the given asset. Useful for impact analysis before modifying or deleting an asset.

### `get_assets_by_class`

Find all assets of a given class, with optional path restriction and parent class filter. Supports Blueprint inheritance filtering via parent_class.

### `get_import_options`

Query which import factory handles a given file type. Accepts a full path or just an extension (e.g. '.fbx').

### `list_folders`

List subfolders under a content path. Returns folder names, content paths, disk paths, and asset counts for each subfolder.

## validate

Validate assets in a path for errors such as missing references or corrupt data.

### `validate_assets`

Validate assets in a path, checking for errors such as missing references or corrupt data.

## write

Create folders and perform write-side asset registry operations.

### `create_folder`

Create a new folder in the content browser. The folder is created on disk and registered with the Asset Registry.

### `delete_folder`

Delete a folder from the content browser. By default, refuses to delete non-empty folders. Use force=true to delete a folder and all its contents.

### `move_asset`

Move an asset to a new location in the content browser, optionally fixing up references.

### `rename_folder`

Rename a folder in the content browser by moving all assets to a new folder with the given name. Creates redirectors for moved assets.

_Generated from commit `e781acb47330` at 2026-06-19T07:41:40Z._
