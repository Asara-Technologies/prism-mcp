# replication

**Feature area:** Replication and networking
**Commands:** 6

Inspect and modify network replication state during PIE. Read per-actor net roles, dormancy, and replication graph placement. Enumerate replicated properties and RPC functions. Mutate runtime replication parameters for diagnostics.

## read

Inspect per-actor net roles, dormancy, replication graph metadata, replicated properties, and RPC function declarations.

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

Mutate runtime replication state on actors for diagnostic purposes during PIE.

### `set_actor_net_state`

Mutates runtime replication state on an actor: replicates flag, dormancy, update frequencies. Runtime diagnostic mutation -- not undoable. Requires an active PIE or play session.

_Generated from commit `72ed403a48ac` at 2026-06-14T00:31:07Z._
