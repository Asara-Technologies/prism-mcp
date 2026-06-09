# logs

**Feature area:** Diagnostics
**Commands:** 5

Read and control Unreal Engine log output. Query per-category verbosity, read the Message Log, and adjust runtime log verbosity levels.

## read

Read Message Log entries and query per-category runtime verbosity levels.

### `get_log_verbosity`

Return current runtime verbosity for a specific log category.

**Parameters:**

```json
{
  "properties": {
    "category": {
      "description": "Exact log category name (e.g. LogPrismMCP).",
      "type": "string"
    }
  },
  "required": [
    "category"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "category": {
      "description": "Log category name",
      "type": "string"
    },
    "current_verbosity": {
      "description": "Current runtime verbosity",
      "type": "string"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "category",
    "current_verbosity"
  ],
  "type": "object"
}
```

### `get_message_log`

Read structured messages from UE's Message Log system. Pass an empty string for 'category' to list all registered log listings. Pass a known category name (e.g. "BlueprintLog", "MapCheck") to read its messages. Well-known categories: BlueprintLog, AssetCheck, LoadErrors, PIE, SlateStyleLog, SourceControl, AutomationTestingLog, BuildAndSubmitErrors, HLODResults, MapCheck, LightingResults.

**Parameters:**

```json
{
  "properties": {
    "category": {
      "description": "Message log listing name. Empty string to list available categories; non-empty to read messages from that listing.",
      "type": "string"
    },
    "limit": {
      "description": "Maximum number of messages to return (newest first, then sorted chronologically). Default 100.",
      "type": "number"
    },
    "severity": {
      "description": "Minimum severity to include when reading messages: \"info\" (default) | \"warning\" | \"error\".",
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
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_output_log`

Read recent lines from the UE Output Log ring buffer. Results are returned in chronological order. Use 'tail' to limit how many lines are returned (default 100, max 1000). Use 'since' (ISO 8601 UTC, e.g. "2026-04-10T12:00:00Z") to return only lines after a timestamp — if 'since' is present it overrides 'tail'. Use 'category' to filter by log category name (e.g. "LogTemp", "LogMCP"). Use 'min_severity' ("log" | "warning" | "error") to exclude lower-severity lines.

**Parameters:**

```json
{
  "properties": {
    "category": {
      "description": "Log category name to filter by (e.g. \"LogTemp\"). Omit to include all categories.",
      "type": "string"
    },
    "min_severity": {
      "description": "Minimum severity to include: \"log\" (default) | \"warning\" | \"error\".",
      "type": "string"
    },
    "since": {
      "description": "ISO 8601 UTC timestamp. Only lines captured at or after this time are returned. Overrides 'tail' when present.",
      "type": "string"
    },
    "tail": {
      "description": "Maximum number of lines to return from the end of the buffer. Default 100, clamped to [1, 1000]. Ignored when 'since' is set.",
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
    "count": {
      "description": "Number of log lines returned",
      "type": "number"
    },
    "lines": {
      "description": "Log lines in chronological order. Each item: {timestamp (ISO 8601 UTC), category, severity (\"log\"|\"warning\"|\"error\"), text}",
      "type": "array"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "count",
    "lines"
  ],
  "type": "object"
}
```

### `list_log_categories`

Enumerate registered log categories with current runtime verbosity. Supports prefix filter, min_verbosity filter, and pagination.

**Parameters:**

```json
{
  "properties": {
    "filter": {
      "description": "Prefix filter on category name.",
      "type": "string"
    },
    "limit": {
      "description": "Maximum categories to return. Default 200, max 1000.",
      "type": "number"
    },
    "min_verbosity": {
      "description": "Only categories at or above this level: NoLogging, Fatal, Error, Warning, Display, Log, Verbose, VeryVerbose.",
      "type": "string"
    },
    "offset": {
      "description": "Pagination offset. Default 0.",
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
    "categories": {
      "description": "Category objects: {name, current_verbosity}",
      "type": "array"
    },
    "limit": {
      "description": "Applied limit",
      "type": "number"
    },
    "offset": {
      "description": "Applied offset",
      "type": "number"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    },
    "total_count": {
      "description": "Total categories matching filters before pagination",
      "type": "number"
    }
  },
  "required": [
    "success",
    "total_count",
    "categories"
  ],
  "type": "object"
}
```

## write

Set runtime log category verbosity for diagnostics.

### `set_log_verbosity`

Set runtime verbosity for a log category. Does not persist across editor restarts. Reports clamping when requested level exceeds the compile-time ceiling.

**Parameters:**

```json
{
  "properties": {
    "category": {
      "description": "Log category name.",
      "type": "string"
    },
    "verbosity": {
      "description": "Verbosity level: NoLogging, Fatal, Error, Warning, Display, Log, Verbose, VeryVerbose.",
      "type": "string"
    }
  },
  "required": [
    "category",
    "verbosity"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "category": {
      "description": "Log category name",
      "type": "string"
    },
    "clamped": {
      "description": "True if the requested level was clamped by compile-time ceiling",
      "type": "boolean"
    },
    "new_verbosity": {
      "description": "Verbosity after the change",
      "type": "string"
    },
    "previous_verbosity": {
      "description": "Verbosity before the change",
      "type": "string"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "category",
    "previous_verbosity",
    "new_verbosity",
    "clamped"
  ],
  "type": "object"
}
```

_Generated from commit `00750b91e5c3` at 2026-06-09T06:28:33Z._
