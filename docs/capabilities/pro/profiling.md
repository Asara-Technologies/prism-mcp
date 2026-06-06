# Profiling and Performance

**Commands:** 47 | **Tier:** Pro

Runtime stat collection, Unreal Insights trace session control, GPU work readback, and CPU/GPU bottleneck analysis. Agents can toggle stat groups, read frame timing and thread counters, capture GPU profiles and memory reports, manage trace sessions with per-channel live control, annotate traces with bookmarks and timing regions, analyze `.utrace` files for expensive scopes, frame timing breakdowns, GPU work hierarchies, and CPU-vs-GPU bottleneck correlation.

## Key capabilities

- Enumerate stat groups with enabled state and stat counts; read metadata and current values for all stats in a named group; toggle groups on/off
- Read current frame timing, thread timing, draw-call, and triangle counters; read rolling stat history windows (up to 120 frames) for one stat while its group is enabled
- Request GPU profile captures (returns RHI profiler backend diagnostic); capture UObject/platform memory reports with `top_n` filtering and async polling via capture handles
- List registered trace channels with enabled/read-only state; list built-in and config-defined channel presets; start and stop trace sessions with memory or file destination; get trace connection, channel, and destination status
- Manage trace files: list `.utrace` files with timestamps and sizes; get file info; set the active file for readback commands; delete non-active trace files
- Control live channel state on an active trace session: enable/disable individual channels or disable all; pause and resume all channels; execute allowlisted trace console commands
- Annotate active trace sessions with named bookmarks and timing regions (begin/end with duration returned on close)
- Analyze the active `.utrace` file for top expensive scopes, hierarchical scope call trees, and frame timing breakdowns via async capture handles
- Read GPU work hierarchies, GPU timing data, and CPU-vs-GPU bottleneck correlation from file-backed `.utrace` using `UE::Trace::IAnalyzer`; read trace bookmark and region annotations (write-read loop with session annotation commands)

## Systems covered

- `FThreadStats` / stat group system
- `FGPUProfiler` / RHI profiler backend
- `FMallocProfiler` UObject/platform memory capture
- `UE::Trace` channel/session management
- Unreal Insights `.utrace` file analysis via `IAnalyzer`
- `MISCTRACE` bookmark and region channels
- `FPlatformMemoryStats`, `FUObjectArray` memory snapshot
