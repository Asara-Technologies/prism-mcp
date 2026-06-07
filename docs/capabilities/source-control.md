# source-control

**Feature area:** Project operations
**Commands:** 42

[description pending]

## read

[description pending]

### `check_write_readiness`

Check whether one target is ready for editor writes without mutating it. Target shape: {kind:'asset_path|package_path|config_file|disk_file|actor', path:'...', handle:{...}}. Returns decision fields (ready, blocked, recommended_action, reason) plus provider, filesystem, package, source_control, readiness, normalized_target, and warnings diagnostics.

### `check_write_readiness_bulk`

Check whether a batch of targets is ready for editor writes without mutating them. Params: {targets:[{kind,path,handle}, ...]}. Returns aggregate ready/blocked counts plus per-target check_write_readiness diagnostics.

### `diff_asset_revisions`

Structured property-level diff between the current version of an asset and a historical revision from source control. Returns per-property diffs with old/new values, revision metadata, and a summary. Requires SCC provider with revision history. Uncached.

### `diff_assets`

Structured property-level diff between two live assets loaded in the editor. No SCC involvement -- pure object comparison via UE DiffUtils. Returns per-property diffs with old/new values and a summary of changed/added counts. Uncached.

### `download_file_revision`

Download a specific revision of a file to a temp path via ISourceControlRevision::Get(). Returns the temp_path, revision, file_size_bytes, and original_file. Foundation for T1.1d revision-based asset diffing. Uncached.

### `get_actor_scc_history`

Per-actor revision history, metadata-only. Cursor-paginated by revision number (descending, newest first). limit: 1..200 default 50. after_revision is the revision number to page from; any int is accepted, returns revisions strictly less than the value (values above the head revision are equivalent to no cursor). Use the `next_after_revision` field returned in the previous page to continue; absence of that field means no more pages. History snapshot is per-call -- the underlying SCC history may change between paged calls (new submits land above the cursor and are skipped naturally; obliterated revisions could land in a gap). Each revision row carries: revision, user, date (ISO 8601 UTC), description, action ('add'|'edit'|'delete'|'branch'|'integrate'). Per-revision content diffs are out of scope (filed as WP.5-#5 debt). Uncached.

### `get_actor_scc_status`

Inspect SCC state for one actor. Returns is_checked_out, checked_out_by_self, checked_out_by_others[{user, branch}], is_in_memory_dirty, is_scc_modified, is_current, is_added, is_deleted, local_revision, depot_revision, actions_available[]. actions_available is an LLM-affordance hint computed from current state (e.g., ['revert','submit'] when checked out by self). Uncached: SCC state changes externally and our cache cannot observe external events.

### `get_actor_scc_status_bulk`

Per-handle SCC inspection for a list of handles. Best-effort: each handle is processed independently. Every result row carries an `index` matching its position in the input array. Row shapes: {index, handle, success: true, ...status fields} on success; {index, handle, success: false, error: '<message>'} on per-handle failure; {index, success: false, error} when the input element could not be parsed as a handle (no handle to echo). Top-level success is always true unless the request shape itself is invalid. Atomic semantics apply only to write commands (checkout_actors, revert_actors). Uncached.

### `get_branch_status`

Cross-branch file state for one or more files. Queries checked-out and modified state in other registered branches. Requires branches to be registered via register_status_branches first. If no branches are registered, returns results with registered_branch_count: 0 and a diagnostic message. Uncached.

### `get_changelist_details`

Get details of a specific submitted changelist. Returns provider-specific key-value pairs. Uncached.

### `get_file_history`

Revision history for a single file. Cursor-paginated by revision number (descending, newest first). max_revisions: 1..200 default 50. after_revision is the revision number to page from; returns revisions strictly less than the value. Each revision row carries: revision, user, date (ISO 8601 UTC), description, action. Uncached.

### `get_file_status`

Detailed per-file source control state for a single target. Returns provider, filesystem, package, and source_control sections. Target shape: {kind:'asset_path|package_path|config_file|disk_file|actor', path:'...', handle:{...}}. Uncached.

### `get_file_status_bulk`

Batch file status query. Accepts an array of targets. Returns per-target results with inline errors for targets that cannot be resolved. Duplicate disk files are rejected. Uncached.

### `get_registered_branches`

List branches currently registered for cross-branch status tracking with their ordering indices. Uses ISourceControlProvider::GetStateBranchAtIndex() to enumerate. Uncached.

### `get_resolve_info`

Query conflict state and resolve info for one or more files. Returns per-file is_conflicted flag and resolve_info (base/remote file and revision) when conflicted. Uncached.

### `get_shelved_files`

List shelved files in a changelist. Requires a provider that supports changelists. Refreshes shelved state before reading. Uncached.

### `get_source_control_provider_status`

Report Unreal Editor source-control provider status. Returns provider name, enabled/available state, registered providers, provider status key-value fields, capabilities, and a diagnostic summary. This is the generic T1.1a readiness entry point; actor SCC commands remain supported for actor/OFPA-specific state.

### `get_sync_status`

Per-file sync state: is_current, is_modified, needs_sync, overwrite_risk. Replaces sync_preview (UE P4 provider does not register FSyncPreview). Uncached.

### `list_changelists`

List pending changelists from the active source control provider. Returns structured error when the provider does not support changelists (e.g., Git). Uncached.

### `list_dirty_actors`

Enumerate actors whose package is dirty: in-memory edits (UPackage::IsDirty()) OR saved-but-uncommitted disk changes (SCC modified). Cursor-paginated by ascending GUID. Filters AND-combine: class_path, data_layer, scc_state ('any' | 'in_memory_only' | 'scc_modified_only', default 'any'). Each entry carries package_path, is_in_memory_dirty, is_scc_modified, scc_state, granularity ('actor' on WP, 'level_package' on monolithic). Uncached: SCC state changes externally and our cache cannot observe external events.

### `submit_preview`

Preview a submit operation without performing any mutation. Returns per-file readiness state including can_checkin, is_conflicted, is_checked_out, is_modified, and warnings. Aggregate all_ready is true only when every target can be checked in and none are conflicted. Uncached.

## write

[description pending]

### `branch_files`

Branch files via FCopy with ECopyMethod::Branch, maintaining integration history. Requires confirm: true. Destination is an absolute disk path -- source filenames are preserved.

### `checkout_actor`

Open one actor's package for edit via SCC. Returns {success, change_record, data:{all_succeeded, results:[{handle, success, package_path, granularity, scc_state}], failed:[]}}. Cache invalidations are NOT emitted -- checkout does not change actor state, only SCC ownership.

### `checkout_actors`

Atomic bulk checkout. Pre-flight FUpdateStatus across all handles; if any would fail (locked-by-other, not in depot, kind mismatch), envelope returns success: false with a single diagnostic error and NO files are checked out. On success, every handle is checked out atomically and `data.results[]` reports per-handle outcome.

### `checkout_files`

Checkout one or more files via the source control provider. Atomic: if any target cannot be checked out, none are. Accepts an optional changelist identifier.

### `create_changelist`

Create a new pending changelist with the given description. Returns the changelist identifier.

### `delete_changelist`

Delete an empty pending changelist. Fails if the changelist still contains files.

### `edit_changelist`

Update the description of an existing pending changelist.

### `mark_for_add`

Mark one or more new files for add to source control.

### `mark_for_delete`

Mark one or more files for deletion from source control.

### `move_to_changelist`

Move one or more files to a different pending changelist.

### `prepare_for_edit`

Prepare one target for editor writes without saving it. Uses the Unreal source-control provider checkout path when available; if the provider is unavailable, can clear a filesystem read-only bit only when allow_make_writable is true.

### `register_status_branches`

Register branch names for cross-branch status monitoring. Uses ISourceControlProvider::RegisterStateBranches(). Registration is session-level -- a new call replaces all previously registered branches.

### `resolve_files`

Resolve conflicted files using the provider default strategy (accept-yours for P4). Requires confirm: true. Non-conflicted files are skipped with a diagnostic. Use get_resolve_info to inspect conflict state first.

### `revert_actor`

Revert one actor's package to depot state via SCC. Refuse-if-dirty: if the package has unsaved in-memory changes, error with 'ActorIsDirty: ...; pass force: true to discard'. With force: true, discards in-memory edits along with the SCC revert. On success, change_record carries actors_modified for the reverted handle so the bridge invalidates Actor(world,guid) and ActorDescriptor(world,guid) via the existing fragment-derived path.

### `revert_actors`

Atomic bulk revert. Pre-flight: resolve every handle to a package, check IsDirty() on each loaded package; if any is dirty AND force == false, atomic-fail with 'ActorIsDirty: ...'. With force: true, discards in-memory dirty state along with the SCC revert. On success, change_record carries actors_modified per reverted handle for cache invalidation.

### `revert_files`

Revert one or more files to depot state via the source control provider. Optional force: true discards in-memory dirty state.

### `revert_unchanged`

Revert files that have not actually changed on disk.

### `shelve_files`

Shelve files from a changelist. Uses UE's FShelve operation. Requires a provider that supports changelists. The changelist must be resolved via MCPSCC::ResolveChangelistRef.

### `submit_files`

Submit/checkin files to the source control provider. Requires confirm: true. Pre-flight checks: conflict gate (refuses if any target is conflicted) and checkin gate (refuses if any target cannot be checked in). Optional changelist to submit from; optional keep_checked_out to re-checkout after submit.

### `sync_files`

Sync files to head or a specific revision. Requires confirm: true. Dirty-package check: refuses if any target has a loaded dirty UPackage (unsaved editor changes) unless force: true. Post-sync reload: reloads affected packages so the editor reflects the synced content.

### `unshelve_files`

Unshelve files from a changelist into the workspace. Requires confirm: true. Uses UE's FUnshelve operation. Requires a provider that supports changelists.

_Generated from commit `8812a051f27a` at 2026-06-07T19:01:04Z._
