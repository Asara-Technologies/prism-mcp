# usage-stats

**Feature area:** Diagnostics
**Commands:** 2
**Tier:** Lite

## read

[cluster blurb pending]

### `get_usage_stats`

Get aggregate session usage statistics with approximate token estimates. Estimates use ceil(UTF-8 bytes / 4) and are not exact model billing tokens.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "sort_by": {
      "type": "string",
      "description": "estimated_total_tokens, call_count, response_bytes, duration_ms, or last_seen"
    },
    "sort_order": {
      "type": "string",
      "description": "desc or asc"
    },
    "search": {
      "type": "string",
      "description": "Case-insensitive command name filter"
    },
    "limit": {
      "type": "number",
      "description": "Maximum command aggregates to return, 1-200"
    },
    "include_management_commands": {
      "type": "boolean",
      "description": "Include ping/cache/log/test/usage management commands in the command table"
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
    "summary": {
      "type": "object",
      "description": "Session-wide aggregate usage counters"
    },
    "commands": {
      "type": "array",
      "description": "Command aggregates after filters and sorting"
    },
    "estimation_method": {
      "type": "string",
      "description": "Approximation formula"
    },
    "estimation_note": {
      "type": "string",
      "description": "Clarifies estimates are not billing tokens"
    }
  },
  "required": [
    "success",
    "summary",
    "commands",
    "estimation_method",
    "estimation_note"
  ]
}
```

## write

[cluster blurb pending]

### `clear_usage_stats`

Clear session-local aggregate usage statistics and start a fresh usage window.

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
      "description": "Always true"
    },
    "commands_cleared": {
      "type": "number",
      "description": "Command aggregate rows cleared"
    },
    "calls_cleared": {
      "type": "number",
      "description": "Total calls cleared"
    },
    "estimated_tokens_cleared": {
      "type": "number",
      "description": "Estimated tokens cleared"
    },
    "session_started_at_utc": {
      "type": "string",
      "description": "UTC timestamp for the new usage window"
    }
  },
  "required": [
    "success",
    "commands_cleared",
    "calls_cleared",
    "estimated_tokens_cleared",
    "session_started_at_utc"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
