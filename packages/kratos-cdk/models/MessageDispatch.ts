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

/**
* MessageDispatch represents an attempt of sending a courier message It contains the status of the attempt (failed or successful) and the error if any occured
*/
export class MessageDispatch {
    /**
    * CreatedAt is a helper struct field for gobuffalo.pop.
    */
    'created_at': Date;
    'error'?: any;
    /**
    * The ID of this message dispatch
    */
    'id': string;
    /**
    * The ID of the message being dispatched
    */
    'message_id': string;
    /**
    * The status of this dispatch Either \"failed\" or \"success\" failed CourierMessageDispatchStatusFailed success CourierMessageDispatchStatusSuccess
    */
    'status': MessageDispatchStatusEnum;
    /**
    * UpdatedAt is a helper struct field for gobuffalo.pop.
    */
    'updated_at': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "message_id",
            "baseName": "message_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MessageDispatchStatusEnum",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return MessageDispatch.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MessageDispatchStatusEnum = "failed" | "success" ;

