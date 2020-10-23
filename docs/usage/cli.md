---
id: cli
title: Command Line Interface
sidebar_label: CLI
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Maven Central Version](https://img.shields.io/maven-central/v/com.optum.sourcehawk/sourcehawk-exec.svg?label=Maven%20Central)

For detailed configuration and usage, see the [cli docs](https://optum.github.io/sourcehawk).

## Simple Demo

TODO: Add gif

## Help

```sh
sourcehawk help
```

## Validate Config
Validate configuration file

### Basic Usage

```sh
sourcehawk validate-config
```

:::info

This assumes that you are in the repository directory and the configuration file is named `sourcehawk.yml`

:::

### Use Standard Input

```sh
cat Sourcehawk | sourcehawk validate-config - 
```

### Absolute Path

```sh
sourcehawk validate-config /path/to/config.yml
```


## Scan
Perform scans

### Basic Usage

```sh
sourcehawk scan
```

:::info

This assumes that you are in the repository directory and the configuration file is named `sourcehawk.yml`

:::  

### Custom Configuration File


```sh
sourcehawk scan -c Sourcehawk
```

### Absolute Repository Location


```sh
sourcehawk scan /path/to/repo
```

### Change Verbosity of Output

LOW

```sh
sourcehawk scan -v LOW
```

### Change Output Format

JSON

```sh
sourcehawk scan -f JSON
```

Markdown

```sh
sourcehawk scan -f MARKDOWN
```