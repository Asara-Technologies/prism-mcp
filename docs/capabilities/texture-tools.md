# texture-tools

**Feature area:** Assets and content
**Commands:** 35

[description pending]

## lifecycle

[description pending]

### `spawn_rvt_volume`

Spawn a Runtime Virtual Texture volume in the current editor world.

## manage

[description pending]

### `assess_virtual_texture_readiness`

Assess textures for VT migration readiness.

### `audit_textures`

Audit texture quality and performance rules.

### `estimate_platform_texture_size`

Estimate compressed texture sizes without cooking.

## read

[description pending]

### `analyze_platform_texture_budget`

Estimate texture memory for a target platform profile.

### `analyze_streaming_budget`

Analyze project texture memory against the pool budget.

### `find_texture_references`

Find assets that reference a texture.

### `find_textures_by_material`

Find texture dependencies used by a material.

### `get_runtime_virtual_texture_settings`

Read Runtime Virtual Texture settings.

### `get_rvt_volume_info`

Read Runtime Virtual Texture volume info.

### `get_streaming_pool_info`

Read texture streaming pool budget and live availability.

### `get_streaming_recommendations`

Return read-only texture budget optimization suggestions.

### `get_streaming_texture_status`

Estimate a texture's streaming memory status.

### `get_texture_info`

Read texture build settings, source metadata, platform data, and type-specific fields.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Alias for texture_path",
      "type": "string"
    },
    "include_platform_data": {
      "description": "Include built platform data",
      "type": "boolean"
    },
    "include_source_info": {
      "description": "Include source image metadata",
      "type": "boolean"
    },
    "texture_path": {
      "description": "Texture asset path",
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
    "asset_path": {
      "description": "Canonical texture asset path",
      "type": "string"
    },
    "success": {
      "description": "Whether the texture info was read",
      "type": "boolean"
    },
    "texture_class": {
      "description": "Texture class name",
      "type": "string"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_texture_lod_group_settings`

Read project texture LOD settings for a texture group.

### `get_texture_memory_report`

Report aggregate and per-texture memory use.

### `get_texture_settings`

Read editable texture settings with current engine enum strings.

### `get_texture_statistics`

Aggregate texture counts and memory by compression, group, and size.

### `list_rvt_material_types`

List RVT material types for this engine.

### `list_texture_enum_values`

List supported texture enum values for the running engine.

### `query_textures`

List textures by registry and property filters with pagination.

### `query_virtual_textures`

List RVT assets and volumes.

## validate

[description pending]

### `validate_texture_naming`

Validate texture names and suffix conventions.

## write

[description pending]

### `batch_set_texture_settings`

Apply a texture settings patch to a filtered set.

### `create_runtime_virtual_texture`

Create a Runtime Virtual Texture asset.

### `set_runtime_virtual_texture_settings`

Patch Runtime Virtual Texture settings.

### `set_rvt_volume_settings`

Patch Runtime Virtual Texture volume settings.

### `set_texture_color`

Set texture color management and adjustments.

### `set_texture_compositing`

Set compositing and padding settings.

### `set_texture_compression`

Set texture compression settings.

### `set_texture_filtering`

Set texture filtering and address modes.

### `set_texture_lod`

Set texture LOD and mip settings.

### `set_texture_lod_group_settings`

Patch project texture LOD settings for a texture group.

### `set_texture_settings`

Patch texture settings by snake_case property names.

### `set_texture_virtual_texture`

Set virtual texture settings.

_Generated from commit `8812a051f27a` at 2026-06-07T19:01:04Z._
