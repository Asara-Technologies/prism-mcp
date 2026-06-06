# Editor Windows and Layout

**Commands:** 17 | **Tier:** Pro

Slate dock tab and editor window management with per-project layout snapshot persistence. Agents can discover live tabs and windows by session-local handles, spawn registered tabs or asset-editor tabs by key, dock tabs relative to other tabs, move tabs into floating windows, resize dock splitter areas, and save/restore named layout snapshots. All tab handles and window identifiers are session-local and should be refreshed after layout or focus changes.

## Key capabilities

- List live Slate dock tabs with tab ID, display label, kind (major, panel, nomad, document), asset path for document/asset-editor tabs, active and foreground state, content widget type, size, and parent window info
- Get detailed public Slate metadata for a specific tab by handle, tab ID, or asset path
- Spawn registered Slate tabs by tab ID or open asset editor tabs by asset path (idempotent if already open)
- Close and focus live dock tabs by session handle or tab ID
- Dock one live tab relative to another at left, right, above, below, or tabbed position; move a live tab into a new floating editor window at an optional screen position and size
- Resize dock splitter areas containing a reference tab along horizontal or vertical axis to a target size ratio
- List top-level interactive Slate editor windows with session-local window identifiers; get detailed window metadata; move and resize non-main-frame windows; close non-main-frame windows
- Save the current tab, window, and asset editor layout to a named per-project snapshot stored under the project's `Saved/PrismMCP/Layouts` folder; restore snapshots (reopens saved asset editors, applies layout, repositions floating windows by title); list and delete saved snapshots

## Systems covered

- Slate `SDockTab`, `SDockTabStack`, `FTabManager`
- Slate top-level `SWindow` management (non-main-frame only)
- `FGlobalTabmanager` / registered tab spawn keys
- Per-project layout snapshot persistence (`FLayout` serialization)
- Asset editor tab management via `FAssetEditorManager`
