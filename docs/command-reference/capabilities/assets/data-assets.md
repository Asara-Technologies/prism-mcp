# data-assets

**Feature area:** Assets and content
**Commands:** 17

Create and inspect Data Tables, Data Assets, User Defined Structs, and User Defined Enums. Read table rows and struct fields, add rows, and create new typed data containers through the UE factory system.

## read

Read Data Table rows and metadata, Data Asset properties, User Defined Enum entries, and Struct field definitions.

### `get_data_asset`

Get the properties and values of a Data Asset. Returns all UPROPERTY fields with their current values.

### `get_data_table_info`

Get metadata about a Data Table: row struct, row count, and column definitions.

### `get_data_table_rows`

Get row data from a Data Table. Returns all rows, or a single row if row_name is specified. Each row includes the row name and all field values serialized as strings.

### `get_enum`

Get the entries of a User Defined Enum. Returns each entry's internal name, display name, and integer value.

### `get_struct`

Get the fields of a User Defined Struct. Returns each field's display name and type descriptor.

### `list_data_asset_classes`

List all loaded UClass types that inherit from UDataAsset. Useful for discovering available Data Asset classes before calling create_data_asset.

## write

Create Data Tables, Data Assets, Enums, and Structs. Add table rows and generic factory-backed assets.

### `add_data_table_row`

Add a new row to a Data Table. The row name must not already exist. Values are imported via FProperty::ImportText and must match the struct field types.

### `create_asset`

Create a new asset of any type using UE's factory system. Finds the appropriate UFactory for the given class. Works for Material, Texture, SoundCue, and any class with a registered factory. For DataTable/DataAsset, use the dedicated commands instead.

### `create_data_asset`

Create a new Data Asset of a specified class. The class must inherit from UDataAsset. Returns the asset path and initial property values.

### `create_data_table`

Create a new Data Table asset with the specified row struct. The row struct must be a native UScriptStruct (e.g. FTableRowBase, or any struct registered with the engine). Returns table metadata and column definitions.

### `create_enum`

Create a new User Defined Enum asset with the specified entries. Each entry string becomes a display name in the enum.

### `create_struct`

Create a new User Defined Struct asset with the specified fields. Each field has a name and a type descriptor (same format as add_blueprint_variable).

### `modify_data_table_row`

Modify field values on an existing Data Table row. Only the specified fields are updated; other fields remain unchanged.

### `modify_enum`

Add or remove entries from an existing User Defined Enum. Entries are matched by display name.

### `modify_struct`

Add or remove fields from an existing User Defined Struct. Fields are matched by display name for removal.

### `remove_data_table_row`

Remove a row from a Data Table by name.

### `set_data_asset_property`

Set a property value on a Data Asset. The value is parsed via UE's ImportText and must match the property type.

_Generated from commit `b939b51256dd` at 2026-06-13T22:48:19Z._
