# asset-tools

**Feature area:** Assets and content
**Commands:** 25

Import, reimport, and process mesh and content assets. Covers Interchange and Factory import pipelines with per-format options, static mesh collision generation, LOD creation, lightmap UV generation, mesh merging, and socket authoring.

## lifecycle

Run static mesh editor tools such as UV projection operations.

### `run_static_mesh_editor_tool`

Run a safe static mesh editor tool such as planar/cylindrical/box UV projection.

## manage

Import and reimport assets, generate collision/LODs/lightmap UVs, merge meshes, and manage import presets.

### `generate_static_mesh_collision`

Generate static mesh collision using auto-convex or simple shape/K-DOP editor utilities.

### `generate_static_mesh_lightmap_uvs`

Enable lightmap UV generation, set source/destination channels, and rebuild the mesh.

### `generate_static_mesh_lods`

Replace generated static mesh LODs from LOD0 using reduction settings.

### `import_asset`

Import a file from disk. Defaults to the Factory backend; pass pipeline_options or backend_hint=interchange to route through Interchange with per-format options.

### `merge_static_mesh_actors`

Merge multiple StaticMeshActor instances into one static mesh asset and optional replacement actor.

### `reimport_asset`

Reimport an asset using its tracked source file (or override) with optional per-format pipeline options.

### `save_import_preset`

Save a named pipeline_options dict as a reusable preset.

## read

Inspect static mesh processing state, query import pipeline options, list presets and sockets.

### `get_hlod_authoring_info`

Report editor-world HLOD authoring context and the supported PrismMCP HLOD path.

### `get_import_pipeline_options`

Reflect the Interchange pipeline tree that applies to a given source path or file extension and return UPROPERTY metadata per pipeline.

### `get_static_mesh_processing_info`

Read static mesh LOD, build-settings, collision, socket, lightmap, and Nanite processing state.

### `list_import_presets`

List named import presets stored under Saved/PrismMCP/ImportPresets/.

### `list_static_mesh_editor_tools`

List static mesh editor tools PrismMCP can safely drive and manual-only gaps it refuses.

### `list_static_mesh_sockets`

List sockets authored directly on a UStaticMesh.

## validate

Validate import options and pipeline configurations before committing an import.

### `validate_import_options`

Dry-run validation of a pipeline_options dict against the resolved Interchange pipeline tree.

## write

Author static mesh sockets, set build settings, and configure Nanite processing.

### `add_static_mesh_lod`

Copy a source static mesh LOD into a destination static mesh LOD slot.

### `add_static_mesh_socket`

Add a socket to a UStaticMesh.

### `create_hlod_proxy_mesh_actor`

Create a proxy mesh actor from multiple StaticMeshActors using UE proxy mesh settings; suitable for manual HLOD authoring slices.

### `delete_import_preset`

Delete a named import preset.

### `remove_static_mesh_lod`

Remove one static mesh LOD. LOD0 cannot be removed.

### `remove_static_mesh_socket`

Remove a socket from a UStaticMesh.

### `set_static_mesh_build_settings`

Patch FMeshBuildSettings for one static mesh LOD via JSON struct import.

### `set_static_mesh_collision_complexity`

Set static mesh collision trace behavior on the mesh BodySetup.

### `set_static_mesh_lod_settings`

Patch per-LOD screen size, FMeshReductionSettings, and FMeshBuildSettings.

### `set_static_mesh_socket`

Patch an existing UStaticMesh socket transform or tag.

_Generated from commit `e20f9f14378e` at 2026-06-20T06:40:01Z._
