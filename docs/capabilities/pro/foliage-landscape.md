# Foliage and Landscape

**Commands:** 90 | **Tier:** Pro

Foliage type authoring, explicit and scatter-based instance placement, procedural foliage spawner and volume management, and full landscape terrain authoring. The Pro tier adds World Partition-aware foliage routing with IFA placement hints, convex scatter shapes, landscape paint-layer filters, brush-style scatter/erase gestures, and procedural foliage volume resimulation. Landscape covers heightmap creation and editing, paint layer and weightmap operations, edit layer stacks, material assignment, and spline authoring.

Note: basic foliage type assets and instance CRUD are shared between Lite and Pro. Pro adds the advanced scatter/erase routing, brush tools, and procedural foliage commands.

## Key capabilities

### Foliage

- Create `UFoliageType_InstancedStaticMesh` and `UFoliageType_Actor` assets; get asset info (summary, key fields, all reflected); set reflected type properties; reassign source mesh or actor class; list foliage types from the current level, a loaded level path, or an IFA actor handle
- Add explicit foliage instances from transform arrays; remove, read, and patch instance transforms by opaque session handles; list instances with optional type, bounds, limit, and offset filters
- Scatter foliage instances in box or sphere volumes with seeded density, optional surface snapping (any, landscape, static mesh), and slope filtering; erase instances in box or sphere volumes optionally filtered by type
- Inspect foliage placement routing (loaded levels, World Partition state, IFA paths, mutation state) before advanced scatter; scatter with convex polygon or convex-from-actors shapes, World Partition-aware IFA routing, landscape paint-layer weight filtering, and level-instance mutation refusal
- Apply brush-style scatter or erase gestures with radius, strength, and falloff through the transactional foliage mutation path
- Create `UProceduralFoliageSpawner` assets; add and remove foliage types from spawners; set spawner properties via reflection; spawn and bind `AProceduralFoliageVolume` actors; resimulate procedural volumes synchronously with timing warnings; clear generated instances by procedural GUID

### Landscape

- Create flat `ALandscape` actors with configurable section sizing, component counts, scale, location, and initial material
- List loaded landscapes; read identity, dimensions, material, bounds, and layer metadata; resolve landscapes by name, label, object path, or GUID
- Sample heightmap at single or batch world-space XY locations; read and write raw rectangular heightmap regions (base64 little-endian uint16) with landscape or world coordinate spaces
- Sculpt, flatten, smooth, apply noise to, and ramp landscape height regions with brush-style radial tools; target specific edit layers
- Create, read, configure, and delete paint layers; paint, erase, and fill layer weights with brush-style tools; read and write raw weightmap regions (base64 uint8)
- Create, delete, list, reorder, activate, show/hide, collapse, and clear edit layers in the edit layer stack
- Set and clear the landscape material and per-LOD material overrides; set and read scalar, vector, and texture material parameters
- Create landscape spline components; add, set, and delete control points; connect and disconnect control points; set segment data; create multi-point spline paths; set point and segment deformation metadata

## Systems covered

- `UFoliageType_InstancedStaticMesh`, `UFoliageType_Actor`, `AInstancedFoliageActor`
- `UProceduralFoliageSpawner`, `AProceduralFoliageVolume`, `UProceduralFoliageComponent`
- `ALandscape`, `ULandscapeInfo`, `ULandscapeComponent`, `ULandscapeLayerInfoObject`
- Landscape heightmap and weightmap raw data pipelines
- Edit layer stack (`FLandscapeLayer`, `ULandscapeEditLayer`)
- Landscape material, per-LOD material overrides, material parameter interfaces
- `ULandscapeSplineComponent`, `ULandscapeControlPoint`, `ULandscapeSplineSegment`
- World Partition `AInstancedFoliageActor::Get(World, ..., LocationHint)` routing
