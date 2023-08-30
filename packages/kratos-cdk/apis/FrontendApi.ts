// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DeleteMySessionsCount } from '../models/DeleteMySessionsCount.ts';
import { ErrorBrowserLocationChangeRequired } from '../models/ErrorBrowserLocationChangeRequired.ts';
import { ErrorGeneric } from '../models/ErrorGeneric.ts';
import { FlowError } from '../models/FlowError.ts';
import { LoginFlow } from '../models/LoginFlow.ts';
import { LogoutFlow } from '../models/LogoutFlow.ts';
import { PerformNativeLogoutBody } from '../models/PerformNativeLogoutBody.ts';
import { RecoveryFlow } from '../models/RecoveryFlow.ts';
import { RegistrationFlow } from '../models/RegistrationFlow.ts';
import { Session } from '../models/Session.ts';
import { SettingsFlow } from '../models/SettingsFlow.ts';
import { SuccessfulNativeLogin } from '../models/SuccessfulNativeLogin.ts';
import { SuccessfulNativeRegistration } from '../models/SuccessfulNativeRegistration.ts';
import { UpdateLoginFlowBody } from '../models/UpdateLoginFlowBody.ts';
import { UpdateRecoveryFlowBody } from '../models/UpdateRecoveryFlowBody.ts';
import { UpdateRegistrationFlowBody } from '../models/UpdateRegistrationFlowBody.ts';
import { UpdateSettingsFlowBody } from '../models/UpdateSettingsFlowBody.ts';
import { UpdateVerificationFlowBody } from '../models/UpdateVerificationFlowBody.ts';
import { VerificationFlow } from '../models/VerificationFlow.ts';

/**
 * no description
 */
export class FrontendApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter `?refresh=true` was set.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  The optional query parameter login_challenge is set when using Kratos with Hydra in an OAuth2 flow. See the oauth2_provider.url configuration option.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Browsers
     * @param refresh Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @param aal Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @param return_to The URL to return the browser to after the flow was completed.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @param login_challenge An optional Hydra login challenge. If present, Kratos will cooperate with Ory Hydra to act as an OAuth2 identity provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?login_challenge&#x3D;abcde&#x60;).
     */
    public async createBrowserLoginFlow(refresh?: boolean, aal?: string, return_to?: string, Cookie?: string, login_challenge?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/self-service/login/browser';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (refresh !== undefined) {
            requestContext.setQueryParam("refresh", ObjectSerializer.serialize(refresh, "boolean", ""));
        }

        // Query Params
        if (aal !== undefined) {
            requestContext.setQueryParam("aal", ObjectSerializer.serialize(aal, "string", ""));
        }

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }

        // Query Params
        if (login_challenge !== undefined) {
            requestContext.setQueryParam("login_challenge", ObjectSerializer.serialize(login_challenge, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns a 401 error.  When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.
     * Create a Logout URL for Browsers
     * @param cookie HTTP Cookies  If you call this endpoint from a backend, please include the original Cookie header in the request.
     * @param return_to Return to URL  The URL to which the browser should be redirected to after the logout has been performed.
     */
    public async createBrowserLogoutFlow(cookie?: string, return_to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/self-service/logout/browser';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("cookie", ObjectSerializer.serialize(cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to `selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists, the browser is returned to the configured return URL.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects or a 400 bad request error if the user is already authenticated.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Browsers
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public async createBrowserRecoveryFlow(return_to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/self-service/recovery/browser';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url`.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Browsers
     * @param return_to The URL to return the browser to after the flow was completed.
     * @param login_challenge Ory OAuth 2.0 Login Challenge.  If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?login_challenge&#x3D;abcde&#x60;).  This feature is compatible with Ory Hydra when not running on the Ory Network.
     * @param after_verification_return_to The URL to return the browser to after the verification flow was completed.  After the registration flow is completed, the user will be sent a verification email. Upon completing the verification flow, this URL will be used to override the default &#x60;selfservice.flows.verification.after.default_redirect_to&#x60; value.
     */
    public async createBrowserRegistrationFlow(return_to?: string, login_challenge?: string, after_verification_return_to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/self-service/registration/browser';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }

        // Query Params
        if (login_challenge !== undefined) {
            requestContext.setQueryParam("login_challenge", ObjectSerializer.serialize(login_challenge, "string", ""));
        }

        // Query Params
        if (after_verification_return_to !== undefined) {
            requestContext.setQueryParam("after_verification_return_to", ObjectSerializer.serialize(after_verification_return_to, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid Ory Kratos Session Cookie is included in the request, a login flow will be initialized.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session was set, the browser will be redirected to the login endpoint.  If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects or a 401 forbidden error if no valid session was set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Browsers
     * @param return_to The URL to return the browser to after the flow was completed.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async createBrowserSettingsFlow(return_to?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/self-service/settings/browser';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to `selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Browser Clients
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public async createBrowserVerificationFlow(return_to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/self-service/verification/browser';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initiates a login flow for native apps that do not use a browser, such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks, including CSRF login attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Native Apps
     * @param refresh Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @param aal Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     * @param return_session_token_exchange_code EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public async createNativeLoginFlow(refresh?: boolean, aal?: string, X_Session_Token?: string, return_session_token_exchange_code?: boolean, return_to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/self-service/login/api';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (refresh !== undefined) {
            requestContext.setQueryParam("refresh", ObjectSerializer.serialize(refresh, "boolean", ""));
        }

        // Query Params
        if (aal !== undefined) {
            requestContext.setQueryParam("aal", ObjectSerializer.serialize(aal, "string", ""));
        }

        // Query Params
        if (return_session_token_exchange_code !== undefined) {
            requestContext.setQueryParam("return_session_token_exchange_code", ObjectSerializer.serialize(return_session_token_exchange_code, "boolean", ""));
        }

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error.  To fetch an existing recovery flow call `/self-service/recovery/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Native Apps
     */
    public async createNativeRecoveryFlow(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/self-service/recovery/api';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Native Apps
     * @param return_session_token_exchange_code EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public async createNativeRegistrationFlow(return_session_token_exchange_code?: boolean, return_to?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/self-service/registration/api';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (return_session_token_exchange_code !== undefined) {
            requestContext.setQueryParam("return_session_token_exchange_code", ObjectSerializer.serialize(return_session_token_exchange_code, "boolean", ""));
        }

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on. You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.  To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Native Apps
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     */
    public async createNativeSettingsFlow(X_Session_Token?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/self-service/settings/api';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.  To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Native Apps
     */
    public async createNativeVerificationFlow(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/self-service/verification/api';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Calling this endpoint invalidates all except the current session that belong to the logged-in user. Session data are not deleted.
     * Disable my other sessions
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public async disableMyOtherSessions(X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/sessions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Calling this endpoint invalidates the specified session. The current session cannot be revoked. Session data are not deleted.
     * Disable one of my sessions
     * @param id ID is the session\&#39;s ID.
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public async disableMySession(id: string, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "disableMySession", "id");
        }




        // Path Params
        const localVarPath = '/sessions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Exchange Session Token
     * @param init_code The part of the code return when initializing the flow.
     * @param return_to_code The part of the code returned by the return_to URL.
     */
    public async exchangeSessionToken(init_code: string, return_to_code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'init_code' is not null or undefined
        if (init_code === null || init_code === undefined) {
            throw new RequiredError("FrontendApi", "exchangeSessionToken", "init_code");
        }


        // verify required parameter 'return_to_code' is not null or undefined
        if (return_to_code === null || return_to_code === undefined) {
            throw new RequiredError("FrontendApi", "exchangeSessionToken", "return_to_code");
        }


        // Path Params
        const localVarPath = '/sessions/token-exchange';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (init_code !== undefined) {
            requestContext.setQueryParam("init_code", ObjectSerializer.serialize(init_code, "string", ""));
        }

        // Query Params
        if (return_to_code !== undefined) {
            requestContext.setQueryParam("return_to_code", ObjectSerializer.serialize(return_to_code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint returns the error associated with a user-facing self service errors.  This endpoint supports stub values to help you implement the error UI:  `?id=stub:500` - returns a stub 500 (Internal Server Error) error.  More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).
     * Get User-Flow Errors
     * @param id Error is the error\&#39;s ID
     */
    public async getFlowError(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "getFlowError", "id");
        }


        // Path Params
        const localVarPath = '/self-service/errors';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint returns a login flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/login\', async function (req, res) { const flow = await client.getLoginFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'login\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Login Flow
     * @param id The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async getLoginFlow(id: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "getLoginFlow", "id");
        }



        // Path Params
        const localVarPath = '/self-service/login/flows';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint returns a recovery flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getRecoveryFlow(req.header(\'Cookie\'), req.query[\'flow\'])  res.render(\'recovery\', flow) }) ```  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Get Recovery Flow
     * @param id The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async getRecoveryFlow(id: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "getRecoveryFlow", "id");
        }



        // Path Params
        const localVarPath = '/self-service/recovery/flows';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint returns a registration flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/registration\', async function (req, res) { const flow = await client.getRegistrationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'registration\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Registration Flow
     * @param id The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async getRegistrationFlow(id: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "getRegistrationFlow", "id");
        }



        // Path Params
        const localVarPath = '/self-service/registration/flows';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * When accessing this endpoint through Ory Kratos\' Public API you must ensure that either the Ory Kratos Session Cookie or the Ory Kratos Session Token are set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  You can access this endpoint without credentials when using Ory Kratos\' Admin API.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Get Settings Flow
     * @param id ID is the Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @param X_Session_Token The Session Token  When using the SDK in an app without a browser, please include the session token here.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async getSettingsFlow(id: string, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "getSettingsFlow", "id");
        }




        // Path Params
        const localVarPath = '/self-service/settings/flows';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint returns a verification flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getVerificationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'verification\', flow) }) ```  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Get Verification Flow
     * @param id The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @param cookie HTTP Cookies  When using the SDK on the server side you must include the HTTP Cookie Header originally sent to your HTTP handler here.
     */
    public async getVerificationFlow(id: string, cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FrontendApi", "getVerificationFlow", "id");
        }



        // Path Params
        const localVarPath = '/self-service/verification/flows';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("cookie", ObjectSerializer.serialize(cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.  If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:  ```html <script src=\"https://public-kratos.example.org/.well-known/ory/webauthn.js\" type=\"script\" async /> ```  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get WebAuthn JavaScript
     */
    public async getWebAuthnJavaScript(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/.well-known/ory/webauthn.js';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoints returns all other active sessions that belong to the logged-in user. The current session can be retrieved by calling the `/sessions/whoami` endpoint.
     * Get My Active Sessions
     * @param per_page Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public async listMySessions(per_page?: number, page?: number, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/sessions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (per_page !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(per_page, "number", "int64"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int64"));
        }

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when the Ory Session Token has been revoked already before.  If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.  This endpoint does not remove any HTTP Cookies - use the Browser-Based Self-Service Logout Flow instead.
     * Perform Logout for Native Apps
     * @param PerformNativeLogoutBody 
     */
    public async performNativeLogout(PerformNativeLogoutBody: PerformNativeLogoutBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'PerformNativeLogoutBody' is not null or undefined
        if (PerformNativeLogoutBody === null || PerformNativeLogoutBody === undefined) {
            throw new RequiredError("FrontendApi", "performNativeLogout", "PerformNativeLogoutBody");
        }


        // Path Params
        const localVarPath = '/self-service/logout/api';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(PerformNativeLogoutBody, "PerformNativeLogoutBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. When the request it successful it adds the user ID to the \'X-Kratos-Authenticated-Identity-Id\' header in the response.  If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:  ```js pseudo-code example router.get(\'/protected-endpoint\', async function (req, res) { const session = await client.toSession(undefined, req.header(\'cookie\'))  console.log(session) }) ```  When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:  ```js pseudo-code example ... const session = await client.toSession(\"the-session-token\")  console.log(session) ```  Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  This endpoint is useful for:  AJAX calls. Remember to send credentials and set up CORS correctly! Reverse proxies and API Gateways Server-side calls - use the `X-Session-Token` header!  This endpoint authenticates users by checking:  if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie; if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token; if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.  If none of these headers are set or the cookie or token are invalid, the endpoint returns a HTTP 401 status code.  As explained above, this request may fail due to several reasons. The `error.id` can be one of:  `session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token). `session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.
     * Check Who the Current HTTP Session Belongs To
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public async toSession(X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/sessions/whoami';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  Use this endpoint to complete a login flow. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and responds with HTTP 200 and a application/json body with the session token on success; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded; a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Login Flow
     * @param flow The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @param UpdateLoginFlowBody 
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async updateLoginFlow(flow: string, UpdateLoginFlowBody: UpdateLoginFlowBody, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flow' is not null or undefined
        if (flow === null || flow === undefined) {
            throw new RequiredError("FrontendApi", "updateLoginFlow", "flow");
        }


        // verify required parameter 'UpdateLoginFlowBody' is not null or undefined
        if (UpdateLoginFlowBody === null || UpdateLoginFlowBody === undefined) {
            throw new RequiredError("FrontendApi", "updateLoginFlow", "UpdateLoginFlowBody");
        }




        // Path Params
        const localVarPath = '/self-service/login';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (flow !== undefined) {
            requestContext.setQueryParam("flow", ObjectSerializer.serialize(flow, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(UpdateLoginFlowBody, "UpdateLoginFlowBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint logs out an identity in a self-service manner.  If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other) to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.  If the `Accept` HTTP header is set to `application/json`, a 204 No Content response will be sent on successful logout instead.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).
     * Update Logout Flow
     * @param token A Valid Logout Token  If you do not have a logout token because you only have a session cookie, call &#x60;/self-service/logout/browser&#x60; to generate a URL for this endpoint.
     * @param return_to The URL to return to after the logout was completed.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async updateLogoutFlow(token?: string, return_to?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/self-service/logout';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Query Params
        if (return_to !== undefined) {
            requestContext.setQueryParam("return_to", ObjectSerializer.serialize(return_to, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to complete a recovery flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid. and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended. `sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a recovery link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with a new Recovery Flow ID which contains an error message that the recovery link was invalid.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Complete Recovery Flow
     * @param flow The Recovery Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @param UpdateRecoveryFlowBody 
     * @param token Recovery Token  The recovery token which completes the recovery request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async updateRecoveryFlow(flow: string, UpdateRecoveryFlowBody: UpdateRecoveryFlowBody, token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flow' is not null or undefined
        if (flow === null || flow === undefined) {
            throw new RequiredError("FrontendApi", "updateRecoveryFlow", "flow");
        }


        // verify required parameter 'UpdateRecoveryFlowBody' is not null or undefined
        if (UpdateRecoveryFlowBody === null || UpdateRecoveryFlowBody === undefined) {
            throw new RequiredError("FrontendApi", "updateRecoveryFlow", "UpdateRecoveryFlowBody");
        }




        // Path Params
        const localVarPath = '/self-service/recovery';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (flow !== undefined) {
            requestContext.setQueryParam("flow", ObjectSerializer.serialize(flow, "string", ""));
        }

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(UpdateRecoveryFlowBody, "UpdateRecoveryFlowBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to complete a registration flow by sending an identity\'s traits and password. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and respond with HTTP 200 and a application/json body with the created identity success - if the session hook is configured the `session` and `session_token` will also be included; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded; a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Update Registration Flow
     * @param flow The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @param UpdateRegistrationFlowBody 
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async updateRegistrationFlow(flow: string, UpdateRegistrationFlowBody: UpdateRegistrationFlowBody, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flow' is not null or undefined
        if (flow === null || flow === undefined) {
            throw new RequiredError("FrontendApi", "updateRegistrationFlow", "flow");
        }


        // verify required parameter 'UpdateRegistrationFlowBody' is not null or undefined
        if (UpdateRegistrationFlowBody === null || UpdateRegistrationFlowBody === undefined) {
            throw new RequiredError("FrontendApi", "updateRegistrationFlow", "UpdateRegistrationFlowBody");
        }



        // Path Params
        const localVarPath = '/self-service/registration';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (flow !== undefined) {
            requestContext.setQueryParam("flow", ObjectSerializer.serialize(flow, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(UpdateRegistrationFlowBody, "UpdateRegistrationFlowBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to complete a settings flow by sending an identity\'s updated password. This endpoint behaves differently for API and browser flows.  API-initiated flows expect `application/json` to be sent in the body and respond with HTTP 200 and an application/json body with the session token on success; HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors. HTTP 401 when the endpoint is called without a valid session token. HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low. Implies that the user needs to re-authenticate.  Browser flows without HTTP Header `Accept` or with `Accept: text/_*` respond with a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded; a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise. a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low.  Browser flows with HTTP Header `Accept: application/json` respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 401 when the endpoint is called without a valid session cookie. HTTP 403 when the page is accessed without a session cookie or the session\'s AAL is too low. HTTP 400 on form validation errors.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`, or initiate a refresh login flow otherwise. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Complete Settings Flow
     * @param flow The Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @param UpdateSettingsFlowBody 
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async updateSettingsFlow(flow: string, UpdateSettingsFlowBody: UpdateSettingsFlowBody, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flow' is not null or undefined
        if (flow === null || flow === undefined) {
            throw new RequiredError("FrontendApi", "updateSettingsFlow", "flow");
        }


        // verify required parameter 'UpdateSettingsFlowBody' is not null or undefined
        if (UpdateSettingsFlowBody === null || UpdateSettingsFlowBody === undefined) {
            throw new RequiredError("FrontendApi", "updateSettingsFlow", "UpdateSettingsFlowBody");
        }




        // Path Params
        const localVarPath = '/self-service/settings';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (flow !== undefined) {
            requestContext.setQueryParam("flow", ObjectSerializer.serialize(flow, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Session-Token", ObjectSerializer.serialize(X_Session_Token, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(UpdateSettingsFlowBody, "UpdateSettingsFlowBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to complete a verification flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended. `sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a verification link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with a new Verification Flow ID which contains an error message that the verification link was invalid.  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Complete Verification Flow
     * @param flow The Verification Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @param UpdateVerificationFlowBody 
     * @param token Verification Token  The verification token which completes the verification request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public async updateVerificationFlow(flow: string, UpdateVerificationFlowBody: UpdateVerificationFlowBody, token?: string, Cookie?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'flow' is not null or undefined
        if (flow === null || flow === undefined) {
            throw new RequiredError("FrontendApi", "updateVerificationFlow", "flow");
        }


        // verify required parameter 'UpdateVerificationFlowBody' is not null or undefined
        if (UpdateVerificationFlowBody === null || UpdateVerificationFlowBody === undefined) {
            throw new RequiredError("FrontendApi", "updateVerificationFlow", "UpdateVerificationFlowBody");
        }




        // Path Params
        const localVarPath = '/self-service/verification';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (flow !== undefined) {
            requestContext.setQueryParam("flow", ObjectSerializer.serialize(flow, "string", ""));
        }

        // Query Params
        if (token !== undefined) {
            requestContext.setQueryParam("token", ObjectSerializer.serialize(token, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Cookie", ObjectSerializer.serialize(Cookie, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "application/x-www-form-urlencoded"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(UpdateVerificationFlowBody, "UpdateVerificationFlowBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FrontendApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrowserLoginFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrowserLoginFlow(response: ResponseContext): Promise<LoginFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
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
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrowserLogoutFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrowserLogoutFlow(response: ResponseContext): Promise<LogoutFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LogoutFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogoutFlow", ""
            ) as LogoutFlow;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LogoutFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LogoutFlow", ""
            ) as LogoutFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrowserRecoveryFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrowserRecoveryFlow(response: ResponseContext): Promise<RecoveryFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
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
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrowserRegistrationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrowserRegistrationFlow(response: ResponseContext): Promise<RegistrationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
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
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrowserSettingsFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrowserSettingsFlow(response: ResponseContext): Promise<SettingsFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrowserVerificationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrowserVerificationFlow(response: ResponseContext): Promise<VerificationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
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
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNativeLoginFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNativeLoginFlow(response: ResponseContext): Promise<LoginFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
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
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNativeRecoveryFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNativeRecoveryFlow(response: ResponseContext): Promise<RecoveryFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
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
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNativeRegistrationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNativeRegistrationFlow(response: ResponseContext): Promise<RegistrationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
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
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNativeSettingsFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNativeSettingsFlow(response: ResponseContext): Promise<SettingsFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
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
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNativeVerificationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNativeVerificationFlow(response: ResponseContext): Promise<VerificationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
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
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableMyOtherSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disableMyOtherSessions(response: ResponseContext): Promise<DeleteMySessionsCount > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteMySessionsCount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteMySessionsCount", ""
            ) as DeleteMySessionsCount;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
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
            const body: DeleteMySessionsCount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteMySessionsCount", ""
            ) as DeleteMySessionsCount;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableMySession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disableMySession(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangeSessionToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangeSessionToken(response: ResponseContext): Promise<SuccessfulNativeLogin > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccessfulNativeLogin = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulNativeLogin", ""
            ) as SuccessfulNativeLogin;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
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
            const body: SuccessfulNativeLogin = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulNativeLogin", ""
            ) as SuccessfulNativeLogin;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFlowError
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFlowError(response: ResponseContext): Promise<FlowError > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FlowError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FlowError", ""
            ) as FlowError;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FlowError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FlowError", ""
            ) as FlowError;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLoginFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLoginFlow(response: ResponseContext): Promise<LoginFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
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
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRecoveryFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRecoveryFlow(response: ResponseContext): Promise<RecoveryFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
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
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRegistrationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRegistrationFlow(response: ResponseContext): Promise<RegistrationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
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
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSettingsFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSettingsFlow(response: ResponseContext): Promise<SettingsFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
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
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVerificationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVerificationFlow(response: ResponseContext): Promise<VerificationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
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
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebAuthnJavaScript
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebAuthnJavaScript(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMySessions(response: ResponseContext): Promise<Array<Session> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Session> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Session>", ""
            ) as Array<Session>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
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
            const body: Array<Session> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Session>", ""
            ) as Array<Session>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to performNativeLogout
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async performNativeLogout(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toSession
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toSession(response: ResponseContext): Promise<Session > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Session = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Session", ""
            ) as Session;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
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
            const body: Session = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Session", ""
            ) as Session;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLoginFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLoginFlow(response: ResponseContext): Promise<SuccessfulNativeLogin > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccessfulNativeLogin = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulNativeLogin", ""
            ) as SuccessfulNativeLogin;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: LoginFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LoginFlow", ""
            ) as LoginFlow;
            throw new ApiException<LoginFlow>(response.httpStatusCode, "loginFlow", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ErrorBrowserLocationChangeRequired = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorBrowserLocationChangeRequired", ""
            ) as ErrorBrowserLocationChangeRequired;
            throw new ApiException<ErrorBrowserLocationChangeRequired>(response.httpStatusCode, "errorBrowserLocationChangeRequired", body, response.headers);
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
            const body: SuccessfulNativeLogin = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulNativeLogin", ""
            ) as SuccessfulNativeLogin;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogoutFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateLogoutFlow(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRecoveryFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRecoveryFlow(response: ResponseContext): Promise<RecoveryFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            throw new ApiException<RecoveryFlow>(response.httpStatusCode, "recoveryFlow", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ErrorBrowserLocationChangeRequired = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorBrowserLocationChangeRequired", ""
            ) as ErrorBrowserLocationChangeRequired;
            throw new ApiException<ErrorBrowserLocationChangeRequired>(response.httpStatusCode, "errorBrowserLocationChangeRequired", body, response.headers);
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
            const body: RecoveryFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecoveryFlow", ""
            ) as RecoveryFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRegistrationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateRegistrationFlow(response: ResponseContext): Promise<SuccessfulNativeRegistration > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccessfulNativeRegistration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulNativeRegistration", ""
            ) as SuccessfulNativeRegistration;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RegistrationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegistrationFlow", ""
            ) as RegistrationFlow;
            throw new ApiException<RegistrationFlow>(response.httpStatusCode, "registrationFlow", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ErrorBrowserLocationChangeRequired = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorBrowserLocationChangeRequired", ""
            ) as ErrorBrowserLocationChangeRequired;
            throw new ApiException<ErrorBrowserLocationChangeRequired>(response.httpStatusCode, "errorBrowserLocationChangeRequired", body, response.headers);
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
            const body: SuccessfulNativeRegistration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulNativeRegistration", ""
            ) as SuccessfulNativeRegistration;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSettingsFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSettingsFlow(response: ResponseContext): Promise<SettingsFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            throw new ApiException<SettingsFlow>(response.httpStatusCode, "settingsFlow", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ErrorGeneric = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorGeneric", ""
            ) as ErrorGeneric;
            throw new ApiException<ErrorGeneric>(response.httpStatusCode, "errorGeneric", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ErrorBrowserLocationChangeRequired = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorBrowserLocationChangeRequired", ""
            ) as ErrorBrowserLocationChangeRequired;
            throw new ApiException<ErrorBrowserLocationChangeRequired>(response.httpStatusCode, "errorBrowserLocationChangeRequired", body, response.headers);
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
            const body: SettingsFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SettingsFlow", ""
            ) as SettingsFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateVerificationFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateVerificationFlow(response: ResponseContext): Promise<VerificationFlow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }
        if (isCodeInRange("303", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201.", undefined, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            throw new ApiException<VerificationFlow>(response.httpStatusCode, "verificationFlow", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
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
            const body: VerificationFlow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerificationFlow", ""
            ) as VerificationFlow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
