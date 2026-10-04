# Capability-Group Tool Loading

The `invoke_command` workflow below describes the upcoming release; it is not
included in the currently downloadable v0.3.0 build.

PrismMCP starts with a compact, useful editor surface instead of placing the
entire command catalog in an agent's context. `core-editor` is the default:
Blueprint authoring and graph editing, ordinary world editing, essential editor
control, editor context, and read-only health/error visibility are available
immediately. Load specialist capability groups only when the task needs them.

Capability groups are user-facing, domain-oriented loading units such as
`blueprint-authoring`, `performance-profiling`, `sequencer`, or
`project-settings`. They are not implementation modules and they are not the
historical `read`/`write`/`manage` registration lanes.

## Startup surface

PrismMCP accepts an optional `clientInfo.prismMcp.startup` extension during the
MCP `initialize` handshake:

```json
{
  "method": "initialize",
  "params": {
    "clientInfo": {
      "name": "my-client",
      "version": "1.0.0",
      "prismMcp": {
        "startup": {
          "mode": "groups",
          "groups": ["blueprint-authoring", "editor-observability"]
        }
      }
    },
    "capabilities": {}
  }
}
```

| Mode | Behavior |
|---|---|
| Omitted or `core-editor` | Permanent discovery plus the protected `core-editor` allowlist. This is the normal default. |
| `groups` | Permanent discovery plus exactly the non-empty, unique canonical IDs in `groups`. |
| `all` | Permanent discovery plus every capability group eligible for this build, edition, and engine. |

`groups` is valid only with `mode: "groups"`. Invalid mode values, empty or
duplicate group arrays, unknown IDs, and groups supplied to another mode are
initialize validation errors. PrismMCP never silently widens the visible tool
surface.

`core-editor` is a protected profile, not a capability group. It cannot be
unloaded and does not change a command's canonical capability-group owner.

## Permanent discovery and invocation tools

These tools are always available:

- `atlas_search`
- `atlas_list_groups`
- `atlas_describe_group`
- `atlas_describe_command`
- `load_capability_groups`
- `unload_capability_groups`
- `get_loaded_capability_groups`
- `invoke_command`

"Always available" means two things, and a client can rely on either one:

- **They are always callable by name.** `tools/call` reaches them whether or not
  they appeared in the client's copy of `tools/list`.
- **They are always on the first page of `tools/list`.** `tools/list` is
  paginated, and the discovery tools are pinned ahead of every capability group
  so they cannot be pushed onto a later page. This holds no matter how many
  commands are registered — a project contributing several hundred AICallable
  commands of its own does not displace them.

The second guarantee is what makes the first one discoverable. A client that
fetches `tools/list` once, without following `nextCursor`, still sees the tools
it needs in order to find everything else.

`atlas_search` is the normal starting point when an agent knows the task but
not the command. It searches command names, curated intent terms, aliases,
use-when text, descriptions, examples, and group names using deterministic,
offline ranking. Results say why they matched, whether their canonical group is
loaded, and include a ready-to-use next action.

For example, searching for a hitch starts with the current frame summary that
is already in `core-editor`, then points to the unloaded
`performance-profiling` group for trace-based diagnosis:

```json
{
  "name": "atlas_search",
  "arguments": {
    "query": "why is the editor hitching",
    "limit": 8
  }
}
```

Use `atlas_describe_command` for full schemas, examples, failure modes, and
related commands. Use `atlas_describe_group` for a paginated command summary,
group purpose, safety mix, and related groups.

## Loading and unloading

Loading groups curates the visible tool list. To call a registered command
without loading its group, use `atlas_search`, inspect its schema with
`atlas_describe_command`, then call the permanent Free `invoke_command` tool:

```json
{"name":"invoke_command","arguments":{"command":"capture_viewport","arguments":{"output_path":"Saved/capture.png"}}}
```

This returns the same `content`, `isError` and `structuredContent` as a direct
target call. Target validation, entitlement, dispatch guards and development
build restrictions remain in force. It does not modify loaded groups. Recursion,
discovery/subscription meta-tools (including aliases), and `execute_script` are
refused with `invoke_target_not_allowed`; call them directly. Allowlisting
`invoke_command` allowlists every callable command, including destructive ones.
Direct unloaded-call errors retain `next_action` and add an `alternatives` entry
containing the equivalent invocation. Usage stays under the target name, with
`get_usage_stats.commands[].via_counts.invoke_command` counting this route.

Load one or more capability groups with `load_capability_groups`:

```json
{
  "method": "tools/call",
  "params": {
    "name": "load_capability_groups",
    "arguments": {
      "groups": ["performance-profiling"]
    }
  }
}
```

The request is transactional. PrismMCP validates every requested group and the
projected tool/schema budget before changing the session. If one group is
unknown, ineligible, or over budget, no group is loaded. Already-loaded groups
are reported as no-ops.

Successful changes send one `notifications/tools/list_changed` notification.
The response reports added or removed command/schema bytes and the new session
totals. Clients that do not consume the notification should refresh
`tools/list` after the response.

Use `unload_capability_groups` with the same `groups` argument to remove a
specialist group. Permanent discovery and `core-editor` cannot be unloaded.

The unload response reports `unloaded` (groups removed by this call),
`not_loaded` (requested IDs the session was not carrying, including unknown
ones), and `active_tool_count`. There is no unload-refusal list: `core-editor`
is a profile of individual commands rather than a group, so no group is ever
refused on protection grounds. An earlier response shape carried a `protected`
array for that case; it never held anything and has been removed.

## Calling an unloaded command

Direct `tools/call` does not auto-load or execute a command that is known but unavailable
in the active session. It refuses before handler dispatch and gives the exact
retry action:

```json
{
  "isError": true,
  "error_code": "capability_group_not_loaded",
  "command": "add_blueprint_variable",
  "capability_group": "blueprint-authoring",
  "next_action": {
    "tool": "load_capability_groups",
    "arguments": {
      "groups": ["blueprint-authoring"]
    }
  },
  "alternatives": [{
    "tool": "invoke_command",
    "arguments": {
      "command": "add_blueprint_variable",
      "arguments": {}
    }
  }]
}
```

Unknown commands receive normal not-found guidance. Commands unavailable for
the current edition, engine, build, or development-only policy receive a
generic unavailable result; they are not exposed through search, group
listing, descriptions, or `mode: "all"`.

## Session and reconnect behavior

Capability state belongs to one client session. Loading a group in one session
does not affect another HTTP or TCP client. On a reconnect, the shim restores
the original startup intent, then applies only successful group-state changes
that differ from that startup surface. It does not send unload requests for
groups absent from the original startup mode; a direct unload of a known but
not-loaded group still returns `capability_group_not_loaded`. The shim never
replays ordinary command calls or work mutations. If restoration fails, the
session remains safely on `core-editor` and reports the failure.

## Discover, load, execute

Invoke a specialist command without changing the visible tool list:

```text
atlas_search -> atlas_describe_command -> invoke_command
```

To expose its tools directly, use:

```text
atlas_search
  -> atlas_describe_command or atlas_describe_group
  -> load_capability_groups
  -> tools/list refresh
  -> execute
```

For generated command detail, use the Atlas rather than copying tool schemas
into client configuration. See `docs/COMMAND_CATALOG.md` for the human-facing
catalog and the extension guides for adding project-specific commands.
