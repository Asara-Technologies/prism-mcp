# misc

**Feature area:** Miscellaneous
**Commands:** 4

[description pending]

## manage

[description pending]

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
  "properties": {
    "message": {
      "description": "Always 'pong'",
      "type": "string"
    }
  },
  "required": [
    "message"
  ],
  "type": "object"
}
```

## read

[description pending]

### `get_undo_history`

Return the current undo and redo stacks as named transaction lists. Optional 'limit' (default 20) caps the number of entries returned from each stack. Index 0 is the most recent.

**Parameters:**

```json
{
  "properties": {
    "limit": {
      "description": "Maximum entries to return from each stack (default 20)",
      "type": "number"
    }
  },
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "redo_count": {
      "description": "Total entries in the redo stack (untruncated)",
      "type": "number"
    },
    "redo_stack": {
      "description": "Redo stack entries, next to redo first. Each: {index, name}",
      "type": "array"
    },
    "success": {
      "description": "Always true",
      "type": "boolean"
    },
    "undo_count": {
      "description": "Total entries in the undo stack (untruncated)",
      "type": "number"
    },
    "undo_stack": {
      "description": "Undo stack entries, most recent first. Each: {index, name}",
      "type": "array"
    }
  },
  "required": [
    "success",
    "undo_count",
    "redo_count",
    "undo_stack",
    "redo_stack"
  ],
  "type": "object"
}
```

## write

[description pending]

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
  "properties": {
    "redo_count": {
      "description": "Remaining entries in the redo stack after this operation",
      "type": "number"
    },
    "redone": {
      "description": "Name of the transaction that was redone",
      "type": "string"
    },
    "success": {
      "description": "True if the redo succeeded",
      "type": "boolean"
    },
    "undo_count": {
      "description": "Entries in the undo stack after this operation",
      "type": "number"
    }
  },
  "required": [
    "success",
    "redone",
    "undo_count",
    "redo_count"
  ],
  "type": "object"
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
  "properties": {
    "redo_count": {
      "description": "Entries in the redo stack after this operation",
      "type": "number"
    },
    "success": {
      "description": "True if the undo succeeded",
      "type": "boolean"
    },
    "undo_count": {
      "description": "Remaining entries in the undo stack after this operation",
      "type": "number"
    },
    "undone": {
      "description": "Name of the transaction that was undone",
      "type": "string"
    }
  },
  "required": [
    "success",
    "undone",
    "undo_count",
    "redo_count"
  ],
  "type": "object"
}
```

_Generated from commit `8812a051f27a` at 2026-06-07T19:01:04Z._
