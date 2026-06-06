# Smart Objects

**Commands:** 48 | **Tier:** Pro

Smart Object authoring, world placement, persistent collection management, and runtime claim control. Covers the full definition authoring loop — create `USmartObjectDefinition` assets, add and configure slots (offset transform, gameplay tags, behavior definitions, World Conditions), manage definition-level parameters via `FInstancedPropertyBag`, and author property bindings between parameter and struct endpoints. World-placement commands spawn `AGenericSmartObject` actors or attach `USmartObjectComponent` to existing actors. Includes a Gameplay Debugger category overlay (`PrismSmartObjects`) when the target is built with Gameplay Debugger support.

## Key capabilities

- Create `USmartObjectDefinition` assets; read asset info (slot count, behavior definitions, World Conditions, parameters); open and close the asset editor
- Add, remove, list, and inspect slots with handle or index addressing; set and get reflected slot properties; configure enabled state, offset, rotation, and runtime/activity tags
- Discover loaded `USmartObjectBehaviorDefinition` subclasses; add, list, inspect, and remove behavior definitions on slots
- Discover `FWorldConditionBase` struct types; add, remove, list, inspect, and write properties on World Conditions at definition or slot scope
- Manage definition-level `FInstancedPropertyBag` parameters (bool, int32, float, double, name, string, text, vector, rotator, transform, gameplay_tag, struct, object, soft_object, class, soft_class); set parameter default values
- Add and validate property bindings between parameter and bindable struct endpoints; list bindable structs exposed by the current engine version
- Spawn `AGenericSmartObject` actors with a definition assigned; attach `USmartObjectComponent` to existing actors; change the definition on an existing component; read component info including registration state and per-slot world transforms
- Spawn and manage `ASmartObjectPersistentCollection` actors; add/remove Smart Object components; rebuild collections from loaded eligible actors
- Query Smart Object slots at runtime using `find_smart_objects`; claim, use (with behavior class selection), and release session-scoped claim handles; read runtime debug snapshots with subsystem counts and registered component rows

## Systems covered

- `USmartObjectDefinition`, `USmartObjectComponent`, `AGenericSmartObject`
- `USmartObjectBehaviorDefinition` (instanced, slot-scope)
- `FWorldConditionBase` World Condition authoring
- `FInstancedPropertyBag` parameter bag (definition-level)
- `FSmartObjectBindingCollection` property binding system
- `ASmartObjectPersistentCollection`
- `USmartObjectSubsystem` runtime find/claim/use/release
- Gameplay Debugger `PrismSmartObjects` category (WITH_GAMEPLAY_DEBUGGER builds)
- UE 5.3-5.6 API compatibility shims for `MarkSlotAsFree` vs. legacy `Release`
