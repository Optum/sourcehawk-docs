---
id: json
title: JSON Enforcers
sidebar_label: JSON
---

The following are the list of JSON enforcers and examples on how to use each.

## JsonPathEquals

Enforcer Name: `.json.JsonPathEquals`

An enforcer implementation which enforces that the result of a JsonPath query equals a specific value.

:::info
For JSON path notation help see https://restfulapi.net/json-jsonpath/ or your favorite search engine.
:::

**Example**
```yaml
file-protocols:
  - name: Config File Check
    description: JSON Paths are correct for file
    repository-path: bicycle.json
    enforcers:
      - enforcer: .json.JsonPathEquals
        expectations:
          '$.make': Raleigh
          '$.size.value': 60
          '$.components[0]': 'handlebars'
          '$.components.length()': 6
```

Where the reference file may look like:

**bicycle.json**
```json
{
  "make": "Raleigh",
  "model": "Professional",
  "type": "road",
  "size": {
    "value": 60,
    "units": "cm"
  },
  "components": [
    "handlebars",
    "wheels",
    "pedals",
    "tires",
    "chain",
    "seat"
  ]
}
```

