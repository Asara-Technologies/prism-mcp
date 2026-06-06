# logs

**Feature area:** Diagnostics
**Commands:** 2
**Tier:** Lite

## read

Read recent entries from the UE Output Log and Message Log.

### `get_message_log`

Read structured messages from UE's Message Log system. Pass an empty string for 'category' to list all registered log listings. Pass a known category name (e.g. "BlueprintLog", "MapCheck") to read its messages. Well-known categories: BlueprintLog, AssetCheck, LoadErrors, PIE, SlateStyleLog, SourceControl, AutomationTestingLog, BuildAndSubmitErrors, HLODResults, MapCheck, LightingResults.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "description": "Message log listing name. Empty string to list available categories; non-empty to read messages from that listing."
    },
    "severity": {
      "type": "string",
      "description": "Minimum severity to include when reading messages: \"info\" (default) | \"warning\" | \"error\"."
    },
    "limit": {
      "type": "number",
      "description": "Maximum number of messages to return (newest first, then sorted chronologically). Default 100."
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
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_output_log`

Read recent lines from the UE Output Log ring buffer. Results are returned in chronological order. Use 'tail' to limit how many lines are returned (default 100, max 1000). Use 'since' (ISO 8601 UTC, e.g. "2026-04-10T12:00:00Z") to return only lines after a timestamp — if 'since' is present it overrides 'tail'. Use 'category' to filter by log category name (e.g. "LogTemp", "LogMCP"). Use 'min_severity' ("log" \| "warning" \| "error") to exclude lower-severity lines.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "tail": {
      "type": "number",
      "description": "Maximum number of lines to return from the end of the buffer. Default 100, clamped to [1, 1000]. Ignored when 'since' is set."
    },
    "since": {
      "type": "string",
      "description": "ISO 8601 UTC timestamp. Only lines captured at or after this time are returned. Overrides 'tail' when present."
    },
    "category": {
      "type": "string",
      "description": "Log category name to filter by (e.g. \"LogTemp\"). Omit to include all categories."
    },
    "min_severity": {
      "type": "string",
      "description": "Minimum severity to include: \"log\" (default) | \"warning\" | \"error\"."
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
    "count": {
      "type": "number",
      "description": "Number of log lines returned"
    },
    "lines": {
      "type": "array",
      "description": "Log lines in chronological order. Each item: {timestamp (ISO 8601 UTC), category, severity (\"log\"|\"warning\"|\"error\"), text}"
    }
  },
  "required": [
    "success",
    "count",
    "lines"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
