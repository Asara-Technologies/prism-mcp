# automation

**Feature area:** Diagnostics
**Commands:** 4

[description pending]

## lifecycle

[description pending]

### `run_tests`

Start an async automation test session. Returns immediately with a session ID. Poll get_test_results for progress and results. Provide either 'filter' (prefix match) or 'test_paths' (explicit array). If both are provided, test_paths takes precedence.

### `stop_tests`

Stop all currently running automation tests. Returns state snapshot at stop time.

## read

[description pending]

### `get_test_results`

Poll the current or most recently completed test session for progress and results.

### `list_tests`

Enumerate available automation tests. Optionally filter by name prefix.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
