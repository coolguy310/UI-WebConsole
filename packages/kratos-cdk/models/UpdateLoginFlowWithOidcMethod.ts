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
* Update Login Flow with OpenID Connect Method
*/
export class UpdateLoginFlowWithOidcMethod {
    /**
    * The CSRF Token
    */
    'csrf_token'?: string;
    /**
    * Method to use  This field must be set to `oidc` when using the oidc method.
    */
    'method': string;
    /**
    * The provider to register with
    */
    'provider': string;
    /**
    * The identity traits. This is a placeholder for the registration flow.
    */
    'traits'?: any;
    /**
    * UpstreamParameters are the parameters that are passed to the upstream identity provider.  These parameters are optional and depend on what the upstream identity provider supports. Supported parameters are: `login_hint` (string): The `login_hint` parameter suppresses the account chooser and either pre-fills the email box on the sign-in form, or selects the proper session. `hd` (string): The `hd` parameter limits the login/registration process to a Google Organization, e.g. `mycollege.edu`. `prompt` (string): The `prompt` specifies whether the Authorization Server prompts the End-User for reauthentication and consent, e.g. `select_account`.
    */
    'upstream_parameters'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "any",
            "format": ""
        },
        {
            "name": "upstream_parameters",
            "baseName": "upstream_parameters",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateLoginFlowWithOidcMethod.attributeTypeMap;
    }

    public constructor() {
    }
}

