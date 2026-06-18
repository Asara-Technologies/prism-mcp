# profiling

**Feature area:** Diagnostics
**Commands:** 47

Capture and analyze performance data. Start/stop Unreal Insights trace sessions with channel selection, capture GPU profiles and memory reports, read frame timing stats, manage stat groups, and emit custom timing regions into the trace stream.

## lifecycle

Start, stop, pause, and resume Unreal Insights trace sessions. Capture GPU profiles and memory reports. Enable and disable stat groups and trace channels.

### `capture_gpu_profile`

Capture a GPU profile trace. Currently returns a diagnostic error (RHI profiler backend required).

### `capture_memory_report`

Capture a memory report with platform stats and per-class UObject memory estimates. Runs synchronously and stores result for retrieval via get_capture_result.

### `disable_stat_group`

Disable stat collection for a named group.

### `disable_trace_channels`

Disable one or more trace channels on the active session. Omit channels to disable all.

### `enable_stat_group`

Enable stat collection for a named group.

### `enable_trace_channels`

Enable one or more trace channels on the active session. Uses UE canonical short names (cpu, gpu, memory, frame, bookmark, region).

### `pause_trace`

Suspend all trace channels while retaining the session. Use resume_trace to restore.

### `resume_trace`

Restore channels from a paused trace session.

### `start_trace`

Begin recording trace events with selected channels. Traces to memory by default; specify destination for file output.

### `stop_trace`

Stop the active trace session. If tracing to memory, save_to must be specified to write a .utrace file.

## manage

Emit custom timing regions into the trace stream and execute trace-safe console commands.

### `begin_trace_region`

Start a named timing region in the trace stream. Returns a region_id for unambiguous end-region matching.

### `end_trace_region`

Close a previously started timing region by region_id or name.

### `exec_trace_command`

Execute a trace-related console command. Only trace-safe prefixes allowed; session-lifecycle commands (Trace.Start/Stop) are excluded.

## read

Poll capture results, read frame timing stats, query stat group data, list trace channels, and inspect trace session state.

### `get_capture_result`

Poll the result of an async capture by ID. Captures expire 60s after completion.

### `get_frame_stats`

Get current frame timing information: frame time, thread times, draw calls, and triangle count.

### `get_stat_group`

Get metadata and current values for all stats in a named group.

### `get_stat_history`

Get a rolling window of recent values for a stat. Requires the stat group to be enabled.

### `get_trace_file_info`

Return file metadata for one .utrace file.

### `get_trace_status`

Return trace system connection, channel, destination, and active PrismMCP session state.

### `list_channel_presets`

List built-in and config-defined trace channel presets for start_trace.

### `list_stat_groups`

Enumerate available stat groups from the UE stat system. Returns group names, display names, stat counts, and enabled status.

### `list_trace_channels`

Enumerate all registered trace channels with their names, descriptions, and enabled status.

### `list_trace_files`

List .utrace files in a directory with metadata and active-file status.

### `query_trace_allocations`

Read top live (outstanding) allocation sites aggregated by LLM tag as of the end of the trace -- the 'what is holding memory?' question. Requires MemAllocChannel. Returns a capture_id; poll get_capture_result.

### `query_trace_bookmarks`

Read back bookmarks recorded in the active trace file (the read side of add_trace_bookmark). Returns a capture_id; poll get_capture_result.

### `query_trace_cook_summary`

Read per-package cook times from a cook trace. Cook events are only present in editor cook traces (CookChannel). Returns a capture_id; poll get_capture_result.

### `query_trace_counter_values`

Read a single counter's value series bucketed over a time range. Returns a capture_id; poll get_capture_result.

### `query_trace_counters`

Enumerate counters in the active trace file with per-counter summary (min/max/avg/first/last). Returns a capture_id; poll get_capture_result.

### `query_trace_cpu_gpu_correlation`

Correlate CPU frame wall-time against GPU busy-time per frame and classify each frame CPU- or GPU-bound. Per-frame pairing is best-effort under render pipelining; the aggregate summary is the reliable signal. Returns a capture_id; poll get_capture_result.

### `query_trace_diagnostics`

Read trace provenance from the active trace file: engine version, platform, build configuration, and target type. CPU/GPU model and physical RAM are not recorded in standard UE traces. Returns a capture_id; poll get_capture_result.

### `query_trace_frame_breakdown`

Analyze the active trace file for a single-frame timing breakdown. Returns worst frame by default. Poll get_capture_result for results.

### `query_trace_frame_summary`

Unified per-frame dashboard: CPU ms, GPU busy ms, bottleneck, bookmark count, and region count per frame. The 'orient first' command for a profiling session. Returns a capture_id; poll get_capture_result.

### `query_trace_gpu_frame`

Per-frame GPU breakdown for one GPU frame (default: the worst frame by GPU busy time). Returns a capture_id; poll get_capture_result.

### `query_trace_gpu_summary`

Analyze GPU work in the active trace file: per-queue busy/work time, draw/primitive counts, and named GPU passes (when RHI breadcrumbs are present). Returns a capture_id; poll get_capture_result.

### `query_trace_loading_summary`

Read the asset-loading waterfall per package: main-thread vs async-loading-thread time, serialized size, export count, plus a trace-wide create/serialize/postload phase breakdown. Requires LoadTimeChannel. Returns a capture_id; poll get_capture_result.

### `query_trace_loading_timeline`

Read loading activity bucketed over time -- the 'was loading causing my hitch?' diagnostic. Buckets by fixed time window; reports loading-thread ms and distinct packages in flight per bucket. Requires LoadTimeChannel. Returns a capture_id; poll get_capture_result.

### `query_trace_memory_summary`

Read the LLM memory tag hierarchy with current and peak bytes per tag. Requires MemAllocChannel and an LLM-enabled build. Returns a capture_id; poll get_capture_result.

### `query_trace_net_object_stats`

Top replicated event types by bytes for a connection (byte attribution by event type, not per-instance). Returns a capture_id; poll get_capture_result.

### `query_trace_net_packets`

Windowed per-packet list for a connection (size, sequence, delivery status, connection state). Returns a capture_id; poll get_capture_result.

### `query_trace_net_stats_counters`

Per-connection network stat counters (packet/frame scoped) aggregated over a packet range. Returns a capture_id; poll get_capture_result.

### `query_trace_net_summary`

Network topology and per-connection packet counts from the active trace file. Opt-in bandwidth rollup bounded by MaxSummaryPacketScan. Returns a capture_id; poll get_capture_result.

### `query_trace_regions`

Read back timing regions recorded in the active trace file (the read side of begin_trace_region/end_trace_region). Returns a capture_id; poll get_capture_result.

### `query_trace_scope_tree`

Analyze the active trace file and return a hierarchical call tree. Returns a capture_id; poll get_capture_result for results.

### `query_trace_summary`

Analyze the active trace file and return top-N most expensive scopes. Returns a capture_id; poll get_capture_result for results.

## write

Configure profiling parameters, set stat thresholds, and manage trace file output paths.

### `add_trace_bookmark`

Emit an agent-authored bookmark into the active trace stream, visible in Insights timeline.

### `delete_trace_file`

Delete a non-active .utrace file from the profiling directory.

### `set_active_trace_file`

Set the .utrace file used by trace readback commands.

_Generated from commit `a150b373ce7a` at 2026-06-18T09:17:23Z._
