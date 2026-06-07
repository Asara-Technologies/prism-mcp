# editor-windows

**Feature area:** Editor tooling
**Commands:** 17

Manage Slate editor windows and dock tabs. Spawn, focus, close, dock, and undock tabs. Resize windows and splitter areas. Save and restore per-project layout snapshots.

## lifecycle

Spawn, focus, close, dock, undock, and resize Slate tabs and windows.

### `close_tab`

Request closure of a live Slate dock tab.

### `close_window`

Close a non-main-frame Slate editor window.

### `dock_tab`

Move one live Slate dock tab relative to another live tab.

### `focus_tab`

Focus and draw attention to a live Slate dock tab.

### `resize_dock_area`

Resize the dock splitter area containing a reference tab along one axis.

### `spawn_tab`

Open a registered Slate tab by tab_id or an asset editor tab by asset_path.

### `undock_tab_to_window`

Move a live Slate dock tab into a new floating editor window.

## manage

Resize windows, save and restore per-project layout snapshots.

### `resize_window`

Resize a non-main-frame Slate editor window.

### `restore_layout_snapshot`

Restore the sidecar portions of a per-project PrismMCP editor layout snapshot.

### `save_layout_snapshot`

Save the current editor tab/window layout state to a per-project snapshot file.

## read

Inspect tab and window state, enumerate open editors and their positions.

### `get_tab_info`

Return detailed public Slate metadata for one tab returned by list_tabs.

### `get_window_info`

Return detailed public Slate metadata for one window returned by list_windows.

### `list_layout_snapshots`

List per-project PrismMCP editor layout snapshots.

### `list_tabs`

List live Slate dock tabs discovered from editor windows.

### `list_windows`

List interactive top-level Slate editor windows with session-local window identifiers.

## write

Modify window properties and persist layout configuration changes.

### `delete_layout_snapshot`

Delete a per-project PrismMCP editor layout snapshot if it exists.

### `move_window`

Move a non-main-frame Slate editor window to a screen position.

_Generated from commit `acf91a617efb` at 2026-06-07T21:47:41Z._
