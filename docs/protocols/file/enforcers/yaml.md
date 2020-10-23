---
id: yaml
title: YAML Enforcers
sidebar_label: YAML
---

The following are the list of Yaml enforcers and examples on how to use each.

## YamlPathEquals

Enforcer Name: `.yaml.YamlPathEquals`

An enforcer implementation which enforces that the result of a Yaml Path query equals a specific value.

:::info
For YAML path notation help see your favorite search engine.  FasterXML jackson YAMLMapper is used internally.
:::

**Example**
```yaml
file-protocols:
  - name: Config Applicaiton YAML
    description: YAML Contains correct properties
    repository-path: bicycle.yml
    enforcers:
      - enforcer: .yaml.YamlPathEquals
        expectations:
          '$.make': 'Raleigh'
          '$.components[0]': 'handlebars'
          '$.components.length()': 6
```

Where the reference file may look like:

**bicycle.yml**
```yaml
make: Raleigh
model: Professional
type: road
size:
  value: 60
  units: cm
components:
  - handlebars
  - wheels
  - pedals
  - tires
  - chain
  - seat
```
