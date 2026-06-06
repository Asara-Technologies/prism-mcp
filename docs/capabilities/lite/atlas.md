# atlas

**Feature area:** Documentation and discovery
**Commands:** 6
**Tier:** Lite

## read

Read generated Atlas documentation and command discovery data.

### `atlas_describe_command`

Return the generated Atlas record for one command by exact command name.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "command": {
      "type": "string",
      "description": "Exact PrismMCP command name"
    }
  },
  "required": [
    "command"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "command": {
      "type": "object",
      "description": "Generated Atlas command record"
    }
  },
  "required": [
    "command"
  ]
}
```

### `atlas_describe_module`

Describe one Atlas module and list its generated commands.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "description": "Atlas module slug"
    },
    "depth": {
      "type": "string",
      "description": "summary or full; defaults summary"
    },
    "include_schemas": {
      "type": "boolean",
      "description": "Include command input/output schemas; defaults false"
    }
  },
  "required": [
    "module"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "module": {
      "type": "object",
      "description": "Atlas module details"
    },
    "commands": {
      "type": "array",
      "description": "Commands in the module"
    },
    "command_count": {
      "type": "number",
      "description": "Commands in the module"
    }
  },
  "required": [
    "module",
    "commands",
    "command_count"
  ]
}
```

### `atlas_list_commands`

List generated Atlas commands with optional module, cluster, query, limit, and offset filters.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "description": "Optional Atlas module slug"
    },
    "cluster": {
      "type": "string",
      "description": "Optional Atlas cluster tag"
    },
    "tier": {
      "type": "string",
      "description": "Optional tier filter: lite or pro"
    },
    "status": {
      "type": "string",
      "description": "Optional status filter: shipped, beta, or deprecated"
    },
    "source": {
      "type": "string",
      "description": "Optional command source filter, such as PrismMCP or an extension name"
    },
    "query": {
      "type": "string",
      "description": "Optional case-insensitive command search"
    },
    "limit": {
      "type": "number",
      "description": "Maximum commands to return, default 200, max 1000"
    },
    "offset": {
      "type": "number",
      "description": "Number of matching commands to skip, default 0"
    },
    "include_schemas": {
      "type": "boolean",
      "description": "Include command input/output schemas; defaults false"
    }
  }
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "commands": {
      "type": "array",
      "description": "Atlas command summaries"
    },
    "total_commands": {
      "type": "number",
      "description": "Total Atlas commands"
    },
    "matching_commands": {
      "type": "number",
      "description": "Commands matching the filters"
    },
    "returned_commands": {
      "type": "number",
      "description": "Commands returned in this response"
    },
    "truncated": {
      "type": "boolean",
      "description": "Whether additional matching commands were omitted"
    },
    "next_offset": {
      "type": [
        "number",
        "null"
      ],
      "description": "Next offset, or null when all matches are returned"
    }
  },
  "required": [
    "commands",
    "total_commands",
    "matching_commands",
    "returned_commands"
  ]
}
```

### `atlas_list_extensions`

List live PrismMCP extension packs registered in the current editor session.

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
    "extensions": {
      "type": "array",
      "description": "Registered extension packs"
    },
    "total_extensions": {
      "type": "number",
      "description": "Number of registered extension packs"
    }
  },
  "required": [
    "extensions",
    "total_extensions"
  ]
}
```

### `atlas_list_modules`

List generated Atlas modules with feature areas, cluster tags, and command counts.

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
    "modules": {
      "type": "array",
      "description": "Atlas module summaries"
    },
    "total_modules": {
      "type": "number",
      "description": "Total Atlas modules"
    },
    "source_commit": {
      "type": "string",
      "description": "Source commit used by the generated Atlas"
    },
    "generated_at": {
      "type": "string",
      "description": "Atlas generation timestamp"
    },
    "shipping_scope": {
      "type": "string",
      "description": "Atlas shipping scope"
    }
  },
  "required": [
    "modules",
    "total_modules"
  ]
}
```

### `atlas_search`

Search generated Atlas commands by command name, description, module, or cluster.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Case-insensitive Atlas search text"
    },
    "module": {
      "type": "string",
      "description": "Optional Atlas module slug"
    },
    "tier": {
      "type": "string",
      "description": "Optional tier filter: lite or pro"
    },
    "status": {
      "type": "string",
      "description": "Optional status filter: shipped, beta, or deprecated"
    },
    "source": {
      "type": "string",
      "description": "Optional command source filter, such as PrismMCP or an extension name"
    },
    "limit": {
      "type": "number",
      "description": "Maximum commands to return, default 200, max 1000"
    },
    "offset": {
      "type": "number",
      "description": "Number of matching commands to skip, default 0"
    },
    "include_schemas": {
      "type": "boolean",
      "description": "Include command input/output schemas; defaults false"
    },
    "include_cluster": {
      "type": "boolean",
      "description": "Include cluster ID for each result"
    }
  },
  "required": [
    "query"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "commands": {
      "type": "array",
      "description": "Ranked Atlas search results"
    },
    "matching_commands": {
      "type": "number",
      "description": "Commands matching the query"
    },
    "returned_commands": {
      "type": "number",
      "description": "Commands returned in this response"
    },
    "truncated": {
      "type": "boolean",
      "description": "Whether additional matching commands were omitted"
    },
    "next_offset": {
      "type": [
        "number",
        "null"
      ],
      "description": "Next offset, or null when all matches are returned"
    }
  },
  "required": [
    "commands",
    "matching_commands",
    "returned_commands"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
