---
id: faas
title: FaaS (Function as a Service)
sidebar_label: FaaS
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Simple Demo

TODO: Add gif

## Function URL
In the below examples `<scan-function-url>` and `<validate-config-function-url>` are the URLs in which the functions are exposed 
on the OpenFaas platform.  

*For example:*
- `https://sourcehawk-scan.openfaas-example.com`
- `https://sourcehawk-validate-config.openfaas-example.com`


## Validate Config
Validate configuration file

### From File

```sh
curl -X POST <validate-config-function-url> --data @sourcehawk.yml
```

### From Standard Input

```sh
cat Sourcehawk | curl -X POST <validate-config-function-url> --data @-
```

## Scan
Perform scans on Github repositories

### Github Repository

```sh
curl -X POST <scan-function-url>/org/repo
```

### Github Repository with Reference

Branches

```sh
curl -X POST <scan-function-url>/org/repo/main
```

Commits

```sh
curl -X POST <scan-function-url>/org/repo/f79f64d
```

Tags

```sh
curl -X POST <scan-function-url>/org/repo/v1.0.0
```

### Private Github Repository

```sh
curl -X POST -H "Authorization: <token>" <scan-function-url>/org/repo
```

:::info

Replace `<token>` with a Github personal access token which has access to repository

:::

### Github Enterprise Repository

```sh
curl -X POST -H "Github-API-URL: https://github.example.com/api/v3" <scan-function-url>/org/repo
```

:::info

Replace `github.example.com` with a your Github Enterprise domain

:::