# Static Mesh Tools

**Commands:** 18 | **Tier:** Pro

Static mesh processing for LOD generation, collision shape authoring, lightmap UV setup, build settings patching, socket authoring, mesh merging, and HLOD proxy creation. All commands operate on loaded Unreal editor assets and actors. Destructive writes mark packages dirty for the standard save/undo flow, and the UV projection tools explicitly report which mesh-editor operations are scriptable versus manual-only rather than guessing.

## Key capabilities

- Inspect static mesh LOD state, build settings, collision setup, lightmap channels, Nanite state, material slots, and sockets before mutating
- Generate LODs from LOD0 using reduction rows (percent triangles, screen size); copy LODs from one mesh into another slot; remove nonzero LODs; patch LOD screen size, reduction settings, and build settings per LOD
- Generate simple collision (box, sphere, capsule, K-DOP10/18/26, auto-convex with hull count and precision controls) or remove existing collision; set collision trace complexity (simple_and_complex, simple_as_complex, complex_as_simple)
- Enable generated lightmap UVs with source/destination channel assignment and automatic rebuild
- Author sockets directly on static mesh assets: add, rename, patch transform (location, rotation, scale), and remove sockets
- Merge multiple `AStaticMeshActor` instances into a generated static mesh asset via Unreal's static mesh merge path
- Generate HLOD proxy mesh actors from selected static mesh actors; read current HLOD authoring context and supported MCP HLOD commands
- Run safe UV projection tools (planar, cylindrical, box) via `UStaticMeshEditorSubsystem`; list safe scriptable tools and explicitly report manual-only gaps rather than approximating them

## Systems covered

- `UStaticMesh`, `FStaticMeshSourceModel`, `FMeshBuildSettings`, `FMeshReductionSettings`
- `UBodySetup`, `FKAggregateGeom` collision shapes (box, sphere, capsule, K-DOP, auto-convex)
- `UStaticMeshSocket`
- `IMeshMerging` / `FMeshMergingSettings` actor merge
- HLOD proxy mesh generation
- `UStaticMeshEditorSubsystem` UV projection (planar, cylindrical, box)
