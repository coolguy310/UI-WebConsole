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

import { IdentityCredentialsType } from '../models/IdentityCredentialsType.ts';
import { OAuth2LoginRequest } from '../models/OAuth2LoginRequest.ts';
import { UiContainer } from '../models/UiContainer.ts';
import { HttpFile } from '../http/http.ts';

export class RegistrationFlow {
    'active'?: IdentityCredentialsType;
    /**
    * ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in, a new flow has to be initiated.
    */
    'expires_at': Date;
    /**
    * ID represents the flow\'s unique ID. When performing the registration flow, this represents the id in the registration ui\'s query parameter: http://<selfservice.flows.registration.ui_url>/?flow=<id>
    */
    'id': string;
    /**
    * IssuedAt is the time (UTC) when the flow occurred.
    */
    'issued_at': Date;
    /**
    * Ory OAuth 2.0 Login Challenge.  This value is set using the `login_challenge` query parameter of the registration and login endpoints. If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.
    */
    'oauth2_login_challenge'?: string;
    'oauth2_login_request'?: OAuth2LoginRequest;
    /**
    * RequestURL is the initial URL that was requested from Ory Kratos. It can be used to forward information contained in the URL\'s path or query for example.
    */
    'request_url': string;
    /**
    * ReturnTo contains the requested return_to URL.
    */
    'return_to'?: string;
    /**
    * SessionTokenExchangeCode holds the secret code that the client can use to retrieve a session token after the flow has been completed. This is only set if the client has requested a session token exchange code, and if the flow is of type \"api\", and only on creating the flow.
    */
    'session_token_exchange_code'?: string;
    /**
    * TransientPayload is used to pass data from the registration to a webhook
    */
    'transient_payload'?: any;
    /**
    * The flow type can either be `api` or `browser`.
    */
    'type': string;
    'ui': UiContainer;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "IdentityCredentialsType",
            "format": ""
        },
        {
            "name": "expires_at",
            "baseName": "expires_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "issued_at",
            "baseName": "issued_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "oauth2_login_challenge",
            "baseName": "oauth2_login_challenge",
            "type": "string",
            "format": ""
        },
        {
            "name": "oauth2_login_request",
            "baseName": "oauth2_login_request",
            "type": "OAuth2LoginRequest",
            "format": ""
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "return_to",
            "baseName": "return_to",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_token_exchange_code",
            "baseName": "session_token_exchange_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "transient_payload",
            "baseName": "transient_payload",
            "type": "any",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "ui",
            "baseName": "ui",
            "type": "UiContainer",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RegistrationFlow.attributeTypeMap;
    }

    public constructor() {
    }
}



