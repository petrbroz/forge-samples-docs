"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[501],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},2767:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return N},default:function(){return T},frontMatter:function(){return y},metadata:function(){return C},toc:function(){return x}});var a=n(7462),o=n(3366),r=n(7294),i=n(3905),s=n(9443);var l=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),p="tabItem_1uMI",m="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,a=e.block,o=e.defaultValue,i=e.values,s=e.groupId,d=e.className,u=r.Children.toArray(e.children),f=null!=i?i:u.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=o?o:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,g=l(),v=g.tabGroupChoices,k=g.setTabGroupChoices,b=(0,r.useState)(h),w=b[0],y=b[1],N=[];if(null!=s){var C=v[s];null!=C&&C!==w&&f.some((function(e){return e.value===C}))&&y(C)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;y(a),null!=s&&(k(s,a),setTimeout((function(){var e,n,a,o,r,i,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&r<=l&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(u.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var u=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},f=["components"],h={toc:[]};function g(e){var t=e.components,r=(0,o.Z)(e,f);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will also need the Node.js ",(0,i.kt)("em",{parentName:"p"},"runtime")," to run our code, and the Node.js package manager, ",(0,i.kt)("em",{parentName:"p"},"NPM"),",\nto manage 3rd party dependencies. You can get an installer for your platform on ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"),"\nwhich will install both."),(0,i.kt)("p",null,"To make sure the tools are available, try running the following two commands in ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Checking node in terminal",src:n(7437).Z})))}g.isMDXComponent=!0;var v=["components"],k={toc:[]};function b(e){var t=e.components,r=(0,o.Z)(e,v);return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will also need the .NET 6 ",(0,i.kt)("em",{parentName:"p"},"runtime")," to run our code and manage 3rd party dependencies.\nYou can get an installer for your platform on ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Our sample applications have been developed and tested with .NET 6 ",(0,i.kt)("strong",{parentName:"p"},"Release Candidate 1"),"."))),(0,i.kt)("p",null,"To make sure the tool is available, try running the following command in ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet --version\n")),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Checking dotnet in terminal",src:n(5548).Z})))}b.isMDXComponent=!0;var w=["components"],y={sidebar_position:2},N="Environment Setup",C={unversionedId:"setup",id:"setup",isDocsHomePage:!1,title:"Environment Setup",description:"Command-line interface",source:"@site/docs/setup.mdx",sourceDirName:".",slug:"/setup",permalink:"/forge-samples-docs/docs/setup",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/forge-samples-docs/docs/intro"},next:{title:"Introduction",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/index"}},x=[{value:"Command-line interface",id:"command-line-interface",children:[]},{value:"Source code management",id:"source-code-management",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Editor",id:"editor",children:[]}],O={toc:x};function T(e){var t=e.components,r=(0,o.Z)(e,w);return(0,i.kt)("wrapper",(0,a.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,i.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,i.kt)("p",null,"Command-line interface, a ",(0,i.kt)("em",{parentName:"p"},"CLI"),", is an essential tool when developing modern web applications.\nIt is often used to initialize new projects, handle their dependencies, or to manage their\nsource code. Different operating systems have their own options (for example, in Windows there's\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PowerShell"},"PowerShell"),",\nand Unix-based systems have all sorts of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_shell"},"shells"),")\nbut in our case we're going to be using ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," which is available ",(0,i.kt)("em",{parentName:"p"},"cross-platform"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On Unix-based systems, ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," (or one of its flavors like ",(0,i.kt)("inlineCode",{parentName:"li"},"zsh"),") is most likely available\nalready, and if not, you can get it from ",(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash"},"https://www.gnu.org/software/bash"),"."),(0,i.kt)("li",{parentName:"ul"},"On Windows, ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," will be installed as part of ",(0,i.kt)("inlineCode",{parentName:"li"},"git"),", the source code management tool\ndiscussed in the next section.")),(0,i.kt)("h2",{id:"source-code-management"},"Source code management"),(0,i.kt)("p",null,"Another essential part of the modern software development, especially for web, is the source code\nmanagement tool ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git"),". Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Downloads"),"\nsection, and install the latest release for your platform. As mentioned in the previous section,\nthe Windows installer comes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," CLI as well."),(0,i.kt)("p",null,"To check whether ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," is installed and available, try running the following command in ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,i.kt)("p",null,"You should see something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Checking git in terminal",src:n(9866).Z})),(0,i.kt)("h2",{id:"runtime"},"Runtime"),(0,i.kt)(d,{groupId:"programming-language",mdxType:"Tabs"},(0,i.kt)(u,{value:"dotnet",label:".NET",default:!0,mdxType:"TabItem"},(0,i.kt)(b,{mdxType:"DotnetRuntime"})),(0,i.kt)(u,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"NodejsRuntime"}))),(0,i.kt)("h2",{id:"editor"},"Editor"),(0,i.kt)("p",null,"For the coding itself you're welcome to use whichever editor you like the most.\nIf you're open to suggestions, we recommend ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"\nwhich is free, cross-platform, and fast. Simply install the latest stable build\nfor your platform."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We've also built an extension for Visual Studio Code that allows you to access\nsome of the Forge services and data directly from the editor:\n",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools"},"vscode-forge-tools"),"."))))}T.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},5548:function(e,t,n){t.Z=n.p+"assets/images/dotnet-692d8a162c073df86a313effe400bb94.png"},9866:function(e,t,n){t.Z=n.p+"assets/images/git-ece61253dfeb344588795370a1ad3e70.png"},7437:function(e,t,n){t.Z=n.p+"assets/images/node-597c3215c80b863f526ecf0419d78092.png"}}]);