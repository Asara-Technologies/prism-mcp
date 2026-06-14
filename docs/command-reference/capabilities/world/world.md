# world

**Feature area:** World and level authoring
**Commands:** 65

Inspect and manipulate actors in the editor world. Enumerate actors with stable handles, read properties and component hierarchies, spawn and delete actors, manage transforms and attachments, control World Partition loading, and query world diagnostic flags including WP/OFPA status.

## lifecycle

Start in-editor map build sessions.

### `start_map_build`

Start an in-editor map build session.

## read

Enumerate actors with stable handles, read properties and components, query World Partition descriptors, inspect world flags, and check actor load state.

### `find_actors_by_name`

Search for actors in the level whose name or label contains the given pattern (case-sensitive substring match). Returns all matching actors with their handle and display name.

### `get_actor_component`

Inspect one placed actor component by stable component handle.

### `get_actor_component_properties`

Read all reflected UPROPERTY values on a placed actor component.

### `get_actor_component_property`

Read one reflected property path on a placed actor component.

### `get_actor_descriptor`

Return the rich descriptor for a single actor by handle: bounds, transform, class, friendly_name, data_layers (asset paths), runtime_grid, external_package_path, references (GUID array), actor_label, is_loaded. On a monolithic (non-WP) world, synthesizes from the loaded actor; runtime_grid, external_package_path, and references will be empty.

### `get_actor_properties`

Read all UPROPERTY values on an actor identified by its handle. Returns an array of {name, type, value} entries. Use get_actors_in_level to obtain a handle, then call this to inspect the actor's current state.

### `get_actors_in_level`

Return all actors currently placed in the editor level. Each entry includes a stable handle for subsequent write commands, the actor label, and the class path. Use this to enumerate scene contents before targeting specific actors by handle.

### `get_current_world`

Return diagnostic flags for the current editor world: world_path, world_name, is_world_partition, is_ofpa, has_data_layers, is_using_level_instances, streaming_enabled_in_editor. Use this to branch on subsystem presence before calling WP-specific commands.

### `get_selected_actors`

Return the current editor actor selection as stable actor handles.

### `is_actor_loaded`

Return whether an Actor-kind handle is currently loaded in the editor world. In World Partition worlds, also reports persistent pin state.

### `list_actor_components`

List the placed actor component hierarchy, including native, SCS, UCS, and instance components.

### `list_actor_descriptors`

Enumerate actors by their World Partition descriptor records, without loading them into memory. Cursor-paginated by ascending GUID order. Filters AND-combine: class_path, data_layer (asset soft path), loaded_state ('any'|'loaded'|'descriptor_only'), spatial (exactly one of in_box/in_radius/in_cell). On a monolithic (non-WP) world, falls back to TActorIterator and synthesizes descriptor entries from loaded actors. NOTE: spatial.in_cell is a placeholder in v1 and currently returns no results pending UE 5.7 cell-coord API investigation.

### `list_map_build_types`

Enumerate map build types applicable to the currently loaded editor world.

## write

Spawn and delete actors, set transforms, attach actors, add components, manage outliner folders, and control World Partition actor loading.

### `add_instance_component`

Add an instance component to an actor through the UE subobject subsystem.

### `attach_actor`

Attach one actor's root scene component to another actor's root scene component.

### `attach_component`

Attach one scene component to another scene component.

### `clear_selection`

Clear the current editor actor selection.

### `create_actor`

Deprecated alias for spawn_actor. Use spawn_actor instead.

### `create_outliner_folder`

Create a World Outliner folder.

### `delete_actor`

Permanently delete an actor identified by its stable handle. The deletion is recorded in the response change_record under actors_deleted. Use get_actors_in_level or spawn_actor to obtain a handle. This operation is undoable via Ctrl+Z in the editor.

### `delete_actors`

Delete multiple actors by stable handle in a single edit envelope.

### `delete_outliner_folder`

Delete a World Outliner folder.

### `deselect_actors`

Remove actors from the current editor selection.

### `detach_actor`

Detach an actor's root scene component from its parent.

### `detach_component`

Detach a scene component from its parent.

### `duplicate_actor`

Duplicate a placed actor identified by stable handle. Optionally apply a world-space offset and replacement label. The duplicate is recorded in the response change_record under actors_added.

### `duplicate_actors`

Duplicate multiple actors by stable handle with an optional shared world-space offset.

### `execute_batch`

Execute a small ordered batch of direct world edit sub-operations inside one edit envelope.

### `load_actor`

Load a World Partition actor into the editor by Actor-kind handle. Use pin_actor when the actor must stay loaded across streaming events.

### `move_outliner_folder`

Move a World Outliner folder by renaming its path.

### `pin_actor`

Persistently pin a World Partition actor so the editor keeps it loaded.

### `remove_instance_component`

Remove an instance-added component from its owning actor.

### `rename_outliner_folder`

Rename a World Outliner folder.

### `replace_actor_class`

Replace an actor with a newly spawned actor of another class, preserving transform, label, tags, and folder.

### `reset_actor_component_property_to_default`

Reset one actor component property to its default.

### `reset_actor_property_to_default`

Reset an actor property path to its class default value.

### `reset_component_material`

Clear a primitive component material override by slot.

### `select_actors`

Add actors to the current editor selection.

### `select_actors_by_class`

Replace selection with actors matching a class.

### `select_actors_by_tag`

Replace selection with actors containing a tag.

### `set_actor_component_properties`

Set multiple actor component properties by path.

### `set_actor_component_property`

Set one actor component property by path.

### `set_actor_folder`

Set an actor's World Outliner folder path.

### `set_actor_hidden_in_editor`

Set an actor's temporary editor-hidden state.

### `set_actor_hidden_in_game`

Set an actor's hidden-in-game state.

### `set_actor_label`

Set an actor's Outliner label.

### `set_actor_location`

Set an actor's world location while preserving rotation and scale.

### `set_actor_locked`

Set whether an actor's transform is locked in the editor.

### `set_actor_properties`

Set multiple actor properties from a JSON object mapping property paths to values.

### `set_actor_property`

Set a UPROPERTY value on an actor or its sub-component by dotted path syntax. Supports nested paths (e.g. RootComponent.Mobility) and array indexing (e.g. Tags[0]). Obtain a handle via spawn_actor or get_actors_in_level; discover available properties via get_actor_properties.

### `set_actor_rotation`

Set an actor's world rotation while preserving location and scale.

### `set_actor_scale`

Set an actor's world scale while preserving location and rotation.

### `set_actor_tags`

Replace an actor's Tags array.

### `set_actor_transform`

Set an actor's world transform (location, rotation, scale) by stable handle. Provide any combination of location, rotation, and/or scale; components not supplied keep their current values. The actor must already exist in the level — use spawn_actor or get_actors_in_level to obtain a handle.

### `set_actors_folder`

Set the World Outliner folder path for multiple actors.

### `set_actors_transform`

Set transforms for multiple actors from entries containing handle plus location/rotation/scale fields.

### `set_component_material`

Set a primitive component material override by slot.

### `set_selected_actors`

Replace the current editor actor selection.

### `snap_actor_to_floor`

Snap an actor down to the first world-static hit beneath it.

### `snap_actor_to_grid`

Snap an actor's world location to a grid size.

### `spawn_actor`

Spawn a primitive actor of a built-in type (StaticMeshActor, PointLight, SpotLight, DirectionalLight, CameraActor) into the current level. Returns a change_record with the new actor's handle. Use spawn_blueprint_actor for custom Blueprint classes.

### `spawn_blueprint_actor`

Spawn an actor from a Blueprint asset identified by its full content-browser path (e.g. /Game/Blueprints/MyBP.MyBP). The Blueprint must already exist; use list_assets or the content browser to find it. Returns a change_record with the new actor's stable handle.

### `unload_actor`

Unload a World Partition actor from the editor load adapter. Refuses dirty loaded actor packages unless force is true.

### `unpin_actor`

Remove a World Partition actor from the editor's persistent pinned-actors set.

_Generated from commit `72ed403a48ac` at 2026-06-14T00:31:07Z._
