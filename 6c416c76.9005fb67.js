(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(94)),o=t(99),c={id:"maven",title:"Maven Plugin",sidebar_label:"Maven Plugin"},u={unversionedId:"usage/maven",id:"usage/maven",isDocsHomePage:!1,title:"Maven Plugin",description:"Maven Central Version",source:"@site/docs/usage/maven.md",slug:"/usage/maven",permalink:"/docs/usage/maven",editUrl:"https://github.com/optum/sourcehawk-docs/edit/main/docs/usage/maven.md",version:"current",sidebar_label:"Maven Plugin",sidebar:"docs",previous:{title:"General",permalink:"/docs/usage/general"},next:{title:"Command Line Interface",permalink:"/docs/usage/cli"}},l=[{value:"Simple Demo",id:"simple-demo",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Skip Scan",id:"skip-scan",children:[]},{value:"Prevent Build from Failing",id:"prevent-build-from-failing",children:[]},{value:"Custom Configuration File",id:"custom-configuration-file",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/maven-central/v/com.optum.sourcehawk.maven/sourcehawk-maven-plugin.svg?label=Maven%20Central",alt:"Maven Central Version"}))),Object(i.b)("p",null,"For detailed configuration and usage, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://optum.github.io/sourcehawk-maven"}),"plugin docs"),"."),Object(i.b)("h2",{id:"simple-demo"},"Simple Demo"),Object(i.b)("a",{target:"_blank",href:Object(o.a)("img/sourcehawk-maven-demo.gif")},Object(i.b)("img",{alt:"Maven Demo",src:Object(o.a)("img/sourcehawk-maven-demo.gif")})),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.optum.sourcehawk.maven</groupId>\n    <artifactId>sourcehawk-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>scan</id>\n            <goals>\n                <goal>scan</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")),Object(i.b)("p",null,"From the command line"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mvn sourcehawk:scan\n")),Object(i.b)("h2",{id:"skip-scan"},"Skip Scan"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"skipScan")," configuration property to skip the scan if necessary"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.optum.sourcehawk.maven</groupId>\n    <artifactId>sourcehawk-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>scan</id>\n            <goals>\n                <goal>scan</goal>\n            </goals>\n            <configuration>\n                <skipScan>true</skipScan>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(i.b)("p",null,"From the command line"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mvn sourcehawk:scan -Dsourcehawk.skipScan\n")),Object(i.b)("h2",{id:"prevent-build-from-failing"},"Prevent Build from Failing"),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"failBuild")," property to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," to prevent the build from failing even if the scan fails."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.optum.sourcehawk.maven</groupId>\n    <artifactId>sourcehawk-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>scan</id>\n            <goals>\n                <goal>scan</goal>\n            </goals>\n            <configuration>\n                <failBuild>false</failBuild>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(i.b)("p",null,"From the command line"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mvn sourcehawk:scan -Dsourcehawk.failBuild=false\n")),Object(i.b)("h2",{id:"custom-configuration-file"},"Custom Configuration File"),Object(i.b)("p",null,"Override the default configuration file name with the ",Object(i.b)("inlineCode",{parentName:"p"},"configurationFile")," property."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>com.optum.sourcehawk.maven</groupId>\n    <artifactId>sourcehawk-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>scan</id>\n            <goals>\n                <goal>scan</goal>\n            </goals>\n        </execution>\n    </executions>\n    <configuration>\n        <configurationFile>Sourcehawk</configurationFile>\n    </configuration>\n</plugin>\n")),Object(i.b)("p",null,"From the command line"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"mvn sourcehawk:scan -Dsourcehawk.configurationFile=Sourcehawk\n")))}p.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return t?r.a.createElement(d,c(c({ref:n},l),{},{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";var a=t(0),r=t(21);n.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},99:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var a=t(95),r=t(100);function i(){var e=Object(a.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(c)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}}}]);