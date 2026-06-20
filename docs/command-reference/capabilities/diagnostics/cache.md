# cache

**Feature area:** Diagnostics
**Commands:** 2

Inspect and manage PrismMCP's internal result cache. Read hit/miss statistics and entry counts, or flush cached data to force fresh queries.

## read

Query cache statistics including entry count, byte usage, and hit/miss rates.

### `get_cache_stats`

Get result cache statistics: entry count, byte usage, hit/miss rates.

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
    "entry_count": {
      "description": "Current number of cached entries",
      "type": "number"
    },
    "eviction_count": {
      "description": "Total evictions",
      "type": "number"
    },
    "hit_count": {
      "description": "Total cache hits",
      "type": "number"
    },
    "hit_rate_pct": {
      "description": "Hit rate percentage",
      "type": "number"
    },
    "max_bytes": {
      "description": "Maximum cache size in bytes",
      "type": "number"
    },
    "miss_count": {
      "description": "Total cache misses",
      "type": "number"
    },
    "success": {
      "description": "Always true",
      "type": "boolean"
    },
    "total_bytes": {
      "description": "Total bytes used by cache",
      "type": "number"
    }
  },
  "required": [
    "success",
    "entry_count",
    "total_bytes",
    "max_bytes",
    "hit_count",
    "miss_count",
    "eviction_count",
    "hit_rate_pct"
  ],
  "type": "object"
}
```

## write

Flush cached entries to force fresh data on subsequent queries.

### `clear_cache`

Clear the MCP result cache. Returns count of entries cleared and bytes freed.

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
    "bytes_freed": {
      "description": "Bytes of memory freed",
      "type": "number"
    },
    "entries_cleared": {
      "description": "Number of cache entries removed",
      "type": "number"
    },
    "success": {
      "description": "Always true",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "entries_cleared",
    "bytes_freed"
  ],
  "type": "object"
}
```

_Generated from commit `3456f5dc1efb` at 2026-06-20T19:52:28Z._
