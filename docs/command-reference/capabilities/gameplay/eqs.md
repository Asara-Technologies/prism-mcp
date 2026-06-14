# eqs

**Feature area:** Gameplay systems
**Commands:** 17

Author and validate Environment Query System (EQS) assets. Add and remove query options, configure generators and tests, inspect reflected properties, and run structural validation on query graphs.

## read

Inspect Environment Query options, generators, tests, and their reflected properties. List available EQS classes.

### `add_query_option`

Add an EQS option with one generator instance.

### `add_smart_object_query_option`

Add an EQS option using Unreal's native Smart Objects generator.

### `get_env_query`

Inspect an Environment Query asset shell and runtime options.

### `get_generator_property`

Read a reflected property from an EQS option generator.

### `get_test_property`

Read a reflected property from an EQS option test.

### `list_eqs_classes`

List supported EQS generator, test, or context classes.

### `remove_query_option`

Remove an EQS option by index.

### `reorder_query_options`

Reorder all EQS options using a complete index permutation.

## validate

Validate an Environment Query's option, generator, and test structure for authoring errors.

### `validate_env_query`

Validate an Environment Query's option, generator, and test structure.

## write

Create queries, add options with generators, add tests, set properties, and reorder options.

### `add_test`

Add an EQS test to an option.

### `create_env_query`

Create a UEnvQuery asset shell for EQS authoring.

### `create_eqs_context_blueprint`

Create an EQS context Blueprint and stub the canonical provider events.

### `create_eqs_generator_blueprint`

Create an EQS generator Blueprint and stub the canonical generation events.

### `remove_test`

Remove an EQS test from an option by index.

### `set_generator_property`

Set a reflected property on an EQS option generator.

### `set_test_property`

Set a reflected property on an EQS option test.

### `update_env_query`

Explicitly synchronize an Environment Query editor graph back into the runtime query asset.

_Generated from commit `72ed403a48ac` at 2026-06-14T00:31:07Z._
