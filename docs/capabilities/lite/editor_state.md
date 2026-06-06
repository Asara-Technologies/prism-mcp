# editor_state

**Feature area:** Editor tooling
**Commands:** 11
**Tier:** Lite

## read

Read live editor interaction state -- viewport camera, on-screen actors, world/screen projection, content-browser path, open asset editors -- and render asset thumbnails or editor screenshots to PNG.

### `capture_editor_image`

Composite a screenshot of all visible editor windows to a PNG file (longest side capped at 1280).

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "filepath": {
      "type": "string",
      "description": "Output PNG file path. A .png extension is appended if absent."
    }
  },
  "required": [
    "filepath"
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
      "description": "Whether the editor image was captured and saved"
    },
    "filepath": {
      "type": "string",
      "description": "Path of the saved PNG file (with .png extension)"
    }
  },
  "required": [
    "success",
    "filepath"
  ]
}
```

### `get_content_browser_path`

Return the internal folder path currently shown in the active content browser.

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
      "description": "Whether the operation succeeded"
    },
    "path": {
      "type": "string",
      "description": "Current internal content-browser path (empty if none)"
    }
  },
  "required": [
    "success",
    "path"
  ]
}
```

### `get_open_assets`

Return the package paths of assets currently open in asset editors.

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
      "description": "Whether the operation succeeded"
    },
    "assets": {
      "type": "array",
      "description": "Package paths of assets open in asset editors"
    },
    "count": {
      "type": "number",
      "description": "Number of open assets"
    }
  },
  "required": [
    "success",
    "assets",
    "count"
  ]
}
```

### `get_viewport_camera_transform`

Return the active level viewport camera location, rotation, and field of view.

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
      "description": "Whether the operation succeeded"
    },
    "location": {
      "type": "object",
      "description": "Camera location as {x, y, z}"
    },
    "rotation": {
      "type": "object",
      "description": "Camera rotation as {pitch, yaw, roll}"
    },
    "fov": {
      "type": "number",
      "description": "Camera field of view in degrees (perspective)"
    },
    "is_perspective": {
      "type": "boolean",
      "description": "Whether the active viewport is perspective"
    }
  },
  "required": [
    "success",
    "location",
    "rotation",
    "fov",
    "is_perspective"
  ]
}
```

### `get_visible_actors`

List actors whose bounds intersect the active level viewport frustum (frustum-only; no occlusion).

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "number",
      "description": "Maximum number of actors to return (default 500)"
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
    "actors": {
      "type": "array",
      "description": "Visible actors, each {name, class, location:{x,y,z}}"
    },
    "count": {
      "type": "number",
      "description": "Number of actors returned"
    },
    "truncated": {
      "type": "boolean",
      "description": "Whether the result was truncated by the limit"
    }
  },
  "required": [
    "success",
    "actors",
    "count",
    "truncated"
  ]
}
```

### `render_asset_thumbnail`

Render an asset's thumbnail to a PNG file. Supported types: StaticMesh, SkeletalMesh, Skeleton, AnimationAsset, Texture, MaterialInterface. Does not wait for asset/shader compilation.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset_path": {
      "type": "string",
      "description": "Package path of the asset, e.g. /Game/Meshes/SM_Cube"
    },
    "filepath": {
      "type": "string",
      "description": "Output PNG file path. A .png extension is appended if absent."
    }
  },
  "required": [
    "asset_path",
    "filepath"
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
      "description": "Whether the thumbnail was rendered and saved"
    },
    "filepath": {
      "type": "string",
      "description": "Path of the saved PNG file (with .png extension)"
    }
  },
  "required": [
    "success",
    "filepath"
  ]
}
```

### `screen_to_world`

Raycast from a normalized screen coordinate in the active level viewport to the first solid world hit.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "coords": {
      "type": "object",
      "description": "Normalized screen coordinates as {x, y} in [0, 1]"
    },
    "trace_distance": {
      "type": "number",
      "description": "Trace distance in Unreal units (default 100000)"
    }
  },
  "required": [
    "coords"
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
      "description": "Whether the operation succeeded"
    },
    "world": {
      "type": "object",
      "description": "World-space point as {x, y, z}: the hit location, or the ray end if no hit"
    },
    "hit": {
      "type": "boolean",
      "description": "Whether the ray hit a solid surface"
    }
  },
  "required": [
    "success",
    "world",
    "hit"
  ]
}
```

### `world_to_screen`

Project a world-space position to normalized screen coordinates in the active level viewport.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "position": {
      "type": "object",
      "description": "World-space position as {x, y, z}"
    }
  },
  "required": [
    "position"
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
      "description": "Whether the operation succeeded"
    },
    "screen": {
      "type": "object",
      "description": "Normalized screen coordinates as {x, y} in [0, 1]"
    },
    "in_view": {
      "type": "boolean",
      "description": "Whether the position is in front of the camera and within the view"
    }
  },
  "required": [
    "success",
    "screen",
    "in_view"
  ]
}
```

## write

Drive transient editor UI state -- move the viewport camera, navigate the content browser, open an asset editor.

### `open_asset_editor`

Open the asset editor for the asset at the given content-browser package path.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset_path": {
      "type": "string",
      "description": "Package path of the asset, e.g. /Game/Meshes/SM_Cube"
    }
  },
  "required": [
    "asset_path"
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
      "description": "Whether the asset editor was opened"
    }
  },
  "required": [
    "success"
  ]
}
```

### `set_content_browser_path`

Navigate the active content browser to an internal folder path, e.g. /Game/Meshes.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Internal folder path to navigate to"
    }
  },
  "required": [
    "path"
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
      "description": "Whether navigation succeeded"
    },
    "path": {
      "type": "string",
      "description": "Resulting content-browser path after navigation"
    }
  },
  "required": [
    "success",
    "path"
  ]
}
```

### `set_viewport_camera_transform`

Set the active level viewport camera location and rotation. FOV is optional and perspective-only.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "object",
      "description": "Camera location as {x, y, z}"
    },
    "rotation": {
      "type": "object",
      "description": "Camera rotation as {pitch, yaw, roll}"
    },
    "fov": {
      "type": "number",
      "description": "Field of view in degrees (0, 170]; perspective viewports only"
    }
  },
  "required": [
    "location",
    "rotation"
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
      "description": "Whether the camera transform was applied"
    }
  },
  "required": [
    "success"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
