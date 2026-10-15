# Installing PrismMCP

PrismMCP installs as a standard Unreal Engine plugin. There is one build: the Free plan and the Pro plan use the same artifact, so the install below is the whole story. Pro is unlocked afterwards by activating a license key in the editor.

## System requirements

- Unreal Engine 5.3, 5.4, 5.5, 5.6, 5.7, or 5.8
- Windows, macOS, or Linux
- An MCP-compatible client (Claude Code, Cursor, Claude Desktop, or any MCP client)
- A C++ toolchain for the first-launch module rebuild, even for Blueprint-only projects. On Windows, install Visual Studio 2022 with the **Desktop development with C++** workload and a Windows SDK.

## Project compatibility

PrismMCP ships precompiled binaries for the supported engine versions and works with both Blueprint-only and C++ projects. On first launch, Unreal compiles a small loader module against your engine build, so a C++ toolchain is required. No project conversion is required. The plugin is Editor-only and does not affect your game's runtime code or packaging.

## Install

1. Get the plugin package. Builds will be published to this repository's [Releases page](https://github.com/Asara-Technologies/prism-mcp/releases/latest). During the beta, email [sales@asaratechnologies.com](mailto:sales@asaratechnologies.com) for a build.
2. Extract the package into your project's `Plugins/` folder (or the engine's `Plugins/Marketplace/` folder for engine-wide use).
3. Open your project in the Unreal Editor. On first launch, accept the prompt to rebuild PrismMCP's loader module (see [First launch: the rebuild prompt](#first-launch-the-rebuild-prompt)).
4. Go to **Edit > Plugins**, search for **PrismMCP**, and confirm it is enabled.
5. Restart the editor when prompted.

After restart, the editor log should contain a line confirming the plugin loaded:

```
LogPrismMCP: PrismMCP initialized
```

That is the complete install. Everything on the Free plan works from here: no license key, no account, and no network call to Asara.

## First launch: the rebuild prompt

The small loader module, `PrismMCPBootstrap` (and, in some releases, `PrismMCPProtocol`), ships as source and must be compiled against your exact engine build. The first time you open a project after installing, Unreal shows a dialog like this:

> Missing `<YourProject>` Modules
>
> The following modules are missing or built with a different engine version: PrismMCPBootstrap [, PrismMCPProtocol]
>
> Would you like to rebuild them now?

Click **Yes**. Unreal compiles the loader module and continues to start. **A C++ toolchain is required even for Blueprint-only projects.** On Windows, install Visual Studio 2022 with the **Desktop development with C++** workload and a Windows SDK. This does not convert your Blueprint project to C++.

If you click **No**, PrismMCP does not start. Reopen the project and click **Yes**, or compile the project from your IDE. If no compiler is installed, install the toolchain above and relaunch. For unattended launches, open the project interactively once so you can accept the prompt.

## Activating Pro (optional)

Pro adds the production toolkit to the build you already installed. You do not download anything different.

1. Buy a Pro license ($49/yr per user) from [asaratechnologies.com](https://www.asaratechnologies.com/products/prism-mcp).
2. Launch the editor. The license activation dialog appears automatically. Enter your license key and click **Activate**.
3. If the dialog does not appear, open **Project Settings > Plugins > PrismMCP** and enter your key in the License Key field.

Activation happens in the Unreal Editor UI and nowhere else. It is not performed on the website, and it is not exposed as an MCP command. One key covers up to 3 machines, runs for 12 months without auto-renewal, and keeps working for 10 days offline between verifications.

## Verifying the installation

Once the plugin is enabled and the editor has restarted, check the Output Log (Window > Developer Tools > Output Log) for the initialization message. If the message is present, PrismMCP is ready to accept MCP connections.

Next step: [Connecting Your Client](connecting-your-client.md)
