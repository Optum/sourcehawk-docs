---
id: results
title: About Results
sidebar_label: Results
---

The output of the scans, regardless of the tool used to scan, is a scan result.  This will be an object with a flag of passed or failed and a list of messages.

Each protocol will produce one to many enforcer results which get rolled up into a single scan result.

## Example Result JSON

This is an example response from the scan serialized to json as run by:

```sh
docker run -v "$(pwd):/home/sourcehawk" optumopensource/sourcehawk:0.6.0 scan -f JSON | jq
```

```json
{
  "passed": false,
  "errorCount": 9,
  "warningCount": 7,
  "messages": {
    "Dockerfile": [
      {
        "severity": "ERROR",
        "repositoryPath": "Dockerfile",
        "message": "Dockerfile FROM is missing tag"
      },
      {
        "severity": "ERROR",
        "repositoryPath": "Dockerfile",
        "message": "Dockerfile FROM is missing host prefix"
      }
    ],
    ".gitignore": [
      {
        "severity": "WARNING",
        "repositoryPath": ".gitignore",
        "message": "File does not contain the line [build]"
      }
    ],
    "tsconfig.json": [
      {
        "severity": "ERROR",
        "repositoryPath": "tsconfig.json",
        "message": "Execution of query [$.compilerOptions.sourceMap] yielded result [true] which is not equal to [false]"
      },
      {
        "severity": "ERROR",
        "repositoryPath": "tsconfig.json",
        "message": "Execution of query [$.angularCompilerOptions.strictInjectionParameters] yielded result [true] which is not equal to [false]"
      }
    ],
    "pom.xml": [
      {
        "severity": "ERROR",
        "repositoryPath": "pom.xml",
        "message": "Banned maven property [maven.test.skip = true] found"
      },
      {
        "severity": "ERROR",
        "repositoryPath": "pom.xml",
        "message": "Execution of query [//project/artifactId/text()] yielded result [scan-failed] which is not equal to [scan-failed-miserably]"
      },
      {
        "severity": "ERROR",
        "repositoryPath": "pom.xml",
        "message": "Execution of query [//project/name/text()] yielded result [Scan Failed] which is not equal to [Scan Fail]"
      }
    ],
    "LICENSE.md": [
      {
        "severity": "WARNING",
        "repositoryPath": "LICENSE.md",
        "message": "File does not contain the sub string [UnitedHealthGroup]"
      },
      {
        "severity": "WARNING",
        "repositoryPath": "LICENSE.md",
        "message": "File does not contain the line [Apache]"
      },
      {
        "severity": "WARNING",
        "repositoryPath": "LICENSE.md",
        "message": "File does not contain the line [Permission is hereby granted, free of charge, to any person] at line number [5]"
      },
      {
        "severity": "WARNING",
        "repositoryPath": "LICENSE.md",
        "message": "File does not contain line matching pattern [(.*)copy of this distribution(.*)]"
      },
      {
        "severity": "WARNING",
        "repositoryPath": "LICENSE.md",
        "message": "File does not contain line matching pattern [(.*)SELLABILITY(.*)] at line number [20]"
      },
      {
        "severity": "WARNING",
        "repositoryPath": "LICENSE.md",
        "message": "The SHA-256 checksum of the file does not match"
      }
    ],
    "config.properties": [
      {
        "severity": "ERROR",
        "repositoryPath": "config.properties",
        "message": "Property [key] is missing"
      }
    ],
    "application.yml": [
      {
        "severity": "ERROR",
        "repositoryPath": "application.yml",
        "message": "Execution of query [$.application.name] yielded result [bad] which is not equal to [sourcehawk]"
      }
    ]
  },
  "formattedMessages": [
    "[ERROR] Dockerfile :: Dockerfile FROM is missing tag",
    "[ERROR] Dockerfile :: Dockerfile FROM is missing host prefix",
    "[WARNING] LICENSE.md :: The SHA-256 checksum of the file does not match",
    "[ERROR] tsconfig.json :: Execution of query [$.angularCompilerOptions.strictInjectionParameters] yielded result [true] which is not equal to [false]",
    "[ERROR] pom.xml :: Execution of query [//project/name/text()] yielded result [Scan Failed] which is not equal to [Scan Fail]",
    "[ERROR] application.yml :: Execution of query [$.application.name] yielded result [bad] which is not equal to [sourcehawk]",
    "[ERROR] config.properties :: Property [key] is missing",
    "[ERROR] pom.xml :: Banned maven property [maven.test.skip = true] found",
    "[WARNING] LICENSE.md :: File does not contain line matching pattern [(.*)SELLABILITY(.*)] at line number [20]",
    "[WARNING] LICENSE.md :: File does not contain the sub string [UnitedHealthGroup]",
    "[WARNING] .gitignore :: File does not contain the line [build]",
    "[WARNING] LICENSE.md :: File does not contain the line [Apache]",
    "[WARNING] LICENSE.md :: File does not contain the line [Permission is hereby granted, free of charge, to any person] at line number [5]",
    "[WARNING] LICENSE.md :: File does not contain line matching pattern [(.*)copy of this distribution(.*)]",
    "[ERROR] tsconfig.json :: Execution of query [$.compilerOptions.sourceMap] yielded result [true] which is not equal to [false]",
    "[ERROR] pom.xml :: Execution of query [//project/artifactId/text()] yielded result [scan-failed] which is not equal to [scan-failed-miserably]"
  ]
}
```

## Example Result Plain Text

This is an example response from the scan in plain text as run by:

```sh
 docker run -v "$(pwd):/home/sourcehawk" optumopensource/sourcehawk:0.6.0 scan -f TEXT

```

```shell script
Scan resulted in failure. Error(s): 9, Warning(s): 7

[ERROR] Dockerfile :: Dockerfile FROM is missing tag
[ERROR] Dockerfile :: Dockerfile FROM is missing host prefix
[WARN]  .gitignore :: File does not contain the line [build]
[ERROR] tsconfig.json :: Execution of query [$.compilerOptions.sourceMap] yielded result [true] which is not equal to [false]
[ERROR] tsconfig.json :: Execution of query [$.angularCompilerOptions.strictInjectionParameters] yielded result [true] which is not equal to [false]
[ERROR] pom.xml :: Banned maven property [maven.test.skip = true] found
[ERROR] pom.xml :: Execution of query [//project/artifactId/text()] yielded result [scan-failed] which is not equal to [scan-failed-miserably]
[ERROR] pom.xml :: Execution of query [//project/name/text()] yielded result [Scan Failed] which is not equal to [Scan Fail]
[WARN]  LICENSE.md :: File does not contain the sub string [UnitedHealthGroup]
[WARN]  LICENSE.md :: File does not contain the line [Apache]
[WARN]  LICENSE.md :: File does not contain the line [Permission is hereby granted, free of charge, to any person] at line number [5]
[WARN]  LICENSE.md :: File does not contain line matching pattern [(.*)copy of this distribution(.*)]
[WARN]  LICENSE.md :: File does not contain line matching pattern [(.*)SELLABILITY(.*)] at line number [20]
[WARN]  LICENSE.md :: The SHA-256 checksum of the file does not match
[ERROR] config.properties :: Property [key] is missing
[ERROR] application.yml :: Execution of query [$.application.name] yielded result [bad] which is not equal to [sourcehawk]
```