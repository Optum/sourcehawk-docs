---
id: protocols
title: About Protocols
sidebar_label: Protocols
---

The way Sourcehawk is configured is through the usage of different types of Protocols.  Protocols are configurable rules blocks that will run and produce [results](results). 

The first type of protocol supported in Sourcehawk are [File Protocols](../protocols/file/file-protocol) 

## Protocol Properties

```yaml
name: #The name of the protocol (required)
description: #The description of the protocol (optional but strongly encouraged)
group: #The logical grouping of the protocol (optional)
tags: #A list of logical tags of the protocol (optional)
required: # Whether the protocol is required (required)
severity: # Level of severity one of (WARNING, ERROR) (required)
```

:::note
Specific types of protocols, like a `file-protocol` may require additional fields to be provided during configuration.
:::
