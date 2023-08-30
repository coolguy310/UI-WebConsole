// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CourierMessageStatus } from '../models/CourierMessageStatus.ts';
import { ErrorGeneric } from '../models/ErrorGeneric.ts';
import { Message } from '../models/Message.ts';

/**
 * no description
 */
export class CourierApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     * @param id MessageID is the ID of the message.
     */
    public async getCourierMessage(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CourierApi", "getCourierMessage", "id");
        }


        // Path Params
        const localVarPath = '/admin/courier/messages/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     * @param page_size Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param status Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter.
     * @param recipient Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter.
     */
    public async listCourierMessages(page_size?: number, page_token?: string, status?: CourierMessageStatus, recipient?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/admin/courier/messages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page_size !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(page_size, "number", "int64"));
        }

        // Query Params
        if (page_token !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(page_token, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "CourierMessageStatus", ""));
        }

        // Query Params
        if (recipient !== undefined) {
            requestContext.setQueryParam("recipient", ObjectSerializer.serialize(recipient, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oryAccessToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CourierApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCourierMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCourierMessage(response: ResponseContext): Promise<Message > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Message = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Message", ""
            ) as Message;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Message = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Message", ""
            ) as Message;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCourierMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCourierMessages(response: ResponseContext): Promise<Array<Message> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Message> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Message>", ""
            ) as Array<Message>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Message> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Message>", ""
            ) as Array<Message>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
