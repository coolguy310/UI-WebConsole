# .IdentityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchPatchIdentities**](IdentityApi.md#batchPatchIdentities) | **PATCH** /admin/identities | Create and deletes multiple identities
[**createIdentity**](IdentityApi.md#createIdentity) | **POST** /admin/identities | Create an Identity
[**createRecoveryCodeForIdentity**](IdentityApi.md#createRecoveryCodeForIdentity) | **POST** /admin/recovery/code | Create a Recovery Code
[**createRecoveryLinkForIdentity**](IdentityApi.md#createRecoveryLinkForIdentity) | **POST** /admin/recovery/link | Create a Recovery Link
[**deleteIdentity**](IdentityApi.md#deleteIdentity) | **DELETE** /admin/identities/{id} | Delete an Identity
[**deleteIdentityCredentials**](IdentityApi.md#deleteIdentityCredentials) | **DELETE** /admin/identities/{id}/credentials/{type} | Delete a credential for a specific identity
[**deleteIdentitySessions**](IdentityApi.md#deleteIdentitySessions) | **DELETE** /admin/identities/{id}/sessions | Delete &amp; Invalidate an Identity\&#39;s Sessions
[**disableSession**](IdentityApi.md#disableSession) | **DELETE** /admin/sessions/{id} | Deactivate a Session
[**extendSession**](IdentityApi.md#extendSession) | **PATCH** /admin/sessions/{id}/extend | Extend a Session
[**getIdentity**](IdentityApi.md#getIdentity) | **GET** /admin/identities/{id} | Get an Identity
[**getIdentitySchema**](IdentityApi.md#getIdentitySchema) | **GET** /schemas/{id} | Get Identity JSON Schema
[**getSession**](IdentityApi.md#getSession) | **GET** /admin/sessions/{id} | Get Session
[**listIdentities**](IdentityApi.md#listIdentities) | **GET** /admin/identities | List Identities
[**listIdentitySchemas**](IdentityApi.md#listIdentitySchemas) | **GET** /schemas | Get all Identity Schemas
[**listIdentitySessions**](IdentityApi.md#listIdentitySessions) | **GET** /admin/identities/{id}/sessions | List an Identity\&#39;s Sessions
[**listSessions**](IdentityApi.md#listSessions) | **GET** /admin/sessions | List All Sessions
[**patchIdentity**](IdentityApi.md#patchIdentity) | **PATCH** /admin/identities/{id} | Patch an Identity
[**updateIdentity**](IdentityApi.md#updateIdentity) | **PUT** /admin/identities/{id} | Update an Identity


# **batchPatchIdentities**
> BatchPatchIdentitiesResponse batchPatchIdentities()

Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiBatchPatchIdentitiesRequest = {
  // PatchIdentitiesBody (optional)
  PatchIdentitiesBody: {
    identities: [
      {
        create: {
          credentials: {
            oidc: {
              config: {
                config: {
                  hashed_password: "hashed_password_example",
                  password: "password_example",
                },
                providers: [
                  {
                    provider: "provider_example",
                    subject: "subject_example",
                  },
                ],
              },
            },
            password: {
              config: {
                hashed_password: "hashed_password_example",
                password: "password_example",
              },
            },
          },
          metadata_admin: null,
          metadata_public: null,
          recovery_addresses: [
            {
              created_at: new Date('1970-01-01T00:00:00.00Z'),
              id: "id_example",
              updated_at: new Date('1970-01-01T00:00:00.00Z'),
              value: "value_example",
              via: "via_example",
            },
          ],
          schema_id: "schema_id_example",
          state: "active",
          traits: {},
          verifiable_addresses: [
            {
              created_at: new Date('2014-01-01T23:28:56.782Z'),
              id: "id_example",
              status: "status_example",
              updated_at: new Date('2014-01-01T23:28:56.782Z'),
              value: "value_example",
              verified: true,
              verified_at: new Date('1970-01-01T00:00:00.00Z'),
              via: "via_example",
            },
          ],
        },
        patch_id: "patch_id_example",
      },
    ],
  },
};

apiInstance.batchPatchIdentities(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PatchIdentitiesBody** | **PatchIdentitiesBody**|  |


### Return type

**BatchPatchIdentitiesResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | batchPatchIdentitiesResponse |  -  |
**400** | errorGeneric |  -  |
**409** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createIdentity**
> Identity createIdentity()

Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiCreateIdentityRequest = {
  // CreateIdentityBody (optional)
  CreateIdentityBody: {
    credentials: {
      oidc: {
        config: {
          config: {
            hashed_password: "hashed_password_example",
            password: "password_example",
          },
          providers: [
            {
              provider: "provider_example",
              subject: "subject_example",
            },
          ],
        },
      },
      password: {
        config: {
          hashed_password: "hashed_password_example",
          password: "password_example",
        },
      },
    },
    metadata_admin: null,
    metadata_public: null,
    recovery_addresses: [
      {
        created_at: new Date('1970-01-01T00:00:00.00Z'),
        id: "id_example",
        updated_at: new Date('1970-01-01T00:00:00.00Z'),
        value: "value_example",
        via: "via_example",
      },
    ],
    schema_id: "schema_id_example",
    state: "active",
    traits: {},
    verifiable_addresses: [
      {
        created_at: new Date('2014-01-01T23:28:56.782Z'),
        id: "id_example",
        status: "status_example",
        updated_at: new Date('2014-01-01T23:28:56.782Z'),
        value: "value_example",
        verified: true,
        verified_at: new Date('1970-01-01T00:00:00.00Z'),
        via: "via_example",
      },
    ],
  },
};

apiInstance.createIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateIdentityBody** | **CreateIdentityBody**|  |


### Return type

**Identity**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | identity |  -  |
**400** | errorGeneric |  -  |
**409** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRecoveryCodeForIdentity**
> RecoveryCodeForIdentity createRecoveryCodeForIdentity()

This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiCreateRecoveryCodeForIdentityRequest = {
  // CreateRecoveryCodeForIdentityBody (optional)
  CreateRecoveryCodeForIdentityBody: {
    expires_in: "80728ms0015280217980962255008507620686293393339756506851391026912917327294786014820265m1272755041757701929816286488291663322877m21919116647837856387556598683615248784425528468720999697682157936442848967131857636391us382249351630745068057172793570606620664962415415434479790599868759540626151494012626h19118476173237968022090825677715773090491175877238622700367804481067589385995284318716971h809437255518186242126631124808712420936114222us1109826538733395457796110376067381730053899858052502h9559516531751128043086958209868597220486555936412006917239720304955737734452346677471754449209840m308684917330882243035942890m0673685589682196092806879799560883895980413852591093704397513us546060652528654068834561751457882958790974352941056503031506863433940h59325594064046466694586076706109594796867002468642449871184ms977583459814832574743930384284266731620716351898465ms529386339022152609092509344996631299698075356us34890990125995414960453920343154842307899106337980741065ms35834077484739706353881us714470s2628582763368571328507679471307057663772614811507328336080145326834191317716504454477932763323597ns81241407647h0432196393721552124808999238986208055750640221ms235s",
    identity_id: "identity_id_example",
  },
};

apiInstance.createRecoveryCodeForIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateRecoveryCodeForIdentityBody** | **CreateRecoveryCodeForIdentityBody**|  |


### Return type

**RecoveryCodeForIdentity**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | recoveryCodeForIdentity |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRecoveryLinkForIdentity**
> RecoveryLinkForIdentity createRecoveryLinkForIdentity()

This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiCreateRecoveryLinkForIdentityRequest = {
  // CreateRecoveryLinkForIdentityBody (optional)
  CreateRecoveryLinkForIdentityBody: {
    expires_in: "4ms",
    identity_id: "identity_id_example",
  },
};

apiInstance.createRecoveryLinkForIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateRecoveryLinkForIdentityBody** | **CreateRecoveryLinkForIdentityBody**|  |


### Return type

**RecoveryLinkForIdentity**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | recoveryLinkForIdentity |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIdentity**
> void deleteIdentity()

Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiDeleteIdentityRequest = {
  // string | ID is the identity\'s ID.
  id: "id_example",
};

apiInstance.deleteIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the identity\&#39;s ID. | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIdentityCredentials**
> void deleteIdentityCredentials()

Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiDeleteIdentityCredentialsRequest = {
  // string | ID is the identity\'s ID.
  id: "id_example",
  // 'totp' | 'webauthn' | 'lookup' | Type is the credential\'s Type. One of totp, webauthn, lookup
  type: "totp",
};

apiInstance.deleteIdentityCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the identity\&#39;s ID. | defaults to undefined
 **type** | [**&#39;totp&#39; | &#39;webauthn&#39; | &#39;lookup&#39;**]**Array<&#39;totp&#39; &#124; &#39;webauthn&#39; &#124; &#39;lookup&#39;>** | Type is the credential\&#39;s Type. One of totp, webauthn, lookup | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIdentitySessions**
> void deleteIdentitySessions()

Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiDeleteIdentitySessionsRequest = {
  // string | ID is the identity\'s ID.
  id: "id_example",
};

apiInstance.deleteIdentitySessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the identity\&#39;s ID. | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**400** | errorGeneric |  -  |
**401** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableSession**
> void disableSession()

Calling this endpoint deactivates the specified session. Session data is not deleted.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiDisableSessionRequest = {
  // string | ID is the session\'s ID.
  id: "id_example",
};

apiInstance.disableSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the session\&#39;s ID. | defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**400** | errorGeneric |  -  |
**401** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **extendSession**
> Session extendSession()

Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiExtendSessionRequest = {
  // string | ID is the session\'s ID.
  id: "id_example",
};

apiInstance.extendSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the session\&#39;s ID. | defaults to undefined


### Return type

**Session**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | session |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentity**
> Identity getIdentity()

Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiGetIdentityRequest = {
  // string | ID must be set to the ID of identity you want to get
  id: "id_example",
  // Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'> | Include Credentials in Response  Include any credential, for example `password` or `oidc`, in the response. When set to `oidc`, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available. (optional)
  include_credential: [
    "password",
  ],
};

apiInstance.getIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID must be set to the ID of identity you want to get | defaults to undefined
 **include_credential** | **Array<&#39;password&#39; &#124; &#39;totp&#39; &#124; &#39;oidc&#39; &#124; &#39;webauthn&#39; &#124; &#39;lookup_secret&#39;>** | Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available. | (optional) defaults to undefined


### Return type

**Identity**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | identity |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIdentitySchema**
> any getIdentitySchema()

Return a specific identity schema.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiGetIdentitySchemaRequest = {
  // string | ID must be set to the ID of schema you want to get
  id: "id_example",
};

apiInstance.getIdentitySchema(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID must be set to the ID of schema you want to get | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | identitySchema |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSession**
> Session getSession()

This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiGetSessionRequest = {
  // string | ID is the session\'s ID.
  id: "id_example",
  // Array<string> | ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand=Identity&expand=Devices If no value is provided, the expandable properties are skipped. (optional)
  expand: [
    "identity",
  ],
};

apiInstance.getSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the session\&#39;s ID. | defaults to undefined
 **expand** |  | ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped. | (optional) defaults to undefined


### Return type

**Session**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | session |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIdentities**
> Array<Identity> listIdentities()

Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiListIdentitiesRequest = {
  // number | Items per Page  This is the number of items per page. (optional)
  per_page: 250,
  // number | Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. (optional)
  page: 1,
  // string | CredentialsIdentifier is the identifier (username, email) of the credentials to look up. (optional)
  credentials_identifier: "credentials_identifier_example",
};

apiInstance.listIdentities(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | [**number**] | Items per Page  This is the number of items per page. | (optional) defaults to 250
 **page** | [**number**] | Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. | (optional) defaults to 1
 **credentials_identifier** | [**string**] | CredentialsIdentifier is the identifier (username, email) of the credentials to look up. | (optional) defaults to undefined


### Return type

**Array<Identity>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated Identity List Response |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIdentitySchemas**
> Array<IdentitySchemaContainer> listIdentitySchemas()

Returns a list of all identity schemas currently in use.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiListIdentitySchemasRequest = {
  // number | Items per Page  This is the number of items per page. (optional)
  per_page: 250,
  // number | Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. (optional)
  page: 1,
};

apiInstance.listIdentitySchemas(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **per_page** | [**number**] | Items per Page  This is the number of items per page. | (optional) defaults to 250
 **page** | [**number**] | Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. | (optional) defaults to 1


### Return type

**Array<IdentitySchemaContainer>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List Identity JSON Schemas Response |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIdentitySessions**
> Array<Session> listIdentitySessions()

This endpoint returns all sessions that belong to the given Identity.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiListIdentitySessionsRequest = {
  // string | ID is the identity\'s ID.
  id: "id_example",
  // number | Items per Page  This is the number of items per page. (optional)
  per_page: 250,
  // number | Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. (optional)
  page: 1,
  // boolean | Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned. (optional)
  active: true,
};

apiInstance.listIdentitySessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID is the identity\&#39;s ID. | defaults to undefined
 **per_page** | [**number**] | Items per Page  This is the number of items per page. | (optional) defaults to 250
 **page** | [**number**] | Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist. | (optional) defaults to 1
 **active** | [**boolean**] | Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned. | (optional) defaults to undefined


### Return type

**Array<Session>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List Identity Sessions Response |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSessions**
> Array<Session> listSessions()

Listing all sessions that exist.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiListSessionsRequest = {
  // number | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  page_size: 250,
  // string | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  page_token: "page_token_example",
  // boolean | Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned. (optional)
  active: true,
  // Array<string> | ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped. (optional)
  expand: [
    "identity",
  ],
};

apiInstance.listSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | [**number**] | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to 250
 **page_token** | [**string**] | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to undefined
 **active** | [**boolean**] | Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned. | (optional) defaults to undefined
 **expand** |  | ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped. | (optional) defaults to undefined


### Return type

**Array<Session>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session List Response  The response given when listing sessions in an administrative context. |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchIdentity**
> Identity patchIdentity()

Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiPatchIdentityRequest = {
  // string | ID must be set to the ID of identity you want to update
  id: "id_example",
  // Array<JsonPatch> (optional)
  JsonPatch: [
    {
      _from: "/name",
      op: "replace",
      path: "/name",
      value: null,
    },
  ],
};

apiInstance.patchIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JsonPatch** | **Array<JsonPatch>**|  |
 **id** | [**string**] | ID must be set to the ID of identity you want to update | defaults to undefined


### Return type

**Identity**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | identity |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**409** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateIdentity**
> Identity updateIdentity()

This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentityApi(configuration);

let body:.IdentityApiUpdateIdentityRequest = {
  // string | ID must be set to the ID of identity you want to update
  id: "id_example",
  // UpdateIdentityBody (optional)
  UpdateIdentityBody: {
    credentials: {
      oidc: {
        config: {
          config: {
            hashed_password: "hashed_password_example",
            password: "password_example",
          },
          providers: [
            {
              provider: "provider_example",
              subject: "subject_example",
            },
          ],
        },
      },
      password: {
        config: {
          hashed_password: "hashed_password_example",
          password: "password_example",
        },
      },
    },
    metadata_admin: null,
    metadata_public: null,
    schema_id: "schema_id_example",
    state: "active",
    traits: {},
  },
};

apiInstance.updateIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UpdateIdentityBody** | **UpdateIdentityBody**|  |
 **id** | [**string**] | ID must be set to the ID of identity you want to update | defaults to undefined


### Return type

**Identity**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | identity |  -  |
**400** | errorGeneric |  -  |
**404** | errorGeneric |  -  |
**409** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


