# editor-utility

**Feature area:** Editor tooling
**Commands:** 19

[description pending]

## lifecycle

[description pending]

### `close_euw_tab`

Close a running Editor Utility Widget tab by tab_id or asset_path. Closing a non-open tab succeeds with was_open=false.

### `focus_viewport`

Move the editor viewport camera to focus on either a named actor or a world-space location. Exactly one of 'target' (actor name) or 'location' must be provided.

### `open_level`

Load a level by its asset path (e.g. /Game/Maps/MainMenu). The currently open level is closed first; unsaved changes will be lost.

### `run_editor_utility_blueprint`

Execute a zero-parameter CallInEditor function on an Editor Utility Blueprint and capture log output during execution.

### `spawn_euw_tab`

Spawn an Editor Utility Widget Blueprint as an editor tab. The operation is idempotent for an already-open tab.

### `trigger_live_coding_compile`

Trigger a Live Coding compile of changed C++ source files. Windows only. Optionally waits for the compile to finish before returning. On failure, returns structured compiler errors parsed from MSVC output.

## manage

[description pending]

### `execute_script`

Run sandboxed Python that composes PrismMCP commands through execute_tool(command, params).

**Parameters:**

```json
{
  "properties": {
    "code": {
      "description": "Inline Python code to validate and execute.",
      "type": "string"
    },
    "timeout_seconds": {
      "description": "Cooperative execution timeout in seconds. Defaults to 30; maximum 120.",
      "type": "number"
    },
    "variables": {
      "description": "Optional JSON object injected into the script global namespace.",
      "type": "object"
    }
  },
  "required": [
    "code"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "elapsed_seconds": {
      "description": "Script execution wall time in seconds.",
      "type": "number"
    },
    "error": {
      "description": "Script validation or runtime diagnostic when script_status is error.",
      "type": "string"
    },
    "error_type": {
      "description": "Python exception class or PrismMCP validation category.",
      "type": "string"
    },
    "output": {
      "description": "Captured print output, truncated at the script output limit.",
      "type": "string"
    },
    "result": {
      "description": "Value passed to result(), or null if no result was set.",
      "type": "object"
    },
    "rolled_back": {
      "description": "Whether successful tool mutations were rolled back after an error.",
      "type": "boolean"
    },
    "script_status": {
      "description": "completed or error.",
      "type": "string"
    },
    "success": {
      "description": "Whether the command envelope was produced.",
      "type": "boolean"
    },
    "tool_calls": {
      "description": "Number of execute_tool calls made by the script.",
      "type": "number"
    },
    "traceback": {
      "description": "Python traceback for runtime errors.",
      "type": "string"
    }
  },
  "required": [
    "success",
    "script_status",
    "output",
    "tool_calls",
    "elapsed_seconds"
  ],
  "type": "object"
}
```

### `save_all`

Save all dirty assets and levels in the editor. Returns per-asset save results for diagnostics.

### `save_asset`

Save an asset to disk by content-browser path. Pass only_if_dirty=false to force-save even if no changes have been made since the last save.

### `shutdown_editor`

Save dirty assets and shut down the editor cleanly. The response is sent before shutdown begins. The MCP connection will drop immediately after. Use Scripts/compile.bat and Scripts/launch.bat to recompile and relaunch.

### `take_screenshot`

Capture a PNG screenshot of the active editor viewport and save it to the specified file path on disk.

## read

[description pending]

### `get_compile_errors`

Returns the parsed compiler errors from the most recent Live Coding compilation. Works regardless of whether the compile was triggered by MCP or externally (user hotkey, editor UI). Note: external compile failures may not be detected because the OnPatchComplete delegate only fires on success.

### `list_editor_utilities`

List Editor Utility Widget and Editor Utility Blueprint assets visible to the Asset Registry.

### `list_euw_tabs`

List currently open Editor Utility Widget tabs registered through the editor utility subsystem.

## write

[description pending]

### `create_editor_utility_blueprint`

Create a new Editor Utility Blueprint asset under /Game/. Use it for headless editor-side automation scripts.

### `create_editor_utility_widget`

Create a new Editor Utility Widget Blueprint asset under /Game/. The generated class derives from EditorUtilityWidget and can be opened as an editor tab.

### `delete_asset`

Delete an asset from the project by content-browser path. The asset is removed from disk; this cannot be undone via MCP.

### `duplicate_asset`

Duplicate an asset to a new content-browser path. The source asset is preserved; a copy is created at the destination.

### `rename_asset`

Rename and/or move an asset by specifying source and destination content-browser paths. The source is removed; the destination is created.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
