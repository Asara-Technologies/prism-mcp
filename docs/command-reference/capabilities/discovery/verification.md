# verification

**Feature area:** Documentation and discovery
**Commands:** 3

Run internal health checks against PrismMCP's command registration, schema integrity, and Atlas data consistency. Returns structured pass/fail diagnostics.

## read

Run lightweight health checks against command registration, schema integrity, and Atlas data consistency.

### `get_health_check`

Run lightweight runtime checks for command registration, schemas, Atlas, and verification data.

**Parameters:**

```json
{
  "properties": {},
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "checks": {
      "description": "Individual health checks",
      "type": "array"
    },
    "overall": {
      "description": "pass or fail",
      "type": "string"
    }
  },
  "required": [
    "overall",
    "checks"
  ],
  "type": "object"
}
```

### `get_module_verification`

Return verification detail for one Atlas module.

**Parameters:**

```json
{
  "properties": {
    "module": {
      "description": "Atlas module slug",
      "type": "string"
    }
  },
  "required": [
    "module"
  ],
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "command_count": {
      "description": "Commands in module",
      "type": "number"
    },
    "coverage_level": {
      "description": "Coverage level",
      "type": "string"
    },
    "engine_version": {
      "description": "Engine version verified by the manifest",
      "type": "string"
    },
    "explicitly_verified_commands": {
      "description": "Per-command explicit annotations",
      "type": "object"
    },
    "last_verified": {
      "description": "Manifest verification date",
      "type": "string"
    },
    "module": {
      "description": "Atlas module slug",
      "type": "string"
    },
    "passed": {
      "description": "Passed tests",
      "type": "number"
    },
    "test_count": {
      "description": "Mapped test count",
      "type": "number"
    },
    "test_files": {
      "description": "Mapped test filenames",
      "type": "array"
    }
  },
  "required": [
    "module",
    "coverage_level",
    "test_count"
  ],
  "type": "object"
}
```

### `get_verification_summary`

Return aggregate PrismMCP verification state from the build-time manifest.

**Parameters:**

```json
{
  "properties": {},
  "type": "object"
}
```

**Returns:**

```json
{
  "properties": {
    "compile_status": {
      "description": "Compile status summary",
      "type": "object"
    },
    "engine_version": {
      "description": "Engine version verified by the manifest",
      "type": "string"
    },
    "external_proofs": {
      "description": "External proof summaries",
      "type": [
        "object",
        "null"
      ]
    },
    "generated_at": {
      "description": "Manifest generation timestamp",
      "type": "string"
    },
    "module_coverage": {
      "description": "Module coverage level counts",
      "type": "object"
    },
    "plugin_version": {
      "description": "Plugin version verified by the manifest",
      "type": "string"
    },
    "schema_health": {
      "description": "Schema health summary",
      "type": "object"
    },
    "test_summary": {
      "description": "Automation test summary",
      "type": "object"
    }
  },
  "required": [
    "plugin_version",
    "engine_version",
    "generated_at"
  ],
  "type": "object"
}
```

_Generated from commit `72ed403a48ac` at 2026-06-14T00:31:07Z._
