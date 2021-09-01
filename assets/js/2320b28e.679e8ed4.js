"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[114],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Authentication",u={unversionedId:"tutorials/hubs-browser/nodejs/authentication",id:"tutorials/hubs-browser/nodejs/authentication",isDocsHomePage:!1,title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/hubs-browser/nodejs/authentication.md",sourceDirName:"tutorials/hubs-browser/nodejs",slug:"/tutorials/hubs-browser/nodejs/authentication",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/authentication",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/main/website/docs/tutorials/hubs-browser/nodejs/authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Server",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/server"},next:{title:"Browsing Hubs",permalink:"/forge-samples-docs/docs/tutorials/hubs-browser/nodejs/hubs"}},c=[{value:"Token management",id:"token-management",children:[]},{value:"Authentication endpoint",id:"authentication-endpoint",children:[]},{value:"Try it out",id:"try-it-out",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the Forge platform, guide the user through a ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token"},"3-legged OAuth workflow"),",\nand generate access tokens for various needs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing the owner to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.')),(0,o.kt)("h2",{id:"token-management"},"Token management"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"forge.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," subfolder. This is where we will be implementing\nall the Forge-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/forge.js"',title:'"services/forge.js"'},"const { AuthClientThreeLegged, UserProfileApi } = require('forge-apis');\n\nconst { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL } = process.env;\nif (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nconst INTERNAL_TOKEN_SCOPES = ['viewables:read', 'data:read'];\nconst PUBLIC_TOKEN_SCOPES = ['viewables:read'];\n\nfunction getAuthorizationUrl() {\n    return 'https://developer.api.autodesk.com' +\n        '/authentication/v1/authorize?response_type=code' +\n        '&client_id=' + FORGE_CLIENT_ID +\n        '&redirect_uri=' + FORGE_CALLBACK_URL +\n        '&scope=' + INTERNAL_TOKEN_SCOPES.join(' ');\n}\n\nconst internalAuthClient = new AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, INTERNAL_TOKEN_SCOPES);\nconst publicAuthClient = new AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, PUBLIC_TOKEN_SCOPES);\n\nasync function authCallbackMiddleware(req, res, next) {\n    const internalCredentials = await internalAuthClient.getToken(req.query.code);\n    const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n    req.session.public_token = publicCredentials.access_token;\n    req.session.internal_token = internalCredentials.access_token;\n    req.session.refresh_token = publicCredentials.refresh_token;\n    req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    next();\n}\n\nasync function authRefreshMiddleware(req, res, next) {\n    const { refresh_token, expires_at } = req.session;\n    if (!refresh_token) {\n        res.status(401).end();\n        return;\n    }\n\n    if (expires_at < Date.now()) {\n        const internalCredentials = await internalAuthClient.refreshToken({ refresh_token });\n        const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n        req.session.public_token = publicCredentials.access_token;\n        req.session.internal_token = internalCredentials.access_token;\n        req.session.refresh_token = publicCredentials.refresh_token;\n        req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    }\n    req.internalOAuthToken = {\n        access_token: req.session.internal_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    req.publicOAuthToken = {\n        access_token: req.session.public_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    next();\n}\n\nasync function getUserProfile(token) {\n    const resp = await new UserProfileApi().getUserProfile(internalAuthClient, token);\n    return resp.body;\n}\n\nmodule.exports = {\n    getAuthorizationUrl,\n    authCallbackMiddleware,\n    authRefreshMiddleware,\n    getUserProfile\n};\n")),(0,o.kt)("p",null,"The script expects a couple of configuration values to be provided via environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FORGE_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FORGE_CLIENT_SECRET")," are the credentials generated for you after\n",(0,o.kt)("a",{parentName:"li",href:"../../../intro#create-an-app"},"creating a new Forge application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FORGE_CALLBACK_URL")," should be the callback URL the user should be redirected to after logging\nin successfully")),(0,o.kt)("p",null,"The code then provides a couple of helper functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"getAuthorizationUrl")," function generates a URL for our users to be redirected to when\ninitiating the 3-legged authentication workflow"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"authCallbackMiddleware")," function can be used as an Express.js ",(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/en/guide/using-middleware.html"},"middleware"),"\nwhen the user logs in successfully and is redirected back to our application"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"authRefreshMiddleware")," function is then used as an Express.js middleware for all requests\nthat will need to make use of the Forge access tokens"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"getUserProfile")," function returns additional details about the authenticated user based on\nan existing access token")),(0,o.kt)("h2",{id:"authentication-endpoint"},"Authentication endpoint"),(0,o.kt)("p",null,"Next, let's add a first endpoint to our server. Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," subfolder\nwith the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getAuthorizationUrl, authCallbackMiddleware, authRefreshMiddleware, getUserProfile } = require('../services/forge.js');\n\nlet router = express.Router();\n\nrouter.get('/login', function (req, res) {\n    res.redirect(getAuthorizationUrl());\n});\n\nrouter.get('/logout', function (req, res) {\n    req.session = null;\n    res.redirect('/');\n});\n\nrouter.get('/callback', authCallbackMiddleware, function (req, res) {\n    res.redirect('/');\n});\n\nrouter.get('/token', authRefreshMiddleware, function (req, res) {\n    res.json(req.publicOAuthToken);\n});\n\nrouter.get('/profile', authRefreshMiddleware, async function (req, res, next) {\n    try {\n        const profile = await getUserProfile(req.internalOAuthToken);\n        res.json({ name: `${profile.firstName} ${profile.lastName}` });\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,o.kt)("p",null,"Here we implement a new Express.js ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"router"),' that\nwill handle all the authentication-related endpoints. Let\'s "mount" the router to our server\napplication by modifying ',(0,o.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session')\nconst PORT = process.env.PORT || 3000;\n\nlet app = express();\napp.use(express.static('public'));\napp.use(session({\n    secret: process.env.SERVER_SESSION_SECRET,\n    maxAge: 24 * 60 * 60 * 1000,\n}));\n// highlight-start\napp.use('/api/auth', require('./routes/auth.js'));\n// highlight-end\napp.use(function (err, req, res, next) {\n    console.error(err);\n    res.status(500).send(err.message);\n});\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,o.kt)("p",null,"Since we've attached the router to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/auth")," prefix, the router will now handle the following\nrequests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/login")," will redirect the user to the Autodesk login page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/callback")," is the URL our user will be redirected to after logging in successfully"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/logout")," will remove any cookie-based session data for the given user, effectively\nlogging the user out of our application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/token")," will generate a public access token that will later be used by Forge Viewer\nto load our designs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/profile")," will return a simple JSON with information about the logged in user")),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("p",null,"Let's see if our new server endpoint works. Try setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FORGE_CLIENT_SECRET"),"\nenvironment variables to your own Forge app credentials, and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"FORGE_CALLBACK_URL")," env.\nvariable to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/auth/callback")," because that's where we implemented our\ncode handling the callbacks from Forge:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVER_SESSION_SECRET=some-secret-phrase\nexport FORGE_CLIENT_ID=your-own-forge-client-id\nexport FORGE_CLIENT_SECRET=your-own-forge-client-secret\nexport FORGE_CALLBACK_URL=http://localhost:3000/api/auth/callback\nnpm start\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: add note about the callback URL matching the settings on the Forge portal")),(0,o.kt)("p",null,"When you navigate to http://localhost:3000/api/auth/login in the browser, you should be\nredirected to Autodesk login page, and after logging in, you should be redirected back\nto your application, for now simply showing ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot GET /"),". This is expected as we haven't\nimplemented the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /")," endpoint yet. However, if you try and explore the cookies stored\nby your browser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," origin, you'll notice that the application\nis already storing ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_token"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"public_token"),", and a couple more properties there.\nWe will use these later on."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: screenshot/gif")))}d.isMDXComponent=!0}}]);