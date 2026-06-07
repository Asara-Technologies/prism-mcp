# play-session

**Feature area:** Editor runtime
**Commands:** 6

[description pending]

## lifecycle

[description pending]

### `start_play_session`

Request PIE, SIE, floating-window, or standalone-process play. Poll status for completion.

### `stop_play_session`

Request that the current PIE/SIE session stop. Teardown is asynchronous; poll get_play_session_status.

### `toggle_play_simulation`

Request a PIE <-> SIE possess/eject toggle for the active play session.

## read

[description pending]

### `get_play_session_status`

Return live Play In Editor / Simulate In Editor session state. This is never cached.

### `list_play_session_worlds`

List live PIE world contexts for the current play session. This is never cached.

## write

[description pending]

### `set_play_session_paused`

Pause or resume all active PIE/SIE worlds.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
