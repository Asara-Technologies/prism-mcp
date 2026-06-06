# Materials

**Commands:** 29 | **Tier:** Pro

Material graph authoring, material instance management, and Material Parameter Collection CRUD. Agents can build `UMaterial` assets from scratch — add expression nodes from a first-party discriminator set (constants, parameters, math nodes, texture samples, utility and world nodes, custom HLSL), wire expression outputs to other expressions or to material output attributes, set reflected node properties, and auto-layout the graph. Material instances support the full inheritance chain, parameter overrides, static switch evaluation, and material layer stack management. Parameter Collections provide a shared scalar/vector store that can be updated independently of specific materials.

## Key capabilities

- Create `UMaterial` assets; read graph summary, expression count, and output bindings; request recompilation and report compile status
- Inspect the full material expression graph at summary, standard, or full detail; search expressions by type, caption, parameter name, property, or value
- Add material expressions using a first-party discriminator set including constants, scalar/vector/texture/static parameters, texture sample/object/coordinate nodes, common math nodes (Add, Multiply, Lerp, etc.), utility nodes (ComponentMask, Fresnel, DotProduct), world/utility nodes (WorldPosition, CameraVector, Time), CustomExpression, and a raw `UMaterialExpression` class escape hatch
- Remove expressions with automatic inbound connection cleanup; set reflected properties on expression instances; connect and disconnect expression inputs/outputs
- Connect expression outputs to material output attributes (BaseColor, Normal, Roughness, etc.); add typed parameter expressions (Scalar, Vector, Texture, StaticSwitch); set parameter name, group, sort priority, and slider metadata
- Auto-layout expression positions in a readable grid
- Create `UMaterialInstanceConstant` assets from parent materials; inspect the full instance state including parent chain, all parameters, overrides, and layer stack
- Set scalar, vector, and texture parameter overrides; clear overrides and read inherited values; walk the parameter inheritance chain for any parameter name
- Set static switch parameters (triggers recompile); read all static switch states; assign layer functions and blend functions to material layer stack slots; read the full layer stack
- Create `UMaterialParameterCollection` assets with initial scalar/vector parameters; set, add, and remove parameters; read the current collection state with `StateId` tracking

## Systems covered

- `UMaterial`, `UMaterialExpression` graph
- `UMaterialInstanceConstant`, material parameter override system
- `UMaterialParameterCollection`
- Material output attributes: BaseColor, Normal, Roughness, Metallic, Emissive, Opacity, and others
- Material layer stack (`FMaterialLayersFunctions`)
- Static switch parameter recompile path
- `MaterialExpressionGuid`-backed short-ID expression addressing
