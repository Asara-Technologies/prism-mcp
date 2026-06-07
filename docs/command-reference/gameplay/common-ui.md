# common-ui

**Feature area:** Gameplay systems
**Commands:** 14

[description pending]

## lifecycle

[description pending]

### `validate_common_ui_setup`

Project-wide CommonUI setup diagnostic. Scans Widget Blueprints under path_filter for broken UCommonActionWidget.InputActions row handles, missing DefaultRichTextDataClass, and empty UCommonGenericInputActionDataTable assets. Bounded by max_assets_scanned and max_findings. strict=true returns success=false with error_code='validation_failed'.

## read

[description pending]

### `get_activatable_widget_stack`

Inspect a CommonUI activatable widget stack or queue in active PIE. stack_path accepts an exact '<root_widget>.<stack_widget>' path or a bare stack name.

### `get_common_input_state`

Read current CommonInput state for a PIE LocalPlayer, including current input type, gamepad name, gamepad-derived boolean, and action-domain availability.

### `get_common_ui_settings`

Read the live UCommonUISettings via ICommonUIModule::GetSettings and UCommonUIInputSettings via static Get. Returns default style assets, rich text data class, platform traits, button accept key handling, UI action priority, and analog cursor settings.

### `list_action_widget_input_actions`

List FDataTableRowHandle entries on a Widget Blueprint widget property. widget_path uses '<widget_blueprint>.<widget_name>'; property_name defaults to InputActions.

### `list_common_ui_assets`

Discover CommonUI assets across the project filtered by asset kind. kind values: activatable_widget, action_widget, bound_action_bar, input_action_data_table, input_action_domain, input_action_domain_table, controller_data, rich_text_data, text_style, button_style, border_style, all (default). include_blueprints=true also walks one level of Blueprint native parent tags.

### `list_input_action_data_table_rows`

List rows from a UCommonGenericInputActionDataTable.

## write

[description pending]

### `add_action_widget_input_action`

Append a CommonUI input-action row handle to a Widget Blueprint widget property.

### `clear_activatable_widget_stack`

Clear non-root widgets from a CommonUI activatable stack or queue in active PIE.

### `create_input_action_data_table`

Create a UCommonGenericInputActionDataTable through the CommonUI editor factory. Optional rows seed CommonInputActionDataBase entries with row_name, display_name, hold_display_name, and nav_bar_priority.

### `pop_activatable_widget`

Pop the active widget, or a specific session-local widget_handle, from a CommonUI stack/queue in active PIE.

### `push_activatable_widget`

Push a UCommonActivatableWidget subclass into a CommonUI stack or queue in active PIE. The returned widget_handle is session-local and cleared when PIE ends.

### `remove_action_widget_input_action`

Remove matching CommonUI input-action row handles from a Widget Blueprint widget property.

### `set_common_input_type`

Set the current CommonInput type for a PIE LocalPlayer. This is snapshot-style; CommonInput may recalculate the type on the next real input event.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
