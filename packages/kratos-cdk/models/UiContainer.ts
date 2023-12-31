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

import { UiNode } from '../models/UiNode.ts';
import { UiText } from '../models/UiText.ts';
import { HttpFile } from '../http/http.ts';

/**
* Container represents a HTML Form. The container can work with both HTTP Form and JSON requests
*/
export class UiContainer {
    /**
    * Action should be used as the form action URL `<form action=\"{{ .Action }}\" method=\"post\">`.
    */
    'action': string;
    'messages'?: Array<UiText>;
    /**
    * Method is the form method (e.g. POST)
    */
    'method': string;
    'nodes': Array<UiNode>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<UiText>",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<UiNode>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UiContainer.attributeTypeMap;
    }

    public constructor() {
    }
}

