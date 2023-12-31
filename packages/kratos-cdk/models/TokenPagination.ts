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

import { HttpFile } from '../http/http.ts';

export class TokenPagination {
    /**
    * Items per page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
    */
    'page_size'?: number;
    /**
    * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
    */
    'page_token'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "page_size",
            "baseName": "page_size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "page_token",
            "baseName": "page_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenPagination.attributeTypeMap;
    }

    public constructor() {
    }
}

