# usage-stats

**Feature area:** Diagnostics
**Commands:** 2

[description pending]

## read

[description pending]

### `get_usage_stats`

Get aggregate session usage statistics with approximate token estimates. Estimates use ceil(UTF-8 bytes / 4) and are not exact model billing tokens.

**Parameters:**

```json
{
  "properties": {
    "include_management_commands": {
      "description": "Include ping/cache/log/test/usage management commands in the command table",
      "type": "boolean"
    },
    "limit": {
      "description": "Maximum command aggregates to return, 1-200",
      "type": "number"
    },
    "search": {
      "description": "Case-insensitive command name filter",
      "type": "string"
    },
    "sort_by": {
      "description": "estimated_total_tokens, call_count, response_bytes, duration_ms, or last_seen",
      "type": "string"
    },
    "sort_order": {
      "description": "desc or asc",
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
      "description": "Command aggregates after filters and sorting",
      "type": "array"
    },
    "estimation_method": {
      "description": "Approximation formula",
      "type": "string"
    },
    "estimation_note": {
      "description": "Clarifies estimates are not billing tokens",
      "type": "string"
    },
    "success": {
      "description": "Always true",
      "type": "boolean"
    },
    "summary": {
      "description": "Session-wide aggregate usage counters",
      "type": "object"
    }
  },
  "required": [
    "success",
    "summary",
    "commands",
    "estimation_method",
    "estimation_note"
  ],
  "type": "object"
}
```

## write

[description pending]

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
  "properties": {
    "calls_cleared": {
      "description": "Total calls cleared",
      "type": "number"
    },
    "commands_cleared": {
      "description": "Command aggregate rows cleared",
      "type": "number"
    },
    "estimated_tokens_cleared": {
      "description": "Estimated tokens cleared",
      "type": "number"
    },
    "session_started_at_utc": {
      "description": "UTC timestamp for the new usage window",
      "type": "string"
    },
    "success": {
      "description": "Always true",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "commands_cleared",
    "calls_cleared",
    "estimated_tokens_cleared",
    "session_started_at_utc"
  ],
  "type": "object"
}
```

_Generated from commit `00750b91e5c3` at 2026-06-09T06:28:33Z._
