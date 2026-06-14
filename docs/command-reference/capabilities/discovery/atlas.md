# atlas

**Feature area:** Documentation and discovery
**Commands:** 6

Search and query the PrismMCP command catalog at runtime. Provides full-text search across command names, descriptions, modules, and clusters with optional filtering by tier, status, and source.

## manage

Search the Atlas command catalog by name, description, module, or cluster with filtering by tier and status.

### `atlas_search`

Search generated Atlas commands by command name, description, module, or cluster.

**Parameters:**

```json
{
  "properties": {
    "include_cluster": {
      "description": "Include cluster ID for each result",
      "type": "boolean"
    },
    "include_schemas": {
      "description": "Include command input/output schemas; defaults false",
      "type": "boolean"
    },
    "limit": {
      "description": "Maximum commands to return, default 200, max 1000",
      "type": "number"
    },
    "module": {
      "description": "Optional Atlas module slug",
      "type": "string"
    },
    "offset": {
      "description": "Number of matching commands to skip, default 0",
      "type": "number"
    },
    "query": {
      "description": "Case-insensitive Atlas search text",
      "type": "string"
    },
    "source": {
      "description": "Optional command source filter, such as PrismMCP or an extension name",
      "type": "string"
    },
    "status": {
      "description": "Optional status filter: shipped, beta, or deprecated",
      "type": "string"
    },
    "tier": {
      "description": "Optional tier filter: lite or pro",
      "type": "string"
    }
  },
  "required": [
    "query"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "commands": {
      "description": "Ranked Atlas search results",
      "type": "array"
    },
    "matching_commands": {
      "description": "Commands matching the query",
      "type": "number"
    },
    "next_offset": {
      "description": "Next offset, or null when all matches are returned",
      "type": [
        "number",
        "null"
      ]
    },
    "returned_commands": {
      "description": "Commands returned in this response",
      "type": "number"
    },
    "truncated": {
      "description": "Whether additional matching commands were omitted",
      "type": "boolean"
    }
  },
  "required": [
    "commands",
    "matching_commands",
    "returned_commands"
  ],
  "type": "object"
}
```

## read

Read Atlas module metadata, command schemas, and catalog statistics.

### `atlas_describe_command`

Return the generated Atlas record for one command by exact command name.

**Parameters:**

```json
{
  "properties": {
    "command": {
      "description": "Exact PrismMCP command name",
      "type": "string"
    }
  },
  "required": [
    "command"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "command": {
      "description": "Generated Atlas command record",
      "type": "object"
    }
  },
  "required": [
    "command"
  ],
  "type": "object"
}
```

### `atlas_describe_module`

Describe one Atlas module and list its generated commands.

**Parameters:**

```json
{
  "properties": {
    "depth": {
      "description": "summary or full; defaults summary",
      "type": "string"
    },
    "include_schemas": {
      "description": "Include command input/output schemas; defaults false",
      "type": "boolean"
    },
    "module": {
      "description": "Atlas module slug",
      "type": "string"
    }
  },
  "required": [
    "module"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "command_count": {
      "description": "Commands in the module",
      "type": "number"
    },
    "commands": {
      "description": "Commands in the module",
      "type": "array"
    },
    "module": {
      "description": "Atlas module details",
      "type": "object"
    }
  },
  "required": [
    "module",
    "commands",
    "command_count"
  ],
  "type": "object"
}
```

### `atlas_list_commands`

List generated Atlas commands with optional module, cluster, query, limit, and offset filters.

**Parameters:**

```json
{
  "properties": {
    "cluster": {
      "description": "Optional Atlas cluster tag",
      "type": "string"
    },
    "include_schemas": {
      "description": "Include command input/output schemas; defaults false",
      "type": "boolean"
    },
    "limit": {
      "description": "Maximum commands to return, default 200, max 1000",
      "type": "number"
    },
    "module": {
      "description": "Optional Atlas module slug",
      "type": "string"
    },
    "offset": {
      "description": "Number of matching commands to skip, default 0",
      "type": "number"
    },
    "query": {
      "description": "Optional case-insensitive command search",
      "type": "string"
    },
    "source": {
      "description": "Optional command source filter, such as PrismMCP or an extension name",
      "type": "string"
    },
    "status": {
      "description": "Optional status filter: shipped, beta, or deprecated",
      "type": "string"
    },
    "tier": {
      "description": "Optional tier filter: lite or pro",
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
    "commands": {
      "description": "Atlas command summaries",
      "type": "array"
    },
    "matching_commands": {
      "description": "Commands matching the filters",
      "type": "number"
    },
    "next_offset": {
      "description": "Next offset, or null when all matches are returned",
      "type": [
        "number",
        "null"
      ]
    },
    "returned_commands": {
      "description": "Commands returned in this response",
      "type": "number"
    },
    "total_commands": {
      "description": "Total Atlas commands",
      "type": "number"
    },
    "truncated": {
      "description": "Whether additional matching commands were omitted",
      "type": "boolean"
    }
  },
  "required": [
    "commands",
    "total_commands",
    "matching_commands",
    "returned_commands"
  ],
  "type": "object"
}
```

### `atlas_list_extensions`

List live PrismMCP extension packs registered in the current editor session.

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
    "extensions": {
      "description": "Registered extension packs",
      "type": "array"
    },
    "total_extensions": {
      "description": "Number of registered extension packs",
      "type": "number"
    }
  },
  "required": [
    "extensions",
    "total_extensions"
  ],
  "type": "object"
}
```

### `atlas_list_modules`

List generated Atlas modules with feature areas, cluster tags, and command counts.

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
    "generated_at": {
      "description": "Atlas generation timestamp",
      "type": "string"
    },
    "modules": {
      "description": "Atlas module summaries",
      "type": "array"
    },
    "shipping_scope": {
      "description": "Atlas shipping scope",
      "type": "string"
    },
    "source_commit": {
      "description": "Source commit used by the generated Atlas",
      "type": "string"
    },
    "total_modules": {
      "description": "Total Atlas modules",
      "type": "number"
    }
  },
  "required": [
    "modules",
    "total_modules"
  ],
  "type": "object"
}
```

_Generated from commit `c4a795595b18` at 2026-06-14T06:38:55Z._
