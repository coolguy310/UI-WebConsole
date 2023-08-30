/**
 * Ory Identities API
 * This is the API specification for Ory Identities with features such as registration, login, recovery, account verification, profile settings, password reset, identity management, session management, email and sms delivery, and more. 
 *
 * OpenAPI spec version: 
 * Contact: office@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OAuth2Client } from '../models/OAuth2Client.ts';
import { OAuth2ConsentRequestOpenIDConnectContext } from '../models/OAuth2ConsentRequestOpenIDConnectContext.ts';
import { HttpFile } from '../http/http.ts';

/**
* OAuth2LoginRequest struct for OAuth2LoginRequest
*/
export class OAuth2LoginRequest {
    /**
    * ID is the identifier (\\\"login challenge\\\") of the login request. It is used to identify the session.
    */
    'challenge'?: string;
    'client'?: OAuth2Client;
    'oidc_context'?: OAuth2ConsentRequestOpenIDConnectContext;
    /**
    * RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters.
    */
    'request_url'?: string;
    'requested_access_token_audience'?: Array<string>;
    'requested_scope'?: Array<string>;
    /**
    * SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the \\\"sid\\\" parameter in the ID Token and in OIDC Front-/Back- channel logout. It\'s value can generally be used to associate consecutive login requests by a certain user.
    */
    'session_id'?: string;
    /**
    * Skip, if true, implies that the client has requested the same scopes from the same user previously. If true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.  This feature allows you to update / set session information.
    */
    'skip'?: boolean;
    /**
    * Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope requested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type when accepting the login request, or the request will fail.
    */
    'subject'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "challenge",
            "baseName": "challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "OAuth2Client",
            "format": ""
        },
        {
            "name": "oidc_context",
            "baseName": "oidc_context",
            "type": "OAuth2ConsentRequestOpenIDConnectContext",
            "format": ""
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "requested_access_token_audience",
            "baseName": "requested_access_token_audience",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "requested_scope",
            "baseName": "requested_scope",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "session_id",
            "baseName": "session_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OAuth2LoginRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

