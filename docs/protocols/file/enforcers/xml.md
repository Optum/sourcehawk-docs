---
id: xml
title: XML Enforcers
sidebar_label: XML
---

The following are the list of XML enforcers and examples on how to use each.

## XPathEquals

Enforcer Name: `.xml.XPathEquals`

An enforcer imAn enforcer implementation which enforces that the result of a JsonPath query equals a specific value.

:::info
For XML path notation help see https://www.w3schools.com/xml/xpath_syntax.asp or your favorite search engine.
:::

**Example**
```yaml
file-protocols:
  - name: Config File Check
    description: XML Paths are correct for file
    repository-path: bicycle.xml
    enforcers:
      - enforcer: .xml.XPathEquals
        expectations:
          '//bicycles/bicycle[@id="1"]/make/text()': 'Raleigh'
          '//bicycles/bicycle[1]/model/text()': 'Competition GS'
```

Where the reference file may look like:

**bicycle.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bicycles>
    <bicycle id="1">
        <make>Raleigh</make>
        <model>Competition GS</model>
        <type>Road</type>
        <size>60cm</size>
        <components>
            <component group="cockpit">handlebars</component>
            <component group="frameset">fork</component>
            <component group="drivetrain">chain</component>
        </components>
    </bicycle>
</bicycles>
```
