# PrismMCP Marketing and Docs - Claude Context

## What This Is

This repository is `Asara-Technologies/prism-mcp`, the public PrismMCP marketing, legal, and documentation content surface. The live checkout is content-only: README, legal pages, guides, examples, and generated command-reference markdown. It does not currently contain an Astro app or `package.json`.

## Navigation Map

| Surface | Path |
|---|---|
| Marketing README | `README.md` |
| Changelog | `CHANGELOG.md` |
| Legal stubs (pointers only) | `EULA.md`, `PRIVACY.md`, `REFUNDS.md` |
| Canonical legal text | `https://www.asaratechnologies.com/legal/` (not in this repo) |
| Getting started | `docs/getting-started/` |
| Guides | `docs/guides/` |
| Command reference | `docs/command-reference/capabilities/` |
| Examples | `docs/examples/` |
| GitHub issue templates | `.github/ISSUE_TEMPLATE/` |

## Build & Deploy

- There is no local Node build script in this checkout today.
- Treat command-reference markdown as generated output from the PrismMCP Atlas pipeline. Regenerate it from `D:\Dev\Plugins\PrismMCP`, not by hand, unless the change is clearly prose-only.
- Published website URLs live under `https://www.asaratechnologies.com/products/prism-mcp/`.
- Historical memory says the web property has been self-hosted on Unraid and not Vercel. Verify the current deployment repo and host before changing live deploy scripts.
- Historical analytics memory disagrees on the web property's analytics stack (Umami vs GoatCounter). Verify the live site before writing any analytics or privacy copy, and remember the binding statement now lives on the website, not here.

## Content Rules

- Keep README capability counts and generated command reference synchronized with shipped PrismMCP behavior.
- Do not invent feature availability from memory. Check `D:\Dev\Plugins\PrismMCP\docs\FEATURE_ROADMAP.md`, the current command catalog, and generated Atlas output.
- Avoid em dashes in new Asara copy. Use commas, colons, semicolons, parentheses, or sentence breaks.
- Preserve customer-facing precision. Pricing and entitlement language must be verified against the current source before edits.
- Never restate legal terms here. `EULA.md`, `PRIVACY.md`, and `REFUNDS.md` are pointer stubs by design; the binding text lives only at `asaratechnologies.com/legal/*`. A second copy in this repo is what caused the last drift, so do not reintroduce one, and do not summarize the terms inside the stubs.

### Product vocabulary (locked)

- The product is **PrismMCP**. **Free** and **Pro** are *plans* of that one product, never separate products.
- **Pro** is a kept word. Retired and not to be reintroduced: *Lite*, *Professional*, *Studio*, and Personal/Developer suffixes. `EMCPToolTier::Lite` stays as a C++ enum identifier that third-party extension authors compile against; that is a code symbol, not a product name.
- Retired: *Fab* as a distribution channel. There is no Fab prose in this repo.
- One artifact. Everyone downloads the same build from this repository's GitHub Releases. Activation happens in the Unreal editor UI only, never on the website and never over MCP.
- Facts you may state: Pro machine limit is 3; offline grace is 10 days; refunds run 30 days from date of purchase; Pro is $49/yr per user for 12 months with no auto-renewal.
- The GitHub Releases page has no attached assets yet. Do not write copy claiming a download works today.

## Business Context Memories

Durable facts that remain in per-project memory:

- Asara legal contact and privacy contact details.
- Paddle as the Direct-channel Merchant of Record.
- DataRep as the selected EU representative, pending verification before publication.
- Public roadmap section in the marketing README must be revisited when roadmap items ship, get cut, or get added.

## Git Rules

This repo is git-managed:

```powershell
git status
git add <paths>
git commit -m "<message>"
```

The canonical checkout may contain unrelated user edits. Stage only paths touched for the current task.
