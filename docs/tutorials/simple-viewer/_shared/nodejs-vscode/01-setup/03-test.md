Try setting your own Forge client ID and secret as the `FORGE_CLIENT_ID` and `FORGE_CLIENT_SECRET`
environment variables, and run the application:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
npm start
```

Then open your browser and navigate to [http://localhost:8080](http://localhost:8080).
The server should respond with `Cannot GET /` because we haven't added any logic to it just yet.

![Empty Response](./result.png)

That's going to be the topic of the next step.
