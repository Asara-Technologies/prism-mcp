# replication

**Feature area:** Replication and networking
**Commands:** 6

[description pending]

## read

[description pending]

### `get_actor_net_state`

Returns the network state of an actor: local role, remote role, authority, net mode, dormancy, replicates flag, and update frequencies. Requires an active PIE or play session.

### `get_actor_replication_info`

Returns per-actor replication graph metadata: cull distance, update frequency, dormancy, and containing nodes.

### `get_replication_graph`

Returns information about the active replication graph: class, node count, and connection count. Requires an active PIE session with a net driver using the ReplicationGraph plugin.

### `list_replicated_properties`

Enumerates all properties registered for replication on a class, with lifetime conditions, RepNotify callbacks, and push-model status.

### `list_rpc_functions`

Enumerates all RPC functions on a class with net type, reliability, validation, and parameter list.

## write

[description pending]

### `set_actor_net_state`

Mutates runtime replication state on an actor: replicates flag, dormancy, update frequencies. Runtime diagnostic mutation -- not undoable. Requires an active PIE or play session.

_Generated from commit `8812a051f27a` at 2026-06-07T19:01:04Z._
