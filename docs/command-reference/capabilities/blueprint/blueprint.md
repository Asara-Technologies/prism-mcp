# blueprint

**Feature area:** Blueprint authoring
**Commands:** 27

Manage Blueprint asset structure: compile, inspect variables/functions/properties, query class hierarchies, and author interface contracts. Includes project-wide queries for interface implementors, conformance gaps, and call-site analysis.

## lifecycle

Compile Blueprint assets and report structured compilation diagnostics.

### `compile_blueprint`

Compile a Blueprint asset and save it. Returns compilation status with structured errors and warnings. Call this after making structural changes (adding variables, nodes, or components) to ensure the generated class is up to date.

## read

Inspect Blueprint functions, variables, properties, interfaces, class hierarchies, and overridable functions. Run project-wide conformance and call-site queries.

### `find_blueprint_by_name`

Search for Blueprint assets by name substring. Searches /Game and /PrismMCP content roots. Use this to discover Blueprint asset paths before passing them to other commands.

### `find_conformance_gaps`

Project-wide query: finds Blueprints that implement an interface but have unoverridden functions (stubs).

### `find_interface_call_sites`

Project-wide query: finds where interface functions are called via interface message nodes across all Blueprint graphs.

### `find_interface_implementors`

Project-wide query: which Blueprints implement a given interface. Supports path_filter for scoping.

### `get_blueprint_functions`

List all function graphs on a Blueprint with full signatures, flags, and override status.

### `get_blueprint_interfaces`

List all Blueprint Interfaces implemented by a Blueprint, with the function names each interface contributes.

### `get_blueprint_properties`

List all UPROPERTY values on a Blueprint's CDO. Supports filtering by inheritance, override status, and category. Use this to inspect current default property values.

### `get_blueprint_variables`

List all Blueprint-defined variables (member variables added in the Blueprint editor) on a Blueprint, with their names, types, categories, flags, metadata, and default values.

### `get_class_hierarchy`

Return the full class inheritance chain for a Blueprint, from its generated class up to (but not including) UObject. Includes Blueprint and native classes with property counts per level.

### `get_interface_conformance`

Reports the override status of every function from every implemented interface on a specific Blueprint.

### `get_interface_function_detail`

Deep inspection of a single interface function. Returns full signature plus which Blueprints override it and whether each is a stub or has user content.

### `get_interface_functions`

Lists all functions on a Blueprint Interface with full signature details including parameters, return types, pure/const flags, and event eligibility.

### `get_interface_hierarchy`

Returns the parent interface chain. Blueprint Interfaces are always flat. C++ interfaces may have parents up to UInterface.

### `get_overridable_functions`

List functions from the parent class chain that can be overridden but haven't been yet. Includes C++ events and overridable Blueprint functions.

### `validate_interface_contract`

Pre-flight safety check for interface refactoring. Combines conformance analysis and call-site discovery into a single report showing safe_to_remove and unsafe_to_remove functions.

## write

Add and remove variables, implement interfaces, override functions, set property defaults, and manage Blueprint metadata.

### `add_component_to_blueprint`

Add a component to a Blueprint's construction script. Supports any UActorComponent subclass by name (e.g. StaticMeshComponent, BoxComponent). Optional transform sets the component's relative location/rotation/scale.

### `add_interface_function`

Adds a new function to a Blueprint Interface asset with typed parameters, optional return type, and pure/const flags.

### `create_blueprint`

Create a new Blueprint asset. Specify a name and optionally a parent class and package path. Defaults to AActor parent and /Game/Blueprints/ path. Supports C++ class names, /Script/ paths, or Blueprint asset names as parent. When 'skeleton' is provided, creates an Animation Blueprint (UAnimBlueprint) targeting that skeleton instead.

### `remove_interface_function`

Removes a function from a Blueprint Interface asset. Reports the number of affected implementing Blueprints.

### `set_blueprint_property`

Set a UPROPERTY on a Blueprint's Class Default Object (CDO). Use this to change default property values that instances inherit. Compiles the Blueprint afterwards by default.

### `set_component_property`

Set a property on a component template inside a Blueprint. The component must already exist on the Blueprint. Supports numeric, bool, string, vector, rotator, and enum properties.

### `set_interface_function_flags`

Sets or clears const and/or pure specifiers on an existing interface function.

### `set_interface_function_signature`

Atomically replaces the parameter list and return type of an existing interface function. Optionally conforms all implementing Blueprints.

### `set_pawn_properties`

Set Pawn-specific CDO properties on a Blueprint that derives from APawn, such as auto-possess and controller rotation flags.

### `set_physics_properties`

Configure physics simulation settings on a primitive component (UPrimitiveComponent subclass) inside a Blueprint. All physics params are optional; provide only what you want to change.

### `set_static_mesh_properties`

Set the static mesh asset and/or material on a StaticMeshComponent inside a Blueprint. Provide content-browser paths for the mesh and material.

_Generated from commit `d55b227d7cc8` at 2026-06-15T04:11:43Z._
