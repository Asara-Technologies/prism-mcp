# audio

**Feature area:** Audio
**Commands:** 67

Author and preview audio assets including MetaSounds, Sound Cues, Sound Classes, Sound Submixes, and Sound Attenuation. Commands support graph editing, compile workflows, editor audition with transport controls, and PIE playback at 2D or world locations.

## graph_authoring

[description pending]

### `auto_layout_metasound_graph`

Automatically position all nodes in a MetaSound graph using layered layout.

### `auto_layout_sound_cue_graph`

Apply a deterministic layered layout to a Sound Cue graph.

## lifecycle

Compile MetaSounds, play sounds in PIE worlds, and manage audition transport state.

### `compile_metasound`

Register a MetaSound Source or Patch with the MetaSound frontend and return a compile task handle.

### `pie_play_sound_2d`

Play a USoundBase in the active PIE world using UGameplayStatics::PlaySound2D.

### `pie_play_sound_at_location`

Play a USoundBase at a world location in the active PIE world.

### `stop_all_auditions`

Stop and release every active audition handle.

### `stop_audition`

Stop and release one active audition handle.

## manage

Preview sounds through the editor audio device, auto-layout MetaSound and Sound Cue graphs.

### `audition_sound`

Play a USoundBase on the editor audio device via an owned audition component.

## read

Inspect audio assets, read MetaSound interfaces, query sound class/submix hierarchies, and list active auditions.

### `get_audio_asset_info`

Inspect any T1.40 in-scope audio asset and return a type-tagged summary.

### `get_audio_runtime_state`

Return the current PrismMCP audio preview/runtime state snapshot.

### `get_metasound_compile_status`

Poll a MetaSound compile task handle and return the stored registration status.

### `get_metasound_interface`

Read a MetaSound Source or Patch root interface, defaults, and parent interface bindings.

### `get_sound_class_hierarchy`

Return a USoundClass tree for a root path or all loaded asset roots.

### `get_sound_submix_hierarchy`

Return a USoundSubmix tree for a root path or all loaded asset roots.

### `list_active_auditions`

List server-owned audition handles and backing component state.

### `list_sound_cue_node_types`

List concrete USoundNode subclasses available for Sound Cue graph authoring.

### `read_metasound_graph`

Read a MetaSound Source or Patch graph topology and node IO metadata.

### `read_sound_cue_graph`

Read a Sound Cue runtime node tree plus editor graph layout metadata when present.

## write

Author MetaSound and Sound Cue graphs, create audio assets, add nodes and connections, and configure attenuation and modulation.

### `add_metasound_input`

Add an input to a MetaSound Source or Patch root interface.

### `add_metasound_node`

Add a node to a MetaSound graph by class name (namespace::name::variant).

### `add_metasound_output`

Add an output to a MetaSound Patch root interface.

### `add_metasound_variable`

Create a graph variable in a MetaSound asset with a data type and optional default.

### `add_metasound_variable_node`

Add an accessor, mutator, or deferred-accessor node for a graph variable.

### `add_sound_cue_node`

Add a USoundNode instance to a Sound Cue graph and optionally make it the first node.

### `add_source_effect_chain_entry`

Append a USoundEffectSourcePreset to a USoundEffectSourcePresetChain asset.

### `add_submix_effect_chain_entry`

Append a USoundEffectSubmixPreset to a USoundSubmix effect chain.

### `clear_sound_mix_modifiers`

Clear all active sound mix modifiers in the current PIE world.

### `connect_metasound_nodes`

Wire an output pin on one node to an input pin on another node by name.

### `connect_sound_cue_nodes`

Connect one Sound Cue node output to another node input by input index.

### `create_audio_bus`

Create or return an existing UAudioBus asset at a /Game package path.

### `create_metasound_patch`

Create or return an existing UMetaSoundPatch asset at a /Game package path.

### `create_metasound_source`

Create or return an existing UMetaSoundSource asset at a /Game package path.

### `create_sound_attenuation`

Create or return an existing USoundAttenuation asset at a /Game package path.

### `create_sound_class`

Create or return an existing USoundClass asset, optionally assigning a parent Sound Class.

### `create_sound_concurrency`

Create or return an existing USoundConcurrency asset at a /Game package path.

### `create_sound_cue`

Create or return an existing USoundCue asset at a /Game package path.

### `create_sound_mix`

Create or return an existing USoundMix asset at a /Game package path.

### `create_sound_submix`

Create or return an existing USoundSubmix asset, optionally assigning a parent Submix.

### `create_source_bus`

Create or return an existing USoundSourceBus asset at a /Game package path.

### `disconnect_metasound_nodes`

Remove a specific wire between two node pins.

### `disconnect_sound_cue_nodes`

Disconnect one Sound Cue node output from another node input by input index.

### `move_metasound_node`

Set the editor graph position of a MetaSound node.

### `move_sound_cue_node`

Set the editor graph position for a Sound Cue node.

### `pop_sound_mix_modifier`

Pop a USoundMix modifier from the current PIE world.

### `push_sound_mix_modifier`

Push a USoundMix modifier into the current PIE world.

### `remove_audio_bus_send`

Remove a USoundBase send to a UAudioBus.

### `remove_metasound_input`

Remove an input from a MetaSound Source or Patch root interface.

### `remove_metasound_node`

Remove a node from a MetaSound graph by node GUID. Cleans up connected edges.

### `remove_metasound_output`

Remove an output from a MetaSound Patch root interface.

### `remove_metasound_variable`

Delete a graph variable and its associated accessor/mutator nodes.

### `remove_sound_cue_node`

Remove a Sound Cue graph node and clean up its runtime node reference.

### `remove_source_effect_chain_entry`

Remove a source effect-chain entry by index.

### `remove_submix_effect_chain_entry`

Remove a USoundSubmix effect-chain entry by index.

### `reorder_submix_effect_chain`

Move a USoundSubmix effect-chain entry to a new index.

### `set_audio_bus_send`

Add or update a USoundBase send to a UAudioBus.

### `set_master_volume_override`

Set or clear a non-negative transient primary volume override for the active PIE audio device.

### `set_metasound_node_input_default`

Set the literal default value on an unconnected input pin of a MetaSound node.

### `set_metasound_parameter_default`

Set the default literal for an existing MetaSound Source or Patch root input.

### `set_metasound_parent_interfaces`

Set the user-modifiable parent interfaces declared by a MetaSound Source or Patch.

### `set_sound_class_parent`

Assign, change, or clear the parent of a USoundClass asset with cycle protection.

### `set_sound_cue_node_property`

Set a reflected property on a Sound Cue node instance.

### `set_sound_mix_class_adjustment`

Add, update, or remove a persistent FSoundClassAdjuster entry on a USoundMix asset.

### `set_sound_source_effect_chain`

Assign or clear a USoundEffectSourcePresetChain reference on a USoundBase asset.

### `set_sound_submix_parent`

Assign, change, or clear the parent of a USoundSubmix asset with cycle protection.

### `set_source_bus_send`

Add or update a USoundBase send to a USoundSourceBus with source-bus cycle protection.

### `set_submix_mute`

Mute or unmute a USoundSubmix in the active editor/PIE audio device.

### `set_submix_solo`

Solo or unsolo a USoundSubmix in the active editor/PIE audio device.

_Generated from commit `e20f9f14378e` at 2026-06-20T06:40:01Z._
