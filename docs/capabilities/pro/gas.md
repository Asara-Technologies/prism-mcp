# Gameplay Ability System

**Commands:** 63 | **Tier:** Pro

Gameplay Ability System authoring, runtime control, and debug introspection across six command clusters. Covers the full GAS asset authoring loop — attribute set discovery, effect and ability Blueprint creation, cue handler setup, and runtime application — plus debug snapshots for active effects, owned tags, attribute values, and cooldown state. Runtime commands resolve ASCs through `IAbilitySystemInterface`, direct component attachment, and PlayerState fallback, and remain handle-aware across PIE restarts and ASC resets.

## Key capabilities

- Discover loaded `UAttributeSet` classes and their `FGameplayAttributeData` fields using the stable `AttributeSetClass.AttributeName` form
- Read and write project GAS config through `UGameplayAbilitiesDeveloperSettings`; create and manage `UDataTable` assets with `FAttributeMetaData` row structs for attribute initialization
- Attach `UAbilitySystemComponent` instances to level actors, set replication mode, and instantiate default AttributeSets
- Create GameplayEffect Blueprints; set duration, period, stacking policy; add and remove modifier rows with `scalable_float`, `attribute_based`, `custom_calculation`, and `set_by_caller` magnitude payloads; manage modular `UGameplayEffectComponent` subobjects; add and remove cue rows
- Create GameplayAbility Blueprints; set instancing, network execution and security policy; assign cost and cooldown effect classes; write supported tag containers
- Create GameplayCue static and actor notify Blueprints; enforce the `GameplayCue.*` tag root; list loaded cue handlers and read cue summaries
- Apply and remove effects on live ASCs; give, activate, cancel, and clear abilities; set attribute base values; manage loose gameplay tags; fire GameplayCues
- Return ASC debug snapshots: active effects with remaining time, activatable abilities with activation state, current attribute values, owned tags, and per-ability cooldown remaining

## Systems covered

- `UAbilitySystemComponent` / `IAbilitySystemInterface`
- `UAttributeSet`, `FGameplayAttributeData`
- `UGameplayEffect`, `UGameplayEffectComponent`, `FGameplayModifierInfo`
- `UGameplayAbility`, `FGameplayAbilitySpec`
- `UGameplayCueNotify_Static`, `UGameplayCueNotify_Actor`
- `UGameplayAbilitiesDeveloperSettings`, `UAbilitySystemGlobals`
- `UDataTable` with `FAttributeMetaData` row struct
- `FGameplayTagContainer`, `FActiveGameplayEffectsContainer`
