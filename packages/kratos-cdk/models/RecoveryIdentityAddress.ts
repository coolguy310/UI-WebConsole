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

export class RecoveryIdentityAddress {
    /**
    * CreatedAt is a helper struct field for gobuffalo.pop.
    */
    'created_at'?: Date;
    'id': string;
    /**
    * UpdatedAt is a helper struct field for gobuffalo.pop.
    */
    'updated_at'?: Date;
    'value': string;
    'via': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created_at",
            "baseName": "created_at",
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
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "via",
            "baseName": "via",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RecoveryIdentityAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

