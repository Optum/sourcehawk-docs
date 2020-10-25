---
id: docker
title: Docker Enforcers
sidebar_label: Docker
---

The following are the list of Docker enforcers and examples on how to use each.

:::warning
Currently multi-stage docker build files are not supported, but are planned.  These will currently only look at the first `FROM` statement in the Dockerfile.
:::

## DockerfileFromHasTag

Enforcer Name: `.docker.DockerfileFromHasTag`

nforce that the Dockerfile has a tag in the FROM line.

**Example**
```yaml
file-protocols:
  - name: Dockerfile
    description: Dockerfile do not allow latest tag
    repository-path: Dockerfile
    enforcers:
      - enforcer: .docker.DockerfileFromHasTag
        allow-latest: false
```

## DockerfileFromHostEquals

Enforcer Name: `.docker.DockerfileFromHostEquals`

Enforce that the Dockerfile has a specific host in the FROM line.

**Example**
```yaml
file-protocols:
  - name: Dockerfile
    description: Dockerfile has required host
    repository-path: Dockerfile
    enforcers:
      - enforcer: .docker.DockerfileFromHostEquals
        expected-from-host: hub.docker.com
```

## DockerfileFromImageEquals

Enforcer Name: `.docker.DockerfileFromImageEquals`

Enforce that the Dockerfile has a specific image in the FROM line.

**Example**
```yaml
file-protocols:
  - name: Dockerfile
    description: Dockerfile has specific image
    repository-path: Dockerfile
    enforcers:
      - enforcer: .docker.DockerfileFromImageEquals
        expected-from-image: centos:1.0.0
```
