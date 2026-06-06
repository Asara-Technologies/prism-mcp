# Blueprint Toolset Example

Create a `UPrismMCPToolsetDefinition` DataAsset in your project or plugin content folder.

Set the DataAsset fields:

| Field | Example |
|-------|---------|
| `ToolsetName` | `InventoryBlueprintTools` |
| `ToolsetVersion` | `1.0.0` |
| `ToolsetDescription` | `Project inventory helpers` |
| `HandlerClass` | A Blueprint subclass of `UPrismMCPToolsetHandler` |

Add one command:

| Field | Example |
|-------|---------|
| `CommandName` | `inventory_bp_echo` |
| `Description` | `Echo an inventory item id from Blueprint` |
| `Module` | `inventory` |
| `Cluster` | `read` |
| `Tier` | `Lite` |
| `Status` | `Shipped` |
| `HandlerFunctionName` | `Echo` |
| `RequiredParams` | `item_id`, type `String` |

On the handler Blueprint, add a callable function named `Echo` with this signature:

```cpp
UPrismMCPBlueprintResult* Echo(UPrismMCPBlueprintParams* Params)
```

Inside the function, call `Params->GetString("item_id")`, create a success result, set the returned `item_id`, and
return it. PrismMCP auto-registers the command at startup and after the DataAsset is saved or deleted.
