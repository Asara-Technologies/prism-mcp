# gas

**Feature area:** Gameplay systems
**Commands:** 65

[description pending]

## lifecycle

[description pending]

### `activate_ability_by_class`

Activate an ability by class.

### `activate_ability_by_tag`

Activate all abilities matching a tag.

### `apply_gameplay_effect_to_actor`

Apply a GameplayEffect class to an actor ASC.

### `cancel_abilities_with_tag`

Cancel active abilities matching a tag.

### `cancel_ability_by_class`

Cancel active abilities by class.

### `execute_gameplay_cue`

Execute a GameplayCue on an ASC.

### `give_ability`

Give a GameplayAbility class to an actor ASC.

## read

[description pending]

### `find_cue_notify_assets`

Find all GameplayCueNotify assets (static and actor) registered in the cue manager. Supports tag prefix filter and type filter.

### `find_cue_tags_without_notifies`

Find registered GameplayCue tags that have no corresponding notify asset -- orphan tags that silently fail at runtime.

### `get_ability_system_globals`

Read Gameplay Ability System project settings.

### `get_ability_system_snapshot`

Read a full ASC snapshot.

### `get_attribute_init_row`

Read one FAttributeMetaData row.

### `get_attribute_set_attributes`

List reflected Gameplay Attribute fields on an AttributeSet class.

### `get_attribute_value`

Get an ASC attribute base/current value.

### `get_cooldown_time_remaining`

Read cooldown remaining for a granted ability class.

### `get_gameplay_ability_summary`

Read GameplayAbility authoring summary.

### `get_gameplay_cue_summary`

Read GameplayCueNotify summary.

### `get_gameplay_effect_summary`

Read GameplayEffect authoring summary.

### `get_owned_gameplay_tags`

Read owned Gameplay Tags on an ASC.

### `list_activatable_abilities`

List activatable abilities on an ASC.

### `list_active_gameplay_effects`

List active GameplayEffects on an ASC.

### `list_attribute_set_classes`

List loaded UAttributeSet subclasses.

### `list_attributes`

List ASC attributes grouped by set.

### `list_gameplay_cue_handlers`

List loaded GameplayCueNotify Blueprint handlers.

### `list_gameplay_effect_modifiers`

List GameplayEffect modifiers.

## write

[description pending]

### `add_gameplay_cue`

Add a persistent GameplayCue to an ASC.

### `add_gameplay_cue_on_effect`

Append a GameplayEffect cue tag.

### `add_gameplay_effect_component`

Add a GameplayEffectComponent subobject.

### `add_gameplay_effect_modifier`

Append a GameplayEffect modifier row.

### `add_loose_gameplay_tag`

Add a loose Gameplay Tag to an ASC.

### `attach_ability_system_component`

Attach an AbilitySystemComponent to an actor.

### `clear_ability`

Clear an ability by spec handle.

### `clear_all_abilities`

Clear all abilities on an actor ASC.

### `clear_gameplay_ability_cooldown_effect`

Clear GameplayAbility cooldown GameplayEffect class.

### `clear_gameplay_ability_cost_effect`

Clear GameplayAbility cost GameplayEffect class.

### `create_attribute_init_datatable`

Create a DataTable using FAttributeMetaData rows.

### `create_gameplay_ability`

Create a GameplayAbility Blueprint.

### `create_gameplay_cue_notify_actor`

Create an actor GameplayCueNotify Blueprint.

### `create_gameplay_cue_notify_static`

Create a static GameplayCueNotify Blueprint.

### `create_gameplay_effect`

Create a GameplayEffect Blueprint.

### `modify_attribute_base`

Set an ASC attribute base value.

### `remove_active_gameplay_effect_handle`

Remove an active GE by handle.

### `remove_attribute_init_row`

Remove one FAttributeMetaData row.

### `remove_gameplay_cue`

Remove a persistent GameplayCue from an ASC.

### `remove_gameplay_cue_on_effect`

Remove a GameplayEffect cue by index.

### `remove_gameplay_effect_component`

Remove a GameplayEffectComponent by handle.

### `remove_gameplay_effect_modifier`

Remove a GameplayEffect modifier.

### `remove_gameplay_effects_by_class`

Remove active GEs by source class.

### `remove_gameplay_effects_with_tag`

Remove active GEs matching all tags.

### `remove_loose_gameplay_tag`

Remove a loose Gameplay Tag from an ASC.

### `set_ability_system_globals`

Set one Gameplay Ability System project setting.

### `set_attribute_init_row`

Add or replace one FAttributeMetaData row.

### `set_gameplay_ability_cooldown_effect`

Set GameplayAbility cooldown GameplayEffect class.

### `set_gameplay_ability_cost_effect`

Set GameplayAbility cost GameplayEffect class.

### `set_gameplay_ability_instancing_policy`

Set GameplayAbility InstancingPolicy.

### `set_gameplay_ability_net_execution_policy`

Set GameplayAbility NetExecutionPolicy.

### `set_gameplay_ability_net_security_policy`

Set GameplayAbility NetSecurityPolicy.

### `set_gameplay_ability_tag_container`

Set a GameplayAbility tag container.

### `set_gameplay_cue_tag`

Set a GameplayCueNotify GameplayCueTag.

### `set_gameplay_effect_application_requirement`

Set CustomCanApply requirement class.

### `set_gameplay_effect_duration_policy`

Set GameplayEffect DurationPolicy.

### `set_gameplay_effect_period`

Set GameplayEffect period.

### `set_gameplay_effect_stacking`

Set GameplayEffect stacking fields.

### `set_replication_mode`

Set an actor ASC replication mode.

### `update_gameplay_effect_modifier`

Patch a GameplayEffect modifier by property payload.

_Generated from commit `6b418668437a` at 2026-06-07T20:56:46Z._
