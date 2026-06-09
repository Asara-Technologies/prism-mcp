# modern-lyra-plugins

**Feature area:** Gameplay systems
**Commands:** 75

Inspect and author assets from Lyra-era Epic gameplay plugins: CommonConversation, CommonGame, CommonUser, DataRegistry, GameSettings, GameSubtitles, GameplayMessageRouter, ModularGameplay, ModularGameplayActors, and UIExtension. Each cluster maps to one plugin's asset types.

## async-mixin

Query AsyncMixin plugin availability and API boundaries.

### `get_async_mixin_info`

Describe AsyncMixin availability and API boundaries.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## common-conversation

Author and inspect CommonConversation database graphs: create nodes, subnodes, and compile databases.

### `compile_conversation_database`

Compile a conversation database.

### `create_conversation_node`

Create a conversation graph node.

### `create_conversation_subnode`

Create a conversation task subnode.

### `delete_conversation_node`

Delete a conversation node.

### `get_conversation_database`

Inspect a CommonConversation database.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Database asset path",
      "type": "string"
    },
    "include_nodes": {
      "description": "Include reflected node list",
      "type": "boolean"
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_conversation_entry_points`

List compiled conversation entry points.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Database asset path",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_conversation_node`

Inspect one reflected conversation node.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Database asset path",
      "type": "string"
    },
    "node_guid": {
      "description": "Node GUID",
      "type": "string"
    }
  },
  "required": [
    "asset_path",
    "node_guid"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_conversation_databases`

List CommonConversation databases.

**Parameters:**

```json
{
  "properties": {
    "entry_tag_filter": {
      "description": "Entry gameplay tag filter",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_conversation_nodes`

List reflected conversation nodes.

**Parameters:**

```json
{
  "properties": {
    "asset_path": {
      "description": "Database asset path",
      "type": "string"
    },
    "graph_index": {
      "description": "Graph index",
      "type": "number"
    },
    "node_type": {
      "description": "Node type filter",
      "type": "string"
    },
    "reachable_only": {
      "description": "Reachable only",
      "type": "boolean"
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `modify_conversation_node`

Modify a conversation node.

### `unwire_conversation_nodes`

Unwire conversation nodes.

### `wire_conversation_nodes`

Wire conversation nodes.

## common-game

Inspect CommonGame messaging subsystem assets and runtime state.

### `get_game_instance_info`

Inspect CommonGame game instance state.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_game_ui_policy`

Inspect CommonGame UI policy state.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_local_player_info`

Inspect a CommonGame local player.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_messaging_subsystem_info`

Inspect CommonGame messaging subsystem state.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_player_controller_info`

Inspect CommonGame player controller state.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_ui_layer_info`

Inspect one CommonGame UI layer.

**Parameters:**

```json
{
  "properties": {
    "layer_tag": {
      "description": "Gameplay tag",
      "type": "string"
    },
    "player_index": {
      "description": "Local player index",
      "type": "number"
    }
  },
  "required": [
    "layer_tag"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_ui_layers`

List CommonGame PrimaryGameLayout layers.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `pop_content_from_layer`

Pop widget content from a CommonGame UI layer.

### `push_content_to_layer`

Push widget content to a CommonGame UI layer.

### `show_confirmation_dialog`

Show a CommonGame confirmation dialog.

## common-user

Query CommonUser session state, local player initialization, and privilege information.

### `configure_platform_traits`

Configure CommonUser platform traits.

### `get_common_user_info`

CommonUser reflected query: get_common_user_info.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_common_user_privileges`

CommonUser reflected query: get_common_user_privileges.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_common_user_state`

CommonUser reflected query: get_common_user_state.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_host_session_request`

CommonUser reflected query: get_host_session_request.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_presence_config`

CommonUser reflected query: get_presence_config.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_session_search_results`

CommonUser reflected query: get_session_search_results.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_session_state`

CommonUser reflected query: get_session_state.

**Parameters:**

```json
{
  "properties": {
    "player_index": {
      "description": "Local player index",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## data-registry

Inspect and query UDataRegistry assets, sources, and cached items at editor time.

### `get_data_registry`

Inspect one DataRegistry asset or loaded registry object.

**Parameters:**

```json
{
  "properties": {
    "registry_type": {
      "description": "Registry type name or object path",
      "type": "string"
    }
  },
  "required": [
    "registry_type"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_data_registry_settings`

Read DataRegistry developer settings through reflection.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_data_registries`

List loaded DataRegistry assets and subsystem status.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_data_registry_items`

List possible item ids for a DataRegistry type.

**Parameters:**

```json
{
  "properties": {
    "registry_type": {
      "description": "Registry type name",
      "type": "string"
    }
  },
  "required": [
    "registry_type"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_data_registry_sources`

List reflected source objects on a DataRegistry.

**Parameters:**

```json
{
  "properties": {
    "registry_type": {
      "description": "Registry type name or object path",
      "type": "string"
    }
  },
  "required": [
    "registry_type"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `modify_data_registry`

Modify reflected DataRegistry properties.

### `query_data_registry_item`

Query a cached DataRegistry item by registry type and item name.

**Parameters:**

```json
{
  "properties": {
    "item_name": {
      "description": "Item name",
      "type": "string"
    },
    "registry_type": {
      "description": "Registry type name",
      "type": "string"
    }
  },
  "required": [
    "registry_type",
    "item_name"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `register_data_registry_asset`

Register a DataRegistry asset with the subsystem.

### `set_data_registry_settings`

Update DataRegistry developer settings.

## game-settings

Read and modify GameSettings registry entries and setting definitions.

### `apply_setting_changes`

GameSettings mutation command: apply_setting_changes.

### `cancel_setting_changes`

GameSettings mutation command: cancel_setting_changes.

### `execute_setting_action`

GameSettings mutation command: execute_setting_action.

### `get_setting`

GameSettings reflected query: get_setting.

**Parameters:**

```json
{
  "properties": {
    "setting_id": {
      "description": "Setting id or path",
      "type": "string"
    }
  },
  "required": [
    "setting_id"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_setting_edit_state`

GameSettings reflected query: get_setting_edit_state.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_setting_registry`

GameSettings reflected query: get_setting_registry.

**Parameters:**

```json
{
  "properties": {
    "setting_id": {
      "description": "Setting id or path",
      "type": "string"
    }
  },
  "required": [
    "setting_id"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_setting_value`

GameSettings reflected query: get_setting_value.

**Parameters:**

```json
{
  "properties": {
    "setting_id": {
      "description": "Setting id or path",
      "type": "string"
    }
  },
  "required": [
    "setting_id"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_setting_visual_data`

GameSettings reflected query: get_setting_visual_data.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_setting_collections`

GameSettings reflected query: list_setting_collections.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_setting_registries`

GameSettings reflected query: list_setting_registries.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_settings`

GameSettings reflected query: list_settings.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `reset_setting_to_default`

GameSettings mutation command: reset_setting_to_default.

### `restore_setting_to_initial`

GameSettings mutation command: restore_setting_to_initial.

### `search_settings`

GameSettings reflected query: search_settings.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_setting_value`

GameSettings mutation command: set_setting_value.

## game-subtitles

Inspect GameSubtitles configuration and subtitle display options.

### `configure_subtitle_player`

Configure one MediaSubtitlesPlayer source.

### `get_subtitle_display_config`

Read GameSubtitles display settings.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_subtitle_players`

List GameSubtitles media subtitle players.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `set_subtitle_display_config`

Set GameSubtitles display config.

## gameplay-message-router

Inspect GameplayMessageRouter channel registrations and broadcast listeners.

### `broadcast_message`

Broadcast a GameplayMessageRouter payload.

### `get_message_match_semantics`

Describe GameplayMessageRouter match behavior.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_message_payload_schema`

Describe a reflected message payload struct.

**Parameters:**

```json
{
  "properties": {
    "struct": {
      "description": "UScriptStruct path or name",
      "type": "string"
    }
  },
  "required": [
    "struct"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_message_subsystem_status`

Inspect GameplayMessageRouter subsystem status.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_message_channels`

List known gameplay tag message channels.

**Parameters:**

```json
{
  "properties": {
    "tag_filter": {
      "description": "Gameplay tag prefix",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## modular-gameplay

Query ModularGameplay component injection rules, extension handlers, and initialization policies.

### `get_actor_init_state`

Inspect ModularGameplay init state for one actor.

**Parameters:**

```json
{
  "properties": {
    "actor": {
      "description": "Actor name, path, or label",
      "type": "string"
    },
    "feature_name": {
      "description": "Feature name",
      "type": "string"
    }
  },
  "required": [
    "actor"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `get_component_manager_state`

Read ModularGameplay component manager status.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_framework_components`

List loaded GameFrameworkComponent-derived classes and instances.

**Parameters:**

```json
{
  "properties": {
    "actor_class_filter": {
      "description": "Actor class filter",
      "type": "string"
    },
    "base_class": {
      "description": "Base component class",
      "type": "string"
    },
    "limit": {
      "description": "Maximum rows",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_init_state_features`

List loaded init-state feature implementers.

**Parameters:**

```json
{
  "properties": {
    "actor_class_filter": {
      "description": "Actor class filter",
      "type": "string"
    },
    "feature_name_filter": {
      "description": "Feature name filter",
      "type": "string"
    },
    "limit": {
      "description": "Maximum rows",
      "type": "number"
    },
    "state_filter": {
      "description": "Init state tag filter",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## modular-gameplay-actors

Inspect ModularGameplayActors component sets, initialization sequences, and pawn extension state.

### `get_modular_actor_class`

Inspect one ModularGameplayActors class.

**Parameters:**

```json
{
  "properties": {
    "class_name": {
      "description": "Class name",
      "type": "string"
    }
  },
  "required": [
    "class_name"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_actor_component_extensions`

List modular component extensions for a class or actor.

**Parameters:**

```json
{
  "properties": {
    "actor_path": {
      "description": "Actor path",
      "type": "string"
    },
    "class_name": {
      "description": "Class name",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_modular_actor_classes`

List ModularGameplayActors classes.

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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

## ui-extension

Query UIExtension point registrations, active extensions, and extension widget mappings.

### `get_ui_extension_point`

Inspect one UIExtension point.

**Parameters:**

```json
{
  "properties": {
    "extension_point_tag": {
      "description": "Gameplay tag",
      "type": "string"
    }
  },
  "required": [
    "extension_point_tag"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `list_ui_extension_points`

List live UIExtension point widgets.

**Parameters:**

```json
{
  "properties": {
    "tag_filter": {
      "description": "Gameplay tag prefix",
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
    "module_loaded": {
      "description": "Whether the target runtime module is loaded",
      "type": "boolean"
    },
    "notes": {
      "description": "Diagnostic notes and reflection limitations",
      "type": "array"
    },
    "plugin_name": {
      "description": "Target plugin name",
      "type": "string"
    },
    "success": {
      "description": "Whether the command completed",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "type": "object"
}
```

### `register_ui_extension`

Register a UIExtension widget.

### `unregister_ui_extension`

Unregister a UIExtension widget.

_Generated from commit `00750b91e5c3` at 2026-06-09T06:28:33Z._
