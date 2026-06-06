# Niagara VFX

**Commands:** 75 | **Tier:** Pro

Full Niagara particle system authoring pipeline covering asset creation, emitter stack editing, renderer management, script graph mutation, compile/validation cycles, runtime component control, and SimCache capture. Agents can build a Niagara System from scratch — create the system, create and add emitters (with inheritance), configure stack sections (particle spawn/update, emitter spawn/update, system spawn/update, renderers, user parameters), wire the script graph, compile and validate, then drive placed components at runtime and capture deterministic SimCache assets for playback review.

## Key capabilities

- Create `UNiagaraSystem`, `UNiagaraEmitter`, and `UNiagaraScript` assets; add emitters to systems with handle-tracked membership; set parent references with cycle detection
- Inspect and mutate emitter stacks: add, reorder, enable/disable, and remove modules by section; set per-module local input overrides for float, int, bool, and vec3 types
- Add and configure renderers (Sprite, Ribbon, Mesh, Light, Volume, Decal, Component) with property writes; reorder and remove renderers
- Author design-time user parameters (float, int, bool, vec3); set defaults; read current values
- Inspect and edit Niagara script graphs: read node/pin topology, add function call, input, output, and custom HLSL nodes, connect and disconnect pins, set pin defaults, auto-layout, reconstruct nodes, and manage graph comments
- Compile systems with async polling; abort compile tasks; validate systems against readiness flags and structured issue arrays
- Drive live `UNiagaraComponent` instances: activate, deactivate, set runtime user parameters (float, int, bool, vector, vector2, position, color), swap assets, and adjust rate scale
- Create `UNiagaraSimCache` assets, configure capture parameters (attribute capture mode, include debug data, interpolation, rebasing, explicit attribute lists), capture in one frame or across multiple frames with async polling, and read cache metadata (frame count, emitter count, duration)

## Systems covered

- `UNiagaraSystem`, `UNiagaraEmitter`, `UNiagaraScript`, `UNiagaraSimCache`
- Niagara stack view model (`UNiagaraStackViewModel`, `UNiagaraStackModuleItem`)
- `UNiagaraComponent` runtime control
- RigVM-style Niagara script graph (`UNiagaraGraph`, `UNiagaraNode`)
- Niagara system and emitter compile pipeline (`FNiagaraSystemCompileRequest`)
- SimCache capture pipeline (`UNiagaraSimCacheCapture`)
- Supported renderer classes: `UNiagaraSpriteRendererProperties`, `UNiagaraRibbonRendererProperties`, `UNiagaraMeshRendererProperties`, `UNiagaraLightRendererProperties`, `UNiagaraComponentRendererProperties`
