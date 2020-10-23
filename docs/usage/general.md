---
id: general
title: General
sidebar_label: General
---

To use Sourcehawk you must first create a `sourcehawk.yml` configuration file in your project root.

Simply having the file will allow your project to be scanned, but since there is no configuration in the file, all scans will pass with flying colors.

## sourcehawk.yml

The following will ensure that you have a `pom.xml` in the root of your project.  We will cover the types of [enforcers](/docs/concepts/enforcers) in another section, but this is a simple `file exists` enforcer.

```yaml
file-protocols:
  - name: Maven Pom
    description: maven pom.xml is present
    group: maven
    tags:
      - maven
    repository-path: pom.xml
```

## Remote Configurations

Sourcehawk supports merging many different smaller files together to compose and recursively store files remote.  This can e extremely useful if you want to share and reuse your Sourcehawk rules without having to copy and paste them everywhere.  

:::info

By using github raw links you can use specific tags of rules for even greater composition instead of just always using master or head.

:::  

### Example
An example of this composition can be found in [github](https://github.com/optum/sourcehawk-parent/tree/main/.sourcehawk).

#### sourcehawk.yml

```yaml
config-locations:
  # import tagged v1.0.0 version
  - https://github.com/raw/optum/sourcehawk-parent/v1.0.0/.sourcehawk/lombok.yml
  # import main branch of the rest
  - https://github.com/raw/optum/sourcehawk-parent/main/.sourcehawk/maven-pom.yml
  - https://github.com/raw/optum/sourcehawk-parent/main/.sourcehawk/maven-wrapper.yml
```

And the `https://github.com/raw/optum/sourcehawk-parent/v1.0.0/.sourcehawk/lombok.yml` file can contain the following rules for reuse across many or all of your projects.

#### .sourcehawk/lombok.yml

```yaml
file-protocols:
  - name: Lombok Config
    description: Lombok Configured appropriately
    group: lombok
    tags:
      - lombok
      - config
    repository-path: lombok.config
    required: true
    severity: WARNING
    enforcers:
      - enforcer: .common.StringPropertyEquals
        property-name: config.stopBubbling
        expected-property-value: true
      - enforcer: .common.StringPropertyEquals
        property-name: lombok.anyConstructor.addConstructorProperties
        expected-property-value: true

  - name: Maven Pom
    description: maven pom.xml has correct configuration
    group: maven
    tags:
      - maven
    repository-path: pom.xml
    enforcers:
      - enforcer: .xml.XPathEquals
        expectations:
          "//project/name/text()": Sourcehawk
      - enforcer: .xml.XPathEquals
        expectations:
          "//project/ciManagement/system/text()": jenkins
```