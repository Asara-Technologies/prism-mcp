# PrismMCP Download Redemption Page

This directory is a static GitHub Pages surface for PrismMCP download redemption.
It is intentionally self-contained: `index.html` loads only `redeem.js`, uses no
external scripts, and reads the license-server origin from one deploy-time
configuration knob:

```html
<meta name="license-server-origin" content="https://license.asaratechnologies.com">
```

Source spec:
`docs/superpowers/specs/2026-05-30-download-redemption-flow-design.md`

GitHub Pages should serve this repository from the `main` branch root. The
redemption page is then available at `/prism-mcp/redeem/`.

## Manual Verification Checklist

1. Serve the repository root locally or open the GitHub Pages build.
2. Confirm the page renders without browser console errors.
3. Confirm the form asks for email address and activation/license credential.
4. Submit a known-good beta activation code and matching email.
5. Confirm the catalog renders available builds without changing the URL query.
6. Click a build download button and confirm the browser navigates to the signed
   download URL returned by `/v1/downloads/url`.
7. Submit a wrong credential and confirm the inline error says the email or code
   was not recognized while preserving the email input.
8. Repeat one download immediately and confirm the cooldown copy is specific to
   one download per minute per build.
9. In devtools, verify no cookies, `localStorage`, or `sessionStorage` writes are
   made during the catalog and download interactions.
