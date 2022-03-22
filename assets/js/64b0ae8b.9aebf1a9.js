"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[377],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8843:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),a=n(7462),o=n(2389),i=n(9366),s=n(6010),l="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),w=b.tabGroupChoices,C=b.setTabGroupChoices,N=(0,r.useState)(k),y=N[0],T=N[1],S=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=w[m];null!=D&&D!==y&&v.some((function(e){return e.value===D}))&&T(D)}var x=function(e){var t=e.currentTarget,n=S.indexOf(t),r=v[n].value;r!==y&&(E(t),T(r),null!=m&&C(m,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;n=S[a]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return S.push(e)},onKeyDown:A,onFocus:x,onClick:x},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}function p(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}function d(e){var t=e.NodeJsVsCode,n=e.DotNetVsCode,a=e.DotNetVs2022;return r.createElement(u,{groupId:"development-environment"},r.createElement(p,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(p,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(p,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(a,null)))}},3940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return I},contentTitle:function(){return O},default:function(){return M},frontMatter:function(){return A},metadata:function(){return _},toc:function(){return j}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(8843),s=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"forge.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," subfolder. This is where we will be implementing\nall the Forge-specific logic that will be used in different areas of our server application.\nLet's start by adding the following code to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const { AuthClientTwoLegged } = require('forge-apis');\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } = require('../config.js');\n\nlet internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);\nlet publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);\n\nasync function getInternalToken() {\n    if (!internalAuthClient.isAuthorized()) {\n        await internalAuthClient.authenticate();\n    }\n    return internalAuthClient.getCredentials();\n}\n\nasync function getPublicToken() {\n    if (!publicAuthClient.isAuthorized()) {\n        await publicAuthClient.authenticate();\n    }\n    return publicAuthClient.getCredentials();\n}\n\nmodule.exports = {\n    getPublicToken,\n};\n")),(0,o.kt)("p",null,"The code creates two authentication clients, one for generating tokens for internal use\n(giving us read/write access to the Data Management buckets and objects), and one for generating\ntokens for public use (only giving a read access to the translation outputs from the Model Derivative\nservice), and two helper methods to generate the corresponding tokens for us. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getPublicToken")," function\nis exported from this script as we will be using it in another part of our application."))}c.isMDXComponent=!0;var u=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getPublicToken } = require('../services/forge.js');\n\nlet router = express.Router();\n\nrouter.get('/token', async function (req, res, next) {\n    try {\n        res.json(await getPublicToken());\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,o.kt)("p",null,"Here we implement a new ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"Express Router")," that will handle\nrequests coming to our server, with the URL ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"/token"),", by generating a public access token\nand sending it back to the client as a JSON response."),(0,o.kt)("p",null,'Let\'s "mount" the router to our server application by modifying the ',(0,o.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst { PORT } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\n// highlight-start\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-end\napp.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since the router has been attached to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/auth")," prefix, it will now handle all requests\ncoming to the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/auth/token"),"."))))}d.isMDXComponent=!0;var m=["components"],h={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,o.kt)("em",{parentName:"p"},"Run > Restart Debugging"),",\nor by clicking the green restart icon), otherwise start it again (using ",(0,o.kt)("em",{parentName:"p"},"Run > Start Debugging"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"). When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),"\nin the browser, the server should now respond with a JSON object containing the access token data."))}g.isMDXComponent=!0;var v=["components"],f={toc:[]};function k(e){var t=e.components,n=(0,a.Z)(e,v);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," subfolder. That is where we will be implementing\nall the Forge-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.cs"',title:'"Models/ForgeService.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\nusing Autodesk.Forge.Client;\nusing Autodesk.Forge.Model;\n\npublic record Token(string AccessToken, DateTime ExpiresAt);\n\npublic class ForgeService\n{\n    private readonly string _clientId;\n    private readonly string _clientSecret;\n    private Token _internalTokenCache;\n    private Token _publicTokenCache;\n\n    public ForgeService(string clientId, string clientSecret, string bucket = null)\n    {\n        _clientId = clientId;\n        _clientSecret = clientSecret;\n    }\n\n    private async Task<Token> GetToken(Scope[] scopes)\n    {\n        dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);\n        return new Token(auth.access_token, DateTime.UtcNow.AddSeconds(auth.expires_in));\n    }\n\n    public async Task<Token> GetPublicToken()\n    {\n        if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)\n            _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });\n        return _publicTokenCache;\n    }\n\n    private async Task<Token> GetInternalToken()\n    {\n        if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)\n            _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });\n        return _internalTokenCache;\n    }\n}\n')),(0,o.kt)("p",null,"The helper class takes the credentials of a Forge application, and creates two authentication clients,\none for internal use (giving us read/write access to the Data Management buckets and objects), and one\nfor public use (only allowing access to the translation outputs from the Model Derivative service),\nand a couple of methods for generating the corresponding tokens for us."),(0,o.kt)("p",null,"Next, let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file to make a singleton instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService")," class\navailable to our server application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Configuration["FORGE_CLIENT_ID"];\n        var ForgeClientSecret = Configuration["FORGE_CLIENT_SECRET"];\n        var ForgeBucket = Configuration["FORGE_BUCKET"]; // Optional\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID or FORGE_CLIENT_SECRET.");\n        }\n        // highlight-start\n        services.AddSingleton<ForgeService>(new ForgeService(ForgeClientID, ForgeClientSecret, ForgeBucket));\n        // highlight-end\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')))}k.isMDXComponent=!0;var b=["components"],w={toc:[]};function C(e){var t=e.components,n=(0,a.Z)(e,b);return(0,o.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/AuthController.cs"',title:'"Controllers/AuthController.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class AuthController : ControllerBase\n{\n    public record AccessToken(string access_token, long expires_in);\n\n    private readonly ForgeService _forgeService;\n\n    public AuthController(ForgeService forgeService)\n    {\n        _forgeService = forgeService;\n    }\n\n    [HttpGet("token")]\n    public async Task<AccessToken> GetAccessToken()\n    {\n        var token = await _forgeService.GetPublicToken();\n        return new AccessToken(\n            token.AccessToken,\n            (long)Math.Round((token.ExpiresAt - DateTime.UtcNow).TotalSeconds)\n        );\n    }\n}\n')),(0,o.kt)("p",null,"The controller will receive the instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService")," through ASP.NET's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"Dependency injection"),",\nand it will handle requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/auth/token")," by generating a new access token\nand sending it back to the client as a JSON payload."))}C.isMDXComponent=!0;var N=["components"],y={toc:[]};function T(e){var t=e.components,n=(0,a.Z)(e,N);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,o.kt)("em",{parentName:"p"},"Run > Restart Debugging"),",\nor by clicking the green restart icon), otherwise start it again (using ",(0,o.kt)("em",{parentName:"p"},"Run > Start Debugging"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"). When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),"\nin the browser, the server should now respond with a JSON object containing the access token data."))}T.isMDXComponent=!0;var S=["components"],E={toc:[]};function D(e){var t=e.components,n=(0,a.Z)(e,S);return(0,o.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,o.kt)("em",{parentName:"p"},"Debug > Restart"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"), otherwise start it again (using ",(0,o.kt)("em",{parentName:"p"},"Debug > Start Debugging"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"). When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),"\nin the browser, the server should now respond with a JSON object containing the access token data."))}D.isMDXComponent=!0;var x=["components"],A={},O="Authentication",_={unversionedId:"tutorials/simple-viewer/auth",id:"tutorials/simple-viewer/auth",title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/01-simple-viewer/02-auth.mdx",sourceDirName:"tutorials/01-simple-viewer",slug:"/tutorials/simple-viewer/auth",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/auth",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/01-simple-viewer/02-auth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Setup",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/setup"},next:{title:"Data & Derivatives",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/data"}},I={},j=[{value:"Access tokens",id:"access-tokens",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],F={toc:j};function M(e){var t=e.components,s=(0,a.Z)(e,x);return(0,o.kt)("wrapper",(0,r.Z)({},F,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the Forge platform, and generate access tokens for different use cases."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing you to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.'))),(0,o.kt)("h2",{id:"access-tokens"},"Access tokens"),(0,o.kt)(i.Z,{NodeJsVsCode:c,DotNetVsCode:k,DotNetVs2022:k,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,o.kt)("p",null,"Now we can expose this functionality through the first endpoint of our server."),(0,o.kt)(i.Z,{NodeJsVsCode:d,DotNetVsCode:C,DotNetVs2022:C,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Let's see if our new server endpoint works."),(0,o.kt)(i.Z,{NodeJsVsCode:g,DotNetVsCode:T,DotNetVs2022:D,mdxType:"EnvTabs"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using Google Chrome, consider installing ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en"},"JSON Formatter"),"\nor a similar extension to automatically format JSON responses."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Server Response",src:n(6479).Z,width:"1500",height:"929"})))}M.isMDXComponent=!0},6479:function(e,t,n){t.Z=n.p+"assets/images/auth-response-a04660a8ac678aa5298db7efcd3f3c8f.png"}}]);