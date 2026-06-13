# sequencer

**Feature area:** Cinematics
**Commands:** 249

Full authoring and inspection of Level Sequences and their tracks. Commands cover track and section CRUD, keyframe manipulation, Control Rig integration, camera cuts, audio tracks, sub-sequences, fade/transform tracks, and playback control. The largest module in PrismMCP with coverage across the full Sequencer editing surface.

## lifecycle

Navigate sequence focus stacks: focus into sub-sequences and pop back to parent sequences.

### `sequencer_focus_parent_sequence`

Pop one level up the focus stack toward the root sequence

### `sequencer_focus_subsequence`

Focus into a sub-sequence/shot by sub-section locator

## manage

Control Rig integration: read and write control values (position, rotation, scale, transform), manage visibility masks, query evaluation priority, and toggle layered/absolute modes.

### `controlrig_hide_all_controls`

Hide all Control Rig controls (mask everything)

### `controlrig_show_all_controls`

Show all Control Rig controls (clear the visibility mask)

### `sequencer_cr_get_controls_mask`

Get visibility mask for controls on a Control Rig section.

### `sequencer_cr_get_euler_transform`

Read an EulerTransform Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_position`

Read a Position Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_priority`

Get the evaluation priority order of a Control Rig track.

### `sequencer_cr_get_rotator`

Read a Rotator Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_scale`

Read a Scale Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_transform`

Read a Transform, TransformNoScale, or EulerTransform Control Rig control value from a Sequencer frame.

### `sequencer_cr_is_fk_rig`

Query whether a Control Rig is an FK Control Rig.

### `sequencer_cr_is_layered`

Query whether a Control Rig track is in layered or absolute mode.

### `sequencer_cr_set_euler_transform`

Set an EulerTransform Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_position`

Set a Position Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_rotator`

Set a Rotator Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_scale`

Set a Scale Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_transform`

Set a Transform, TransformNoScale, or EulerTransform Control Rig control value.

### `sequencer_mute_track_filters`

Mute or unmute all track filters (globally disables filtering without changing individual filter states)

## read

Read sequence structure, track hierarchies, section properties, keyframe data, binding state, and playback settings.

### `controlrig_get_controls_mask`

Get the visibility mask for Control Rig controls on a CR parameter section

### `sequencer_cr_batch_get`

Read values for multiple controls at a frame.

### `sequencer_cr_get_anim_mode_settings`

Get all Control Rig animation mode display settings.

### `sequencer_cr_get_bool`

Read a Bool Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_channel_default`

Get the default value for a channel.

### `sequencer_cr_get_control_rigs`

List Control Rig tracks present in a LevelSequence.

### `sequencer_cr_get_controls_info`

List controls on a Sequencer Control Rig with type, visibility, and value data.

### `sequencer_cr_get_float`

Read a Float Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_int`

Read an Integer Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_key_info`

Get key metadata: value, tangent type/weight, interpolation per channel.

### `sequencer_cr_get_layers`

List all animation layers on a LevelSequence with index, name, weight, type, active/lock state.

### `sequencer_cr_get_selected_controls`

Get currently selected controls on a Sequencer Control Rig.

### `sequencer_cr_get_variable_value`

Read a public variable's current value on a Sequencer Control Rig.

### `sequencer_cr_get_variables`

List public variables on a Sequencer Control Rig instance.

### `sequencer_cr_get_vector2d`

Read a Vector2D Control Rig control value from a Sequencer frame.

### `sequencer_cr_get_world_transform`

Read a Control Rig control or bound actor world transform at a Sequencer frame.

### `sequencer_find_bindings_by_tag`

Find Sequencer bindings that carry a named binding tag.

### `sequencer_find_marked_frame`

Find a marked frame by label on a LevelSequence.

### `sequencer_get_all_binding_tags`

List every binding tag name used by a LevelSequence.

### `sequencer_get_anim_sequence_links`

Read LevelSequence to AnimSequence link metadata, AnimSequence back-links, or both.

### `sequencer_get_binding_tags`

Get tag names attached to a Sequencer binding.

### `sequencer_get_binding_type`

Returns the binding type for a Sequencer binding (possessable, spawnable, or custom binding class).

### `sequencer_get_bindings_of_type`

Finds all bindings in a sequence that use a specific custom binding class.

### `sequencer_get_bound_objects`

Resolve the editor objects currently bound to a Sequencer binding.

### `sequencer_get_camera_lock`

Get whether the viewport camera is locked to the Sequencer camera cut

### `sequencer_get_channel_default`

Get the default value of a channel. Returns has_default (bool) and default_value (typed value or null when unset).

### `sequencer_get_child_possessables`

List component or child possessable bindings under a Sequencer binding.

### `sequencer_get_clock_source`

Read a LevelSequence clock source.

### `sequencer_get_composition_hierarchy`

Return the full nesting structure of a sequence: sub-sequences and their children (recursively), plus camera cut sections at each level.

### `sequencer_get_condition`

Returns the condition attached to a section, track, or track row in a level sequence.

### `sequencer_get_curve_editor_selected_key_channels`

Get Curve Editor channels that currently have selected keys.

### `sequencer_get_curve_editor_selected_keys`

Get selected Curve Editor key indices for one channel reference.

### `sequencer_get_curve_visibility`

Check whether one channel is visible in the Curve Editor.

### `sequencer_get_evaluation_type`

Read a LevelSequence evaluation type.

### `sequencer_get_focus`

Get the root sequence, the focused sequence, and the focus breadcrumb path

### `sequencer_get_folder_contents`

Get tracks, bindings, and child folders inside a named root folder. Errors with InvalidInput if multiple root folders share the same name.

### `sequencer_get_info`

Read metadata for a LevelSequence asset: display rate, tick resolution, playback range, work range, binding count, and track summary.

### `sequencer_get_keys`

Get all keys in a specific channel. Returns frame, sub_frame, value_type, and value for each key.

### `sequencer_get_loop_mode`

Read the current Sequencer editor loop mode for a tab. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_get_marked_frames`

List marked frames on a LevelSequence.

### `sequencer_get_node_sections`

Get the sections belonging to a track node

### `sequencer_get_node_states`

Get the current states (mute/solo/lock/deactivate/pin) for outliner nodes

### `sequencer_get_outliner_children`

Get the immediate children of an outliner node

### `sequencer_get_outliner_selection`

Get the currently selected outliner nodes

### `sequencer_get_outliner_tree`

Get the full outliner tree hierarchy for a sequence

### `sequencer_get_playback_range_lock`

Get whether the playback range is locked (prevents editing start/end)

### `sequencer_get_playback_speed`

Read the current playback speed multiplier from the Sequencer editor for the given sequence.

### `sequencer_get_playback_status`

Return the current playback state of a Sequencer tab. Reports the playback status enum (status field: stopped, playing, paused, scrubbing, jumping, stepping, recording), is_playing (back-compat bool), current playhead position (frame and seconds), playback speed, loop mode, and is_sequence_locked. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_get_render_status`

Return the status of the active Movie Render Queue render. Reports whether a render is in progress, the completion progress (0.0-1.0) from the active executor, and the executor's current status message. Returns is_rendering: false when no render is active.

### `sequencer_get_section_to_key`

Get the section that receives new keys for a Sequencer track.

### `sequencer_get_selected_channels`

Get the Sequencer outliner channel selection for the focused sequence.

### `sequencer_get_selected_sections`

List the sections currently selected in the Sequencer track area

### `sequencer_get_selection_range`

Read the in/out selection range (display-rate frames) from the sequence asset

### `sequencer_get_sequence_lock`

Get whether the sequence is marked read-only

### `sequencer_get_track_filters`

Get the Sequencer editor's available track filters and their active state. Requires the Sequencer to be open for sequence_path.

### `sequencer_get_view_range`

Read the saved Sequencer view range for a LevelSequence.

### `sequencer_is_curve_editor_open`

Check whether the Curve Editor panel is open for the sequencer hosting sequence_path.

### `sequencer_list_bindings`

List all actor bindings in a LevelSequence with GUIDs, display names, bound object info, and track counts.

### `sequencer_list_channels`

List all scriptable channels on a section. Transform track sections expose 9+ channels (Location XYZ, Rotation XYZ, Scale XYZ).

### `sequencer_list_folders`

List root-level folders in a LevelSequence with child counts.

### `sequencer_list_render_presets`

List all UMoviePipelinePrimaryConfig preset assets in the project. Returns each preset's name and content path, suitable for use with sequencer_render's preset_path parameter.

### `sequencer_list_sections`

List sections on a track with time ranges and channel info.

### `sequencer_list_subsequences`

List all sub-sequences on the sequence's SubTrack, returning child sequence paths and time ranges.

### `sequencer_list_tracks`

List tracks on a binding or master tracks on the sequence.

## write

Author tracks, sections, and keyframes. Add bindings, camera cuts, audio/fade/transform tracks, sub-sequences, and modify sequence playback settings.

### `controlrig_set_controls_mask`

Show or hide a specific Control Rig control on a CR parameter section

### `sequencer_add_actors_to_binding`

Add editor actors to an existing possessable binding.

### `sequencer_add_binding`

Add a possessable or spawnable actor binding to a LevelSequence.

### `sequencer_add_folder`

Add a root-level folder to organize tracks and bindings.

### `sequencer_add_key`

Add a key to a channel at a specific frame. Supports float/double channels (value as number), bool channels (value as 0/1), integer channels (value as number), and string channels (value_string). Returns a clear error for unsupported channel types.

### `sequencer_add_marked_frame`

Add a labeled marked frame to a LevelSequence.

### `sequencer_add_section`

Add a new section to a track. Optionally set start/end frame.

### `sequencer_add_shot`

Add a camera cut section to the sequence's CameraCut track. Creates the CameraCut track if it does not already exist. Optionally bind the cut to a camera actor binding.

### `sequencer_add_spawnable`

Add a spawnable binding to a LevelSequence from an actor class or level actor instance.

### `sequencer_add_subsequence`

Add a child sequence as a sub-section on the parent sequence's SubTrack. Creates the SubTrack if it does not already exist.

### `sequencer_add_track`

Add a typed track to a binding or as a master track. Supported types: transform, skeletal_animation, audio, event, fade, visibility, particle, level_visibility, float_property.

### `sequencer_bake_channel`

Evaluate a float/double channel's curve at every frame in [start_frame, end_frame] (stepped by step_frames) and write keys with the chosen interpolation. By default errors if any keys already exist in the range; pass overwrite_existing=true to replace.

### `sequencer_bake_transform`

Bake world-space transforms for bindings at every frame. Requires the Sequencer editor to be open for the asset. Partial failure: each binding is processed independently; overall success if any binding succeeded.

### `sequencer_batch_add_keys`

Add multiple keys to a channel in one command. Each entry in the 'keys' array must be a JSON object with at least a 'frame' number. Optional per-key fields: 'value' (number for numeric channels), 'value_string' (string for string channels), 'interpolation' (string). Channel resolution uses the same chain as sequencer_add_key.

### `sequencer_cancel_render`

Cancel an in-flight Movie Render Queue render. Targets the MRQ subsystem globally and takes no sequence_path. No-op-with-success when no render is active. Does not block waiting for the executor to finish -- poll sequencer_get_render_status for the transition.

### `sequencer_change_template_class`

Changes the actor class on a spawnable binding's template.

### `sequencer_clear_all_states`

Clear a specific state (mute/solo/lock/deactivate/pin) from all nodes in the sequence

### `sequencer_clear_channel`

Remove all keys from a channel.

### `sequencer_clear_condition`

Removes the condition from a section, track, or track row.

### `sequencer_close`

Close a Sequencer editor tab. When sequence_path is omitted, closes the currently-focused tab (deprecated).

### `sequencer_close_curve_editor`

Close the Curve Editor panel for the sequencer hosting sequence_path. Idempotent.

### `sequencer_convert_binding`

Converts a binding to a different custom binding type.

### `sequencer_convert_to_possessable`

Convert a spawnable binding to a possessable binding.

### `sequencer_convert_to_spawnable`

Convert a possessable binding to a spawnable binding.

### `sequencer_copy_bindings`

Copies Sequencer bindings and their tracks into the MCP session clipboard.

### `sequencer_copy_folders`

Copies root Sequencer folders into the MCP session clipboard.

### `sequencer_copy_sections`

Copies Sequencer sections from a selected track into the MCP session clipboard.

### `sequencer_copy_tracks`

Copies Sequencer tracks from a binding or root track scope into the MCP session clipboard.

### `sequencer_cr_add_layer`

Add a new animation layer with explicit name, type, and optional control filter.

### `sequencer_cr_apply_pose`

Apply a saved pose to controls at a frame.

### `sequencer_cr_bake_space`

Bake control values over a frame range in a target space.

### `sequencer_cr_bake_to_rig`

Bake existing animation on a binding into a Control Rig track.

### `sequencer_cr_batch_key`

Key multiple controls at one or more frames.

### `sequencer_cr_batch_set`

Set values on multiple controls in one call.

### `sequencer_cr_blend`

Blend operation on selected controls at the current playhead (6 modes).

### `sequencer_cr_blend_pose`

Blend between current control values and a saved pose.

### `sequencer_cr_clear_selection`

Clear all Control Rig control selection.

### `sequencer_cr_collapse_layers`

Collapse all Control Rig animation layers into a single section.

### `sequencer_cr_copy_animation`

Copy keyframe data between Control Rigs over a frame range.

### `sequencer_cr_copy_pose`

Copy pose from one binding's rig to another at a frame.

### `sequencer_cr_delete_layer`

Delete an animation layer by index.

### `sequencer_cr_delete_space`

Delete a space-switch key at a frame.

### `sequencer_cr_duplicate_layer`

Duplicate an animation layer at index.

### `sequencer_cr_export_fbx`

Export Control Rig track animation to an FBX file.

### `sequencer_cr_find_or_create_track`

Find or create a Control Rig parameter track on a Sequencer binding.

### `sequencer_cr_frame_selection`

Frame the viewport camera to the currently selected controls.

### `sequencer_cr_hide_all_controls`

Mask all controls on a Control Rig section.

### `sequencer_cr_import_fbx`

Import FBX animation onto a Control Rig track.

### `sequencer_cr_key_controls`

Key named controls at the current Sequencer playhead position.

### `sequencer_cr_key_controls_at_frames`

Key named controls at explicit frame numbers.

### `sequencer_cr_load_anim`

Load an AnimSequence asset into a Control Rig section.

### `sequencer_cr_merge_layers`

Merge specified animation layers into one (bake down).

### `sequencer_cr_mirror`

Mirror pose using the rig's mirror mapping.

### `sequencer_cr_move_space`

Move a space-switch key from one frame to another.

### `sequencer_cr_reorder_layers`

Move an animation layer from one index to another.

### `sequencer_cr_save_pose`

Save control values at a frame as a pose asset.

### `sequencer_cr_select_controls`

Set control selection on a Sequencer Control Rig (replace/add/remove/toggle).

### `sequencer_cr_select_mirrored`

Select mirrored counterparts of the current control selection.

### `sequencer_cr_set_axes_on_selection`

Toggle axes display on selected elements in Control Rig animation mode.

### `sequencer_cr_set_bool`

Set a Bool Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_channel_default`

Set the default (pre-first-key) value for a channel.

### `sequencer_cr_set_controls_mask`

Set visibility mask for specific controls on a Control Rig section.

### `sequencer_cr_set_float`

Set a Float Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_gizmo_on_selection`

Toggle gizmo overlay (controls rendered on top of geometry) in Control Rig animation mode.

### `sequencer_cr_set_gizmo_scale`

Set the gizmo scale factor for Control Rig animation mode.

### `sequencer_cr_set_hierarchy_display`

Toggle hierarchy line display in Control Rig animation mode.

### `sequencer_cr_set_int`

Set an Integer Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_key_interpolation`

Set interpolation mode on a key.

### `sequencer_cr_set_key_tangent`

Set tangent mode, slope values, and/or weights on a key.

### `sequencer_cr_set_layer_properties`

Set name, weight, type, active, or lock on an existing animation layer.

### `sequencer_cr_set_layered_mode`

Set layered or absolute mode on a Control Rig track.

### `sequencer_cr_set_local_spaces`

Toggle whether multi-select transforms operate in each control's local space.

### `sequencer_cr_set_manipulator_visibility`

Toggle manipulator (control shape) visibility in Control Rig animation mode.

### `sequencer_cr_set_nulls_display`

Toggle nulls display in Control Rig animation mode.

### `sequencer_cr_set_only_rig_sel`

Toggle whether Animation Mode restricts selection to rig controls only.

### `sequencer_cr_set_priority`

Set evaluation priority order of a Control Rig track.

### `sequencer_cr_set_space`

Set the space for a control at a display-rate frame (with automatic compensation).

### `sequencer_cr_set_variable_value`

Set a public variable's value on a Sequencer Control Rig, with optional persist.

### `sequencer_cr_set_vector2d`

Set a Vector2D Control Rig control value, optionally keying it in Sequencer.

### `sequencer_cr_set_world_transform`

Set a Control Rig control world transform, optionally keying the decomposed local value.

### `sequencer_cr_show_all_controls`

Unmask all controls on a Control Rig section.

### `sequencer_cr_snap`

Snap controls to a target actor or CR control over a frame range.

### `sequencer_cr_tween`

Tween selected controls between prev/next keyframes at the current playhead.

### `sequencer_cr_zero_transforms`

Reset controls to their default/rest values.

### `sequencer_create`

Create a new LevelSequence asset at a content path.

### `sequencer_create_camera`

Create a CineCameraActor spawnable binding in a LevelSequence.

### `sequencer_curve_editor_clear_selection`

Clear Curve Editor key selection. Idempotent.

### `sequencer_curve_editor_select_keys`

Select Curve Editor key indices on one channel with mode replace, add, or remove.

### `sequencer_delete_all_marked_frames`

Delete all marked frames from a LevelSequence.

### `sequencer_delete_marked_frame`

Delete a marked frame by index.

### `sequencer_export_anim_sequence`

Bake a Sequencer skeletal binding to a UAnimSequence asset.

### `sequencer_export_fbx`

Export Sequencer binding animation to an FBX file through SequencerTools.

### `sequencer_fix_actor_references`

Clean invalid actor references from Sequencer bindings.

### `sequencer_force_evaluate`

Force immediate Sequencer evaluation and viewport update for a tab. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_import_fbx`

Import FBX animation onto Sequencer bindings through SequencerTools.

### `sequencer_link_anim_sequence`

Link a Sequencer skeletal binding to an existing UAnimSequence for round-trip export.

### `sequencer_move_to_folder`

Move a track or binding into a folder.

### `sequencer_open_curve_editor`

Open the Curve Editor panel for the sequencer hosting sequence_path. Idempotent.

### `sequencer_open_in_editor`

Open a LevelSequence in the Sequencer editor panel.

### `sequencer_paste_bindings`

Pastes Sequencer bindings from the MCP session clipboard.

### `sequencer_paste_folders`

Pastes Sequencer folders from the MCP session clipboard.

### `sequencer_paste_sections`

Pastes Sequencer sections from the MCP session clipboard.

### `sequencer_paste_tracks`

Pastes Sequencer tracks from the MCP session clipboard.

### `sequencer_pause`

Pause playback of a Sequencer tab. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_play`

Start or resume playback of a Sequencer tab. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_play_to`

Play a Sequencer tab to a target frame, then stop. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_rebind_component`

Create or refresh a component possessable under an actor binding.

### `sequencer_refresh`

Refresh a Sequencer tab's UI on the next tick. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_remove_actors_from_binding`

Remove specific editor actors from a possessable binding.

### `sequencer_remove_all_bindings`

Remove every object binding from a LevelSequence.

### `sequencer_remove_binding`

Remove an actor binding from a LevelSequence by binding_id or binding_name.

### `sequencer_remove_folder`

Remove a root-level folder, reparenting all children (tracks, bindings, child folders) to root. Errors with InvalidInput if multiple root folders share the same name.

### `sequencer_remove_invalid_bindings`

Remove invalid object references from Sequencer bindings.

### `sequencer_remove_key`

Remove a key from a channel by zero-based index or display-rate frame.

### `sequencer_remove_section`

Remove a section by index from a track.

### `sequencer_remove_subsequence`

Remove a sub-section from the parent sequence's SubTrack by index.

### `sequencer_remove_track`

Remove a track by index or display name from a binding or from master tracks.

### `sequencer_render`

Submit a sequence to Movie Render Queue for rendering. Requires a preset_path pointing to a UMoviePipelinePrimaryConfig asset (use sequencer_list_render_presets to find available presets). The render is launched asynchronously; poll sequencer_get_render_status for progress and sequencer_cancel_render to abort. When sequence_path is omitted, renders the currently-focused tab (deprecated).

### `sequencer_replace_binding_actors`

Replace all editor actors bound to a possessable binding.

### `sequencer_save_default_state`

Captures the current state of a spawned actor back into its spawnable template.

### `sequencer_scrub`

Move the playhead to a specific position in a Sequencer tab. Provide 'frame' (integer, display-rate frames) or 'seconds' (float). If both are provided, 'frame' takes precedence. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_select_sections`

Select track-area sections by locator; coexists with outliner selection

### `sequencer_set_binding_display_name`

Rename a binding's display name in a LevelSequence.

### `sequencer_set_byte_track_enum`

Set the UEnum backing a Sequencer byte track.

### `sequencer_set_camera_lock`

Lock or unlock the viewport camera to the Sequencer camera cut

### `sequencer_set_channel_default`

Set, update, or clear the default value of a channel. Pass exactly one of 'value', 'value_string', or 'clear_default=true'.

### `sequencer_set_clock_source`

Set sequence clock source: tick, platform, audio, relative_timecode, timecode, play_every_frame, or custom.

### `sequencer_set_condition`

Creates a condition from a class path and attaches it to a section, track, or track row.

### `sequencer_set_curve_visibility`

Show or hide one channel in the Curve Editor.

### `sequencer_set_display_rate`

Set the display frame rate of a LevelSequence.

### `sequencer_set_evaluation_type`

Set sequence evaluation type: with_sub_frames or frame_locked.

### `sequencer_set_event_endpoint`

Configure an event track's function endpoint.

### `sequencer_set_key_interpolation`

Set the interpolation mode of a key. Only meaningful for float/double channels; returns a clear error for unsupported types.

### `sequencer_set_key_tangents`

Set tangent values on a key. Only meaningful for float/double channels with cubic interpolation.

### `sequencer_set_loop_mode`

Set the Sequencer editor loop mode for a tab: no_loop, loop, or loop_selection_range. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_set_node_expanded`

Set the expansion state of an outliner node

### `sequencer_set_node_state`

Set an outliner node state (mute, solo, lock, deactivate, pin)

### `sequencer_set_outliner_selection`

Set the outliner selection to the specified nodes

### `sequencer_set_playback_range`

Set the playback start and end of a LevelSequence. Accepts frame numbers or seconds.

### `sequencer_set_playback_range_lock`

Lock or unlock the playback range

### `sequencer_set_playback_range_locked`

Lock or unlock LevelSequence playback range editing.

### `sequencer_set_playback_speed`

Set playback speed for a Sequencer tab. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_set_property_track`

Set the bound property name and path on an existing property track.

### `sequencer_set_section_animation`

Set the animation asset on a skeletal animation section.

### `sequencer_set_section_blend_type`

Set a Sequencer section blend type.

### `sequencer_set_section_bounded`

Set whether a section has bounded start and/or end frames.

### `sequencer_set_section_completion_mode`

Set a Sequencer section completion mode.

### `sequencer_set_section_ease`

Set manual ease-in and/or ease-out durations on a Sequencer section.

### `sequencer_set_section_post_roll`

Set a Sequencer section post-roll frame count.

### `sequencer_set_section_pre_roll`

Set a Sequencer section pre-roll frame count.

### `sequencer_set_section_property`

Set a named property on a section. Supported: is_active, is_locked.

### `sequencer_set_section_range`

Set the time range of a section by frames or seconds.

### `sequencer_set_selected_channels`

Set Sequencer outliner channel selection with mode replace, add, or remove.

### `sequencer_set_selection_range`

Set the in/out selection range (display-rate frames) on the sequence asset; dirties the package

### `sequencer_set_sequence_lock`

Set a sequence as read-only or editable

### `sequencer_set_shot_camera`

Update which camera binding a camera cut section points to.

### `sequencer_set_subsequence_range`

Update the time range of an existing sub-section in the parent's SubTrack.

### `sequencer_set_tick_resolution`

Set a LevelSequence tick resolution. Provide fps or numerator and denominator.

### `sequencer_set_track_display_name`

Rename a track's display name.

### `sequencer_set_track_filter`

Enable or disable a named Sequencer track filter. Requires the Sequencer to be open for sequence_path. Does not modify sequence data.

### `sequencer_set_view_range`

Set the saved visible Sequencer timeline window for a LevelSequence.

### `sequencer_set_work_range`

Set the saved Sequencer work range for a LevelSequence.

### `sequencer_step`

Step the playhead. target=frame_delta moves by `count` display-rate frames (negative = backward). Other targets (playback_start, playback_end, next_key, previous_key, next_shot, previous_shot, next_mark, previous_mark) execute the corresponding Sequencer UI command exactly once and ignore count.

### `sequencer_stop`

Stop playback and reset the playhead to frame 0 for a Sequencer tab. When sequence_path is omitted, drives the currently-focused tab (deprecated).

### `sequencer_tag_binding`

Attach a named tag to a Sequencer binding.

### `sequencer_untag_binding`

Remove a named tag from a Sequencer binding.

_Generated from commit `b939b51256dd` at 2026-06-13T22:48:19Z._
