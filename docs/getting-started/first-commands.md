# First Commands

This walkthrough takes about 5 minutes. You should have PrismMCP installed and your MCP client connected (see [Connecting Your Client](connecting-your-client.md)).

## 1. Verify the connection

Send `ping` to confirm PrismMCP is responding:

```
ping
```

Expected response:

```json
{"message": "pong"}
```

## 2. Check project metadata

Call `get_project_build_info` to see details about the current project and engine version:

```
get_project_build_info
```

This returns the project name, engine version, default build target, supported platforms, and other build metadata. A successful response confirms the plugin has full access to the editor's project context.

## 3. See what is in the level

Call `get_actors_in_level` to list every actor in the currently loaded level:

```
get_actors_in_level
```

The response includes each actor's name, class, and transform (location, rotation, scale). If you are using the default template level, you should see lights, a sky sphere, a floor, and a player start.

## 4. Spawn an actor

Use `spawn_actor` to place a new static mesh cube in the level:

```
spawn_actor type=StaticMeshActor name=MyCube
```

Switch to the editor viewport -- the cube should appear at the world origin. The response confirms the actor's name and path.

## 5. Undo the spawn

Call `undo` to remove the cube you just spawned:

```
undo
```

The response includes the undo count and redo count after the operation. Check the viewport to confirm the cube is gone.

## Next steps

You now have a working PrismMCP connection with verified round-trip editor control. From here:

- Browse the full command list by calling `tools/list` in your MCP client.
- Explore the command reference in [`../command-reference/`](../command-reference/) for commands grouped by module.
- See [Configuration](configuration.md) for port, security, and logging options.
