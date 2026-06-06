# Animation and Rigging

**Commands:** 88 | **Tier:** Pro

Control Rig Blueprint authoring, IK Rig and IK Retargeter asset management, animation retargeting execution, Animation Blueprint state machine CRUD, and Anim Montage authoring. Agents can build Control Rig assets end-to-end — create the Blueprint, build the RigVM graph with RigUnit nodes, wire pins, manage member variables, define the hierarchy (bones, controls, nulls, transforms), compile, and drive solve events across multiple named graphs. IK Rig and Retargeter commands complete the rigging pipeline for cross-skeleton retargeting.

## Key capabilities

- Create Control Rig Blueprint assets with optional preview mesh and bone import; inspect graph and hierarchy summary counts
- List and inspect `FRigUnit` structs with category/text filters; get full RigUnit type info (pins, C++ metadata, category, tooltip)
- List RigVM graphs, read node/pin/link topology and local variables; find graphs by solve event type (ForwardSolve, BackwardSolve, Interaction)
- Add, remove, duplicate, reposition, and connect/disconnect RigVM unit nodes in graphs; set pin defaults by pin path; add named graphs with solve event nodes and remove non-default graphs
- Add, change type, and remove Control Rig member variables with reference safety checks; add getter and setter nodes for member variables
- Read the Control Rig hierarchy (bone, control, null, curve elements); add and remove user bones, controls, and nulls; set and batch-set element transforms in local or global space; read element transforms
- Compile Control Rig Blueprints and return structured compile status, warnings, errors, and messages
- Create IK Rig assets with preview skeletal mesh; add and remove solvers from the solver stack; set solver properties, start/end bones, and enabled state; add and remove IK goals with bone bindings; set goal properties and current transforms; include/exclude bones from solvers; define retarget chains
- Create IK Retargeter assets; assign source and target IK Rig assets; map and auto-map retarget chains; add and set retarget poses; select active retarget poses
- Check skeleton compatibility and get bone diffs and retarget path recommendations; list retarget sources; suggest name-based bone mapping; merge skeleton bones (with dry-run support)
- Retarget `UAnimSequence`, `UBlendSpace`, and `UAnimMontage` assets through an IK Retargeter or legacy skeleton path, with optional name prefix/suffix or search-replace renaming
- List and modify states and conduits in Animation Blueprint state machines; add and remove transitions; set transition properties (timing, priority, bidirectional, automatic rule); set state properties including entry-state wiring
- Create `UAnimMontage` assets from existing sequences; add, remove, and link montage sections; add and remove instant and duration notify states by class name; set reflected notify properties; add and edit named float curves with key arrays; set blend in/out times and interpolation

## Systems covered

- `UControlRigBlueprint`, `URigVMGraph`, `URigVMNode`, `FRigUnit`
- `FRigBoneElement`, `FRigControlElement`, `FRigNullElement` (Control Rig hierarchy)
- `UIKRigDefinition`, `UIKRigController`, `UIKRetargeter`, `UIKRetargetProcessor`
- `UAnimSequence`, `UBlendSpace`, `UAnimMontage` retargeting
- `FAnimNode_StateMachine`, `UAnimStateNode`, `UAnimStateTransitionNode`
- `UAnimNotify`, `UAnimNotifyState` reflected property access
- `FRawAnimSequenceTrack`, montage section and curve authoring
- `FMCPAnimRetargetSession` async retarget job handles
