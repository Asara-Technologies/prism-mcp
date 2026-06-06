# UMG and Common UI

**Commands:** 42 | **Tier:** Pro

UMG Widget Blueprint authoring with native property bindings and event nodes, widget animation authoring via `UMovieScene`, and Common UI asset management with PIE runtime stack control. Agents can build widget trees from a recursive JSON hierarchy, manage widget containment and slots, create property bindings backed by pure Blueprint functions, attach component-bound event nodes to widget delegates, and animate widget properties with float, FLinearColor, and FWidgetTransform keyframe tracks. Common UI coverage adds input action data table creation, activatable stack inspection and push/pop, and CommonInput state control.

## Key capabilities

- List loaded `UWidget` subclasses with containment metadata and child slot schemas; inspect one widget class's reflected properties, events, and slot structure
- Build or replace a Widget Blueprint widget tree from a recursive JSON hierarchy with optional inline property bindings and event nodes; add individual widgets to existing trees
- Read, modify, move, and remove widgets; compile Widget Blueprints with structured diagnostics; reparent Widget Blueprints to a new parent class
- Bind widget properties to pure Blueprint functions via UMG's native editor binding table; bind widget multicast delegates to component-bound event nodes; inspect all bindings and list unbound bindable properties
- Set and clear the `bIsVariable` flag on widgets; query and assign named slot content on `INamedSlotInterface` widgets
- List Widget Blueprint assets; create Widget Blueprint assets with configurable parent class, folder, and root widget; add Widget Blueprints to viewport (returns class path and recommended z-order)
- Create widget animations with keyframe tracks; add, modify, and remove property animation tracks for float, `FLinearColor`, and `FWidgetTransform` properties; list or inspect animations with per-track keyframe detail; remove animations
- Discover Common UI assets by kind (activatable widget, action widget, bound action bar, input action data table, input action domain, controller data, rich text data, text style, button style, and others)
- Create input action data tables with `FCommonInputActionDataBase` rows; list rows; bind action widget `InputActions` arrays to data table row handles; validate Common UI setup for missing class assignments and broken row handles
- Read `UCommonUISettings` and `UCommonUIInputSettings` project configuration
- Inspect activatable widget stacks during PIE; push and pop activatable widgets via session-local handles; clear non-root widgets from stacks; read and set CommonInput type (MouseAndKeyboard, Gamepad, Touch)

## Systems covered

- `UUserWidget`, `UWidgetBlueprint`, `UWidgetTree`
- UMG native property binding table (`UWidgetBlueprintGeneratedClass`)
- Component-bound event nodes (`UK2Node_ComponentBoundEvent`)
- `UWidgetAnimation`, `UMovieScene` keyframe tracks
- `UCommonActivatableWidget`, `UCommonActivatableWidgetStack`
- `UCommonActionWidget`, `UCommonGenericInputActionDataTable`, `FCommonInputActionDataBase`
- `UCommonUISettings`, `UCommonUIInputSettings`
- `UCommonInputSubsystem` CommonInput type control
