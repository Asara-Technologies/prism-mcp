# smart-objects

**Feature area:** Gameplay systems
**Commands:** 48

Inspect and author Smart Object definitions, runtime slots, and interaction behaviors. Spawn Smart Object actors, manage persistent collections, claim and release slots during PIE, configure behavior definitions, and validate slot/tag structure.

## lifecycle

Open/close asset editors, spawn Smart Object actors and persistent collections, and run subsystem debug controls.

### `close_smart_object_asset_editor`

Close all editors for a Smart Object Definition asset.

### `open_smart_object_asset_editor`

Open or focus the Smart Object Definition asset editor.

### `run_smart_object_runtime_debug_control`

Run a Smart Object subsystem debug control: register_all, unregister_all, initialize_runtime, cleanup_runtime, clear_session_results.

### `spawn_generic_smart_object`

Spawn an AGenericSmartObject and assign a Smart Object Definition.

### `spawn_smart_object_persistent_collection`

Spawn an ASmartObjectPersistentCollection actor in the editor world.

## manage

Claim, use, and release Smart Object slots. Rebuild persistent collections.

### `claim_smart_object`

Claim a Smart Object slot from a find_smart_objects result id.

### `rebuild_smart_object_persistent_collection`

Rebuild a persistent collection from collection-eligible loaded Smart Object components.

### `release_smart_object_claim`

Release a Smart Object claim and forget the session claim id.

### `use_smart_object_claim`

Mark a claimed Smart Object slot as occupied and return the selected behavior definition.

## read

Find runtime slots, inspect definitions, read behavior and component info, query registration state, and list slot tags.

### `find_smart_objects`

Find runtime Smart Object slots and return session result ids that can be claimed.

### `get_behavior_definition_info`

Read one Smart Object behavior definition and its reflected editable properties.

### `get_slot_info`

Read detailed Smart Object slot state by handle or index.

### `get_smart_object_binding_info`

Read the binding for a Smart Object target endpoint.

### `get_smart_object_component_info`

Read Smart Object component definition, registration, and slot transform info.

### `get_smart_object_definition_info`

Inspect a Smart Object Definition asset and return summary counts.

### `get_smart_object_persistent_collection_info`

Inspect a Smart Object persistent collection actor.

### `get_smart_object_runtime_debug_snapshot`

Return Smart Object runtime/debugger data: subsystem counts, runtime objects, and session claims.

### `get_smart_object_slot_property`

Read a reflected property on one Smart Object slot.

### `get_world_condition_info`

Read one Smart Object world condition and its reflected editable properties.

### `get_world_condition_property`

Read a reflected property on one Smart Object world condition.

### `list_behavior_definition_classes`

List loaded non-abstract USmartObjectBehaviorDefinition classes.

### `list_behavior_definitions`

List behavior definitions attached to one Smart Object slot.

### `list_slots`

List compact Smart Object slot rows.

### `list_smart_object_bindable_structs`

List Smart Object bindable structs for property binding authoring.

### `list_smart_object_bindings`

List Smart Object property bindings and resolution diagnostics.

### `list_smart_object_parameters`

List Smart Object Definition default parameters.

### `list_smart_object_persistent_collections`

List ASmartObjectPersistentCollection actors in the editor world.

### `list_world_condition_classes`

List loaded world condition structs accepted by the Smart Object schema.

### `list_world_conditions`

List world conditions on the definition or one slot.

## validate

Validate Smart Object definition structure, slot tags, and behavior configuration.

### `validate_smart_object_bindings`

Validate all Smart Object property bindings and return unresolved diagnostics.

## write

Author Smart Object definitions: add/remove slots, set behavior definitions, configure tags, and modify slot properties.

### `add_behavior_definition`

Add an instanced behavior definition to one Smart Object slot.

### `add_slot`

Add one slot to a Smart Object Definition.

### `add_smart_object_binding`

Add a Smart Object property binding from source endpoint to target endpoint.

### `add_smart_object_parameter`

Add a default parameter to a Smart Object Definition.

### `add_smart_object_to_collection`

Add an existing USmartObjectComponent to a persistent collection.

### `add_world_condition`

Add a world condition to the definition or one slot.

### `attach_smart_object_component_to_actor`

Attach a USmartObjectComponent with a definition to an existing actor.

### `create_smart_object_definition`

Create a USmartObjectDefinition asset at a long package path.

### `remove_behavior_definition`

Remove a behavior definition from one Smart Object slot.

### `remove_slot`

Remove one Smart Object slot by handle or index.

### `remove_smart_object_binding`

Remove the binding for a Smart Object target endpoint.

### `remove_smart_object_from_collection`

Remove an existing USmartObjectComponent from a persistent collection.

### `remove_smart_object_parameter`

Remove a default parameter from a Smart Object Definition.

### `remove_world_condition`

Remove a world condition from the definition or one slot.

### `set_smart_object_component_definition`

Set the definition asset on an existing Smart Object component.

### `set_smart_object_parameter_default`

Set a Smart Object Definition parameter default value.

### `set_smart_object_slot_property`

Set a reflected property on one Smart Object slot.

### `set_world_condition_property`

Set a reflected property on one Smart Object world condition.

_Generated from commit `3456f5dc1efb` at 2026-06-20T19:52:28Z._
