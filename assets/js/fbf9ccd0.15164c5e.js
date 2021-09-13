"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[871],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Node.js",p={unversionedId:"setup/nodejs",id:"setup/nodejs",isDocsHomePage:!1,title:"Node.js",description:"Command-line interface",source:"@site/docs/setup/nodejs.md",sourceDirName:"setup",slug:"/setup/nodejs",permalink:"/forge-samples-docs/docs/setup/nodejs",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/website/docs/setup/nodejs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/forge-samples-docs/docs/setup/dotnet"},next:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/index"}},d=[{value:"Command-line interface",id:"command-line-interface",children:[]},{value:"Source code management",id:"source-code-management",children:[]},{value:"Node.js runtime &amp; NPM",id:"nodejs-runtime--npm",children:[]},{value:"Editor",id:"editor",children:[]}],c={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodejs"},"Node.js"),(0,r.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,r.kt)("p",null,"Command-line interface, a ",(0,r.kt)("em",{parentName:"p"},"CLI"),", is an essential tool when developing Node.js applications.\nIt is used to initialize new projects, handle their dependencies, and often even to manage their\nsource code. Different operating systems have their own options (for example, in Windows there's\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PowerShell"},"PowerShell"),",\nand Unix-based systems have all sorts of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_shell"},"shells"),")\nbut in our case we're going to be using ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," which is available ",(0,r.kt)("em",{parentName:"p"},"across")," platforms."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On Unix-based systems, ",(0,r.kt)("inlineCode",{parentName:"li"},"bash")," (or one of its flavors like ",(0,r.kt)("inlineCode",{parentName:"li"},"zsh"),") is most likely available\nalready, and if not, you can get it from ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash"},"https://www.gnu.org/software/bash"),"."),(0,r.kt)("li",{parentName:"ul"},"On Windows, ",(0,r.kt)("inlineCode",{parentName:"li"},"bash")," will be installed as part of ",(0,r.kt)("inlineCode",{parentName:"li"},"git"),", the source code management tool\ndiscussed in the next section.")),(0,r.kt)("h2",{id:"source-code-management"},"Source code management"),(0,r.kt)("p",null,"Another essential part of the modern software development, especially for web, is the source code\nmanagement tool ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git"),". Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Downloads"),"\nsection, and install the latest release for your platform. As mentioned in the previous section,\nthe Windows installer comes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," CLI as well."),(0,r.kt)("p",null,"To check whether ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," is installed and available, try running the following command in ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking git in terminal",src:n(9866).Z})),(0,r.kt)("h2",{id:"nodejs-runtime--npm"},"Node.js runtime & NPM"),(0,r.kt)("p",null,"We will also need the Node.js ",(0,r.kt)("em",{parentName:"p"},"runtime")," to run our code, and the Node.js package manager, ",(0,r.kt)("em",{parentName:"p"},"NPM"),",\nto manage 3rd party dependencies. You can get an installer for your platform on ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"),"\nwhich will install both."),(0,r.kt)("p",null,"To make sure the tools are available, try running the following two commands in ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking node in terminal",src:n(7437).Z})),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)("p",null,"For the coding itself you're welcome to use whichever editor you like the most.\nIf you're open to suggestions, we recommend ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"\nwhich is free, cross-platform, and fast. Simply install the latest stable build\nfor your platform."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We've also built an extension for Visual Studio Code that allows you to access\nsome of the Forge services and data directly from the editor:\n",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools"},"vscode-forge-tools"),"."))))}m.isMDXComponent=!0},9866:function(e,t,n){t.Z=n.p+"assets/images/git-ece61253dfeb344588795370a1ad3e70.png"},7437:function(e,t,n){t.Z=n.p+"assets/images/node-597c3215c80b863f526ecf0419d78092.png"}}]);