# Blueprint-to-C++ Conversion

**Commands:** 31 | **Tier:** Pro

An agent-driven pipeline for converting Blueprint functions and classes to generated C++ with explicit review gates at every mutating step. The pipeline is not one-click conversion — it is designed so an agent can analyze convertibility, preview the exact file write-set, stage generated code, trigger rebuilds, verify native reflection, run parity checks, and then apply graph patches, reference patches, reparenting, or deletion as separate confirmed steps. Unsupported and approximate conversions surface as structured diagnostics, not silent failures.

## Key capabilities

- Analyze per-function convertibility and get project-wide conversion coverage reports before writing any files
- Generate a guided workflow plan for Mode A, B, or D conversion — including the exact command sequence, mutation policy for each gate, and parity/proof tasks
- Dry-run any conversion to inspect the complete write-set and diagnostics without touching generated files, sidecars, Blueprint graphs, or assets
- Stage generated C++ files with content-hash and manual-edit protection through Prism-managed sidecars
- Run UBT/Live Coding rebuilds and map generated-line failures back to source Blueprint pins where sidecars exist
- Register parity tests and generate public proof reports covering conversion coverage, non-latent parity, and claim boundaries
- Mode A surgical helper: convert one eligible function to a C++ helper and patch or restore the Blueprint graph
- Mode B native replacement: scan and patch Blueprint references to a replaced class; source Blueprint deletion requires explicit confirmation
- Mode D native parent: preview reparenting before applying it; component default replay is allowlist-controlled with structured skip diagnostics for anything not replayed; rollback reads `.prism.moded` sidecar metadata
- Convert Blueprint UserDefinedStruct and UserDefinedEnum assets to native type headers with a scoped type map sidecar
- Backmap UBT error lines to Blueprint source pins using sidecar diagnostics
- Replication-aware Mode D: replicated variables get DOREPLIFETIME, RPCs get Server/Client/NetMulticast specifiers, OnRep callbacks are synthesized, replicated components call SetIsReplicatedByDefault
- Interface-aware Mode D: native interfaces appear in the C++ inheritance list, unlifted interface functions get default-returning stubs, BlueprintNativeEvent overrides use _Implementation suffix
- GAS-aware Mode D: GameplayAbility Blueprints convert with full CDO metadata (instancing/network policies, tag containers, cost/cooldown class references, ability triggers) and K2_ Blueprint events map to native C++ overrides with correct Super call positioning; AttributeSet Blueprints get ATTRIBUTE_ACCESSORS macros and GAMEPLAYATTRIBUTE_REPNOTIFY in OnRep callbacks

## Systems covered

- `UBlueprint` / `UBlueprintGeneratedClass` conversion pipeline
- Mode A (function-to-helper), Mode B (native replacement), Mode D (native parent) conversion modes
- UBT / Live Coding rebuild integration via `dev_bpc_external_rebuild`
- Prism sidecar system (`.prism.bpcd`, `.prism.moded`, `.prism.bpctypes`)
- `FBlueprintEditorUtils`, Blueprint graph patching, reparenting via Blueprint CDO
- UE reflection verification (`UClass::FindFunctionByName`, `UE::Reflection`)
- `UUserDefinedStruct`, `UUserDefinedEnum` type-asset conversion
- Parity manifest and public proof report generation
