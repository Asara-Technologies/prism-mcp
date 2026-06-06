# Source Control

**Commands:** 43 | **Tier:** Pro

Source control integration covering write-readiness checks, file and actor checkout/revert, changelist management, file submission and sync, shelving, conflict resolution, cross-branch status tracking, structured asset diffing, and revision history queries. Commands route through the active Unreal Editor source control provider (Perforce, Git, SVN, or custom) and fall back gracefully when a provider is unavailable. Actor-scoped commands work against per-actor OFPA packages; file-scoped commands accept asset paths, package paths, config files, and arbitrary disk files.

## Key capabilities

- Check write readiness for targets (asset, package, config file, disk file, or actor) without mutating; get structured diagnostics covering provider, filesystem, package, and source control state, with a `recommended_action` field
- Bulk write-readiness checks across multiple targets with aggregate counts (ready, blocked, prepare-required)
- Prepare individual targets for editing via provider checkout or filesystem make-writable fallback; does not save packages
- Check out, revert, and list SCC status for actor packages individually or in bulk; read actor package revision history
- Check out and revert arbitrary files; mark files for add and delete; revert unchanged files
- List pending changelists; create, edit, delete, and move files between changelists; get shelved files and changelist details
- Preview submission readiness (can_checkin, is_conflicted, warnings) without mutating; submit/checkin files with conflict and readiness gates (requires `confirm: true`)
- Get per-file sync state (is_current, needs_sync, overwrite_risk); sync files to head or specific revision with dirty-package safety (requires `confirm: true`)
- Shelve and unshelve files within a changelist; download specific file revisions to a temp path
- Structured property-level asset diff between two live assets or between an asset and a historical revision
- Register branches for cross-branch status monitoring; read which branches have a file checked out or modified
- Query conflict state and resolve info for files; resolve conflicts (accept-yours) and branch files with integration history

## Systems covered

- `ISourceControlProvider` / `ISourceControlModule` (provider-agnostic)
- `ISourceControlRevision` revision download
- `ISourceControlChangelistState`, changelist CRUD
- `UPackage` dirty-state and write-readiness pipeline
- Per-actor OFPA package SCC operations (`FWorldPartitionActorDesc`-backed handles)
- Asset diff via `UE::Diff::DiffAssets` / property-level comparison
- Cross-branch status via registered branch list
