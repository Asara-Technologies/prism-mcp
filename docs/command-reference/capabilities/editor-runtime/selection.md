# selection

**Feature area:** Editor runtime
**Commands:** 3

Read and manipulate the editor's actor and Content Browser selection. Get current selection, replace it, or clear it.

## read

Return the current editor actor selection and Content Browser asset selection.

### `get_editor_selection`

Return the current editor actor selection and primary Content Browser asset selection.

## write

Replace or clear the editor actor and Content Browser selection.

### `clear_editor_selection`

Clear the editor actor selection and primary Content Browser asset selection.

### `set_editor_selection`

Replace the editor actor and Content Browser asset selection. Omitted actor/assets arrays are treated as empty.

_Generated from commit `b939b51256dd` at 2026-06-13T22:48:19Z._
