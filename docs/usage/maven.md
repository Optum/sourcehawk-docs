---
id: maven
title: Maven Plugin
sidebar_label: Maven Plugin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Maven Central Version](https://img.shields.io/maven-central/v/com.optum.sourcehawk.maven/sourcehawk-maven-plugin.svg?label=Maven%20Central)

For detailed configuration and usage, see the [plugin docs](https://optum.github.io/sourcehawk-maven).

## Simple Demo

<a target="_blank" href={useBaseUrl('img/demo/maven.gif')}>
    <img alt="Maven Demo" src={useBaseUrl('img/demo/maven.gif')} />
</a>

## Basic Usage

```xml
<plugin>
    <groupId>com.optum.sourcehawk.maven</groupId>
    <artifactId>sourcehawk-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>scan</id>
            <goals>
                <goal>scan</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

From the command line

```sh
mvn sourcehawk:scan
```

## Skip Scan

Use the `skipScan` configuration property to skip the scan if necessary

```xml
<plugin>
    <groupId>com.optum.sourcehawk.maven</groupId>
    <artifactId>sourcehawk-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>scan</id>
            <goals>
                <goal>scan</goal>
            </goals>
            <configuration>
                <skipScan>true</skipScan>
            </configuration>
        </execution>
    </executions>
</plugin>
```

From the command line

```sh
mvn sourcehawk:scan -Dsourcehawk.skipScan
```

## Prevent Build from Failing

Set the `failBuild` property to `false` to prevent the build from failing even if the scan fails.

```xml
<plugin>
    <groupId>com.optum.sourcehawk.maven</groupId>
    <artifactId>sourcehawk-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>scan</id>
            <goals>
                <goal>scan</goal>
            </goals>
            <configuration>
                <failBuild>false</failBuild>
            </configuration>
        </execution>
    </executions>
</plugin>
```

From the command line

```sh
mvn sourcehawk:scan -Dsourcehawk.failBuild=false
```

## Custom Configuration File

Override the default configuration file name with the `configurationFile` property.

```xml
<plugin>
    <groupId>com.optum.sourcehawk.maven</groupId>
    <artifactId>sourcehawk-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>scan</id>
            <goals>
                <goal>scan</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <configurationFile>Sourcehawk</configurationFile>
    </configuration>
</plugin>
```

From the command line

```sh
mvn sourcehawk:scan -Dsourcehawk.configurationFile=Sourcehawk
```