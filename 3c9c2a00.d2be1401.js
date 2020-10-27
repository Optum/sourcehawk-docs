(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(97),r=n(102);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},102:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(96)),c=(n(101),{id:"faas",title:"FaaS (Function as a Service)",sidebar_label:"FaaS"}),o={unversionedId:"usage/faas",id:"usage/faas",isDocsHomePage:!1,title:"FaaS (Function as a Service)",description:"Simple Demo",source:"@site/docs/usage/faas.md",slug:"/usage/faas",permalink:"/sourcehawk-docs/docs/usage/faas",editUrl:"https://github.com/optum/sourcehawk-docs/edit/main/docs/usage/faas.md",version:"current",sidebar_label:"FaaS",sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/sourcehawk-docs/docs/usage/cli"},next:{title:"Sourcehawk UI",permalink:"/sourcehawk-docs/docs/usage/sourcehawk-ui"}},u=[{value:"Simple Demo",id:"simple-demo",children:[]},{value:"Function URL",id:"function-url",children:[]},{value:"Validate Config",id:"validate-config",children:[{value:"From File",id:"from-file",children:[]},{value:"From Standard Input",id:"from-standard-input",children:[]}]},{value:"Scan",id:"scan",children:[{value:"Github Repository",id:"github-repository",children:[]},{value:"Github Repository with Reference",id:"github-repository-with-reference",children:[]},{value:"Private Github Repository",id:"private-github-repository",children:[]},{value:"Github Enterprise Repository",id:"github-enterprise-repository",children:[]}]}],l={rightToc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"simple-demo"},"Simple Demo"),Object(i.b)("p",null,"TODO: Add gif"),Object(i.b)("h2",{id:"function-url"},"Function URL"),Object(i.b)("p",null,"In the below examples ",Object(i.b)("inlineCode",{parentName:"p"},"<scan-function-url>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<validate-config-function-url>")," are the URLs in which the functions are exposed\non the OpenFaas platform.  "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"For example:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://sourcehawk-scan.openfaas-example.com")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"https://sourcehawk-validate-config.openfaas-example.com"))),Object(i.b)("h2",{id:"validate-config"},"Validate Config"),Object(i.b)("p",null,"Validate configuration file"),Object(i.b)("h3",{id:"from-file"},"From File"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST <validate-config-function-url> --data @sourcehawk.yml\n")),Object(i.b)("h3",{id:"from-standard-input"},"From Standard Input"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cat Sourcehawk | curl -X POST <validate-config-function-url> --data @-\n")),Object(i.b)("h2",{id:"scan"},"Scan"),Object(i.b)("p",null,"Perform scans on Github repositories"),Object(i.b)("h3",{id:"github-repository"},"Github Repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST <scan-function-url>/org/repo\n")),Object(i.b)("h3",{id:"github-repository-with-reference"},"Github Repository with Reference"),Object(i.b)("p",null,"Branches"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST <scan-function-url>/org/repo/main\n")),Object(i.b)("p",null,"Commits"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST <scan-function-url>/org/repo/f79f64d\n")),Object(i.b)("p",null,"Tags"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST <scan-function-url>/org/repo/v1.0.0\n")),Object(i.b)("h3",{id:"private-github-repository"},"Private Github Repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -X POST -H "Authorization: <token>" <scan-function-url>/org/repo\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"<token>")," with a Github personal access token which has access to repository"))),Object(i.b)("h3",{id:"github-enterprise-repository"},"Github Enterprise Repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -X POST -H "Github-API-URL: https://github.example.com/api/v3" <scan-function-url>/org/repo\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"github.example.com")," with a your Github Enterprise domain"))))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";var a=n(0),r=n(21);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);