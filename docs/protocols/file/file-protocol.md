---
id: file-protocol
title: File Protocol
sidebar_label: Summary
---

File protocols are blocks that operate on a single file in your repository.  You can include zero to many file enforcers about your file.  By providing zero enforcers, you are simply stating that the file must exist in your project.  By combining many different enforcers you can provide a rich set of rules about a single file in your project.

## File Protocol Properties

```yaml
name: #The name of the protocol (required)
repository-path: # The path relative to repo root of the file (required)
description: #The description of the protocol (optional but strongly encouraged)
group: #The logical grouping of the protocol (optional)
tags: #A list of logical tags of the protocol (optional)
required: # Whether the protocol is required (required)
severity: # Level of severity one of (WARNING, ERROR) (required)
enforcers: # An optional list of enforcers to apply to the file (optional)
```

## Example

The following is an example that assures the following 5 files exist and that the lombok.config file also contains the expected properties.

```yaml
file-protocols:
  - name: Lombok Config
    description: Lombok Configured appropriately
    group: lombok
    tags:
      - lombok
      - config
    repository-path: lombok.config
    enforcers:
      - enforcer: .common.StringPropertyEquals
        property-name: config.stopBubbling
        expected-property-value: true
      - enforcer: .common.StringPropertyEquals
        property-name: lombok.anyConstructor.addConstructorProperties
        expected-property-value: true
  - name: Documentation Directory
    description: Documentation directory exists
    repository-path: documentation/index.adoc
    severity: WARNING
  - name: Maven Wrapper
    description: Maven Wrapper exists
    repository-path: .mvn/wrapper/maven-wrapper.jar
  - name: Github Codeowners
    description: Github Codeowners exists
    repository-path: .github/CODEOWNERS
  - name: Github pullrequest
    description: Github Pull Request Template exists
    repository-path: .github/pull_request_template.md

```