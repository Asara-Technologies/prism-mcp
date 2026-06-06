# World Partition and OFPA

**Commands:** 16 | **Tier:** Pro

World Partition actor load state management and Data Layer authoring for One File Per Actor (OFPA) worlds. Agents can inspect and control which World Partition actors are loaded in the editor load adapter, persistently pin actors to keep them loaded, and manage the Data Layer stack — create and configure Data Layers, assign actors to layers, and control editor layer activation state. These commands require a World Partition world and return deterministic errors in monolithic worlds.

## Key capabilities

- Check current editor load state for World Partition actors, including persistent pin state reported by the load adapter
- Load and unload World Partition actors into the editor load adapter by actor handle; refuse to unload dirty loaded actor packages unless forced
- Persistently pin World Partition actors to keep them loaded across editor sessions; remove actors from the persistent pin set
- Create, rename, and configure Data Layers (initial load state, streaming, debug color, editor-only flag)
- Assign actors to Data Layers and remove actors from Data Layers; list Data Layers in the current world
- Read Data Layer info (initial load state, streaming config, assigned actor count); activate and deactivate Data Layers in the editor for viewport preview

## Systems covered

- `UWorldPartitionEditorLoaderAdapter` actor load state and pinning
- `UDataLayerInstance`, `UDataLayerAsset` authoring
- `AWorldDataLayers` / `UDataLayerManager`
- OFPA package per-actor dirty state tracking
- World Partition `FWorldPartitionHandle` actor identity
