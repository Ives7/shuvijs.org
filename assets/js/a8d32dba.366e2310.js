"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5388],{461:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(2848),i=n(9213),o=(n(9496),n(461)),s=["components"],a={id:"file-convention",title:"File Convention",sidebar_position:3},c=void 0,l={unversionedId:"api-reference/file-convention",id:"api-reference/file-convention",title:"File Convention",description:"Project Directory Structure",source:"@site/docs/api-reference/file-convention.md",sourceDirName:"api-reference",slug:"/api-reference/file-convention",permalink:"/shuvijs.org/docs/api-reference/file-convention",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/file-convention.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"file-convention",title:"File Convention",sidebar_position:3},sidebar:"apiReferenceSidebar",previous:{title:"Command",permalink:"/shuvijs.org/docs/api-reference/command"},next:{title:"shuvi.config.js",permalink:"/shuvijs.org/docs/api-reference/config"}},p={},u=[{value:"Project Directory Structure",id:"project-directory-structure",level:2},{value:".shuvi/",id:"shuvi",level:3},{value:"shuvi.config.js",id:"shuviconfigjs",level:3},{value:"dist/",id:"dist",level:3},{value:"public/",id:"public",level:3},{value:"src/app.jsx",id:"srcappjsx",level:3},{value:"src/pages/**/_middlewares.js",id:"srcpages_middlewaresjs",level:3},{value:"src/pages/**/*.jsx",id:"srcpagesjsx",level:3},{value:"src/apis/**/*.js",id:"srcapisjs",level:3},{value:"document.js",id:"documentjs",level:3},{value:"document.ejs",id:"documentejs",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"project-directory-structure"},"Project Directory Structure"),(0,o.kt)("p",null,"The directory structure of an shuvi project is as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 .shuvi/\n\u251c\u2500\u2500 dist/\n\u251c\u2500\u2500 public/\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 apis/\n\u2502   \u2502   \u251c\u2500\u2500 */\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 *.js\n\u2502   \u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2502   \u2514\u2500\u2500 *.js\n\u2502   \u251c\u2500\u2500 pages/\n\u2502   \u2502   \u251c\u2500\u2500 */\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 index.jsx\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 *.jsx\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 _middlewares.js\n\u2502   \u2502   \u251c\u2500\u2500 index.jsx\n\u2502   \u2502   \u251c\u2500\u2500 *.jsx\n\u2502   \u2502   \u2514\u2500\u2500 _middlewares.js\n\u2502   \u251c\u2500\u2500 app.jsx\n\u2502   \u251c\u2500\u2500 error.js\n\u2502   \u251c\u2500\u2500 runtime.js\n\u2502   \u251c\u2500\u2500 server.js\n\u2502   \u251c\u2500\u2500 document.js\n\u2502   \u2514\u2500\u2500 document.ejs\n\u2514\u2500\u2500 shuvi.config.js\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx")," files could be ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tsx")," files."))),(0,o.kt)("h3",{id:"shuvi"},".shuvi/"),(0,o.kt)("p",null,"Shuvi temporary directory. It stores a lot of shuvi internal files and will be regenerated when ",(0,o.kt)("inlineCode",{parentName:"p"},"shuvi dev")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"shuvi build")," execute."),(0,o.kt)("h3",{id:"shuviconfigjs"},"shuvi.config.js"),(0,o.kt)("p",null,"To customize project configurations."),(0,o.kt)("p",null,"See details at ",(0,o.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/config"},"api/shuvi.config.js")),(0,o.kt)("h3",{id:"dist"},"dist/"),(0,o.kt)("p",null,"Default output directory."),(0,o.kt)("h3",{id:"public"},"public/"),(0,o.kt)("p",null,"All files under this directory will be copied to output directory."),(0,o.kt)("h3",{id:"srcappjsx"},"src/app.jsx"),(0,o.kt)("p",null,"Root component that wraps all of the route components."),(0,o.kt)("h3",{id:"srcpages_middlewaresjs"},"src/pages/","*","*","/","_","middlewares.js"),(0,o.kt)("p",null,"Defines server middlewares that will be applied at the corresponding route depending on file path."),(0,o.kt)("h3",{id:"srcpagesjsx"},"src/pages/","*","*","/","*",".jsx"),(0,o.kt)("p",null,"Defines page components that will be applied at the corresponding route depending on file path."),(0,o.kt)("h3",{id:"srcapisjs"},"src/apis/","*","*","/","*",".js"),(0,o.kt)("p",null,"Defines api handler that will be applied at the corresponding route depending on file path.\nThe handler is an async function with 2 parameters which are request and response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/apis/**/*.js"',title:'"src/apis/**/*.js"'}," export default (req, res, next) => {\n   res.statusCode = 200;\n   res.end('200 OK');\n };\n")),(0,o.kt)("h3",{id:"documentjs"},"document.js"),(0,o.kt)("p",null,"Customize some of the server logic that generates HTML."),(0,o.kt)("h3",{id:"documentejs"},"document.ejs"),(0,o.kt)("p",null,"Customize basic HTML template."))}f.isMDXComponent=!0}}]);