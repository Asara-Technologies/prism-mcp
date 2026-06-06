# verification

**Feature area:** Documentation and discovery
**Commands:** 3
**Tier:** Lite

## read

Read generated verification metadata and runtime health checks.

### `get_health_check`

Run lightweight runtime checks for command registration, schemas, Atlas, and verification data.

**Parameters:**

```json
{
  "type": "object",
  "properties": {}
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "overall": {
      "type": "string",
      "description": "pass or fail"
    },
    "checks": {
      "type": "array",
      "description": "Individual health checks"
    }
  },
  "required": [
    "overall",
    "checks"
  ]
}
```

### `get_module_verification`

Return verification detail for one Atlas module.

**Parameters:**

```json
{
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "description": "Atlas module slug"
    }
  },
  "required": [
    "module"
  ]
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "description": "Atlas module slug"
    },
    "coverage_level": {
      "type": "string",
      "description": "Coverage level"
    },
    "test_count": {
      "type": "number",
      "description": "Mapped test count"
    },
    "passed": {
      "type": "number",
      "description": "Passed tests"
    },
    "command_count": {
      "type": "number",
      "description": "Commands in module"
    },
    "test_files": {
      "type": "array",
      "description": "Mapped test filenames"
    },
    "explicitly_verified_commands": {
      "type": "object",
      "description": "Per-command explicit annotations"
    },
    "engine_version": {
      "type": "string",
      "description": "Engine version verified by the manifest"
    },
    "last_verified": {
      "type": "string",
      "description": "Manifest verification date"
    }
  },
  "required": [
    "module",
    "coverage_level",
    "test_count"
  ]
}
```

### `get_verification_summary`

Return aggregate PrismMCP verification state from the build-time manifest.

**Parameters:**

```json
{
  "type": "object",
  "properties": {}
}
```

**Returns:**

```json
{
  "type": "object",
  "properties": {
    "plugin_version": {
      "type": "string",
      "description": "Plugin version verified by the manifest"
    },
    "engine_version": {
      "type": "string",
      "description": "Engine version verified by the manifest"
    },
    "generated_at": {
      "type": "string",
      "description": "Manifest generation timestamp"
    },
    "compile_status": {
      "type": "object",
      "description": "Compile status summary"
    },
    "test_summary": {
      "type": "object",
      "description": "Automation test summary"
    },
    "schema_health": {
      "type": "object",
      "description": "Schema health summary"
    },
    "module_coverage": {
      "type": "object",
      "description": "Module coverage level counts"
    },
    "external_proofs": {
      "type": [
        "object",
        "null"
      ],
      "description": "External proof summaries"
    }
  },
  "required": [
    "plugin_version",
    "engine_version",
    "generated_at"
  ]
}
```

_Generated from commit `29a0acc49f6b` at 2026-06-06T20:25:14Z._
