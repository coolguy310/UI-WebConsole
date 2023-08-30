# .CourierApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCourierMessage**](CourierApi.md#getCourierMessage) | **GET** /admin/courier/messages/{id} | Get a Message
[**listCourierMessages**](CourierApi.md#listCourierMessages) | **GET** /admin/courier/messages | List Messages


# **getCourierMessage**
> Message getCourierMessage()

Gets a specific messages by the given ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CourierApi(configuration);

let body:.CourierApiGetCourierMessageRequest = {
  // string | MessageID is the ID of the message.
  id: "id_example",
};

apiInstance.getCourierMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | MessageID is the ID of the message. | defaults to undefined


### Return type

**Message**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | message |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCourierMessages**
> Array<Message> listCourierMessages()

Lists all messages by given status and recipient.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CourierApi(configuration);

let body:.CourierApiListCourierMessagesRequest = {
  // number | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  page_size: 250,
  // string | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). (optional)
  page_token: "page_token_example",
  // CourierMessageStatus | Status filters out messages based on status. If no value is provided, it doesn\'t take effect on filter. (optional)
  status: "queued",
  // string | Recipient filters out messages based on recipient. If no value is provided, it doesn\'t take effect on filter. (optional)
  recipient: "recipient_example",
};

apiInstance.listCourierMessages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | [**number**] | Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to 250
 **page_token** | [**string**] | Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination). | (optional) defaults to undefined
 **status** | **CourierMessageStatus** | Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter. | (optional) defaults to undefined
 **recipient** | [**string**] | Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter. | (optional) defaults to undefined


### Return type

**Array<Message>**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated Courier Message List Response |  -  |
**400** | errorGeneric |  -  |
**0** | errorGeneric |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


