# PrismMCP Coverage

Generated from the PrismMCP Atlas. This is the buyer-facing capability inventory; API details live in `docs/ATLAS/`.

## At a Glance

- Commands: 1667
- Lite commands: 155
- Pro commands: 1512
- Source commit: `7e14dccbf106`
- Generated at: `2026-06-06T05:32:58Z`
- Shipping scope: `pro`

## Supported Today

### Animation

#### animation

- **manage** (pro, 2 commands): [cluster blurb pending]
- **read** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 11 commands): [cluster blurb pending]

#### contextual-anim

- **read** (pro, 10 commands): Inspect Contextual Animation scene and roles assets -- roles, sections, anim sets, tracks, warp points, IK targets, and selection criteria.
- **validate** (pro, 1 commands): Validate the structural integrity of a Contextual Animation scene asset.
- **write** (pro, 13 commands): Author Contextual Animation assets -- create scene/roles assets and add or remove roles, sections, anim sets, tracks, warp points, IK targets, and selection criteria.

#### control-rig

- **control-rig-masking** (pro, 4 commands): Show, hide, and mask individual Control Rig controls in the viewport.
- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **manage** (pro, 16 commands): [cluster blurb pending]
- **read** (pro, 11 commands): [cluster blurb pending]
- **write** (pro, 16 commands): [cluster blurb pending]

#### ik-retargeter

- **read** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 2 commands): [cluster blurb pending]

#### ik-rig

- **write** (pro, 1 commands): [cluster blurb pending]

#### physics_asset

- **physics_asset_authoring** (pro, 23 commands): Author UPhysicsAsset bodies, collision shapes, constraints, the collision-disable table, and preview-mesh bindings; also exposes reflected solver/profile/body-instance properties via the T1.77 provider spine.

#### skeletal-mesh-edit

- **asset-authoring** (pro, 4 commands): [cluster blurb pending]

#### skeleton-query

- **manage** (pro, 4 commands): [cluster blurb pending]
- **read** (pro, 2 commands): [cluster blurb pending]
- **write** (pro, 1 commands): [cluster blurb pending]

### Assets and content

#### asset-registry

- **manage** (pro, 4 commands): [cluster blurb pending]
- **read** (pro, 7 commands): [cluster blurb pending]
- **write** (pro, 2 commands): [cluster blurb pending]

#### asset-tools

- **hlod** (pro, 2 commands): [cluster blurb pending]
- **mesh-editor** (pro, 2 commands): [cluster blurb pending]
- **mesh-merge** (pro, 1 commands): [cluster blurb pending]
- **static-mesh** (pro, 9 commands): [cluster blurb pending]
- **static-mesh-sockets** (pro, 4 commands): [cluster blurb pending]

#### content-browser

- **write** (pro, 1 commands): [cluster blurb pending]

#### data-assets

- **read** (pro, 3 commands): [cluster blurb pending]
- **write** (pro, 5 commands): [cluster blurb pending]

#### dataflow

- **graph_authoring** (pro, 27 commands): [cluster blurb pending]

#### localization

- **config** (pro, 9 commands): Create, inspect, patch, validate, and delete localization targets and their native or target cultures.
- **inspection** (pro, 3 commands): Inspect localization manifests, archives, and locres files for generated text data.
- **pipeline** (pro, 4 commands): Run gather, compile, and asynchronous localization jobs, then inspect job status.
- **reporting** (pro, 1 commands): Summarize localization target state, culture coverage, and gather or compile results.
- **string tables** (pro, 6 commands): Create and inspect string tables, edit entries, and set namespaces used by localized text assets.
- **translation** (pro, 2 commands): Export and import translation payloads for localization targets.

#### texture-tools

- **texture-analysis** (pro, 8 commands): Query textures, summarize memory usage, estimate platform cost, and inspect material/reference relationships.
- **texture-audit** (pro, 2 commands): Audit texture collections and apply guarded batch remediation.
- **texture-config** (pro, 4 commands): Inspect texture settings and supported texture enum/config values.
- **texture-settings** (lite, pro, 8 commands): Inspect and edit texture build, compression, LOD, filtering, color, compositing, and virtual texture settings.
- **texture-streaming** (pro, 5 commands): Inspect streaming pool pressure, per-texture residency, and platform budget recommendations.
- **virtual-texture** (pro, 8 commands): Create and configure runtime virtual textures and RVT volumes.

### Audio

#### audio

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **manage** (pro, 4 commands): [cluster blurb pending]
- **read** (pro, 7 commands): [cluster blurb pending]
- **write** (pro, 36 commands): [cluster blurb pending]

### Blueprint authoring

#### blueprint

- **lifecycle** (pro, 2 commands): [cluster blurb pending]
- **manage** (pro, 6 commands): [cluster blurb pending]
- **read** (pro, 17 commands): [cluster blurb pending]
- **write** (pro, 20 commands): [cluster blurb pending]

#### blueprint-debug

- **manage** (pro, 9 commands): [cluster blurb pending]

#### blueprint-graph

- **manage** (pro, 15 commands): [cluster blurb pending]
- **read** (pro, 6 commands): [cluster blurb pending]
- **write** (pro, 11 commands): [cluster blurb pending]

#### components

- **manage** (pro, 11 commands): [cluster blurb pending]
- **read** (pro, 6 commands): [cluster blurb pending]
- **write** (pro, 8 commands): [cluster blurb pending]

#### graph

- **clipboard** (lite, 2 commands): [cluster blurb pending]

#### native-types

- **manage** (pro, 1 commands): [cluster blurb pending]
- **read** (pro, 5 commands): [cluster blurb pending]

### Build and deployment

#### build

- **lifecycle** (pro, 4 commands): [cluster blurb pending]
- **manage** (pro, 2 commands): [cluster blurb pending]
- **read** (pro, 5 commands): [cluster blurb pending]

### Cinematics

#### sequencer

- **bindings** (pro, 5 commands): Inspect, convert, and manage custom binding types, spawnable templates, and binding-to-object resolution.
- **conditions** (pro, 3 commands): Get, set, and clear UMovieSceneCondition objects on sections, tracks, and track rows to control conditional evaluation during playback.
- **manage** (pro, 201 commands): [cluster blurb pending]
- **sequencer-focus** (pro, 3 commands): Focus into and out of subsequences and report the currently focused Sequencer sequence.
- **sequencer-selection** (pro, 4 commands): Read and set the Sequencer selection range and selected sections.
- **sequencer-workflow** (pro, 16 commands): Manage Sequencer UI state -- outliner, node visibility, camera lock, playback range, track filters.

### Diagnostics

#### automation

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **read** (pro, 3 commands): [cluster blurb pending]

#### cache

- **manage** (pro, 4 commands): [cluster blurb pending]
- **read** (lite, pro, 2 commands): [cluster blurb pending]
- **write** (lite, pro, 2 commands): [cluster blurb pending]

#### console

- **manage** (pro, 4 commands): [cluster blurb pending]
- **read** (pro, 3 commands): [cluster blurb pending]
- **write** (pro, 3 commands): [cluster blurb pending]

#### logs

- **read** (lite, 4 commands): Read recent entries from the UE Output Log and Message Log.
- **write** (lite, 1 commands): Mutate log capture state.

#### profiling

- **manage** (pro, 7 commands): [cluster blurb pending]
- **read** (pro, 29 commands): [cluster blurb pending]
- **write** (pro, 3 commands): [cluster blurb pending]

#### usage-stats

- **read** (lite, 1 commands): [cluster blurb pending]
- **write** (lite, 1 commands): [cluster blurb pending]

### Documentation and discovery

#### atlas

- **read** (lite, 6 commands): Read generated Atlas documentation and command discovery data.

#### verification

- **read** (lite, 3 commands): Read generated verification metadata and runtime health checks.

### Editor runtime

#### play-session

- **lifecycle** (pro, 2 commands): [cluster blurb pending]
- **manage** (pro, 6 commands): [cluster blurb pending]
- **read** (pro, 6 commands): [cluster blurb pending]
- **validate** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 4 commands): [cluster blurb pending]

#### runtime-state

- **read** (pro, 4 commands): [cluster blurb pending]
- **write** (pro, 1 commands): [cluster blurb pending]

#### selection

- **manage** (pro, 2 commands): [cluster blurb pending]
- **read** (pro, 2 commands): [cluster blurb pending]
- **write** (pro, 2 commands): [cluster blurb pending]

### Editor tooling

#### clipboard

- **session** (lite, 2 commands): [cluster blurb pending]

#### editor-utility

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **manage** (pro, 2 commands): [cluster blurb pending]
- **read** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 2 commands): [cluster blurb pending]

#### editor-windows

- **manage** (pro, 11 commands): [cluster blurb pending]
- **read** (pro, 4 commands): [cluster blurb pending]
- **write** (pro, 1 commands): [cluster blurb pending]

#### editor_state

- **read** (lite, 8 commands): Read live editor interaction state -- viewport camera, on-screen actors, world/screen projection, content-browser path, open asset editors -- and render asset thumbnails or editor screenshots to PNG.
- **write** (lite, 3 commands): Drive transient editor UI state -- move the viewport camera, navigate the content browser, open an asset editor.

### Gameplay systems

#### behavior-tree

- **manage** (pro, 13 commands): [cluster blurb pending]
- **read** (pro, 2 commands): [cluster blurb pending]
- **validate** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 7 commands): [cluster blurb pending]

#### blackboard

- **manage** (pro, 1 commands): [cluster blurb pending]
- **read** (pro, 3 commands): [cluster blurb pending]
- **write** (pro, 7 commands): [cluster blurb pending]

#### eqs

- **read** (pro, 2 commands): [cluster blurb pending]
- **validate** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 4 commands): [cluster blurb pending]

#### game-features

- **manage** (pro, 1 commands): [cluster blurb pending]
- **read** (pro, 7 commands): [cluster blurb pending]
- **write** (pro, 4 commands): [cluster blurb pending]

#### input

- **read** (pro, 6 commands): [cluster blurb pending]
- **write** (pro, 9 commands): [cluster blurb pending]

#### modern_lyra_plugins

- **async_mixin** (lite, 1 commands): [cluster blurb pending]
- **common_conversation** (lite, pro, 12 commands): [cluster blurb pending]
- **common_game** (lite, pro, 10 commands): [cluster blurb pending]
- **common_user** (lite, pro, 8 commands): [cluster blurb pending]
- **data_registry** (lite, pro, 9 commands): [cluster blurb pending]
- **game_settings** (lite, pro, 15 commands): [cluster blurb pending]
- **game_subtitles** (lite, pro, 4 commands): [cluster blurb pending]
- **gameplay_message_router** (lite, pro, 5 commands): [cluster blurb pending]
- **modular_gameplay** (lite, 4 commands): [cluster blurb pending]
- **modular_gameplay_actors** (lite, 3 commands): [cluster blurb pending]
- **ui_extension** (lite, pro, 4 commands): [cluster blurb pending]

#### smart-objects

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **manage** (pro, 6 commands): [cluster blurb pending]
- **read** (pro, 10 commands): [cluster blurb pending]
- **validate** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 10 commands): [cluster blurb pending]

#### statetree

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **manage** (pro, 13 commands): [cluster blurb pending]
- **read** (pro, 11 commands): [cluster blurb pending]
- **write** (pro, 18 commands): [cluster blurb pending]

### Materials and VFX

#### material-graph

- **manage** (pro, 1 commands): [cluster blurb pending]
- **read** (pro, 4 commands): [cluster blurb pending]
- **write** (pro, 4 commands): [cluster blurb pending]

#### material-instances

- **write** (pro, 1 commands): [cluster blurb pending]

#### niagara

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **manage** (pro, 6 commands): [cluster blurb pending]
- **read** (pro, 8 commands): [cluster blurb pending]
- **validate** (pro, 1 commands): [cluster blurb pending]
- **write** (pro, 6 commands): [cluster blurb pending]

### Miscellaneous

#### misc

- **lifecycle** (pro, 9 commands): [cluster blurb pending]
- **manage** (lite, pro, 139 commands): [cluster blurb pending]
- **read** (lite, pro, 114 commands): [cluster blurb pending]
- **scripting** (lite, 1 commands): [cluster blurb pending]
- **validate** (pro, 5 commands): [cluster blurb pending]
- **write** (lite, pro, 171 commands): [cluster blurb pending]

### Project operations

#### source-control

- **manage** (pro, 6 commands): [cluster blurb pending]
- **read** (pro, 1 commands): [cluster blurb pending]

### Replication and networking

#### replication

- **graph** (pro, 2 commands): Read-only replication graph diagnostics -- topology, node actors, per-actor graph info.
- **inspect** (pro, 4 commands): Inspect actor net roles, replicated properties, RPC functions, and replication state.

### World and level authoring

#### data-layers

- **read** (pro, 2 commands): [cluster blurb pending]
- **write** (pro, 3 commands): [cluster blurb pending]

#### foliage

- **manage** (pro, 8 commands): [cluster blurb pending]
- **read** (pro, 6 commands): [cluster blurb pending]
- **write** (pro, 11 commands): [cluster blurb pending]

#### landscape

- **edit_layers** (lite, 11 commands): [cluster blurb pending]
- **file_io** (lite, 7 commands): [cluster blurb pending]
- **heightmap** (lite, 9 commands): [cluster blurb pending]
- **lifecycle** (lite, 6 commands): [cluster blurb pending]
- **materials** (lite, 6 commands): [cluster blurb pending]
- **nanite** (lite, 3 commands): [cluster blurb pending]
- **splines** (lite, 11 commands): [cluster blurb pending]
- **weightmap** (lite, 13 commands): [cluster blurb pending]

#### level-management

- **read** (pro, 4 commands): [cluster blurb pending]
- **write** (pro, 3 commands): [cluster blurb pending]

#### map-build

- **lifecycle** (pro, 1 commands): [cluster blurb pending]
- **read** (pro, 1 commands): [cluster blurb pending]

#### pcg

- **component_binding** (pro, 5 commands): Bind PCG graph assets to actor components, generate or clean up component output, and inspect component graph bindings.
- **graph_authoring** (pro, 29 commands): Create, inspect, edit, validate, and rebuild PCG graph assets, nodes, pins, comments, and graph parameters.

#### world

- **manage** (pro, 4 commands): [cluster blurb pending]
- **read** (pro, 7 commands): [cluster blurb pending]
- **write** (pro, 16 commands): [cluster blurb pending]

## Coming Soon

- **License server and entitlement** (pro): Signed offline leases, self-service activation, transfer-safe deactivation, and tier enforcement.

## On the Long Roadmap

- **Workflow recipe catalog** (pro): Multi-step Unreal workflows served through MCP and surfaced as a website gallery.

## Not Planned

- **Mass and ECS authoring** (pro): Mass/ECS authoring remains deferred until there is proven buyer demand beyond core v1 coverage.
