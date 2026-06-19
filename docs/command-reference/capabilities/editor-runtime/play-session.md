# play-session

**Feature area:** Editor runtime
**Commands:** 6

Control Play In Editor (PIE) and Simulate In Editor (SIE) sessions. Start, stop, pause, and toggle between PIE and SIE modes. Poll session status and enumerate active PIE world contexts.

## lifecycle

Start, stop, and toggle between PIE and SIE play sessions.

### `start_play_session`

Request PIE, SIE, floating-window, or standalone-process play. Poll status for completion.

### `stop_play_session`

Request that the current PIE/SIE session stop. Teardown is asynchronous; poll get_play_session_status.

### `toggle_play_simulation`

Request a PIE <-> SIE possess/eject toggle for the active play session.

## read

Poll live play session status and enumerate active PIE world contexts.

### `get_play_session_status`

Return live Play In Editor / Simulate In Editor session state. This is never cached.

### `list_play_session_worlds`

List live PIE world contexts for the current play session. This is never cached.

## write

Pause or resume active PIE/SIE worlds.

### `set_play_session_paused`

Pause or resume all active PIE/SIE worlds.

_Generated from commit `e781acb47330` at 2026-06-19T07:41:40Z._
