# Cluster-Gated Tool Loading

PrismMCP registers 2,000+ MCP tools. Loading all of them into an LLM's context
window on every request wastes tokens and crowds out the user's actual task.
Clusters let clients load only the tools they need.

## What Clusters Are

A cluster is a named group of semantically related commands -- for example,
`sequencer-keyframes` contains all keyframe add/remove/modify commands, and
`audio-cue` contains Sound Cue graph authoring commands. Each cluster holds
5-40 commands. Cluster IDs are stable, lowercase-kebab-case identifiers that
become part of the client configuration contract.

## How to Opt In

Include `prismClusters` in the `clientInfo` of your `initialize` handshake:

```json
{
  "method": "initialize",
  "params": {
    "clientInfo": {
      "name": "my-client",
      "version": "1.0.0",
      "prismClusters": ["blueprint-graph", "world-actors"]
    },
    "capabilities": {}
  }
}
```

The server responds with a `prismClusterSupport` block in `serverInfo`:

```json
{
  "serverInfo": {
    "name": "PrismMCP",
    "version": "1.5.0",
    "prismClusterSupport": {
      "enabled": true,
      "total_clusters": 72,
      "loaded_clusters": ["blueprint-graph", "world-actors"],
      "not_found": [],
      "bootstrap_tool_count": 15,
      "active_tool_count": 83
    }
  }
}
```

Passing an empty array (`"prismClusters": []`) is valid -- it enables
cluster-gated mode with only the bootstrap set loaded.

## Bootstrap Tools

Bootstrap tools are always available regardless of which clusters are loaded.
They include:

- Atlas discovery commands (`atlas_list_clusters`, `atlas_describe_cluster`,
  `atlas_list_modules`, `atlas_describe_command`, `atlas_search`)
- Cluster management commands (`load_clusters`, `unload_clusters`)
- Usage stats commands (`get_usage_stats`, `clear_usage_stats`)

Bootstrap clusters cannot be unloaded.

## Loading and Unloading at Runtime

Use the `load_clusters` and `unload_clusters` meta-tools to change your active
set during a session:

```json
// Load clusters
{
  "method": "tools/call",
  "params": {
    "name": "load_clusters",
    "arguments": {
      "clusters": ["sequencer-keyframes", "audio-cue"]
    }
  }
}
```

Response:

```json
{
  "loaded": ["sequencer-keyframes", "audio-cue"],
  "already_loaded": [],
  "not_found": [],
  "active_tool_count": 87
}
```

```json
// Unload clusters
{
  "method": "tools/call",
  "params": {
    "name": "unload_clusters",
    "arguments": {
      "clusters": ["audio-cue"]
    }
  }
}
```

Response:

```json
{
  "unloaded": ["audio-cue"],
  "not_loaded": [],
  "protected": [],
  "active_tool_count": 69
}
```

After any load or unload that changes the active set, the server fires a
`notifications/tools/list_changed` notification. Re-fetch `tools/list` to get
the updated tool schemas.

## Discovery Workflow

If you are not sure which cluster you need:

1. **Browse clusters** -- call `atlas_list_clusters` to see all available
   clusters with command counts, estimated schema sizes, and loaded status.

2. **Preview a cluster** -- call `atlas_describe_cluster` with a cluster ID
   to see command names, descriptions, and parameter counts before loading.

3. **Search by keyword** -- call `atlas_search` with `include_cluster: true`
   to find commands matching a keyword and see which cluster owns each result.

4. **Load the cluster** -- call `load_clusters` with the cluster ID to add
   its tools to your active set.

## Legacy Compatibility

Clients that omit `prismClusters` from the `initialize` handshake receive the
full tool set on every `tools/list` call -- the same behavior as before
cluster-gated loading was introduced. No client changes are required for
existing integrations.

## Pagination

`tools/list` supports cursor-based pagination. Each page returns up to 100
tools. Use the `nextCursor` field in the response to fetch the next page:

```json
// First page
{ "method": "tools/list", "params": {} }

// Subsequent pages
{ "method": "tools/list", "params": { "cursor": "<opaque-cursor-string>" } }
```

When `nextCursor` is absent from the response, you have reached the last page.

Tools are returned in a deterministic order: bootstrap tools first, then loaded
cluster tools sorted alphabetically by cluster ID, then alphabetically by
command name within each cluster.

## Stale Cursors

Cursors become stale after any of these events:

- Loading or unloading clusters in the current session
- A server-side manifest rebuild (hot-reload, extension registration)

A stale cursor returns an error asking you to re-fetch from the beginning.
This is by design -- the tool set changed, so page offsets are no longer valid.

## Unloaded Tool Execution

Calling a tool from an unloaded cluster still works. Deferred loading gates
discovery, not execution. The response includes a `_meta` advisory suggesting
which cluster to load:

```json
{
  "content": [{ "type": "text", "text": "..." }],
  "_meta": {
    "prism_cluster": "audio-metasound",
    "prism_cluster_loaded": false,
    "prism_hint": "Call load_clusters with 'audio-metasound' to add this cluster's tools to your active set."
  }
}
```

The `_meta` field uses the MCP-spec extension point. Compliant clients can
safely ignore it. The advisory appears only on success responses -- error
responses use their own diagnostic path.

## Multi-Session Isolation

Each client session maintains its own independent active set. Loading a cluster
in one session does not affect any other session. This applies to both HTTP
multi-client sessions and TCP connections.
