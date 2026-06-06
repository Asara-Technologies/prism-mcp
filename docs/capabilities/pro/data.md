# Data Tables and Assets

**Commands:** 17 | **Tier:** Pro

DataTable asset lifecycle, DataAsset property management, and User Defined type authoring (enums and structs). Agents can create DataTable assets from any loaded `UScriptStruct`, read row schemas and all row data, add, modify, and remove named rows with field-level updates, and create DataAsset instances of any `UDataAsset` subclass with reflected property reads and writes. User Defined Enum and User Defined Struct authoring rounds out the type-authoring surface for projects that define game data schemas in content.

## Key capabilities

- Create DataTable assets from a named `UScriptStruct`; read table metadata (row count, column definitions and types); read all rows as a JSON array
- Add named rows with per-field string-serialized values; modify existing rows with partial field updates; remove rows by name
- Create DataAsset instances of any loaded `UDataAsset` subclass; read all UPROPERTY values on a DataAsset; set individual property values by name
- List all `UDataAsset` subclasses available in the project
- Create assets using UE's factory system by short or full class name (Material, SoundCue, etc.) with optional factory override
- Create User Defined Enums with named display entries; add and remove entries from existing enums; read all entries with name, display name, and value
- Create User Defined Structs with typed fields; add and remove fields from existing structs; read all fields with type and layout metadata

## Systems covered

- `UDataTable` + `UScriptStruct` row schema
- `UDataAsset` / `UPrimaryDataAsset` reflected property access
- `UUserDefinedEnum` / `UUserDefinedStruct` authoring
- UE factory system (`UFactory`-backed asset creation)
- `FDataTableRowHandle` row string-serialized import/export
