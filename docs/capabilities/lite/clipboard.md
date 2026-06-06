# clipboard

**Feature area:** Editor tooling
**Commands:** 2
**Tier:** Lite

## session

[cluster blurb pending]

### `clipboard_clear`

Clears the MCP clipboard buffer. Specify a domain to clear only that domain, or omit domain to clear all domains.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Specific domain to clear, such as graph.nodes. Omit to clear all domains."
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
      "description": "Whether the operation succeeded"
    },
    "cleared_domains": {
      "type": "array",
      "description": "Domain names that were cleared"
    }
  },
  "required": [
    "success",
    "cleared_domains"
  ]
}
```

### `clipboard_info`

Returns the current MCP clipboard buffer state: domains with content, item counts, sources, and copy timestamps.

**Parameters:**

```json
{
  "type": "object",
  "properties": {}
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the operation succeeded"
    },
    "entries": {
      "type": "array",
      "description": "Clipboard entries. Each item includes domain, item_count, source, and copied_at."
    }
  },
  "required": [
    "success",
    "entries"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
