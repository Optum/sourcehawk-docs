---
id: docker
title: Docker Usage
sidebar_label: Docker
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Basic Usage

You can scan your code easily from any operating system that supports docker by using the latest docker container and a command.  All of the commands can be found [here](https://opensource.optum.com/sourcehawk/#_commands).

**Simple Scan**
```sh
docker run -v "$(pwd):/home/sourcehawk" optumopensource/sourcehawk:0.6.0 scan
```

You can append normal args to the end of the scan command like the following examples:

**Scan only the provided tags to limit the scope**
```sh
docker run -v "$(pwd):/home/sourcehawk" optumopensource/sourcehawk:0.6.0 scan --tags "config" --tags "build"
```

