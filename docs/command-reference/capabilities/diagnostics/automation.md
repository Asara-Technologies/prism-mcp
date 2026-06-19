# automation

**Feature area:** Diagnostics
**Commands:** 4

Run and monitor Unreal Automation Tests from the editor. Start async test sessions by filter or explicit path list, poll for progress and structured results, and stop running sessions.

## lifecycle

Start and stop async automation test sessions.

### `run_tests`

Start an async automation test session. Returns immediately with a session ID. Poll get_test_results for progress and results. Provide either 'filter' (prefix match) or 'test_paths' (explicit array). If both are provided, test_paths takes precedence.

### `stop_tests`

Stop all currently running automation tests. Returns state snapshot at stop time.

## read

Poll test results and enumerate available automation tests by name prefix.

### `get_test_results`

Poll the current or most recently completed test session for progress and results.

### `list_tests`

Enumerate available automation tests. Optionally filter by name prefix.

_Generated from commit `e781acb47330` at 2026-06-19T07:41:40Z._
