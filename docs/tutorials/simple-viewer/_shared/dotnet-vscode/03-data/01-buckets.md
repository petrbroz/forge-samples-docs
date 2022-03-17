Let's update the `Models/ForgeService.cs` file:

```csharp title="Models/ForgeService.cs"
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Autodesk.Forge;
using Autodesk.Forge.Client;
using Autodesk.Forge.Model;

public record Token(string AccessToken, DateTime ExpiresAt);

public class ForgeService
{
    private readonly string _clientId;
    private readonly string _clientSecret;
    // highlight-start
    private readonly string _bucket;
    // highlight-end
    private Token _internalTokenCache;
    private Token _publicTokenCache;

    public ForgeService(string clientId, string clientSecret, string bucket = null)
    {
        _clientId = clientId;
        _clientSecret = clientSecret;
        // highlight-start
        _bucket = string.IsNullOrEmpty(bucket) ? string.Format("{0}-basic-app", _clientId.ToLower()) : bucket;
        // highlight-end
    }

    private async Task<Token> GetToken(Scope[] scopes)
    {
        dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);
        return new Token(auth.access_token, DateTime.UtcNow.AddSeconds(auth.expires_in));
    }

    public async Task<Token> GetPublicToken()
    {
        if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)
            _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });
        return _publicTokenCache;
    }

    private async Task<Token> GetInternalToken()
    {
        if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)
            _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });
        return _internalTokenCache;
    }

    // highlight-start
    private async Task EnsureBucketExists(string bucketKey)
    {
        var token = await GetInternalToken();
        var api = new BucketsApi();
        api.Configuration.AccessToken = token.AccessToken;
        try
        {
            await api.GetBucketDetailsAsync(bucketKey);
        }
        catch (ApiException e)
        {
            if (e.ErrorCode == 404)
            {
                await api.CreateBucketAsync(new PostBucketsPayload(bucketKey, null, PostBucketsPayload.PolicyKeyEnum.Temporary));
            }
            else
            {
                throw e;
            }
        }
    }
    // highlight-end
}
```

The `EnsureBucketExists` method will simply try and request additional information
about a specific bucket, and if the response from Forge is `404 Not Found`, it will
attempt to create a new bucket with that name.
