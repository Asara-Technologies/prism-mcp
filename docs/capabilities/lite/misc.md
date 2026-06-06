# misc

**Feature area:** Miscellaneous
**Commands:** 5
**Tier:** Lite

## manage

[cluster blurb pending]

### `ping`

Health check. Returns 'pong' if the editor is responsive.

**Parameters:**

```json
{
  "type": "object"
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Always 'pong'"
    }
  },
  "required": [
    "message"
  ]
}
```

## read

[cluster blurb pending]

### `get_undo_history`

Return the current undo and redo stacks as named transaction lists. Optional 'limit' (default 20) caps the number of entries returned from each stack. Index 0 is the most recent.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "number",
      "description": "Maximum entries to return from each stack (default 20)"
    }
  }
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Always true"
    },
    "undo_count": {
      "type": "number",
      "description": "Total entries in the undo stack (untruncated)"
    },
    "redo_count": {
      "type": "number",
      "description": "Total entries in the redo stack (untruncated)"
    },
    "undo_stack": {
      "type": "array",
      "description": "Undo stack entries, most recent first. Each: {index, name}"
    },
    "redo_stack": {
      "type": "array",
      "description": "Redo stack entries, next to redo first. Each: {index, name}"
    }
  },
  "required": [
    "success",
    "undo_count",
    "redo_count",
    "undo_stack",
    "redo_stack"
  ]
}
```

## scripting

[cluster blurb pending]

### `execute_script`

Run sandboxed Python that composes PrismMCP commands through execute_tool(command, params).

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "Inline Python code to validate and execute."
    },
    "timeout_seconds": {
      "type": "number",
      "description": "Cooperative execution timeout in seconds. Defaults to 30; maximum 120."
    },
    "variables": {
      "type": "object",
      "description": "Optional JSON object injected into the script global namespace."
    }
  },
  "required": [
    "code"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command envelope was produced."
    },
    "script_status": {
      "type": "string",
      "description": "completed or error."
    },
    "result": {
      "type": "object",
      "description": "Value passed to result(), or null if no result was set."
    },
    "output": {
      "type": "string",
      "description": "Captured print output, truncated at the script output limit."
    },
    "error": {
      "type": "string",
      "description": "Script validation or runtime diagnostic when script_status is error."
    },
    "error_type": {
      "type": "string",
      "description": "Python exception class or PrismMCP validation category."
    },
    "traceback": {
      "type": "string",
      "description": "Python traceback for runtime errors."
    },
    "rolled_back": {
      "type": "boolean",
      "description": "Whether successful tool mutations were rolled back after an error."
    },
    "tool_calls": {
      "type": "number",
      "description": "Number of execute_tool calls made by the script."
    },
    "elapsed_seconds": {
      "type": "number",
      "description": "Script execution wall time in seconds."
    }
  },
  "required": [
    "success",
    "script_status",
    "output",
    "tool_calls",
    "elapsed_seconds"
  ]
}
```

## write

[cluster blurb pending]

### `redo`

Redo the most recently undone editor operation. Returns the name of the transaction that was redone, and the updated undo/redo stack sizes. Fails if the redo stack is empty.

**Parameters:**

```json
{
  "type": "object"
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "True if the redo succeeded"
    },
    "redone": {
      "type": "string",
      "description": "Name of the transaction that was redone"
    },
    "undo_count": {
      "type": "number",
      "description": "Entries in the undo stack after this operation"
    },
    "redo_count": {
      "type": "number",
      "description": "Remaining entries in the redo stack after this operation"
    }
  },
  "required": [
    "success",
    "redone",
    "undo_count",
    "redo_count"
  ]
}
```

### `undo`

Undo the most recent editor operation. Returns the name of the transaction that was undone, and the updated undo/redo stack sizes. Fails if the undo stack is empty.

**Parameters:**

```json
{
  "type": "object"
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "True if the undo succeeded"
    },
    "undone": {
      "type": "string",
      "description": "Name of the transaction that was undone"
    },
    "undo_count": {
      "type": "number",
      "description": "Remaining entries in the undo stack after this operation"
    },
    "redo_count": {
      "type": "number",
      "description": "Entries in the redo stack after this operation"
    }
  },
  "required": [
    "success",
    "undone",
    "undo_count",
    "redo_count"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
