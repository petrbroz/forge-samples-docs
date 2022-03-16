---
sidebar_position: 3
---

# Model Management

Next, let's extend our server so that we can list models, upload them, and initiate their translation for viewing.

## Preparing a bucket

First, let's make sure that our application has a bucket in the Data Management service
to store its files in. Typically the bucket would be created just once as part of a provisioning
step but in our sample we will implement a helper function that will make sure that the bucket
is available, and use it in other parts of the server app.

Let's update the `services/forge.js` file:

```js title="services/forge.js"
// highlight-start
const { AuthClientTwoLegged, BucketsApi } = require('forge-apis');
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');
// highlight-end

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

// highlight-start
async function ensureBucketExists(bucketKey) {
    try {
        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());
        } else {
            throw err;
        }
    }
}
// highlight-end

module.exports = {
    getPublicToken,
};
```

The `ensureBucketExists` function will simply try and request additional information
about a specific bucket using the `BucketsApi` class from the Forge SDK, and if the response
from Forge is `404 Not Found`, it will attempt to create a new bucket with this name.

## Listing and uploading models

Now, let's add two more functions in `services/forge.js` that will be used to list
all objects in the preconfigured bucket, and to upload files to this bucket:

```js title="services/forge.js"
// highlight-start
const fs = require('fs');
const { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');
// highlight-end
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists(bucketKey) {
    try {
        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());
        } else {
            throw err;
        }
    }
}

// highlight-start
async function listObjects() {
    await ensureBucketExists(FORGE_BUCKET);
    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());
    let objects = resp.body.items;
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt');
        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());
        objects = objects.concat(resp.body.items);
    }
    return objects;
}

async function uploadObject(objectName, filePath) {
    await ensureBucketExists(FORGE_BUCKET);
    const buffer = fs.readFileSync(filePath);
    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());
    return resp.body;
}
// highlight-end

module.exports = {
    getPublicToken,
    // highlight-start
    listObjects,
    uploadObject,
    // highlight-end
};
```

As you can see, the `getObjects` method of the `ObjectsApi` class (responsible for listing files in a Data Management bucket)
uses pagination. In our code we simply iterate through all the pages and return all files from our application's bucket
in a single list.

## Translating models

Finally, we will implement a couple of helper functions that will extract various types of information
from the uploaded files - for example, 2D drawings, 3D geometry, and metadata - that we can later load
into the Forge Viewer component in our HTML page. To do so, we will need to start a new conversion job
in the [Model Derivative](https://forge.autodesk.com/en/docs/model-derivative/v2/developers_guide/overview)
service, and checking the status of the conversion. Also, the Model Derivative service requires all IDs
we use in the API calls to be [base64](https://wikipedia.org/wiki/Base64)-encoded, so we include a small
utility function that will help with that.

:::info
Base64-encoded IDs are referred to as _URNs_.
:::

Add the following code to `services/forge.js`:

```js title="services/forge.js"
const fs = require('fs');
// highlight-start
const { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');
// highlight-end
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = require('../config.js');

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists(bucketKey) {
    try {
        await new BucketsApi().getBucketDetails(bucketKey, null, await getInternalToken());
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey, policyKey: 'temporary' }, {}, null, await getInternalToken());
        } else {
            throw err;
        }
    }
}

async function listObjects() {
    await ensureBucketExists(FORGE_BUCKET);
    let resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64 }, null, await getInternalToken());
    let objects = resp.body.items;
    while (resp.body.next) {
        const startAt = new URL(resp.body.next).searchParams.get('startAt');
        resp = await new ObjectsApi().getObjects(FORGE_BUCKET, { limit: 64, startAt }, null, await getInternalToken());
        objects = objects.concat(resp.body.items);
    }
    return objects;
}

async function uploadObject(objectName, filePath) {
    await ensureBucketExists(FORGE_BUCKET);
    const buffer = fs.readFileSync(filePath);
    const resp = await new ObjectsApi().uploadObject(FORGE_BUCKET, objectName, buffer.byteLength, buffer, {}, null, await getInternalToken());
    return resp.body;
}

// highlight-start
async function translateObject(urn, rootFilename) {
    const job = {
        input: { urn },
        output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }
    };
    if (rootFilename) {
        job.input.compressedUrn = true;
        job.input.rootFilename = rootFilename;
    }
    const resp = await new DerivativesApi().translate(job, {}, null, await getInternalToken());
    return resp.body;
}

async function getManifest(urn) {
    try {
        const resp = await new DerivativesApi().getManifest(urn, {}, null, await getInternalToken());
        return resp.body;
    } catch (err) {
        if (err.statusCode === 404) {
            return null;
        } else {
            throw err;
        }
    }
}

function urnify(id) {
    return Buffer.from(id).toString('base64').replace(/=/g, '');
}
// highlight-end

module.exports = {
    getPublicToken,
    listObjects,
    uploadObject,
    // highlight-start
    translateObject,
    getManifest,
    urnify
    // highlight-end
};
```

## Server endpoints

Finally, let's make this new functionality available to the client through another
Express router. Create a `models.js` file under the `routes` subfolder with the following
content:

```js title="routes/models.js"
const express = require('express');
const formidable = require('express-formidable');
const { listObjects, uploadObject, translateObject, getManifest, urnify } = require('../services/forge.js');

let router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        const objects = await listObjects();
        res.json(objects.map(o => ({
            name: o.objectKey,
            urn: urnify(o.objectId)
        })));
    } catch (err) {
        next(err);
    }
});

router.get('/:urn/status', async function (req, res, next) {
    try {
        const manifest = await getManifest(req.params.urn);
        if (manifest) {
            let messages = [];
            if (manifest.derivatives) {
                for (const derivative of manifest.derivatives) {
                    messages = messages.concat(derivative.messages || []);
                    if (derivative.children) {
                        for (const child of derivative.children) {
                            messages.concat(child.messages || []);
                        }
                    }
                }
            }
            res.json({ status: manifest.status, progress: manifest.progress, messages });
        } else {
            res.json({ status: 'n/a' });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', formidable(), async function (req, res, next) {
    const file = req.files['model-file'];
    if (!file) {
        res.status(400).send('The required field ("model-file") is missing.');
        return;
    }
    try {
        const obj = await uploadObject(file.name, file.path);
        await translateObject(urnify(obj.objectId), req.fields['model-zip-entrypoint']);
        res.json({
            name: obj.objectKey,
            urn: urnify(obj.objectId)
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
```

:::info
The `formidable()` middleware used in the `POST` request handler will make sure that
any `multipart/form-data` content coming with the request is parsed and available
in the `req.files` and `req.fields` properties.
:::

And mount the router to our server application by modifying `server.js`:

```js title="server.js"
const express = require('express');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));
app.use('/api/auth', require('./routes/auth.js'));
// highlight-start
app.use('/api/models', require('./routes/models.js'));
// highlight-end
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
```

The router will handle 3 types of requests:

- `GET /api/models` - when the client wants to get the list of all models available for viewing
- `GET /api/models/:urn/status` - used to check the status of the conversion (incl. error messages if there are any)
- `POST /api/models` - when the client wants to upload a new model and start its translation

## Try it out

Time to try our improved server application. This time, apart from setting the Forge application
credentials, you can also include the name of the Data Management bucket you want to use via
the optional `FORGE_BUCKET` environment variable:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
export FORGE_BUCKET=your-custom-bucket-name
npm start
```

When you navigate to [http://localhost:8080/api/models](http://localhost:8080/api/models)
in the browser, the server should respond with a JSON list with names and URNs of all objects
available in your configured bucket. If you are getting started, you may get a JSON response
with an empty array (`[]`) which is expected. In the screenshot below we can already see a couple
of files that were uploaded to our bucket in the past.

![Server Response](./data-response.png)