# editor-state

**Feature area:** Editor tooling
**Commands:** 11

[description pending]

## lifecycle

[description pending]

### `capture_editor_image`

Composite a screenshot of all visible editor windows to a PNG file (longest side capped at 1280).

**Parameters:**

```json
{
  "properties": {
    "filepath": {
      "description": "Output PNG file path. A .png extension is appended if absent.",
      "type": "string"
    }
  },
  "required": [
    "filepath"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "filepath": {
      "description": "Path of the saved PNG file (with .png extension)",
      "type": "string"
    },
    "success": {
      "description": "Whether the editor image was captured and saved",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "filepath"
  ],
  "type": "object"
}
```

### `open_asset_editor`

Open the asset editor for the asset at the given content-browser package path.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Package path of the asset, e.g. /Game/Meshes/SM_Cube",
      "type": "string"
    }
  },
  "required": [
    "asset_path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the asset editor was opened",
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

[description pending]

### `render_asset_thumbnail`

Render an asset's thumbnail to a PNG file. Supported types: StaticMesh, SkeletalMesh, Skeleton, AnimationAsset, Texture, MaterialInterface. Does not wait for asset/shader compilation.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Package path of the asset, e.g. /Game/Meshes/SM_Cube",
      "type": "string"
    },
    "filepath": {
      "description": "Output PNG file path. A .png extension is appended if absent.",
      "type": "string"
    }
  },
  "required": [
    "asset_path",
    "filepath"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "filepath": {
      "description": "Path of the saved PNG file (with .png extension)",
      "type": "string"
    },
    "success": {
      "description": "Whether the thumbnail was rendered and saved",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "filepath"
  ],
  "type": "object"
}
```

### `screen_to_world`

Raycast from a normalized screen coordinate in the active level viewport to the first solid world hit.

**Parameters:**

```json
{
  "properties": {
    "coords": {
      "description": "Normalized screen coordinates as {x, y} in [0, 1]",
      "type": "object"
    },
    "trace_distance": {
      "description": "Trace distance in Unreal units (default 100000)",
      "type": "number"
    }
  },
  "required": [
    "coords"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "hit": {
      "description": "Whether the ray hit a solid surface",
      "type": "boolean"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    },
    "world": {
      "description": "World-space point as {x, y, z}: the hit location, or the ray end if no hit",
      "type": "object"
    }
  },
  "required": [
    "success",
    "world",
    "hit"
  ],
  "type": "object"
}
```

### `world_to_screen`

Project a world-space position to normalized screen coordinates in the active level viewport.

**Parameters:**

```json
{
  "properties": {
    "position": {
      "description": "World-space position as {x, y, z}",
      "type": "object"
    }
  },
  "required": [
    "position"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "in_view": {
      "description": "Whether the position is in front of the camera and within the view",
      "type": "boolean"
    },
    "screen": {
      "description": "Normalized screen coordinates as {x, y} in [0, 1]",
      "type": "object"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "screen",
    "in_view"
  ],
  "type": "object"
}
```

## read

[description pending]

### `get_content_browser_path`

Return the internal folder path currently shown in the active content browser.

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
    "path": {
      "description": "Current internal content-browser path (empty if none)",
      "type": "string"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "path"
  ],
  "type": "object"
}
```

### `get_open_assets`

Return the package paths of assets currently open in asset editors.

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
    "assets": {
      "description": "Package paths of assets open in asset editors",
      "type": "array"
    },
    "count": {
      "description": "Number of open assets",
      "type": "number"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "assets",
    "count"
  ],
  "type": "object"
}
```

### `get_viewport_camera_transform`

Return the active level viewport camera location, rotation, and field of view.

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
    "fov": {
      "description": "Camera field of view in degrees (perspective)",
      "type": "number"
    },
    "is_perspective": {
      "description": "Whether the active viewport is perspective",
      "type": "boolean"
    },
    "location": {
      "description": "Camera location as {x, y, z}",
      "type": "object"
    },
    "rotation": {
      "description": "Camera rotation as {pitch, yaw, roll}",
      "type": "object"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "location",
    "rotation",
    "fov",
    "is_perspective"
  ],
  "type": "object"
}
```

### `get_visible_actors`

List actors whose bounds intersect the active level viewport frustum (frustum-only; no occlusion).

**Parameters:**

```json
{
  "properties": {
    "limit": {
      "description": "Maximum number of actors to return (default 500)",
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
    "actors": {
      "description": "Visible actors, each {name, class, location:{x,y,z}}",
      "type": "array"
    },
    "count": {
      "description": "Number of actors returned",
      "type": "number"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    },
    "truncated": {
      "description": "Whether the result was truncated by the limit",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "actors",
    "count",
    "truncated"
  ],
  "type": "object"
}
```

## write

[description pending]

### `set_content_browser_path`

Navigate the active content browser to an internal folder path, e.g. /Game/Meshes.

**Parameters:**

```json
{
  "properties": {
    "path": {
      "description": "Internal folder path to navigate to",
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "path": {
      "description": "Resulting content-browser path after navigation",
      "type": "string"
    },
    "success": {
      "description": "Whether navigation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "path"
  ],
  "type": "object"
}
```

### `set_viewport_camera_transform`

Set the active level viewport camera location and rotation. FOV is optional and perspective-only.

**Parameters:**

```json
{
  "properties": {
    "fov": {
      "description": "Field of view in degrees (0, 170]; perspective viewports only",
      "type": "number"
    },
    "location": {
      "description": "Camera location as {x, y, z}",
      "type": "object"
    },
    "rotation": {
      "description": "Camera rotation as {pitch, yaw, roll}",
      "type": "object"
    }
  },
  "required": [
    "location",
    "rotation"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "success": {
      "description": "Whether the camera transform was applied",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
