"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[705],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,s(s({ref:t},u),{},{components:n})):a.createElement(v,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3117),r=n(7294),o=n(2389),s=n(742),i=n(6010),l="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),w=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,r.useState)(k),j=N[0],T=N[1],C=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==j&&g.some((function(e){return e.value===S}))&&T(S)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==j&&(O(t),T(a),null!=m&&y(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9381:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9877),o=n(8215);function s(e){var t=e.NodeJsVsCode,n=e.DotNetVsCode,s=e.DotNetVs2022;return a.createElement(r.Z,{groupId:"development-environment"},a.createElement(o.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},a.createElement(t,null)),a.createElement(o.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},a.createElement(n,null)),a.createElement(o.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},a.createElement(s,null)))}},5461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return S},default:function(){return M},frontMatter:function(){return O},metadata:function(){return E},toc:function(){return D}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=n(9381),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a new file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"services/forge")," subfolder, and call it ",(0,o.kt)("inlineCode",{parentName:"p"},"oss.js"),". This is where\nwill implement all the OSS (",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/basics/#object-storage-service-oss"},"Object Storage Service"),")\nlogic of our server application. Populate the new file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge/oss.js"',title:'"services/forge/oss.js"'},"const fs = require('fs');\nconst { BucketsApi, ObjectsApi } = require('forge-apis');\nconst { FORGE_BUCKET } = require('../../config.js');\nconst { getInternalToken } = require('./auth.js');\n\nasync function ensureBucketExists(bucketKey) {\n    try {\n        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());\n    } catch (err) {\n        if (err.statusCode === 404) {\n            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());\n        } else {\n            throw err;\n        }\n    }\n}\n\nasync function listObjects() {\n    await ensureBucketExists(FORGE_BUCKET);\n    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());\n    let objects = resp.body.items;\n    while (resp.body.next) {\n        const startAt = new URL(resp.body.next).searchParams.get('startAt');\n        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());\n        objects = objects.concat(resp.body.items);\n    }\n    return objects;\n}\n\nasync function uploadObject(objectName, filePath) {\n    await ensureBucketExists(FORGE_BUCKET);\n    const buffer = fs.readFileSync(filePath);\n    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());\n    return resp.body;\n}\n\nmodule.exports = {\n    listObjects,\n    uploadObject\n};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureBucketExists")," function will simply try and request additional information\nabout a specific bucket using the ",(0,o.kt)("inlineCode",{parentName:"p"},"BucketsApi")," class from the Forge SDK, and if the response\nfrom Forge is ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found"),", it will attempt to create a new bucket with this name."),(0,o.kt)("p",null,"As you can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"getObjects")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectsApi")," class (responsible for listing files\nin a Data Management bucket) uses pagination. In our code we simply iterate through all the pages\nand return all files from our application's bucket in a single list."))}c.isMDXComponent=!0;var u=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create another file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"services/forge")," subfolder, and call it ",(0,o.kt)("inlineCode",{parentName:"p"},"md.js"),". This is where\nwill implement the logic for converting designs for viewing, and for checking the status of\nthe conversions. Populate the new file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge/md.js"',title:'"services/forge/md.js"'},"const { DerivativesApi } = require('forge-apis');\nconst { getInternalToken } = require('./auth.js');\n\nasync function translateObject(urn, rootFilename) {\n    const job = {\n        input: { urn },\n        output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }\n    };\n    if (rootFilename) {\n        job.input.compressedUrn = true;\n        job.input.rootFilename = rootFilename;\n    }\n    const resp = await new DerivativesApi().translate(job, {}, null, await getInternalToken());\n    return resp.body;\n}\n\nasync function getManifest(urn) {\n    try {\n        const resp = await new DerivativesApi().getManifest(urn, {}, null, await getInternalToken());\n        return resp.body;\n    } catch (err) {\n        if (err.statusCode === 404) {\n            return null;\n        } else {\n            throw err;\n        }\n    }\n}\n\nfunction urnify(id) {\n    return Buffer.from(id).toString('base64').replace(/=/g, '');\n}\n\nmodule.exports = {\n    translateObject,\n    getManifest,\n    urnify\n};\n")))}d.isMDXComponent=!0;var m=["components"],v={toc:[]};function f(e){var t=e.components,n=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"models.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/models.js"',title:'"routes/models.js"'},"const express = require('express');\nconst formidable = require('express-formidable');\nconst { listObjects, uploadObject } = require('../services/forge/oss.js');\nconst { translateObject, getManifest, urnify } = require('../services/forge/md.js');\n\nlet router = express.Router();\n\nrouter.get('/', async function (req, res, next) {\n    try {\n        const objects = await listObjects();\n        res.json(objects.map(o => ({\n            name: o.objectKey,\n            urn: urnify(o.objectId)\n        })));\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/:urn/status', async function (req, res, next) {\n    try {\n        const manifest = await getManifest(req.params.urn);\n        if (manifest) {\n            let messages = [];\n            if (manifest.derivatives) {\n                for (const derivative of manifest.derivatives) {\n                    messages = messages.concat(derivative.messages || []);\n                    if (derivative.children) {\n                        for (const child of derivative.children) {\n                            messages.concat(child.messages || []);\n                        }\n                    }\n                }\n            }\n            res.json({ status: manifest.status, progress: manifest.progress, messages });\n        } else {\n            res.json({ status: 'n/a' });\n        }\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.post('/', formidable(), async function (req, res, next) {\n    const file = req.files['model-file'];\n    if (!file) {\n        res.status(400).send('The required field (\"model-file\") is missing.');\n        return;\n    }\n    try {\n        const obj = await uploadObject(file.name, file.path);\n        await translateObject(urnify(obj.objectId), req.fields['model-zip-entrypoint']);\n        res.json({\n            name: obj.objectKey,\n            urn: urnify(obj.objectId)\n        });\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"formidable()")," middleware used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request handler will make sure that any\n",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," content coming with the request is parsed and available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"req.files"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"req.fields")," properties."))),(0,o.kt)("p",null,"And mount the router to our server application by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst { PORT } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-start\napp.use('/api/models', require('./routes/models.js'));\n// highlight-end\napp.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });\n")),(0,o.kt)("p",null,"The router will handle 3 types of requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/models")," - when the client wants to get the list of all models available for viewing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/models/:urn/status")," - used to check the status of the conversion (incl. error messages if there are any)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/models")," - when the client wants to upload a new model and start its translation")))}f.isMDXComponent=!0;var g=["components"],h={toc:[]};function k(e){var t=e.components,n=(0,r.Z)(e,g);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService.Oss.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," folder. This is where will implement\nall the OSS (",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/basics/#object-storage-service-oss"},"Object Storage Service"),")\nlogic of our server application. Populate the new file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.Oss.cs"',title:'"Models/ForgeService.Oss.cs"'},'using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\nusing Autodesk.Forge.Client;\nusing Autodesk.Forge.Model;\n\npublic partial class ForgeService\n{\n    private async Task EnsureBucketExists(string bucketKey)\n    {\n        var token = await GetInternalToken();\n        var api = new BucketsApi();\n        api.Configuration.AccessToken = token.AccessToken;\n        try\n        {\n            await api.GetBucketDetailsAsync(bucketKey);\n        }\n        catch (ApiException e)\n        {\n            if (e.ErrorCode == 404)\n            {\n                await api.CreateBucketAsync(new PostBucketsPayload(bucketKey, null, PostBucketsPayload.PolicyKeyEnum.Temporary));\n            }\n            else\n            {\n                throw e;\n            }\n        }\n    }\n\n    public async Task<ObjectDetails> UploadModel(string objectName, Stream content, long contentLength)\n    {\n        await EnsureBucketExists(_bucket);\n        var token = await GetInternalToken();\n        var api = new ObjectsApi();\n        api.Configuration.AccessToken = token.AccessToken;\n        var obj = (await api.UploadObjectAsync(_bucket, objectName, (int)contentLength, content)).ToObject<ObjectDetails>();\n        return obj;\n    }\n\n    public async Task<IEnumerable<ObjectDetails>> GetObjects()\n    {\n        const int PageSize = 64;\n        await EnsureBucketExists(_bucket);\n        var token = await GetInternalToken();\n        var api = new ObjectsApi();\n        api.Configuration.AccessToken = token.AccessToken;\n        var results = new List<ObjectDetails>();\n        var response = (await api.GetObjectsAsync(_bucket, PageSize)).ToObject<BucketObjects>();\n        results.AddRange(response.Items);\n        while (!string.IsNullOrEmpty(response.Next))\n        {\n            var queryParams = Microsoft.AspNetCore.WebUtilities.QueryHelpers.ParseQuery(new Uri(response.Next).Query);\n            response = (await api.GetObjectsAsync(_bucket, PageSize, null, queryParams["startAt"])).ToObject<BucketObjects>();\n            results.AddRange(response.Items);\n        }\n        return results;\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EnsureBucketExists")," method will simply try and request additional information\nabout a specific bucket, and if the response from Forge is ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found"),", it will\nattempt to create a new bucket with that name. If no bucket name is provided through\nenvironment variables, we generate one by appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"-basic-app")," suffix to the Forge Client ID."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that the Data Management service requires bucket names to be ",(0,o.kt)("strong",{parentName:"p"},"globally unique"),",\nand attempts to create a bucket with an already used name will fail with ",(0,o.kt)("inlineCode",{parentName:"p"},"409 Conflict"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-POST"},"documentation"),"\nfor more details."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetObjects")," method pages through all objects in the bucket, and returns their name and URN\n(the base64-encoded ID that will later be used when communicating with the Model Derivative service)."))}k.isMDXComponent=!0;var b=["components"],w={toc:[]};function y(e){var t=e.components,n=(0,r.Z)(e,b);return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create another file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," subfolder, and call it ",(0,o.kt)("inlineCode",{parentName:"p"},"ForgeService.Deriv.cs"),". This is where\nwill implement the logic for converting designs for viewing, and for checking the status of\nthe conversions. Populate the new file with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/ForgeService.Deriv.cs"',title:'"Models/ForgeService.Deriv.cs"'},'using System.Collections.Generic;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\nusing Autodesk.Forge.Model;\n\npublic record TranslationStatus(string Status, string Progress, IEnumerable<string>? Messages);\n\npublic partial class ForgeService\n{\n    public static string Base64Encode(string plainText)\n    {\n        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);\n        return System.Convert.ToBase64String(plainTextBytes).TrimEnd(\'=\');\n    }\n\n    public async Task<Job> TranslateModel(string objectId, string rootFilename)\n    {\n        var token = await GetInternalToken();\n        var api = new DerivativesApi();\n        api.Configuration.AccessToken = token.AccessToken;\n        var formats = new List<JobPayloadItem> {\n            new JobPayloadItem (JobPayloadItem.TypeEnum.Svf, new List<JobPayloadItem.ViewsEnum> { JobPayloadItem.ViewsEnum._2d, JobPayloadItem.ViewsEnum._2d })\n        };\n        var payload = new JobPayload(\n            new JobPayloadInput(Base64Encode(objectId)),\n            new JobPayloadOutput(formats)\n        );\n        if (!string.IsNullOrEmpty(rootFilename))\n        {\n            payload.Input.RootFilename = rootFilename;\n            payload.Input.CompressedUrn = true;\n        }\n        var job = (await api.TranslateAsync(payload)).ToObject<Job>();\n        return job;\n    }\n\n    public async Task<TranslationStatus> GetTranslationStatus(string urn)\n    {\n        var token = await GetInternalToken();\n        var api = new DerivativesApi();\n        api.Configuration.AccessToken = token.AccessToken;\n        var json = (await api.GetManifestAsync(urn)).ToJson();\n        var messages = new List<string>();\n        foreach (var message in json.SelectTokens("$.derivatives[*].messages[?(@.type == \'error\')].message"))\n        {\n            if (message.Type == Newtonsoft.Json.Linq.JTokenType.String)\n                messages.Add((string)message);\n        }\n        foreach (var message in json.SelectTokens("$.derivatives[*].children[*].messages[?(@.type == \'error\')].message"))\n        {\n            if (message.Type == Newtonsoft.Json.Linq.JTokenType.String)\n                messages.Add((string)message);\n        }\n        return new TranslationStatus((string)json["status"], (string)json["progress"], messages);\n    }\n}\n')))}y.isMDXComponent=!0;var N=["components"],j={toc:[]};function T(e){var t=e.components,n=(0,r.Z)(e,N);return(0,o.kt)("wrapper",(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelsController.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/ModelsController.cs"',title:'"Controllers/ModelsController.cs"'},'using System.Collections.Generic;\nusing System.IO;\nusing System.Linq;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class ModelsController : ControllerBase\n{\n    public record BucketObject(string name, string urn);\n\n    private readonly ForgeService _forgeService;\n\n    public ModelsController(ForgeService forgeService)\n    {\n        _forgeService = forgeService;\n    }\n\n    [HttpGet()]\n    public async Task<IEnumerable<BucketObject>> GetModels()\n    {\n        var objects = await _forgeService.GetObjects();\n        return from o in objects\n               select new BucketObject(o.ObjectKey, ForgeService.Base64Encode(o.ObjectId));\n    }\n\n    [HttpGet("{urn}/status")]\n    public async Task<TranslationStatus> GetModelStatus(string urn)\n    {\n        try\n        {\n            var status = await _forgeService.GetTranslationStatus(urn);\n            return status;\n        }\n        catch (Autodesk.Forge.Client.ApiException ex)\n        {\n            if (ex.ErrorCode == 404)\n                return new TranslationStatus("n/a", "", new List<string>());\n            else\n                throw ex;\n        }\n    }\n\n    public class UploadModelForm\n    {\n        [FromForm(Name = "model-zip-entrypoint")]\n        public string? Entrypoint { get; set; }\n\n        [FromForm(Name = "model-file")]\n        public IFormFile File { get; set; }\n    }\n\n    [HttpPost()]\n    public async Task<BucketObject> UploadAndTranslateModel([FromForm] UploadModelForm form)\n    {\n        using (var stream = new MemoryStream())\n        {\n            await form.File.CopyToAsync(stream);\n            stream.Position = 0;\n            var obj = await _forgeService.UploadModel(form.File.FileName, stream, form.File.Length);\n            var job = await _forgeService.TranslateModel(obj.ObjectId, form.Entrypoint);\n            return new BucketObject(obj.ObjectKey, job.Urn);\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The controller will handle 3 types of requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/models")," - when the client wants to get the list of all models available for viewing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/models/:urn/status")," - used to check the status of the conversion (incl. error messages if there are any)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/models")," - when the client wants to upload a new model and start its translation")))}T.isMDXComponent=!0;var C=["components"],O={},S="Data & Derivatives",E={unversionedId:"tutorials/simple-viewer/data",id:"tutorials/simple-viewer/data",title:"Data & Derivatives",description:"In this step we will extend our server so that we can list models, upload them,",source:"@site/docs/tutorials/01-simple-viewer/03-data.mdx",sourceDirName:"tutorials/01-simple-viewer",slug:"/tutorials/simple-viewer/data",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/data",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/01-simple-viewer/03-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/auth"},next:{title:"Viewer & UI",permalink:"/forge-samples-docs/docs/tutorials/simple-viewer/viewer"}},x={},D=[{value:"Data management",id:"data-management",level:2},{value:"Derivatives",id:"derivatives",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],A={toc:D};function M(e){var t=e.components,i=(0,r.Z)(e,C);return(0,o.kt)("wrapper",(0,a.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data--derivatives"},"Data & Derivatives"),(0,o.kt)("p",null,"In this step we will extend our server so that we can list models, upload them,\nand prepare them for viewing."),(0,o.kt)("h2",{id:"data-management"},"Data management"),(0,o.kt)("p",null,"First, let's make sure that our application has a bucket in the Data Management service\nto store its files in. Typically the bucket would be created just once as part of a provisioning\nstep but in our sample we will implement a helper function that will make sure that the bucket\nis available, and use it in other parts of the server app."),(0,o.kt)(s.Z,{NodeJsVsCode:c,DotNetVsCode:k,DotNetVs2022:k,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"derivatives"},"Derivatives"),(0,o.kt)("p",null,"Next, we will implement a couple of helper functions that will derive/extract various types of information\nfrom the uploaded files - for example, 2D drawings, 3D geometry, and metadata - that we can later load\ninto Forge Viewer in our webpage. To do so, we will need to start a new conversion job\nin the ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview"},"Model Derivative"),"\nservice, and checking the status of the conversion."),(0,o.kt)("p",null,"Model Derivative service requires all IDs we use in the API calls to be ",(0,o.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Base64"},"base64"),"-encoded,\nso we include a small utility function that will help with that."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Base64-encoded IDs are referred to as ",(0,o.kt)("em",{parentName:"p"},"URNs"),"."))),(0,o.kt)(s.Z,{NodeJsVsCode:d,DotNetVsCode:y,DotNetVs2022:y,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,o.kt)("p",null,"Now let's make the new functionality available to the client through another\nset of endpoints."),(0,o.kt)(s.Z,{NodeJsVsCode:f,DotNetVsCode:T,DotNetVs2022:T,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Start (or restart) the app as usual, and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/models"},"http://localhost:8080/api/models"),"\nin the browser. The server should respond with a JSON list with names and URNs of all objects\navailable in your configured bucket."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If this is your first time working with Forge, you may get a JSON response\nwith an empty array (",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),") which is expected. In the screenshot below we can\nalready see a couple of files that were uploaded to our bucket in the past."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using Google Chrome, consider installing ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en"},"JSON Formatter"),"\nor a similar extension to automatically format JSON responses."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Server Response",src:n(114).Z,width:"1500",height:"929"})))}M.isMDXComponent=!0},114:function(e,t,n){t.Z=n.p+"assets/images/data-response-136a1ffb319991f74fc05f2b47c7fb39.webp"}}]);