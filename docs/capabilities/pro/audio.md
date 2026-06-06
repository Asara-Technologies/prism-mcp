# Audio

**Commands:** 67 | **Tier:** Pro

Full audio asset authoring pipeline covering Sound Cue graph editing, MetaSound Source and Patch authoring, Sound Class and Sound Mix hierarchies, Sound Submix routing chains, source effect chains, Audio Bus and Source Bus sends, and editor audition lifecycle. Agents can create and wire complex runtime audio graphs — Sound Cue node trees with schema-routed edge connections, MetaSound graphs with root interface input/output CRUD and parent interface declarations — and then preview audio directly in the editor or during PIE without switching tools.

## Key capabilities

- Create persistent audio assets: `USoundCue`, `UMetaSoundSource`, `UMetaSoundPatch`, `USoundClass`, `USoundMix`, `USoundAttenuation`, `USoundConcurrency`, `USoundSubmix`, `UAudioBus`, `USoundSourceBus`
- Read and walk Sound Cue node trees; add, move, and remove Sound Cue nodes; wire node connections with cycle rejection; auto-layout the graph; set reflected node properties by path
- Read MetaSound interface metadata, graph topology, node IO, edges, variables, and dependency counts; add and remove root interface inputs and outputs; set parameter defaults; declare parent interfaces; compile and poll registration status
- Author Sound Class hierarchies with parent assignment and cycle detection; set Sound Mix class adjustments with volume, pitch, low-pass filter, and apply-to-children options; push, pop, and clear Sound Mix modifiers during PIE
- Assign Sound Submix parent hierarchies with cycle detection; add, remove, and reorder submix effect chain entries; assign and edit source effect chains on `USoundBase` assets
- Wire pre- and post-effect Audio Bus and Source Bus sends; Source Bus cycle detection prevents feedback routing
- Audition sounds in the editor via a session-local component pool; stop individual or all auditions; list active auditions with elapsed time; play sounds at a 2D or world-space location during PIE
- Mute, solo, and unmute submixes during editor and PIE sessions; set and clear a transient primary-volume override during PIE; read current audio runtime state

## Systems covered

- `USoundCue` / `USoundNode` graph system
- `UMetaSoundSource` / `UMetaSoundPatch` MetaSound frontend and graph
- `USoundClass`, `USoundMix`, `FSoundClassAdjuster`
- `USoundSubmix`, `USoundEffectSubmixPreset`, `USoundEffectSourcePresetChain`
- `UAudioBus`, `USoundSourceBus`
- `UAudioComponent` (editor audition pool)
- `UGameplayStatics` PIE sound playback
- `FAudioDeviceHandle` submix mute/solo debug state
