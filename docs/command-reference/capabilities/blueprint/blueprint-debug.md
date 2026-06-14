# blueprint-debug

**Feature area:** Blueprint authoring
**Commands:** 31

Control the Blueprint Visual Scripting debugger during PIE sessions. Step into/over/out, inspect call stacks, evaluate pin values at breakpoints, manage breakpoint state, set conditional breakpoints, and bind debug targets to breaking instances.

## lifecycle

Step into, over, or out of Blueprint execution frames and abort running scripts.

### `bp_abort_execution`

Abort the current Blueprint script execution frame.

### `bp_spike_restore_pause_on_exception`

Restore the pre-spike pause-on-exception editor setting if a snapshot exists.

### `bp_step_into`

Request Blueprint debugger step into.

### `bp_step_out`

Request Blueprint debugger step out.

### `bp_step_over`

Request Blueprint debugger step over.

## manage

Continue from breaks, evaluate pins, bind debug targets, and run spike-phase diagnostic probes.

### `bp_bind_to_breaking_instance`

Bind the Blueprint debug target to the current breaking instance.

### `bp_continue`

Continue from a Blueprint break.

### `bp_eval_pin`

Evaluate a Blueprint pin at the current break.

### `bp_spike_hit_count`

Spike-phase hit-count counter probe for T1.41 S2.

### `bp_spike_ping`

Spike-phase ping used by T1.41 S1 to probe bridge dispatch while Blueprint debugging is paused.

### `bp_spike_resolve_handle`

Spike-phase debug_object_handle resolver for T1.41 S4.

## read

Read break state snapshots, call stacks, breakpoint conditions, watch values, and available stepping actions.

### `bp_can_step`

Return available Blueprint debugger stepping actions.

### `bp_get_break_state`

Return the current Blueprint debugger pause snapshot.

### `bp_get_breakpoint_state`

Return detailed breakpoint state for a Blueprint node.

### `bp_get_call_stack`

Return the Blueprint call stack snapshot.

### `bp_get_debug_target`

Return the current Blueprint debug target.

### `bp_get_exec_trace`

Return recent Blueprint execution trace samples.

### `bp_get_watch_values`

Evaluate current Blueprint watch values.

### `bp_list_breakpoints`

List Blueprint breakpoints, optionally scoped to one asset.

### `bp_list_debug_candidates`

List valid Blueprint debug target candidates.

### `bp_list_watches`

List Blueprint pin watches.

### `bp_spike_list_debug_candidates`

Spike-phase debug candidate enumerator for T1.41 S4 row 8.

## write

Set and remove breakpoints, configure conditional break expressions, and manage watch lists.

### `bp_add_watch`

Add a Blueprint pin watch.

### `bp_clear_breakpoints`

Clear all breakpoints for one Blueprint asset.

### `bp_clear_watches`

Clear all watches for one Blueprint asset.

### `bp_remove_breakpoint`

Remove a Blueprint breakpoint from a node GUID.

### `bp_remove_watch`

Remove a Blueprint pin watch.

### `bp_set_breakpoint`

Create or update a Blueprint breakpoint at a node GUID.

### `bp_set_debug_target`

Set or clear the current Blueprint debug target.

### `bp_set_pause_on_exception`

Enable or disable Blueprint pause-on-exception with session restore.

### `bp_spike_set_pause_on_exception`

Spike-phase pause-on-exception toggle probe for T1.41 S3.

_Generated from commit `c4a795595b18` at 2026-06-14T06:38:55Z._
