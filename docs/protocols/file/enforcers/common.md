---
id: common
title: Common Enforcers
sidebar_label: Common
---

The following are the list of Common enforcers and examples on how to use each.

## Contains

Enforcer Name: `.common.Contains`

An enforcer which is responsible for enforcing that file contains a string.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml contains
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.Contains
        expected-substring: 'string-to-test'
```

## ContainsLine

Enforcer Name: `.common.ContainsLine`

An enforcer which is responsible for enforcing that file contains an entire line.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml contains line
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.ContainsLine
        expected-line: 'line-to-test'
```

## ContainsLineAt

Enforcer Name: `.common.ContainsLineAt`

An enforcer which is responsible for enforcing that file contains an entire line at a specific line number.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml contains line at
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.ContainsLineAt
        expected-line: 'line-to-test'
        expected-line-number: 100
```

## ContainsLineMatching

Enforcer Name: `.common.ContainsLineMatching`

An enforcer which is responsible for enforcing that file contains an entire line matching a pattern.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml contains line matching
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.ContainsLineMatching
        expected-line-pattern: 'line.*'
```

## ContainsLineMatchingAt

Enforcer Name: `.common.ContainsLineMatchingAt`

An enforcer which is responsible for enforcing that file contains an entire line matching a pattern at a specific line number.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml contains line matching at
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.ContainsLineMatchingAt
        expected-line-pattern: 'line.*'
        expected-line-number: 90
```

## ContentsEqual

Enforcer Name: `.common.ContentsEqual`

An enforcer which is responsible for enforcing that file contents match exactly.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml contents equal
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.ContentsEqual
        expected-file-contents: >-
This will probably be
a multi line string
that will have to match spaces
and new lines.
```

:::warning
When using mutliline yaml strings, be aware of [Block Chomping](https://yaml.org/spec/1.2/spec.html#id2794534)
:::

## Sha256ChecksumEquals

Enforcer Name: `.common.Sha256ChecksumEquals`

An enforcer which is responsible for enforcing that SHA-256 checksum of a file's contents match.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml checksum
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.Sha256ChecksumEquals
        expected-checksum: 'a6179a1feff6949517fab1d18804a35d25d807c597fcba21a6b4c3e919af6e6f'
```

## StringPropertyEquals

Enforcer Name: `.common.StringPropertyEquals`

AnAn enforcer which is responsible for enforcing that a specific property has an expected value.

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml property value check
    repository-path: pom.xml
    enforcers:
      - enforcer: .common.StringPropertyEquals
        property-name: jacoco.skip
        expected-property-value: false
```

