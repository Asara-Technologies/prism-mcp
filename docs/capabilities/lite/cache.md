# cache

**Feature area:** Diagnostics
**Commands:** 2
**Tier:** Lite

## read

[cluster blurb pending]

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
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Always true"
    },
    "entry_count": {
      "type": "number",
      "description": "Current number of cached entries"
    },
    "total_bytes": {
      "type": "number",
      "description": "Total bytes used by cache"
    },
    "max_bytes": {
      "type": "number",
      "description": "Maximum cache size in bytes"
    },
    "hit_count": {
      "type": "number",
      "description": "Total cache hits"
    },
    "miss_count": {
      "type": "number",
      "description": "Total cache misses"
    },
    "eviction_count": {
      "type": "number",
      "description": "Total evictions"
    },
    "hit_rate_pct": {
      "type": "number",
      "description": "Hit rate percentage"
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
  ]
}
```

## write

[cluster blurb pending]

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
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Always true"
    },
    "entries_cleared": {
      "type": "number",
      "description": "Number of cache entries removed"
    },
    "bytes_freed": {
      "type": "number",
      "description": "Bytes of memory freed"
    }
  },
  "required": [
    "success",
    "entries_cleared",
    "bytes_freed"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
