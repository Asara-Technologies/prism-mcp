# texture-tools

**Feature area:** Assets and content
**Commands:** 1
**Tier:** Lite

## texture-settings

Inspect and edit texture build, compression, LOD, filtering, color, compositing, and virtual texture settings.

### `get_texture_info`

Read texture build settings, source metadata, platform data, and type-specific fields.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "texture_path": {
      "type": "string",
      "description": "Texture asset path"
    },
    "asset_path": {
      "type": "string",
      "description": "Alias for texture_path"
    },
    "include_source_info": {
      "type": "boolean",
      "description": "Include source image metadata"
    },
    "include_platform_data": {
      "type": "boolean",
      "description": "Include built platform data"
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
      "description": "Whether the texture info was read"
    },
    "asset_path": {
      "type": "string",
      "description": "Canonical texture asset path"
    },
    "texture_class": {
      "type": "string",
      "description": "Texture class name"
    }
  },
  "required": [
    "success"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
