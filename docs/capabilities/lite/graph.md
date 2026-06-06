# graph

**Feature area:** Blueprint authoring
**Commands:** 2
**Tier:** Lite

## clipboard

[cluster blurb pending]

### `graph_copy_nodes`

Copy selected Blueprint or Material graph nodes into the MCP session clipboard.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset": {
      "type": "string",
      "description": "Blueprint or Material asset object path."
    },
    "graph": {
      "type": "string",
      "description": "Graph name, such as EventGraph."
    },
    "node_ids": {
      "type": "array",
      "description": "Node GUID strings to copy."
    }
  },
  "required": [
    "asset",
    "graph",
    "node_ids"
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
      "description": "Whether the operation succeeded"
    },
    "item_count": {
      "type": "number",
      "description": "Number of copied nodes"
    },
    "source": {
      "type": "string",
      "description": "Human-readable copy source"
    },
    "nodes": {
      "type": "array",
      "description": "Copied node summaries"
    }
  },
  "required": [
    "success",
    "item_count",
    "source",
    "nodes"
  ]
}
```

### `graph_paste_nodes`

Paste graph nodes from the MCP session clipboard into a Blueprint or Material graph.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "target_asset": {
      "type": "string",
      "description": "Target Blueprint or Material asset object path."
    },
    "target_graph": {
      "type": "string",
      "description": "Target graph name, such as EventGraph."
    },
    "position": {
      "type": "object",
      "description": "Optional paste position offset object: {x, y}."
    }
  },
  "required": [
    "target_asset",
    "target_graph"
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
      "description": "Whether the operation succeeded"
    },
    "pasted_nodes": {
      "type": "array",
      "description": "Pasted node summaries"
    },
    "broken_connections": {
      "type": "array",
      "description": "Connections that could not be restored"
    },
    "warnings": {
      "type": "array",
      "description": "Post-paste warnings"
    }
  },
  "required": [
    "success",
    "pasted_nodes",
    "broken_connections",
    "warnings"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
