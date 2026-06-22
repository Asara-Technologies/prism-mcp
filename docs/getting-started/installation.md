# Installing PrismMCP

PrismMCP is available in two tiers. Both install as a standard Unreal Engine plugin.

## System requirements

- Unreal Engine 5.3, 5.4, 5.5, 5.6, 5.7, or 5.8
- Windows, macOS, or Linux
- An MCP-compatible client (Claude Code, Cursor, Claude Desktop, or any MCP client)

## Project compatibility

PrismMCP ships as precompiled binaries and works with both Blueprint-only and C++ projects on all supported engine versions. No source compilation or project conversion is required. The plugin is Editor-only and does not affect your game's runtime code or packaging.

## Lite (free)

1. Open the [Fab marketplace](https://www.fab.com/) and search for **PrismMCP**, or download directly from [asaratechnologies.com](https://www.asaratechnologies.com/products/prism-mcp/downloads).
2. Download PrismMCP Lite (free).
3. If using Fab, open your Library, find PrismMCP Lite, and click **Install to Engine** or **Add to Project**. If downloading directly, extract the plugin into your project's `Plugins/` folder.
4. Open your project in the Unreal Editor.
5. Go to **Edit > Plugins**, search for **PrismMCP**, and confirm it is enabled.
6. Restart the editor when prompted.

After restart, the editor log should contain a line confirming the plugin loaded:

```
LogPrismMCP: PrismMCP initialized
```

## Pro (Direct)

1. Purchase a Pro license ($49/yr) from [asaratechnologies.com](https://www.asaratechnologies.com/products/prism-mcp).
2. Go to the [downloads page](https://www.asaratechnologies.com/products/prism-mcp/downloads) and enter your license key.
3. Select your engine version and download the plugin package.
4. Extract the package into your project's `Plugins/` folder (or the engine's `Plugins/Marketplace/` folder for engine-wide use).
5. Open your project in the Unreal Editor.
6. Go to **Edit > Plugins**, search for **PrismMCP**, and confirm it is enabled.
7. Restart the editor when prompted.

### License activation (Pro only)

On first launch after installing Pro, a license activation dialog appears automatically. Enter your license key and click **Activate**. The key is tied to the machine (up to 3 machines per user).

If the dialog does not appear, open **Project Settings > Plugins > PrismMCP** and enter your key in the License Key field.

After activation, the editor log confirms:

```
LogPrismMCP: PrismMCP initialized
```

## Verifying the installation

Once the plugin is enabled and the editor has restarted, check the Output Log (Window > Developer Tools > Output Log) for the initialization message. If the message is present, PrismMCP is ready to accept MCP connections.

Next step: [Connecting Your Client](connecting-your-client.md)
