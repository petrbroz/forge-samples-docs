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

![Server Response](./result.png)
