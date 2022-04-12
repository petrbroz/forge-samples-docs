"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[247],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(3117),a=n(7294),r=n(2389),i=n(742),l=n(6010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,p=e.block,m=e.defaultValue,d=e.values,c=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),w=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,a.useState)(k),C=N[0],E=N[1],x=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var S=w[c];null!=S&&S!==C&&v.some((function(e){return e.value===S}))&&E(S)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),o=v[n].value;o!==C&&(T(t),E(o),null!=c&&y(c,o))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=x.indexOf(e.currentTarget)+1;n=x[o]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:Z,onClick:Z},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,r.Z)();return a.createElement(u,(0,o.Z)({key:String(t)},e))}},9381:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),a=n(9877),r=n(8215);function i(e){var t=e.NodeJsVsCode,n=e.DotNetVsCode,i=e.DotNetVs2022;return o.createElement(a.Z,{groupId:"development-environment"},o.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(t,null)),o.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(n,null)),o.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(i,null)))}},7120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return D},contentTitle:function(){return S},default:function(){return V},frontMatter:function(){return T},metadata:function(){return Z},toc:function(){return O}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=n(9381),l=["components"],s={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Command-line interface, a ",(0,r.kt)("em",{parentName:"p"},"CLI"),", is an essential tool when developing modern web applications.\nIt is often used to initialize new projects, handle their dependencies, or to manage their\nsource code. Different operating systems have their own options (for example, in Windows there's\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PowerShell"},"PowerShell"),",\nand Unix-based systems have all sorts of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_shell"},"shells"),")\nbut in our case we're going to be using ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," which is available ",(0,r.kt)("em",{parentName:"p"},"cross-platform"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On Unix-based systems, ",(0,r.kt)("inlineCode",{parentName:"li"},"bash")," (or one of its flavors like ",(0,r.kt)("inlineCode",{parentName:"li"},"zsh"),") is most likely available\nalready, and if not, you can get it from ",(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash"},"https://www.gnu.org/software/bash"),"."),(0,r.kt)("li",{parentName:"ul"},"On Windows, you can install ",(0,r.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows")," which comes bundled\nwith a ",(0,r.kt)("inlineCode",{parentName:"li"},"bash")," terminal")))}u.isMDXComponent=!0;var p=["components"],m={toc:[]};function d(e){var t=e.components,i=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Another essential part of the modern software development, especially for web, is the source code\nmanagement tool ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git"),". Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Downloads"),"\nsection, and install the latest release for your platform. As mentioned in the previous section,\nthe Windows installer comes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," CLI as well."),(0,r.kt)("p",null,"To check whether ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," is installed and available, try running the following command in ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking git in terminal",src:n(8533).Z,width:"1644",height:"994"})))}d.isMDXComponent=!0;var c=["components"],f={toc:[]};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For the coding itself you're welcome to use whichever editor you like the most.\nIf you're looking for recommendations, we recommend ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"\nas it is free, cross-platform, fast, and packed with lots of great features.\nSimply install the latest stable build for your platform."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We've built an extension for Visual Studio Code that provides insight into\nsome of the Forge services and data directly from the editor:\n",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools"},"vscode-forge-tools"),".\nThis could be useful when debugging your own Forge applications."))))}h.isMDXComponent=!0;var v=["components"],g={toc:[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}]};function k(e){var t=e.components,i=(0,a.Z)(e,v);return(0,r.kt)("wrapper",(0,o.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,r.kt)(u,{mdxType:"CliSetup"}),(0,r.kt)("h2",{id:"source-code-management"},"Source code management"),(0,r.kt)(d,{mdxType:"GitSetup"}),(0,r.kt)("h2",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"We will also need the Node.js ",(0,r.kt)("em",{parentName:"p"},"runtime")," to run our code, and the Node.js package manager, ",(0,r.kt)("em",{parentName:"p"},"NPM"),",\nto manage 3rd party dependencies. You can get an installer for your platform on ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"),"\nwhich will install both."),(0,r.kt)("p",null,"To make sure the tools are available, try running the following two commands in ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking node in terminal",src:n(1735).Z,width:"1644",height:"994"})),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)(h,{mdxType:"VSCodeSetup"}))}k.isMDXComponent=!0;var b=["components"],w={toc:[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}]};function y(e){var t=e.components,i=(0,a.Z)(e,b);return(0,r.kt)("wrapper",(0,o.Z)({},w,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,r.kt)(u,{mdxType:"CliSetup"}),(0,r.kt)("h2",{id:"source-code-management"},"Source code management"),(0,r.kt)(d,{mdxType:"GitSetup"}),(0,r.kt)("h2",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"We will also need the .NET 6 ",(0,r.kt)("em",{parentName:"p"},"runtime")," to run our code and manage 3rd party dependencies.\nYou can get an installer for your platform on ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Our sample applications have been developed and tested with .NET 6.0."))),(0,r.kt)("p",null,"To make sure the tool is available, try running the following command in ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet --version\n")),(0,r.kt)("p",null,"You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checking dotnet in terminal",src:n(7811).Z,width:"1644",height:"994"})),(0,r.kt)("h2",{id:"editor"},"Editor"),(0,r.kt)(h,{mdxType:"VSCodeSetup"}))}y.isMDXComponent=!0;var N=["components"],C={toc:[]};function E(e){var t=e.components,i=(0,a.Z)(e,N);return(0,r.kt)("wrapper",(0,o.Z)({},C,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In our tutorials we will be using Visual Studio Community 2022. You can download ",(0,r.kt)("em",{parentName:"p"},"Visual Studio Installer"),"\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/vs/community/"},"here"),", and then install the desired version and edition\nof Visual Studio from the installer application:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visual Studio Installer",src:n(2706).Z,width:"1280",height:"720"})),(0,r.kt)("p",null,"Make sure to include the ",(0,r.kt)("em",{parentName:"p"},"ASP.NET and web development")," component, and consider including\nthe ",(0,r.kt)("em",{parentName:"p"},".NET desktop development")," component as well if you plan to develop plugins for desktop applications\nsuch as Revit or Inventor."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visual Studio Components",src:n(279).Z,width:"1280",height:"720"})))}E.isMDXComponent=!0;var x=["components"],T={},S="Environment Setup",Z={unversionedId:"setup/index",id:"setup/index",title:"Environment Setup",description:"Some of the tutorials on this website are provided for various combinations",source:"@site/docs/setup/index.mdx",sourceDirName:"setup",slug:"/setup/",permalink:"/forge-samples-docs/setup/",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/setup/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/forge-samples-docs/"},next:{title:"Simple Viewer",permalink:"/forge-samples-docs/tutorials/simple-viewer/"}},D={},O=[],j={toc:O};function V(e){var t=e.components,n=(0,a.Z)(e,x);return(0,r.kt)("wrapper",(0,o.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("p",null,"Some of the tutorials on this website are provided for various combinations\nof programming languages and IDEs. Based on your preference, setup one of the\nfollowing development environments on your machine:"),(0,r.kt)(i.Z,{NodeJsVsCode:k,DotNetVsCode:y,DotNetVs2022:E,mdxType:"EnvTabs"}),(0,r.kt)("p",null,"And you're all set. Now head over to one of the tutorials and let's code!"))}V.isMDXComponent=!0},279:function(e,t,n){t.Z=n.p+"assets/images/vs-components-87b972c7036ae79bdbd72cf6e06c42c7.webp"},2706:function(e,t,n){t.Z=n.p+"assets/images/vs-installer-7f12e84120348b7e909e862f63eeb45a.webp"},7811:function(e,t,n){t.Z=n.p+"assets/images/dotnet-46b40ecea2f72f0a2eb242ffb81b6f26.webp"},8533:function(e,t,n){t.Z=n.p+"assets/images/git-7882c81e05c8c23046769fb2d4f8a7cd.webp"},1735:function(e,t,n){t.Z=n.p+"assets/images/node-850a56ad027351d7448d8e7c215463b3.webp"}}]);