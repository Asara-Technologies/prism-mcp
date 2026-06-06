# modern_lyra_plugins

**Feature area:** Gameplay systems
**Commands:** 50
**Tier:** Lite

## async_mixin

[cluster blurb pending]

### `get_async_mixin_info`

Describe AsyncMixin availability and API boundaries.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## common_conversation

[cluster blurb pending]

### `get_conversation_database`

Inspect a CommonConversation database.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset_path": {
      "type": "string",
      "description": "Database asset path"
    },
    "include_nodes": {
      "type": "boolean",
      "description": "Include reflected node list"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_conversation_entry_points`

List compiled conversation entry points.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset_path": {
      "type": "string",
      "description": "Database asset path"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_conversation_node`

Inspect one reflected conversation node.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset_path": {
      "type": "string",
      "description": "Database asset path"
    },
    "node_guid": {
      "type": "string",
      "description": "Node GUID"
    }
  },
  "required": [
    "asset_path",
    "node_guid"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_conversation_databases`

List CommonConversation databases.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "entry_tag_filter": {
      "type": "string",
      "description": "Entry gameplay tag filter"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_conversation_nodes`

List reflected conversation nodes.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "asset_path": {
      "type": "string",
      "description": "Database asset path"
    },
    "node_type": {
      "type": "string",
      "description": "Node type filter"
    },
    "graph_index": {
      "type": "number",
      "description": "Graph index"
    },
    "reachable_only": {
      "type": "boolean",
      "description": "Reachable only"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## common_game

[cluster blurb pending]

### `get_game_instance_info`

Inspect CommonGame game instance state.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_game_ui_policy`

Inspect CommonGame UI policy state.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_local_player_info`

Inspect a CommonGame local player.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_messaging_subsystem_info`

Inspect CommonGame messaging subsystem state.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_player_controller_info`

Inspect CommonGame player controller state.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_ui_layer_info`

Inspect one CommonGame UI layer.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "layer_tag": {
      "type": "string",
      "description": "Gameplay tag"
    },
    "player_index": {
      "type": "number",
      "description": "Local player index"
    }
  },
  "required": [
    "layer_tag"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_ui_layers`

List CommonGame PrimaryGameLayout layers.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## common_user

[cluster blurb pending]

### `get_common_user_info`

CommonUser reflected query: get_common_user_info.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_common_user_privileges`

CommonUser reflected query: get_common_user_privileges.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_common_user_state`

CommonUser reflected query: get_common_user_state.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_host_session_request`

CommonUser reflected query: get_host_session_request.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_presence_config`

CommonUser reflected query: get_presence_config.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_session_search_results`

CommonUser reflected query: get_session_search_results.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_session_state`

CommonUser reflected query: get_session_state.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "player_index": {
      "type": "number",
      "description": "Local player index"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## data_registry

[cluster blurb pending]

### `get_data_registry`

Inspect one DataRegistry asset or loaded registry object.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "registry_type": {
      "type": "string",
      "description": "Registry type name or object path"
    }
  },
  "required": [
    "registry_type"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_data_registry_settings`

Read DataRegistry developer settings through reflection.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_data_registries`

List loaded DataRegistry assets and subsystem status.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_data_registry_items`

List possible item ids for a DataRegistry type.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "registry_type": {
      "type": "string",
      "description": "Registry type name"
    }
  },
  "required": [
    "registry_type"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_data_registry_sources`

List reflected source objects on a DataRegistry.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "registry_type": {
      "type": "string",
      "description": "Registry type name or object path"
    }
  },
  "required": [
    "registry_type"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `query_data_registry_item`

Query a cached DataRegistry item by registry type and item name.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "registry_type": {
      "type": "string",
      "description": "Registry type name"
    },
    "item_name": {
      "type": "string",
      "description": "Item name"
    }
  },
  "required": [
    "registry_type",
    "item_name"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## game_settings

[cluster blurb pending]

### `get_setting`

GameSettings reflected query: get_setting.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "setting_id": {
      "type": "string",
      "description": "Setting id or path"
    }
  },
  "required": [
    "setting_id"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_setting_edit_state`

GameSettings reflected query: get_setting_edit_state.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_setting_registry`

GameSettings reflected query: get_setting_registry.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "setting_id": {
      "type": "string",
      "description": "Setting id or path"
    }
  },
  "required": [
    "setting_id"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_setting_value`

GameSettings reflected query: get_setting_value.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "setting_id": {
      "type": "string",
      "description": "Setting id or path"
    }
  },
  "required": [
    "setting_id"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_setting_visual_data`

GameSettings reflected query: get_setting_visual_data.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_setting_collections`

GameSettings reflected query: list_setting_collections.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_setting_registries`

GameSettings reflected query: list_setting_registries.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_settings`

GameSettings reflected query: list_settings.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `search_settings`

GameSettings reflected query: search_settings.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## game_subtitles

[cluster blurb pending]

### `get_subtitle_display_config`

Read GameSubtitles display settings.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_subtitle_players`

List GameSubtitles media subtitle players.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## gameplay_message_router

[cluster blurb pending]

### `get_message_match_semantics`

Describe GameplayMessageRouter match behavior.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_message_payload_schema`

Describe a reflected message payload struct.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "struct": {
      "type": "string",
      "description": "UScriptStruct path or name"
    }
  },
  "required": [
    "struct"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_message_subsystem_status`

Inspect GameplayMessageRouter subsystem status.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_message_channels`

List known gameplay tag message channels.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "tag_filter": {
      "type": "string",
      "description": "Gameplay tag prefix"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## modular_gameplay

[cluster blurb pending]

### `get_actor_init_state`

Inspect ModularGameplay init state for one actor.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "actor": {
      "type": "string",
      "description": "Actor name, path, or label"
    },
    "feature_name": {
      "type": "string",
      "description": "Feature name"
    }
  },
  "required": [
    "actor"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `get_component_manager_state`

Read ModularGameplay component manager status.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_framework_components`

List loaded GameFrameworkComponent-derived classes and instances.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "base_class": {
      "type": "string",
      "description": "Base component class"
    },
    "actor_class_filter": {
      "type": "string",
      "description": "Actor class filter"
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_init_state_features`

List loaded init-state feature implementers.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "actor_class_filter": {
      "type": "string",
      "description": "Actor class filter"
    },
    "feature_name_filter": {
      "type": "string",
      "description": "Feature name filter"
    },
    "state_filter": {
      "type": "string",
      "description": "Init state tag filter"
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## modular_gameplay_actors

[cluster blurb pending]

### `get_modular_actor_class`

Inspect one ModularGameplayActors class.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "class_name": {
      "type": "string",
      "description": "Class name"
    }
  },
  "required": [
    "class_name"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_actor_component_extensions`

List modular component extensions for a class or actor.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "class_name": {
      "type": "string",
      "description": "Class name"
    },
    "actor_path": {
      "type": "string",
      "description": "Actor path"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_modular_actor_classes`

List ModularGameplayActors classes.

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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

## ui_extension

[cluster blurb pending]

### `get_ui_extension_point`

Inspect one UIExtension point.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "extension_point_tag": {
      "type": "string",
      "description": "Gameplay tag"
    }
  },
  "required": [
    "extension_point_tag"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

### `list_ui_extension_points`

List live UIExtension point widgets.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "tag_filter": {
      "type": "string",
      "description": "Gameplay tag prefix"
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
      "description": "Whether the command completed"
    },
    "plugin_name": {
      "type": "string",
      "description": "Target plugin name"
    },
    "module_loaded": {
      "type": "boolean",
      "description": "Whether the target runtime module is loaded"
    },
    "notes": {
      "type": "array",
      "description": "Diagnostic notes and reflection limitations"
    }
  },
  "required": [
    "success"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
