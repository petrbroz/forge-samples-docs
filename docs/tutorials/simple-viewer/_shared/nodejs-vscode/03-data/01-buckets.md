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
