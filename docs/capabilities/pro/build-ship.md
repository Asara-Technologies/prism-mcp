# Build and Ship

**Commands:** 14 | **Tier:** Pro

Build pipeline discovery, build session management, and multi-platform cook and package execution. Agents can enumerate target platforms with SDK status, list connected devices per platform, enumerate project build targets and configurations, query project build metadata, manage long-running build sessions (shared status, log tailing, cancellation, artifact reporting), and trigger RunUAT-backed cook, build, and package pipelines with configurable platform, configuration, target, and output options.

## Key capabilities

- List target platforms known to the engine install with SDK availability and active-platform flags; list connected or known target devices filtered by platform with connection type, model ID, OS version, connected/authorized state
- List project build targets from `.Target.cs` files; list standard Unreal build configurations (Debug, DebugGame, Development, Shipping, Test); read project build metadata including engine version, code-project status, supported platforms, default target, and RunUAT path
- Create, poll, tail logs from, and cancel long-running build sessions; query session artifact output paths
- Submit cook, build, and package pipelines through RunUAT with configurable platform, configuration, target, additional UAT arguments, and output directory; poll pipeline execution status and retrieve output artifact paths

## Systems covered

- `ITargetPlatform` / `ITargetPlatformManagerModule` enumeration
- `FDesktopPlatformModule` build target enumeration
- `RunUAT.bat` pipeline execution (`BuildCookRun`, `Cook`, `Build`, `Package`)
- Session-scoped build status tracking with log streaming and cancellation handles
- Unreal build configurations: Debug, DebugGame, Development, Shipping, Test
