(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),c=(n(0),n(94)),a={id:"xml",title:"XML Enforcers",sidebar_label:"XML"},i={unversionedId:"protocols/file/enforcers/xml",id:"protocols/file/enforcers/xml",isDocsHomePage:!1,title:"XML Enforcers",description:"The following are the list of XML enforcers and examples on how to use each.",source:"@site/docs/protocols/file/enforcers/xml.md",slug:"/protocols/file/enforcers/xml",permalink:"/docs/protocols/file/enforcers/xml",editUrl:"https://github.com/optum/sourcehawk-docs/edit/main/docs/protocols/file/enforcers/xml.md",version:"current",sidebar_label:"XML",sidebar:"docs",previous:{title:"YAML Enforcers",permalink:"/docs/protocols/file/enforcers/yaml"},next:{title:"JSON Enforcers",permalink:"/docs/protocols/file/enforcers/json"}},l=[{value:"XPathEquals",id:"xpathequals",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The following are the list of XML enforcers and examples on how to use each."),Object(c.b)("h2",{id:"xpathequals"},"XPathEquals"),Object(c.b)("p",null,"Enforcer Name: ",Object(c.b)("inlineCode",{parentName:"p"},".xml.XPathEquals")),Object(c.b)("p",null,"An enforcer imAn enforcer implementation which enforces that the result of a JsonPath query equals a specific value."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"For XML path notation help see ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3schools.com/xml/xpath_syntax.asp"}),"https://www.w3schools.com/xml/xpath_syntax.asp")," or your favorite search engine."))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"file-protocols:\n  - name: Config File Check\n    description: XML Paths are correct for file\n    repository-path: bicycle.xml\n    enforcers:\n      - enforcer: .xml.XPathEquals\n        expectations:\n          '//bicycles/bicycle[@id=\"1\"]/make/text()': 'Raleigh'\n          '//bicycles/bicycle[1]/model/text()': 'Competition GS'\n")),Object(c.b)("p",null,"Where the reference file may look like:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"bicycle.xml")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<bicycles>\n    <bicycle id="1">\n        <make>Raleigh</make>\n        <model>Competition GS</model>\n        <type>Road</type>\n        <size>60cm</size>\n        <components>\n            <component group="cockpit">handlebars</component>\n            <component group="frameset">fork</component>\n            <component group="drivetrain">chain</component>\n        </components>\n    </bicycle>\n</bicycles>\n')))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,u=m["".concat(a,".").concat(f)]||m[f]||b[f]||c;return n?o.a.createElement(u,i(i({ref:t},s),{},{components:n})):o.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);