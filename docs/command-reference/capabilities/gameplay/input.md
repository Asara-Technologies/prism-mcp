# input

**Feature area:** Gameplay systems
**Commands:** 18

Author and inspect Enhanced Input assets. Create and configure Input Actions and Input Mapping Contexts, add key bindings with triggers and modifiers, and enumerate supported keys and modifier/trigger classes.

## read

Inspect Input Actions, Mapping Contexts, and enumerate available keys, triggers, and modifiers.

### `get_input_action`

Get detailed properties of a UInputAction asset including value type, flags, accumulation behavior, and read-only trigger/modifier arrays.

### `get_input_mapping_context`

Get detailed properties of a UInputMappingContext asset including description and all key-action mappings with read-only trigger/modifier arrays.

### `list_input_actions`

List all UInputAction assets in the project. Optional path_prefix filters to assets under a specific content path.

### `list_input_mapping_contexts`

List all UInputMappingContext assets in the project. Optional path_prefix filters by content path.

### `list_input_modifiers`

List concrete UInputModifier classes with editable reflected properties.

### `list_input_triggers`

List concrete UInputTrigger classes with editable reflected properties.

### `list_supported_keys`

List UE FKey names accepted by Enhanced Input mapping commands.

## write

Create Input Actions and Mapping Contexts, add key-action mappings, and configure triggers and modifiers.

### `add_input_behavior`

Add an Enhanced Input trigger or modifier to a UInputAction default array or to a mapping row in a UInputMappingContext.

### `add_mapping_to_context`

Add a key-action mapping to a UInputMappingContext.

### `create_input_action`

Create a new UInputAction asset. Name is required; path, value_type, description, and boolean flags are optional.

### `create_input_mapping_context`

Create a new UInputMappingContext asset. Name is required; path and description are optional.

### `delete_input_action`

Delete a UInputAction asset. Fails if the asset is referenced by other objects.

### `delete_input_mapping_context`

Delete a UInputMappingContext asset. Fails if the asset is referenced by other objects.

### `remove_input_behavior`

Remove an Enhanced Input trigger or modifier from a UInputAction default array or from a mapping row in a UInputMappingContext.

### `remove_mapping_from_context`

Remove a key-action mapping from a UInputMappingContext. Match mode controls behavior when duplicates exist.

### `set_input_action_property`

Set a single property on a UInputAction asset. Valid properties: description, consume_input, trigger_when_paused, reserve_all_mappings, accumulation_behavior. value_type is immutable.

### `set_input_behavior_property`

Set one reflected property on an Enhanced Input trigger or modifier object attached to a UInputAction or mapping row.

### `update_mapping_in_context`

Update an existing mapping's key and/or action in a UInputMappingContext. Requires at least one of new_key or new_action.

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
