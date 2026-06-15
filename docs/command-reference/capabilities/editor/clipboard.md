# clipboard

**Feature area:** Editor tooling
**Commands:** 2

Manage the PrismMCP clipboard buffer for cross-command data transfer. Clear specific domains or all buffered data.

## manage

Clear clipboard buffer domains used for cross-command data transfer.

### `clipboard_clear`

Clears the MCP clipboard buffer. Specify a domain to clear only that domain, or omit domain to clear all domains.

**Parameters:**

```json
{
  "properties": {
    "domain": {
      "description": "Specific domain to clear, such as graph.nodes. Omit to clear all domains.",
      "type": "string"
    }
  },
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "cleared_domains": {
      "description": "Domain names that were cleared",
      "type": "array"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "cleared_domains"
  ],
  "type": "object"
}
```

### `clipboard_info`

Returns the current MCP clipboard buffer state: domains with content, item counts, sources, and copy timestamps.

**Parameters:**

```json
{
  "properties": {},
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "entries": {
      "description": "Clipboard entries. Each item includes domain, item_count, source, and copied_at.",
      "type": "array"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "entries"
  ],
  "type": "object"
}
```

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
