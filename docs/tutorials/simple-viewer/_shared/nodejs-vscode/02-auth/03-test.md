Let's see if our new server endpoint works. Don't forget setting your Forge client ID and client secret
as the `FORGE_CLIENT_ID` and `FORGE_CLIENT_SECRET` environment variables, and run the application:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
npm start
```

If the application starts successfully and you navigate to [http://localhost:8080/api/auth/token](http://localhost:8080/api/auth/token)
in the browser, the server should respond with a JSON object containing the access token data.

![Server Response](./result.png)
