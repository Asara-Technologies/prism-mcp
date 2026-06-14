# native-types

**Feature area:** Blueprint authoring
**Commands:** 33

Inspect and generate native C++ type scaffolding from the editor. Read UClass, UStruct, and UEnum metadata, enumerate reflected properties, and author new native type stubs or headers.

## read

Inspect UClass, UStruct, and UEnum metadata. Enumerate reflected properties, functions, and inheritance chains from native types.

### `describe_struct_type`

Return reflected field schema for a UScriptStruct by path.

### `find_native_types`

Search loaded native C++ types (UClass, UScriptStruct, UEnum) by name, module, parent class, or kind. Use this to discover type names and paths before calling get_native_class_info, get_native_struct_fields, or get_native_enum_info.

### `get_instanced_struct_info`

Report active struct type and payload field schema for an FInstancedStruct property.

### `get_native_class_info`

Get UPROPERTY details for a native C++ UClass by exact name. Returns properties with type, value (if include_cdo_values=true), flags, and class hierarchy info. Defaults to returning only Blueprint-visible properties.

### `get_native_enum_info`

Get all values of a native C++ UEnum by exact name. Returns value names, display names, integer values, and tooltip descriptions. Hidden/MAX sentinel values are excluded.

### `get_native_struct_fields`

Get all fields of a native C++ UScriptStruct by exact name. Returns field names, C++ types, and property flags.

### `get_reflected_property`

Read one reflected property by path from a resolved target.

### `list_assignable_classes`

List concrete classes assignable to a reflected reference property.

### `list_instanced_subobject_classes`

List legal classes for an instanced property. Filters abstract, deprecated, and non-EditInlineNew classes.

### `list_instanced_subobjects`

List instanced objects in a property. Returns class, outer, name, and index for each.

### `list_property_bag_entries`

List descriptor entries in an FInstancedPropertyBag with types and serialized values.

### `list_reflected_properties`

List editable and readable reflected properties on a resolved target.

### `resolve_reflected_reference`

Resolve the currently stored reference value to class, path, load-state, and lineage metadata.

### `resolve_reflected_target`

Resolve a reflected authoring target descriptor to a UObject and return class and package metadata.

### `validate_reflected_property_value`

Validate a proposed reflected property value without mutating the target.

### `validate_reflected_reference`

Validate assignability of a proposed reference value against a reflected property.

## write

Generate C++ type stubs, headers, and boilerplate for new native classes, structs, and enums.

### `add_instanced_subobject`

Create an inline UObject with the resolved target as outer. Supports dry_run and optional initial_values.

### `add_property_bag_entry`

Add a descriptor entry to an FInstancedPropertyBag. Supports dry_run.

### `clear_collection`

Clear all entries from an array, set, or map. Supports dry_run and expected_count.

### `clear_instanced_struct`

Reset an FInstancedStruct to empty. Supports dry_run.

### `clear_instanced_subobjects`

Remove all instanced subobjects. Supports dry_run and expected_count.

### `insert_collection_item`

Insert an item into an array property. Supports dry_run and expected_count.

### `move_collection_item`

Move an array item from one index to another. Supports dry_run and expected_count.

### `move_instanced_subobject`

Reorder an instanced subobject within its array.

### `remove_collection_item`

Remove an item from an array by index, or from a set by value. Supports dry_run and expected_count.

### `remove_instanced_subobject`

Remove an instanced subobject by index. Supports dry_run and expected_count.

### `remove_map_entry`

Remove a map entry by key. Supports dry_run and expected_count.

### `remove_property_bag_entry`

Remove a descriptor entry from an FInstancedPropertyBag. Supports dry_run.

### `reset_reflected_property`

Reset a reflected property to its CDO or archetype default. Supports dry_run.

### `set_instanced_struct_type`

Change the active type of an FInstancedStruct. Destructive and supports dry_run.

### `set_map_entry`

Add or replace a map entry. Supports dry_run and expected_count.

### `set_property_bag_entry_value`

Write a typed value to an FInstancedPropertyBag entry. Supports dry_run.

### `set_reflected_property`

Write a reflected property by path. Supports dry_run validation without mutation.

_Generated from commit `c4a795595b18` at 2026-06-14T06:38:55Z._
