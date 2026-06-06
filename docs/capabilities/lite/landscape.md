# landscape

**Feature area:** World and level authoring
**Commands:** 55
**Tier:** Lite

## edit_layers

[cluster blurb pending]

### `clear_edit_layer`

Clear heightmap, weightmap, or all data from an edit layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `collapse_all_edit_layers`

Collapse all landscape edit layers.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `collapse_edit_layer`

Collapse a landscape edit layer into the layer below it.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `create_edit_layer`

Create a landscape edit layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `delete_edit_layer`

Delete a landscape edit layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_active_edit_layer`

Read the active landscape edit layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_edit_layer_info`

Read one landscape edit layer's metadata.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_edit_layers`

List landscape edit layers.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `reorder_edit_layer`

Move a landscape edit layer to a different index.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_active_edit_layer`

Set the active landscape edit layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_edit_layer_visibility`

Show or hide a landscape edit layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

## heightmap

[cluster blurb pending]

### `flatten_landscape_region`

Flatten a landscape region toward a target height.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_heightmap_region`

Read a rectangular landscape heightmap region as base64-encoded little-endian uint16 samples.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "min_x": {
      "type": "number",
      "description": "Minimum X in landscape or world space."
    },
    "min_y": {
      "type": "number",
      "description": "Minimum Y in landscape or world space."
    },
    "max_x": {
      "type": "number",
      "description": "Maximum X in landscape or world space."
    },
    "max_y": {
      "type": "number",
      "description": "Maximum Y in landscape or world space."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world. Defaults to landscape."
    }
  },
  "required": [
    "landscape",
    "min_x",
    "min_y",
    "max_x",
    "max_y"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `noise_landscape_region`

Apply deterministic noise to landscape heightmap samples.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `ramp_landscape`

Blend heightmap samples along a start/end ramp.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `sample_height`

Sample world-space landscape height at one world XY location.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "location": {
      "type": "object",
      "description": "World location object with x/y and optional z."
    }
  },
  "required": [
    "landscape",
    "location"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `sample_heights`

Sample world-space landscape heights at multiple world XY locations.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "locations": {
      "type": "array",
      "description": "Array of world location objects with x/y and optional z."
    }
  },
  "required": [
    "landscape",
    "locations"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `sculpt_landscape`

Raise or lower landscape heightmap samples with a radial brush.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_heightmap_region`

Write a rectangular landscape heightmap region from base64 little-endian uint16 samples.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "min_x": {
      "type": "number",
      "description": "Minimum X in landscape or world space."
    },
    "min_y": {
      "type": "number",
      "description": "Minimum Y in landscape or world space."
    },
    "width": {
      "type": "number",
      "description": "Region width in heightmap samples."
    },
    "height": {
      "type": "number",
      "description": "Region height in heightmap samples."
    },
    "data": {
      "type": "string",
      "description": "Base64 little-endian uint16 sample data."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world. Defaults to landscape."
    }
  },
  "required": [
    "landscape",
    "min_x",
    "min_y",
    "width",
    "height",
    "data"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `smooth_landscape_region`

Smooth landscape heightmap samples in a region.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

## lifecycle

[cluster blurb pending]

### `create_landscape`

Create a flat ALandscape in the current editor world.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "quads_per_section": {
      "type": "number",
      "description": "Quads per section: 7, 15, 31, 63, 127, or 255."
    },
    "sections_per_component": {
      "type": "number",
      "description": "Sections per component: 1 or 2."
    },
    "component_count_x": {
      "type": "number",
      "description": "Number of landscape components on X."
    },
    "component_count_y": {
      "type": "number",
      "description": "Number of landscape components on Y."
    },
    "scale": {
      "description": "Uniform number or {x,y,z}; defaults to 100."
    },
    "location": {
      "description": "World center as {x,y,z} or [x,y,z]; defaults to origin."
    },
    "material": {
      "type": "string",
      "description": "Optional UMaterialInterface object path."
    },
    "name": {
      "type": "string",
      "description": "Optional actor label for the new landscape."
    }
  },
  "required": [
    "quads_per_section",
    "sections_per_component",
    "component_count_x",
    "component_count_y"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `delete_landscape`

Delete one loaded ALandscape from the current editor world.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, or guid."
    }
  },
  "required": [
    "landscape"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_landscape_bounds`

Read loaded and complete world-space bounds for one loaded landscape.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    }
  },
  "required": [
    "landscape"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_landscape_info`

Read summary, bounds, components, material, and optional layer metadata for one loaded landscape.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "include": {
      "type": "string",
      "description": "summary, layers, bounds, or all. Defaults to summary."
    }
  },
  "required": [
    "landscape"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_landscapes`

List loaded ALandscape actors in the current editor world.

**Parameters:**

```json
{
  "type": "object",
  "properties": {}
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

## materials

[cluster blurb pending]

### `get_landscape_lod_materials`

List landscape per-LOD material overrides.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_landscape_material`

Read a landscape material and per-LOD overrides.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_landscape_material_parameters`

List landscape material parameter names.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_landscape_lod_material`

Set or clear a landscape per-LOD material override.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_landscape_material`

Set a landscape material.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_landscape_material_parameter`

Set a scalar, vector, or texture landscape material parameter.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

## splines

[cluster blurb pending]

### `add_spline_control_point`

Add a landscape spline control point.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `connect_spline_points`

Connect two spline control points with a segment.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `create_landscape_spline`

Ensure a landscape has a spline component.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `create_spline_path`

Create a connected landscape spline path from world or landscape points.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `delete_spline_control_point`

Delete a landscape spline control point.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `disconnect_spline_points`

Delete a spline segment connecting control points.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_spline_control_points`

List landscape spline control points.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_spline_segments`

List landscape spline segments.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_spline_control_point`

Update a landscape spline control point.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_spline_deformation`

Set landscape spline deformation flags and layer name.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_spline_segment`

Update a landscape spline segment.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

## weightmap

[cluster blurb pending]

### `create_landscape_layer`

Create a paint layer info asset and attach it to a landscape.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `delete_landscape_layer`

Delete weight data for a paint layer on a landscape.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `erase_landscape_layer`

Erase a landscape layer with a radial brush.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `fill_landscape_layer`

Fill a landscape layer with a uniform weight.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_landscape_layer_info`

Read paint layer info metadata.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_weightmap_region`

Read a paint layer weightmap region as base64 uint8 samples.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_landscape_layers`

List paint layers for a landscape.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `paint_landscape_layer`

Paint a landscape layer with a radial brush.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `replace_landscape_layer`

Replace one paint layer's weight data with another layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `sample_layer_weight`

Sample one paint layer weight at a world or landscape coordinate.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `sample_layer_weights`

Sample all paint layer weights at a world or landscape coordinate.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_landscape_layer_property`

Set paint layer info blend, hardness, color, or physical material.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_weightmap_region`

Write a paint layer weightmap region from base64 uint8 samples.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "landscape": {
      "type": "string",
      "description": "Landscape name, label, path, guid, or empty when only one exists."
    },
    "edit_layer": {
      "type": "string",
      "description": "Optional edit layer name for layer-aware operations."
    },
    "coordinate_space": {
      "type": "string",
      "description": "landscape or world, depending on command."
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
      "description": "Whether the command succeeded"
    }
  },
  "required": [
    "success"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
