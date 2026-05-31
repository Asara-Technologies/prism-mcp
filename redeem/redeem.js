(function () {
  "use strict";

  const originMeta = document.querySelector('meta[name="license-server-origin"]');
  const licenseServerOrigin = originMeta ? originMeta.getAttribute("content").replace(/\/+$/, "") : "";
  const form = document.querySelector("#redeem-form");
  const errorBox = document.querySelector("#error");
  const resultsBox = document.querySelector("#results");
  const submitButton = form ? form.querySelector("button[type='submit']") : null;

  const state = {
    email: "",
    credential: ""
  };

  const errorCopy = {
    invalid_request: "The download request was not formatted correctly. Check the email address and credential, then try again.",
    invalid_credential: "That email address or credential was not recognized. Check both values and try again.",
    license_inactive: "This license is not active. Contact support@asaratechnologies.com if this looks wrong.",
    license_expired: "This license has expired. Renew the license before downloading current builds.",
    license_pending_purge: "This license is scheduled for deletion and downloads are unavailable.",
    license_erased: "This license has been erased per a data deletion request.",
    seat_revoked: "This seat has been revoked. Ask the license owner for a current seat code.",
    tier_mismatch: "This license tier cannot download the selected asset.",
    channel_not_allowed: "This license is not enabled for that release channel.",
    release_unknown: "That plugin version is not available.",
    asset_unavailable: "That build is not available. Refresh the catalog and try again.",
    delivery_unavailable: "The download service could not reach the release host. Try again shortly.",
    rate_limited: "Too many requests. Wait a minute, then try again."
  };

  if (!form || !errorBox || !resultsBox || !submitButton) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    clearError();
    resultsBox.style.display = "none";
    resultsBox.replaceChildren();

    const formData = new FormData(form);
    state.email = String(formData.get("email") || "").trim();
    state.credential = String(formData.get("credential") || "").trim();

    if (!licenseServerOrigin) {
      renderError("The download page is not configured. Contact support@asaratechnologies.com.");
      return;
    }

    if (!state.email || !state.credential) {
      renderError(errorCopy.invalid_request);
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Checking...";

    try {
      const response = await postJson("/v1/downloads/list", {
        email: state.email,
        credential: state.credential
      });
      renderCatalog(response);
    } catch (error) {
      renderError(messageForError(error));
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Show downloads";
    }
  });

  resultsBox.addEventListener("click", async function (event) {
    const button = event.target.closest("button[data-action='download']");
    if (!button) {
      return;
    }

    clearError();
    button.disabled = true;
    button.textContent = "Preparing...";

    try {
      const response = await postJson("/v1/downloads/url", {
        email: state.email,
        credential: state.credential,
        plugin_version: button.dataset.pluginVersion,
        asset_name: button.dataset.assetName
      });
      // Defense in depth: refuse anything that isn't https:// before navigating.
      // Compromised or MITM'd license server cannot redirect via javascript: / data:.
      if (typeof response.url !== "string" || !/^https:\/\//.test(response.url)) {
        renderError("Download URL was not a valid https:// link. Try again.");
        button.disabled = false;
        button.textContent = "Download";
        return;
      }
      window.location.assign(response.url);
    } catch (error) {
      renderError(messageForError(error));
      button.disabled = false;
      button.textContent = "Download";
    }
  });

  async function postJson(path, body) {
    const response = await fetch(`${licenseServerOrigin}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    });
    const payload = await readJson(response);
    if (!response.ok) {
      const error = new Error(payload.message || response.statusText || "Request failed");
      error.payload = payload;
      error.status = response.status;
      throw error;
    }
    return payload;
  }

  async function readJson(response) {
    try {
      return await response.json();
    } catch (_error) {
      return {};
    }
  }

  function renderCatalog(payload) {
    const builds = Array.isArray(payload.builds) ? payload.builds : [];
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = `License tier: ${payload.tier || "unknown"} - ${payload.primary_email_masked || state.email}`;

    resultsBox.replaceChildren(summary);

    if (builds.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty";
      empty.textContent = "No matching builds are available for this license yet.";
      resultsBox.append(empty);
      resultsBox.style.display = "block";
      return;
    }

    const table = document.createElement("table");
    table.append(createHeader());
    const body = document.createElement("tbody");

    for (const build of builds) {
      const row = document.createElement("tr");
      row.append(
        cell(versionLabel(build)),
        cell(`UE ${build.ue_version || ""}`),
        cell(build.platform || ""),
        cell(formatBytes(build.size_bytes)),
        actionCell(build)
      );
      body.append(row);
    }

    table.append(body);
    resultsBox.append(table);
    resultsBox.style.display = "block";
  }

  function createHeader() {
    const header = document.createElement("thead");
    const row = document.createElement("tr");
    for (const label of ["Version", "Engine", "Platform", "Size", "Download"]) {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = label;
      row.append(th);
    }
    header.append(row);
    return header;
  }

  function versionLabel(build) {
    const fragment = document.createDocumentFragment();
    fragment.append(document.createTextNode(build.plugin_version || ""));
    if (build.is_latest) {
      const latest = document.createElement("span");
      latest.className = "latest";
      latest.textContent = "Latest";
      fragment.append(latest);
    }
    return fragment;
  }

  function cell(value) {
    const td = document.createElement("td");
    if (value instanceof Node) {
      td.append(value);
    } else {
      td.textContent = String(value);
    }
    return td;
  }

  function actionCell(build) {
    const td = document.createElement("td");
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.action = "download";
    button.dataset.pluginVersion = build.plugin_version || "";
    button.dataset.assetName = build.asset_name || "";
    button.textContent = "Download";
    td.append(button);
    return td;
  }

  function renderError(message) {
    errorBox.textContent = message;
    errorBox.style.display = "block";
  }

  function clearError() {
    errorBox.textContent = "";
    errorBox.style.display = "none";
  }

  function messageForError(error) {
    const payload = error && error.payload ? error.payload : {};
    if (payload.cooldown) {
      return "One download per minute, per build. Wait a moment, then try that download again.";
    }
    if (payload.code && errorCopy[payload.code]) {
      return errorCopy[payload.code];
    }
    if (error && error.status === 503) {
      return errorCopy.delivery_unavailable;
    }
    return "The download request failed. Try again shortly.";
  }

  function formatBytes(bytes) {
    const value = Number(bytes);
    if (!Number.isFinite(value) || value <= 0) {
      return "Unknown";
    }
    const units = ["B", "KB", "MB", "GB"];
    let size = value;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
  }
})();
