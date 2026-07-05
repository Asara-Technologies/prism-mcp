# PrismMCP Marketing and Docs - Claude Context

## What This Is

This repository is `Asara-Technologies/prism-mcp`, the public PrismMCP marketing, legal, and documentation content surface. The live checkout is content-only: README, legal pages, guides, examples, and generated command-reference markdown. It does not currently contain an Astro app or `package.json`.

## Navigation Map

| Surface | Path |
|---|---|
| Marketing README | `README.md` |
| Changelog | `CHANGELOG.md` |
| Legal pages | `EULA.md`, `PRIVACY.md`, `REFUNDS.md` |
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
- Historical analytics memory says Umami was configured for the web property, while the current `PRIVACY.md` names GoatCounter. Verify the live site and privacy posture before changing analytics copy.

## Content Rules

- Keep README capability counts, legal pages, and generated command reference synchronized with shipped PrismMCP behavior.
- Do not invent feature availability from memory. Check `D:\Dev\Plugins\PrismMCP\docs\FEATURE_ROADMAP.md`, the current command catalog, and generated Atlas output.
- Use the current product names from this repo: Lite through Fab, Pro direct from Asara.
- Avoid em dashes in new Asara copy. Use commas, colons, semicolons, parentheses, or sentence breaks.
- Preserve customer-facing precision. Legal, pricing, privacy, and entitlement language must be verified against the current source before edits.

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
