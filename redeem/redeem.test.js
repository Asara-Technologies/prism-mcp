import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import path from "node:path";

const FIXTURE_HTML = fs.readFileSync(path.resolve("redeem/index.html"), "utf8");
const FIXTURE_JS = fs.readFileSync(path.resolve("redeem/redeem.js"), "utf8");

async function loadPage() {
  document.documentElement.innerHTML = FIXTURE_HTML.replace(/<!DOCTYPE[^>]*>/i, "");
  new Function(FIXTURE_JS)();
  await Promise.resolve();
}

async function flushAsyncWork() {
  await Promise.resolve();
  await Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 0));
}

async function renderCatalog() {
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: async () => ({
      tier: "beta",
      primary_email_masked: "t***@example.com",
      builds: [
        {
          plugin_version: "1.0.0",
          ue_version: "5.7",
          platform: "Win",
          asset_name: "PrismMCP-Beta-UE5.7-Win.zip",
          size_bytes: 100,
          published_at: "2026-05-01T00:00:00Z",
          is_latest: true
        }
      ]
    })
  });

  document.querySelector('input[name="email"]').value = "t@example.com";
  document.querySelector('input[name="credential"]').value = "PRISM-TEST-CODE-FAKE";
  document.querySelector("form").dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  await flushAsyncWork();
}

describe("redeem page", () => {
  let originalCookieDescriptor;
  let cookieWrites;
  let storageSetSpy;
  let originalLocationAssign;

  beforeEach(async () => {
    cookieWrites = 0;
    originalCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, "cookie");
    Object.defineProperty(document, "cookie", {
      configurable: true,
      set: () => {
        cookieWrites++;
      },
      get: () => ""
    });

    storageSetSpy = vi.spyOn(Storage.prototype, "setItem");
    originalLocationAssign = window.location.assign;

    await loadPage();
  });

  afterEach(() => {
    if (originalCookieDescriptor) {
      Object.defineProperty(document, "cookie", originalCookieDescriptor);
    } else {
      delete document.cookie;
    }

    window.location.assign = originalLocationAssign;
    storageSetSpy.mockRestore();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renders the form on initial load", () => {
    expect(document.querySelector('input[name="email"]')).toBeTruthy();
    expect(document.querySelector('input[name="credential"]')).toBeTruthy();
  });

  it("posts catalog requests to the configured meta origin, ignoring query-param overrides", async () => {
    const configuredOrigin = document.querySelector('meta[name="license-server-origin"]').content;
    window.history.replaceState({}, "", "/redeem/?api=https://attacker.example");
    await renderCatalog();
    expect(global.fetch).toHaveBeenCalledWith(
      `${configuredOrigin}/v1/downloads/list`,
      expect.objectContaining({ method: "POST" })
    );
  });

  it("never writes to document.cookie across a full catalog interaction", async () => {
    await renderCatalog();
    expect(cookieWrites).toBe(0);
  });

  it("never writes to localStorage or sessionStorage across a full catalog interaction", async () => {
    await renderCatalog();
    expect(storageSetSpy).not.toHaveBeenCalled();
  });

  it("on 401 renders inline error and retains email value", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ code: "invalid_credential" })
    });

    document.querySelector('input[name="email"]').value = "t@example.com";
    document.querySelector('input[name="credential"]').value = "WRONG";
    document.querySelector("form").dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    await flushAsyncWork();

    expect(document.querySelector("#error").textContent).toMatch(/not recognized/i);
    expect(document.querySelector('input[name="email"]').value).toBe("t@example.com");
  });

  it("on 429 cooldown response during download click renders cooldown-specific copy", async () => {
    await renderCatalog();
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      json: async () => ({ code: "rate_limited", cooldown: true })
    });

    const button = document.querySelector("button[data-action='download']");
    expect(button).toBeTruthy();
    button.click();
    await flushAsyncWork();

    expect(document.querySelector("#error").textContent).toMatch(/one download per minute/i);
  });

  it("download click assigns window.location.assign to the returned https URL", async () => {
    await renderCatalog();
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ url: "https://signed.example/asset.zip", asset_name: "x", size_bytes: 1 })
    });
    window.location.assign = vi.fn();

    document.querySelector("button[data-action='download']").click();
    await flushAsyncWork();

    expect(window.location.assign).toHaveBeenCalledWith("https://signed.example/asset.zip");
  });

  it("refuses non-https download URLs (javascript:, data:, http:)", async () => {
    for (const malicious of ["javascript:alert(1)", "data:text/html,<script>alert(1)</script>", "http://insecure.example/a"]) {
      await renderCatalog();
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ url: malicious, asset_name: "x", size_bytes: 1 })
      });
      window.location.assign = vi.fn();

      document.querySelector("button[data-action='download']").click();
      await flushAsyncWork();

      expect(window.location.assign).not.toHaveBeenCalled();
      expect(document.querySelector("#error").textContent).toMatch(/https:\/\//);
    }
  });
});
