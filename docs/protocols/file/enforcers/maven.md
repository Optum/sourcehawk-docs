---
id: maven
title: Maven Enforcers
sidebar_label: Maven
---

The following are the list of Maven enforcers and examples on how to use each.

:::warning
These checks will NOT recurse to the provided files descendents and children dependencies.
:::

## MavenBannedProperties

Enforcer Name: `.maven.MavenBannedProperties`

An enforcer which enforces that the provided properties **are not set**.

:::note
This will check the `<properties></properties>` section of you repository-path file.
:::

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: Check for banned deps
    repository-path: pom.xml
    enforcers:
      - enforcer: .maven.MavenBannedProperties
        banned-properties:
          'foo': 'bar'
          'jacoco.skip': true
```

## MavenDependencies

Enforcer Name: `.maven.MavenDependencies`

An enforcer which enforces that the coordinates of the maven dependencies are as expected.

:::info
For version matching regex **is** supported. Version is also optional to only require group and artifact match.
:::

:::note
This will check the `<dependencies></dependencies>` section of you repository-path file.
:::

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: Check for all deps
    repository-path: pom.xml
    enforcers:
      - enforcer: .maven.MavenDependencies
        expected-coordinates:
          - 'com.example:foo:1.0.0'
          - 'com.example:bar:1.0.1'
          - 'com.example:baz:1.*'
          - 'com.example:faz:2.[0-9]+.[0-9]+'
          - 'com.example:foz'
```

## MavenParentEquals

Enforcer Name: `.maven.MavenParentEquals`

An enforcer which enforces that the coordinates of the maven parent are as expected.

:::info
For version matching regex **is** supported. Version is also optional to only require group and artifact match.
:::

:::note
This will check the `<parent></parent>` section of you repository-path file.
:::

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: Check for parent
    repository-path: pom.xml
    enforcers:
      - enforcer: .maven.MavenParentEquals
        expected-coordinates: 'com.example:foo-parent:1.*'
```

## MavenPlugins

Enforcer Name: `.maven.MavenPlugins`

An enforcer which enforces that the coordinates of the maven plugins are as expected

:::info
For version matching regex **is** supported. Version is also optional to only require group and artifact match.
:::

:::note
This will check the `<plugins></plugins>` section of you repository-path file.
:::

**Example**
```yaml
file-protocols:
  - name: Maven Pom
    description: Check for plugins
    repository-path: pom.xml
    enforcers:
      - enforcer: .maven.MavenPlugins
        expected-coordinates: 
          - 'com.plugins:foo-plugin:1.*'
          - 'com.plugins:bar-plugin:2.0.1'
          - 'com.plugins:baz-plugin'
```