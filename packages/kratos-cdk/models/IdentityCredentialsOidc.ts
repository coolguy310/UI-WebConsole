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

import { IdentityCredentialsOidcProvider } from '../models/IdentityCredentialsOidcProvider.ts';
import { HttpFile } from '../http/http.ts';

export class IdentityCredentialsOidc {
    'providers'?: Array<IdentityCredentialsOidcProvider>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "providers",
            "baseName": "providers",
            "type": "Array<IdentityCredentialsOidcProvider>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentityCredentialsOidc.attributeTypeMap;
    }

    public constructor() {
    }
}

