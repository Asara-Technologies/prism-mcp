# landscape

**Feature area:** World and level authoring
**Commands:** 66

Author and inspect Landscape actors. Commands cover heightmap editing (flatten, noise, ramp), paint layer weight manipulation, material assignment, spline authoring, landscape creation and import, component management, and structural validation. Supports edit-layer-aware operations.

## edit_layers

[description pending]

### `clear_edit_layer`

Clear heightmap, weightmap, or all data from an edit layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `collapse_all_edit_layers`

Collapse all landscape edit layers.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `collapse_edit_layer`

Collapse a landscape edit layer into the layer below it.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `create_edit_layer`

Create a landscape edit layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `delete_edit_layer`

Delete a landscape edit layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_active_edit_layer`

Read the active landscape edit layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_edit_layer_info`

Read one landscape edit layer's metadata.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_edit_layers`

List landscape edit layers.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `reorder_edit_layer`

Move a landscape edit layer to a different index.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_active_edit_layer`

Set the active landscape edit layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_edit_layer_visibility`

Show or hide a landscape edit layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## heightmap

Edit landscape elevation data: flatten regions, apply deterministic noise, and blend ramps between control points.

### `flatten_landscape_region`

Flatten a landscape region toward a target height.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `noise_landscape_region`

Apply deterministic noise to landscape heightmap samples.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `ramp_landscape`

Blend heightmap samples along a start/end ramp.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `sculpt_landscape`

Raise or lower landscape heightmap samples with a radial brush.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `smooth_landscape_region`

Smooth landscape heightmap samples in a region.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## manage

Create, import, and configure landscapes. Manage components and edit layer assignments.

### `export_heightmap_file`

Export a landscape heightmap to a file on disk.

**Parameters:**

```json
{
  "properties": {
    "edit_layer": {
      "description": "Export specific edit layer by name.",
      "type": "string"
    },
    "edit_layer_index": {
      "description": "Export specific edit layer by index.",
      "type": "number"
    },
    "file_path": {
      "description": "Absolute output path. Extension determines format.",
      "type": "string"
    },
    "flip_y": {
      "description": "Flip Y-axis on export. Default false.",
      "type": "boolean"
    },
    "landscape": {
      "description": "Source landscape actor name/path.",
      "type": "string"
    },
    "overwrite": {
      "description": "Overwrite existing file. Default false.",
      "type": "boolean"
    }
  },
  "required": [
    "landscape",
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `export_weightmap_file`

Export a paint layer weightmap to a file on disk.

**Parameters:**

```json
{
  "properties": {
    "file_path": {
      "description": "Absolute output path. Extension determines format.",
      "type": "string"
    },
    "flip_y": {
      "description": "Flip Y-axis on export. Default false.",
      "type": "boolean"
    },
    "landscape": {
      "description": "Source landscape actor name/path.",
      "type": "string"
    },
    "layer_name": {
      "description": "Paint layer to export.",
      "type": "string"
    },
    "overwrite": {
      "description": "Overwrite existing file. Default false.",
      "type": "boolean"
    }
  },
  "required": [
    "landscape",
    "layer_name",
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `import_heightmap_file`

Import a heightmap file onto an existing landscape or specific edit layer.

**Parameters:**

```json
{
  "properties": {
    "edit_layer": {
      "description": "Target edit layer by name.",
      "type": "string"
    },
    "edit_layer_index": {
      "description": "Target edit layer by index.",
      "type": "number"
    },
    "file_path": {
      "description": "Absolute path to the heightmap file.",
      "type": "string"
    },
    "flip_y": {
      "description": "Flip Y-axis on import. Default false.",
      "type": "boolean"
    },
    "height": {
      "description": "Override file height for ambiguous .raw files.",
      "type": "number"
    },
    "landscape": {
      "description": "Target landscape actor name/path.",
      "type": "string"
    },
    "resample": {
      "description": "Resample file data to match landscape resolution. Default false.",
      "type": "boolean"
    },
    "width": {
      "description": "Override file width for ambiguous .raw files.",
      "type": "number"
    }
  },
  "required": [
    "landscape",
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `import_weightmap_file`

Import a weightmap file onto a specific paint layer of an existing landscape.

**Parameters:**

```json
{
  "properties": {
    "file_path": {
      "description": "Absolute path to the weightmap file.",
      "type": "string"
    },
    "flip_y": {
      "description": "Flip Y-axis on import. Default false.",
      "type": "boolean"
    },
    "landscape": {
      "description": "Target landscape actor name/path.",
      "type": "string"
    },
    "layer_name": {
      "description": "Target paint layer name.",
      "type": "string"
    },
    "resample": {
      "description": "Resample file data if resolution mismatched. Default false.",
      "type": "boolean"
    }
  },
  "required": [
    "landscape",
    "layer_name",
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `rebuild_landscape_nanite`

Rebuild Nanite mesh using current settings.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Target landscape actor name/path.",
      "type": "string"
    }
  },
  "required": [
    "landscape"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `resize_landscape`

Change landscape resolution or footprint via resample or expand mode.

**Parameters:**

```json
{
  "properties": {
    "anchor": {
      "description": "Anchor for expand: center, top_left, top_right, bottom_left, bottom_right.",
      "type": "string"
    },
    "component_count_x": {
      "description": "Component count on X axis.",
      "type": "number"
    },
    "component_count_y": {
      "description": "Component count on Y axis.",
      "type": "number"
    },
    "landscape": {
      "description": "Target landscape actor name/path.",
      "type": "string"
    },
    "mode": {
      "description": "'resample' or 'expand'.",
      "type": "string"
    },
    "quads_per_section": {
      "description": "7, 15, 31, 63, 127, or 255.",
      "type": "number"
    },
    "sections_per_component": {
      "description": "1 or 2.",
      "type": "number"
    }
  },
  "required": [
    "landscape",
    "mode"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `sample_height`

Sample world-space landscape height at one world XY location.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
      "type": "string"
    },
    "location": {
      "description": "World location object with x/y and optional z.",
      "type": "object"
    }
  },
  "required": [
    "landscape",
    "location"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `sample_heights`

Sample world-space landscape heights at multiple world XY locations.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
      "type": "string"
    },
    "locations": {
      "description": "Array of world location objects with x/y and optional z.",
      "type": "array"
    }
  },
  "required": [
    "landscape",
    "locations"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## materials

Assign and configure landscape material layers and their physical material bindings.

### `get_landscape_lod_materials`

List landscape per-LOD material overrides.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_landscape_material`

Read a landscape material and per-LOD overrides.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_landscape_material_parameters`

List landscape material parameter names.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_landscape_lod_material`

Set or clear a landscape per-LOD material override.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_landscape_material`

Set a landscape material.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_landscape_material_parameter`

Set a scalar, vector, or texture landscape material parameter.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## read

Inspect landscape metadata, component layout, edit layers, material assignments, and heightmap sample data.

### `get_heightmap_region`

Read a rectangular landscape heightmap region as base64-encoded little-endian uint16 samples.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world. Defaults to landscape.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
      "type": "string"
    },
    "max_x": {
      "description": "Maximum X in landscape or world space.",
      "type": "number"
    },
    "max_y": {
      "description": "Maximum Y in landscape or world space.",
      "type": "number"
    },
    "min_x": {
      "description": "Minimum X in landscape or world space.",
      "type": "number"
    },
    "min_y": {
      "description": "Minimum Y in landscape or world space.",
      "type": "number"
    }
  },
  "required": [
    "landscape",
    "min_x",
    "min_y",
    "max_x",
    "max_y"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_landscape_bounds`

Read loaded and complete world-space bounds for one loaded landscape.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
      "type": "string"
    }
  },
  "required": [
    "landscape"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_landscape_info`

Read summary, bounds, components, material, and optional layer metadata for one loaded landscape.

**Parameters:**

```json
{
  "properties": {
    "include": {
      "description": "summary, layers, bounds, or all. Defaults to summary.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
      "type": "string"
    }
  },
  "required": [
    "landscape"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_landscape_nanite_settings`

Read current Nanite mesh generation settings from a landscape.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Target landscape actor name/path.",
      "type": "string"
    }
  },
  "required": [
    "landscape"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_landscapes`

List loaded ALandscape actors in the current editor world.

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
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## splines

Author landscape splines: add control points, set tangents, and configure mesh-to-spline deformation.

### `add_spline_control_point`

Add a landscape spline control point.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `connect_spline_points`

Connect two spline control points with a segment.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `create_landscape_spline`

Ensure a landscape has a spline component.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `create_spline_path`

Create a connected landscape spline path from world or landscape points.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `delete_spline_control_point`

Delete a landscape spline control point.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `disconnect_spline_points`

Delete a spline segment connecting control points.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_spline_control_points`

List landscape spline control points.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_spline_segments`

List landscape spline segments.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_spline_control_point`

Update a landscape spline control point.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_spline_deformation`

Set landscape spline deformation flags and layer name.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_spline_segment`

Update a landscape spline segment.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## validate

Validate landscape structural integrity and layer configuration consistency.

### `validate_heightmap_file`

Probe a heightmap file: resolution, detected format, compatibility with target landscape.

**Parameters:**

```json
{
  "properties": {
    "file_path": {
      "description": "Absolute path to the heightmap file on disk.",
      "type": "string"
    },
    "landscape": {
      "description": "Target landscape actor name/path for compatibility check.",
      "type": "string"
    }
  },
  "required": [
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `validate_weightmap_file`

Probe a weightmap file: resolution, detected format, compatibility with target landscape.

**Parameters:**

```json
{
  "properties": {
    "file_path": {
      "description": "Absolute path to the weightmap file on disk.",
      "type": "string"
    },
    "landscape": {
      "description": "Target landscape actor for compatibility check.",
      "type": "string"
    },
    "layer_name": {
      "description": "Target paint layer for compatibility check.",
      "type": "string"
    }
  },
  "required": [
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## weightmap

Read and write paint layer weight data on landscape components.

### `create_landscape_layer`

Create a paint layer info asset and attach it to a landscape.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `delete_landscape_layer`

Delete weight data for a paint layer on a landscape.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `erase_landscape_layer`

Erase a landscape layer with a radial brush.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `fill_landscape_layer`

Fill a landscape layer with a uniform weight.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_landscape_layer_info`

Read paint layer info metadata.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_weightmap_region`

Read a paint layer weightmap region as base64 uint8 samples.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_landscape_layers`

List paint layers for a landscape.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `paint_landscape_layer`

Paint a landscape layer with a radial brush.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `replace_landscape_layer`

Replace one paint layer's weight data with another layer.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `sample_layer_weight`

Sample one paint layer weight at a world or landscape coordinate.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `sample_layer_weights`

Sample all paint layer weights at a world or landscape coordinate.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_landscape_layer_property`

Set paint layer info blend, hardness, color, or physical material.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_weightmap_region`

Write a paint layer weightmap region from base64 uint8 samples.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world, depending on command.",
      "type": "string"
    },
    "edit_layer": {
      "description": "Optional edit layer name for layer-aware operations.",
      "type": "string"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
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
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## write

Write heightmap samples, configure build settings, and modify landscape properties.

### `create_landscape`

Create a flat ALandscape in the current editor world.

**Parameters:**

```json
{
  "properties": {
    "component_count_x": {
      "description": "Number of landscape components on X.",
      "type": "number"
    },
    "component_count_y": {
      "description": "Number of landscape components on Y.",
      "type": "number"
    },
    "location": {
      "description": "World center as {x,y,z} or [x,y,z]; defaults to origin."
    },
    "material": {
      "description": "Optional UMaterialInterface object path.",
      "type": "string"
    },
    "name": {
      "description": "Optional actor label for the new landscape.",
      "type": "string"
    },
    "quads_per_section": {
      "description": "Quads per section: 7, 15, 31, 63, 127, or 255.",
      "type": "number"
    },
    "scale": {
      "description": "Uniform number or {x,y,z}; defaults to 100."
    },
    "sections_per_component": {
      "description": "Sections per component: 1 or 2.",
      "type": "number"
    }
  },
  "required": [
    "quads_per_section",
    "sections_per_component",
    "component_count_x",
    "component_count_y"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `create_landscape_from_heightmap`

Create a new landscape from a heightmap file with auto-calculated component layout.

**Parameters:**

```json
{
  "properties": {
    "file_path": {
      "description": "Absolute path to the heightmap file.",
      "type": "string"
    },
    "flip_y": {
      "description": "Flip Y-axis on import. Default false.",
      "type": "boolean"
    },
    "height": {
      "description": "Override file height for ambiguous .raw files.",
      "type": "number"
    },
    "location": {
      "description": "World-space spawn location as {x,y,z}."
    },
    "name": {
      "description": "Actor label for the new landscape.",
      "type": "string"
    },
    "quads_per_section": {
      "description": "Override auto-calculated quads_per_section.",
      "type": "number"
    },
    "scale": {
      "description": "Per-axis scale as {x,y,z} or uniform number. Default 100."
    },
    "sections_per_component": {
      "description": "Override auto-calculated sections_per_component.",
      "type": "number"
    },
    "width": {
      "description": "Override file width for ambiguous .raw files.",
      "type": "number"
    }
  },
  "required": [
    "file_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `delete_landscape`

Delete one loaded ALandscape from the current editor world.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Landscape name, label, path, or guid.",
      "type": "string"
    }
  },
  "required": [
    "landscape"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_heightmap_region`

Write a rectangular landscape heightmap region from base64 little-endian uint16 samples.

**Parameters:**

```json
{
  "properties": {
    "coordinate_space": {
      "description": "landscape or world. Defaults to landscape.",
      "type": "string"
    },
    "data": {
      "description": "Base64 little-endian uint16 sample data.",
      "type": "string"
    },
    "height": {
      "description": "Region height in heightmap samples.",
      "type": "number"
    },
    "landscape": {
      "description": "Landscape name, label, path, guid, or empty when only one exists.",
      "type": "string"
    },
    "min_x": {
      "description": "Minimum X in landscape or world space.",
      "type": "number"
    },
    "min_y": {
      "description": "Minimum Y in landscape or world space.",
      "type": "number"
    },
    "width": {
      "description": "Region width in heightmap samples.",
      "type": "number"
    }
  },
  "required": [
    "landscape",
    "min_x",
    "min_y",
    "width",
    "height",
    "data"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_landscape_nanite_settings`

Modify Nanite settings and auto-trigger mesh rebuild.

**Parameters:**

```json
{
  "properties": {
    "landscape": {
      "description": "Target landscape actor name/path.",
      "type": "string"
    },
    "lod_index": {
      "description": "LOD level for Nanite mesh (0 = highest detail).",
      "type": "number"
    },
    "max_edge_length_factor": {
      "description": "Maximum edge length factor.",
      "type": "number"
    },
    "nanite_enabled": {
      "description": "Enable/disable Nanite mesh generation.",
      "type": "boolean"
    },
    "position_precision": {
      "description": "Vertex position precision.",
      "type": "number"
    },
    "skirt_depth": {
      "description": "Depth of skirt geometry.",
      "type": "number"
    },
    "skirt_enabled": {
      "description": "Enable skirt geometry.",
      "type": "boolean"
    }
  },
  "required": [
    "landscape"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the command succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
