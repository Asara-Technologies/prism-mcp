# bpc

**Feature area:** Blueprint authoring
**Commands:** 31

[description pending]

## read

[description pending]

### `dev_bpc_analyze_blueprint_convertibility`

Analyze a Blueprint asset for BPC convertibility, producing per-function verdicts and Mode A eligibility.

### `dev_bpc_backmap_errors`

Annotate raw generated C++ compiler diagnostics with Blueprint source-pin data.

### `dev_bpc_convert_function_surgical`

Mode A: surgically convert a single Blueprint function to a C++ helper and optionally patch the BP graph.

### `dev_bpc_dump_ast`

Lift a Blueprint function into the BPC AST and return diagnostics.

### `dev_bpc_generate_guided_conversion_workflow`

Generate a safe guided BPConv workflow report with explicit phase gates.

### `dev_bpc_generate_parity_inputs`

Generate deterministic parity input descriptors for a Blueprint function.

### `dev_bpc_generate_public_proof_report`

Generate a reproducible BPConv public proof report from coverage, parity, and L7 fixture metadata.

### `dev_bpc_list_converted_classes`

List Prism-generated converted classes for one BPC module.

### `dev_bpc_preview_emit`

Lift a Blueprint function and preview generated C++ text without writing files.

### `dev_bpc_project_conversion_coverage_report`

Generate a project-wide BPC conversion coverage report aggregating per-Blueprint verdicts.

### `dev_bpc_register_parity_test`

Register a parity test linking a Blueprint function to its generated C++ helper.

### `dev_bpc_remove_converted_function`

Remove a previously applied Mode A surgical conversion, restoring the original BP graph.

### `dev_bpc_run_parity_tests`

Run registered non-latent BPC parity tests from memory and/or a durable manifest.

### `dev_bpc_verify_conversion`

Verify that a generated native class is loaded after a BPC Path A rebuild.

### `dev_bpc_verify_module`

Check whether a generated BPC module is loaded in the current editor session.

## write

[description pending]

### `dev_bpc_batch_convert`

Batch-plan or stage Blueprint-to-C++ Mode B/Mode D conversions with dependency ordering.

### `dev_bpc_compile_and_diagnose_conversion`

Compile a generated BPC class/module and return classified, backmapped diagnostics.

### `dev_bpc_confirm_replacement_deletion`

Mode B: verify unresolved references before manually deleting the source Blueprint.

### `dev_bpc_convert_class_mode_b`

Mode B: generate and stage a native replacement class for selected Blueprint functions/events.

### `dev_bpc_convert_class_mode_d`

Mode D: generate and stage a native parent class for selected Blueprint functions/events.

### `dev_bpc_convert_function`

Stage generated C++ for one Blueprint function and return the next Path A phase.

### `dev_bpc_convert_type_assets`

Preview or stage native USTRUCT/UENUM code for Blueprint user-defined struct and enum assets.

### `dev_bpc_external_rebuild`

Run UBT for a generated BPC module and return raw compiler diagnostics.

### `dev_bpc_initialize_module`

Create a Prism-managed C++ module skeleton and add it to a .uproject file.

### `dev_bpc_patch_replacement_references`

Mode B: patch eligible Blueprint references to a compiled native replacement class.

### `dev_bpc_preview_reparent`

Mode D: validate and preview reparenting a Blueprint to a compiled native parent.

### `dev_bpc_remove_converted_class`

Remove one Prism-generated converted class file set from a BPC module.

### `dev_bpc_rename_symbol`

Preview or apply a safe post-emit rename across generated BPC C++ and sidecars.

### `dev_bpc_reparent_blueprint`

Mode D: reparent a Blueprint to a compiled native parent after generation/build review.

### `dev_bpc_scan_replacement_references`

Mode B: scan in-project references to a Blueprint-generated class.

### `dev_bpc_uninitialize_module`

Dry-run or remove a Prism-managed C++ module from disk and the .uproject file.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
