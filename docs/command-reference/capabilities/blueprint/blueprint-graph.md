# blueprint-graph

**Feature area:** Blueprint authoring
**Commands:** 39

Read and author Blueprint event graphs and function graphs at the node and pin level. Commands support tiered detail reading, batch node+wire construction, auto-layout, node reconstruction, local variable management, graph search, and comment box authoring.

## graph-authoring

Batch-create nodes and wires, apply auto-layout, reconstruct stale nodes, and resize comment boxes.

### `auto_layout`

Automatically arrange nodes in a graph for clean visual presentation. Uses a DAG-based layered layout algorithm for readable node positioning.

## lifecycle

[description pending]

### `build_graph`

Batch-create nodes and wire them in a single call. Each node has a caller-assigned temp ID used for intra-batch connections. Connections can reference temp IDs (new nodes) or real IDs like n1/GUIDs (existing nodes). Fail-fast: stops on first error, keeps nodes created so far.

## manage

[description pending]

### `resize_comment_to_fit`

Resize a comment box's bounding rect to enclose specified nodes.

## read

Read graphs at multiple detail tiers, inspect nodes and pins, list discriminators, search by content, and analyze classes for node authoring.

### `analyze_class_for_node_authoring`

Inspect a UClass or Blueprint generated class and report which add_node discriminators can author nodes from it, including required params and callable functions.

### `analyze_function_for_node_authoring`

Inspect a UFunction path and return the canonical add_node discriminator, required params, flags, and parameter-pin shape.

### `find_stale_references`

Scan a Blueprint for nodes with broken references (deleted functions/variables/casts/macros/structs) plus compile-error catch-all.

### `get_comment_contents`

List node short IDs whose centers fall inside a comment's bounding rect.

### `get_current_level_blueprint`

Return the current editor world's Level Blueprint object path for use with Blueprint graph commands.

### `get_graph`

Read a Blueprint graph with tiered detail levels. Use 'summary' for quick orientation (~50 tokens), 'standard' for flow understanding (~18 tokens/node), 'full' for pin-level precision (~45 tokens/node), or 'focus' for surgical inspection of one node (~100 tokens fixed).

### `get_local_variables`

List all local variables defined in a Blueprint function, including their types and default values.

### `get_node`

Direct node lookup by short ID or GUID. Returns the full node detail with all pins and connected_to annotations (same shape as focus mode).

### `list_discriminators`

List add_node discriminator names, optionally filtered by builder category.

### `list_graphs`

Enumerate all graphs on a Blueprint with their entry points, types, and node counts. Returns an array of graph descriptors with name, type (event/function/interface), node count, and entry point list.

### `search_graph`

Search within a Blueprint's graphs by node name, pin name, pin default value, or comment text. Returns matching nodes with match context.

## validate

[description pending]

### `reconstruct_node`

Rebuild a node's pins via UEdGraphNode::ReconstructNode(). Useful after the referenced struct/function signature changes upstream.

## write

Add individual nodes, variables, and connections. Set pin defaults, manage graph metadata, and modify existing node configurations.

### `add_blueprint_variable`

Add a new Blueprint variable (member variable) to a Blueprint. The type is specified as a type descriptor object with at least a 'name' field (e.g. {"name": "bool"} or {"name": "object", "sub_category_object": "..."}).

### `add_comment`

Add a comment box to a Blueprint graph. Optionally set position, size, and color.

### `add_delegate_variable`

Validate a requested Blueprint delegate variable and return an error because UE 5.7 cannot compile Blueprint member variables with Blueprint-generated single-cast delegate signatures. Use add_event_dispatcher for Blueprint event callbacks.

### `add_event_dispatcher`

Add a new Event Dispatcher to a Blueprint with typed parameters. Creates the dispatcher signature graph and the matching member delegate variable. Params is a required array (can be empty).

### `add_interface_to_blueprint`

Implement a Blueprint Interface on a Blueprint. Auto-generates function stub graphs for each interface function. Use get_blueprint_functions to see the generated stubs.

### `add_local_variable`

Add a local variable to a Blueprint function. Local variables are scoped to the function and not visible outside it.

### `add_node`

Add any node to a Blueprint graph. The 'node_type' param selects the kind of node. Use 'custom' with 'node_class' for third-party plugin nodes.

### `connect_nodes`

Connect an output pin on one node to an input pin on another. UE validates pin compatibility at the schema level.

### `create_blueprint_function`

Create a custom Blueprint function with a new graph, typed parameters, optional return value, and optional pure flag. The full signature must be provided atomically.

### `disconnect_nodes`

Disconnect a pin connection. Can disconnect a specific connection or all connections on a pin. Omit target_node to break all connections.

### `graph_copy_nodes`

Copy selected Blueprint or Material graph nodes into the MCP session clipboard.

**Parameters:**

```json
{
  "properties": {
    "asset": {
      "description": "Blueprint or Material asset object path.",
      "type": "string"
    },
    "graph": {
      "description": "Graph name, such as EventGraph.",
      "type": "string"
    },
    "node_ids": {
      "description": "Node GUID strings to copy.",
      "type": "array"
    }
  },
  "required": [
    "asset",
    "graph",
    "node_ids"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "item_count": {
      "description": "Number of copied nodes",
      "type": "number"
    },
    "nodes": {
      "description": "Copied node summaries",
      "type": "array"
    },
    "source": {
      "description": "Human-readable copy source",
      "type": "string"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    }
  },
  "required": [
    "success",
    "item_count",
    "source",
    "nodes"
  ],
  "type": "object"
}
```

### `graph_paste_nodes`

Paste graph nodes from the MCP session clipboard into a Blueprint or Material graph.

**Parameters:**

```json
{
  "properties": {
    "position": {
      "description": "Optional paste position offset object: {x, y}.",
      "type": "object"
    },
    "target_asset": {
      "description": "Target Blueprint or Material asset object path.",
      "type": "string"
    },
    "target_graph": {
      "description": "Target graph name, such as EventGraph.",
      "type": "string"
    }
  },
  "required": [
    "target_asset",
    "target_graph"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "broken_connections": {
      "description": "Connections that could not be restored",
      "type": "array"
    },
    "pasted_nodes": {
      "description": "Pasted node summaries",
      "type": "array"
    },
    "success": {
      "description": "Whether the operation succeeded",
      "type": "boolean"
    },
    "warnings": {
      "description": "Post-paste warnings",
      "type": "array"
    }
  },
  "required": [
    "success",
    "pasted_nodes",
    "broken_connections",
    "warnings"
  ],
  "type": "object"
}
```

### `insert_reroute`

Insert a K2Node_Knot reroute on an existing wire between two pins. Splits the connection.

### `modify_blueprint_function`

Modify an existing user-created Blueprint function's signature and properties. Can add/remove parameters, change return type, toggle pure flag, change access level, or rename. Cannot modify override functions. Only provided fields are changed.

### `modify_blueprint_variable`

Modify an existing Blueprint variable. Only provided fields are changed — omitted fields are left as-is. Type changes force recompilation; broken graph nodes are cleaned up automatically.

### `modify_comment`

Update an existing comment box's text/color/size/position. Only specified fields change.

### `move_node`

Reposition one or more nodes in a graph. Batched by default since layout adjustments are almost never single-node operations.

### `override_blueprint_function`

Override a function from the parent class chain. Works for C++ events (BlueprintImplementableEvent, BlueprintNativeEvent) and parent Blueprint functions. Signature is resolved automatically from the parent.

### `remove_blueprint_function`

Remove a user-created function graph from a Blueprint. Cleans up function call nodes that reference it. Cannot remove override functions.

### `remove_blueprint_variable`

Remove a Blueprint-defined variable and clean up all graph nodes that reference it (getter/setter nodes). Cannot remove inherited variables.

### `remove_interface_from_blueprint`

Remove an implemented interface from a Blueprint. Optionally preserves function graphs as regular Blueprint functions.

### `remove_local_variable`

Remove a local variable from a Blueprint function. Cleans up any getter/setter nodes that reference the variable within the function graph.

### `remove_node`

Remove a node from a graph and clean up all its connections. Reports what was removed and how many connections were broken.

### `set_pin_default`

Set the default (literal) value of a pin on an existing node. Pin defaults are always stored as strings in UE. Rejects exec pins.

_Generated from commit `c4a795595b18` at 2026-06-14T06:38:55Z._
