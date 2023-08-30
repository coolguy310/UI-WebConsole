import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AuthenticatorAssuranceLevel } from '../models/AuthenticatorAssuranceLevel.ts';
import { BatchPatchIdentitiesResponse } from '../models/BatchPatchIdentitiesResponse.ts';
import { ContinueWith } from '../models/ContinueWith.ts';
import { ContinueWithSetOrySessionToken } from '../models/ContinueWithSetOrySessionToken.ts';
import { ContinueWithVerificationUi } from '../models/ContinueWithVerificationUi.ts';
import { ContinueWithVerificationUiFlow } from '../models/ContinueWithVerificationUiFlow.ts';
import { CourierMessageStatus } from '../models/CourierMessageStatus.ts';
import { CourierMessageType } from '../models/CourierMessageType.ts';
import { CreateIdentityBody } from '../models/CreateIdentityBody.ts';
import { CreateRecoveryCodeForIdentityBody } from '../models/CreateRecoveryCodeForIdentityBody.ts';
import { CreateRecoveryLinkForIdentityBody } from '../models/CreateRecoveryLinkForIdentityBody.ts';
import { DeleteMySessionsCount } from '../models/DeleteMySessionsCount.ts';
import { ErrorAuthenticatorAssuranceLevelNotSatisfied } from '../models/ErrorAuthenticatorAssuranceLevelNotSatisfied.ts';
import { ErrorBrowserLocationChangeRequired } from '../models/ErrorBrowserLocationChangeRequired.ts';
import { ErrorFlowReplaced } from '../models/ErrorFlowReplaced.ts';
import { ErrorGeneric } from '../models/ErrorGeneric.ts';
import { FlowError } from '../models/FlowError.ts';
import { GenericError } from '../models/GenericError.ts';
import { GetVersion200Response } from '../models/GetVersion200Response.ts';
import { HealthNotReadyStatus } from '../models/HealthNotReadyStatus.ts';
import { HealthStatus } from '../models/HealthStatus.ts';
import { Identity } from '../models/Identity.ts';
import { IdentityCredentials } from '../models/IdentityCredentials.ts';
import { IdentityCredentialsOidc } from '../models/IdentityCredentialsOidc.ts';
import { IdentityCredentialsOidcProvider } from '../models/IdentityCredentialsOidcProvider.ts';
import { IdentityCredentialsPassword } from '../models/IdentityCredentialsPassword.ts';
import { IdentityCredentialsType } from '../models/IdentityCredentialsType.ts';
import { IdentityPatch } from '../models/IdentityPatch.ts';
import { IdentityPatchResponse } from '../models/IdentityPatchResponse.ts';
import { IdentitySchemaContainer } from '../models/IdentitySchemaContainer.ts';
import { IdentityState } from '../models/IdentityState.ts';
import { IdentityWithCredentials } from '../models/IdentityWithCredentials.ts';
import { IdentityWithCredentialsOidc } from '../models/IdentityWithCredentialsOidc.ts';
import { IdentityWithCredentialsOidcConfig } from '../models/IdentityWithCredentialsOidcConfig.ts';
import { IdentityWithCredentialsOidcConfigProvider } from '../models/IdentityWithCredentialsOidcConfigProvider.ts';
import { IdentityWithCredentialsPassword } from '../models/IdentityWithCredentialsPassword.ts';
import { IdentityWithCredentialsPasswordConfig } from '../models/IdentityWithCredentialsPasswordConfig.ts';
import { IsAlive200Response } from '../models/IsAlive200Response.ts';
import { IsReady503Response } from '../models/IsReady503Response.ts';
import { JsonPatch } from '../models/JsonPatch.ts';
import { LoginFlow } from '../models/LoginFlow.ts';
import { LogoutFlow } from '../models/LogoutFlow.ts';
import { Message } from '../models/Message.ts';
import { MessageDispatch } from '../models/MessageDispatch.ts';
import { NeedsPrivilegedSessionError } from '../models/NeedsPrivilegedSessionError.ts';
import { OAuth2Client } from '../models/OAuth2Client.ts';
import { OAuth2ConsentRequestOpenIDConnectContext } from '../models/OAuth2ConsentRequestOpenIDConnectContext.ts';
import { OAuth2LoginRequest } from '../models/OAuth2LoginRequest.ts';
import { Pagination } from '../models/Pagination.ts';
import { PatchIdentitiesBody } from '../models/PatchIdentitiesBody.ts';
import { PerformNativeLogoutBody } from '../models/PerformNativeLogoutBody.ts';
import { RecoveryCodeForIdentity } from '../models/RecoveryCodeForIdentity.ts';
import { RecoveryFlow } from '../models/RecoveryFlow.ts';
import { RecoveryFlowState } from '../models/RecoveryFlowState.ts';
import { RecoveryIdentityAddress } from '../models/RecoveryIdentityAddress.ts';
import { RecoveryLinkForIdentity } from '../models/RecoveryLinkForIdentity.ts';
import { RegistrationFlow } from '../models/RegistrationFlow.ts';
import { SelfServiceFlowExpiredError } from '../models/SelfServiceFlowExpiredError.ts';
import { Session } from '../models/Session.ts';
import { SessionAuthenticationMethod } from '../models/SessionAuthenticationMethod.ts';
import { SessionDevice } from '../models/SessionDevice.ts';
import { SettingsFlow } from '../models/SettingsFlow.ts';
import { SettingsFlowState } from '../models/SettingsFlowState.ts';
import { SuccessfulCodeExchangeResponse } from '../models/SuccessfulCodeExchangeResponse.ts';
import { SuccessfulNativeLogin } from '../models/SuccessfulNativeLogin.ts';
import { SuccessfulNativeRegistration } from '../models/SuccessfulNativeRegistration.ts';
import { TokenPagination } from '../models/TokenPagination.ts';
import { TokenPaginationHeaders } from '../models/TokenPaginationHeaders.ts';
import { UiContainer } from '../models/UiContainer.ts';
import { UiNode } from '../models/UiNode.ts';
import { UiNodeAnchorAttributes } from '../models/UiNodeAnchorAttributes.ts';
import { UiNodeAttributes } from '../models/UiNodeAttributes.ts';
import { UiNodeImageAttributes } from '../models/UiNodeImageAttributes.ts';
import { UiNodeInputAttributes } from '../models/UiNodeInputAttributes.ts';
import { UiNodeMeta } from '../models/UiNodeMeta.ts';
import { UiNodeScriptAttributes } from '../models/UiNodeScriptAttributes.ts';
import { UiNodeTextAttributes } from '../models/UiNodeTextAttributes.ts';
import { UiText } from '../models/UiText.ts';
import { UpdateIdentityBody } from '../models/UpdateIdentityBody.ts';
import { UpdateLoginFlowBody } from '../models/UpdateLoginFlowBody.ts';
import { UpdateLoginFlowWithLookupSecretMethod } from '../models/UpdateLoginFlowWithLookupSecretMethod.ts';
import { UpdateLoginFlowWithOidcMethod } from '../models/UpdateLoginFlowWithOidcMethod.ts';
import { UpdateLoginFlowWithPasswordMethod } from '../models/UpdateLoginFlowWithPasswordMethod.ts';
import { UpdateLoginFlowWithTotpMethod } from '../models/UpdateLoginFlowWithTotpMethod.ts';
import { UpdateLoginFlowWithWebAuthnMethod } from '../models/UpdateLoginFlowWithWebAuthnMethod.ts';
import { UpdateRecoveryFlowBody } from '../models/UpdateRecoveryFlowBody.ts';
import { UpdateRecoveryFlowWithCodeMethod } from '../models/UpdateRecoveryFlowWithCodeMethod.ts';
import { UpdateRecoveryFlowWithLinkMethod } from '../models/UpdateRecoveryFlowWithLinkMethod.ts';
import { UpdateRegistrationFlowBody } from '../models/UpdateRegistrationFlowBody.ts';
import { UpdateRegistrationFlowWithOidcMethod } from '../models/UpdateRegistrationFlowWithOidcMethod.ts';
import { UpdateRegistrationFlowWithPasswordMethod } from '../models/UpdateRegistrationFlowWithPasswordMethod.ts';
import { UpdateRegistrationFlowWithWebAuthnMethod } from '../models/UpdateRegistrationFlowWithWebAuthnMethod.ts';
import { UpdateSettingsFlowBody } from '../models/UpdateSettingsFlowBody.ts';
import { UpdateSettingsFlowWithLookupMethod } from '../models/UpdateSettingsFlowWithLookupMethod.ts';
import { UpdateSettingsFlowWithOidcMethod } from '../models/UpdateSettingsFlowWithOidcMethod.ts';
import { UpdateSettingsFlowWithPasswordMethod } from '../models/UpdateSettingsFlowWithPasswordMethod.ts';
import { UpdateSettingsFlowWithProfileMethod } from '../models/UpdateSettingsFlowWithProfileMethod.ts';
import { UpdateSettingsFlowWithTotpMethod } from '../models/UpdateSettingsFlowWithTotpMethod.ts';
import { UpdateSettingsFlowWithWebAuthnMethod } from '../models/UpdateSettingsFlowWithWebAuthnMethod.ts';
import { UpdateVerificationFlowBody } from '../models/UpdateVerificationFlowBody.ts';
import { UpdateVerificationFlowWithCodeMethod } from '../models/UpdateVerificationFlowWithCodeMethod.ts';
import { UpdateVerificationFlowWithLinkMethod } from '../models/UpdateVerificationFlowWithLinkMethod.ts';
import { VerifiableIdentityAddress } from '../models/VerifiableIdentityAddress.ts';
import { VerificationFlow } from '../models/VerificationFlow.ts';
import { VerificationFlowState } from '../models/VerificationFlowState.ts';
import { Version } from '../models/Version.ts';
import { ObservableCourierApi } from './ObservableAPI.ts';

import { CourierApiRequestFactory, CourierApiResponseProcessor} from "../apis/CourierApi.ts";
export class PromiseCourierApi {
    private api: ObservableCourierApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CourierApiRequestFactory,
        responseProcessor?: CourierApiResponseProcessor
    ) {
        this.api = new ObservableCourierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     * @param id MessageID is the ID of the message.
     */
    public getCourierMessage(id: string, _options?: Configuration): Promise<Message> {
        const result = this.api.getCourierMessage(id, _options);
        return result.toPromise();
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     * @param page_size Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param status Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter.
     * @param recipient Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter.
     */
    public listCourierMessages(page_size?: number, page_token?: string, status?: CourierMessageStatus, recipient?: string, _options?: Configuration): Promise<Array<Message>> {
        const result = this.api.listCourierMessages(page_size, page_token, status, recipient, _options);
        return result.toPromise();
    }


}



import { ObservableFrontendApi } from './ObservableAPI.ts';

import { FrontendApiRequestFactory, FrontendApiResponseProcessor} from "../apis/FrontendApi.ts";
export class PromiseFrontendApi {
    private api: ObservableFrontendApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FrontendApiRequestFactory,
        responseProcessor?: FrontendApiResponseProcessor
    ) {
        this.api = new ObservableFrontendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter `?refresh=true` was set.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  The optional query parameter login_challenge is set when using Kratos with Hydra in an OAuth2 flow. See the oauth2_provider.url configuration option.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Browsers
     * @param refresh Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @param aal Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @param return_to The URL to return the browser to after the flow was completed.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @param login_challenge An optional Hydra login challenge. If present, Kratos will cooperate with Ory Hydra to act as an OAuth2 identity provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?login_challenge&#x3D;abcde&#x60;).
     */
    public createBrowserLoginFlow(refresh?: boolean, aal?: string, return_to?: string, Cookie?: string, login_challenge?: string, _options?: Configuration): Promise<LoginFlow> {
        const result = this.api.createBrowserLoginFlow(refresh, aal, return_to, Cookie, login_challenge, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns a 401 error.  When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.
     * Create a Logout URL for Browsers
     * @param cookie HTTP Cookies  If you call this endpoint from a backend, please include the original Cookie header in the request.
     * @param return_to Return to URL  The URL to which the browser should be redirected to after the logout has been performed.
     */
    public createBrowserLogoutFlow(cookie?: string, return_to?: string, _options?: Configuration): Promise<LogoutFlow> {
        const result = this.api.createBrowserLogoutFlow(cookie, return_to, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to `selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists, the browser is returned to the configured return URL.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects or a 400 bad request error if the user is already authenticated.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Browsers
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public createBrowserRecoveryFlow(return_to?: string, _options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.createBrowserRecoveryFlow(return_to, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url`.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Browsers
     * @param return_to The URL to return the browser to after the flow was completed.
     * @param login_challenge Ory OAuth 2.0 Login Challenge.  If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?login_challenge&#x3D;abcde&#x60;).  This feature is compatible with Ory Hydra when not running on the Ory Network.
     * @param after_verification_return_to The URL to return the browser to after the verification flow was completed.  After the registration flow is completed, the user will be sent a verification email. Upon completing the verification flow, this URL will be used to override the default &#x60;selfservice.flows.verification.after.default_redirect_to&#x60; value.
     */
    public createBrowserRegistrationFlow(return_to?: string, login_challenge?: string, after_verification_return_to?: string, _options?: Configuration): Promise<RegistrationFlow> {
        const result = this.api.createBrowserRegistrationFlow(return_to, login_challenge, after_verification_return_to, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid Ory Kratos Session Cookie is included in the request, a login flow will be initialized.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session was set, the browser will be redirected to the login endpoint.  If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects or a 401 forbidden error if no valid session was set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Browsers
     * @param return_to The URL to return the browser to after the flow was completed.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public createBrowserSettingsFlow(return_to?: string, Cookie?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.createBrowserSettingsFlow(return_to, Cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to `selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Browser Clients
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public createBrowserVerificationFlow(return_to?: string, _options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.createBrowserVerificationFlow(return_to, _options);
        return result.toPromise();
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
    public createNativeLoginFlow(refresh?: boolean, aal?: string, X_Session_Token?: string, return_session_token_exchange_code?: boolean, return_to?: string, _options?: Configuration): Promise<LoginFlow> {
        const result = this.api.createNativeLoginFlow(refresh, aal, X_Session_Token, return_session_token_exchange_code, return_to, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error.  To fetch an existing recovery flow call `/self-service/recovery/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Native Apps
     */
    public createNativeRecoveryFlow(_options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.createNativeRecoveryFlow(_options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Native Apps
     * @param return_session_token_exchange_code EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @param return_to The URL to return the browser to after the flow was completed.
     */
    public createNativeRegistrationFlow(return_session_token_exchange_code?: boolean, return_to?: string, _options?: Configuration): Promise<RegistrationFlow> {
        const result = this.api.createNativeRegistrationFlow(return_session_token_exchange_code, return_to, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on. You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.  To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Native Apps
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     */
    public createNativeSettingsFlow(X_Session_Token?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.createNativeSettingsFlow(X_Session_Token, _options);
        return result.toPromise();
    }

    /**
     * This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.  To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Native Apps
     */
    public createNativeVerificationFlow(_options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.createNativeVerificationFlow(_options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint invalidates all except the current session that belong to the logged-in user. Session data are not deleted.
     * Disable my other sessions
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public disableMyOtherSessions(X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<DeleteMySessionsCount> {
        const result = this.api.disableMyOtherSessions(X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint invalidates the specified session. The current session cannot be revoked. Session data are not deleted.
     * Disable one of my sessions
     * @param id ID is the session\&#39;s ID.
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public disableMySession(id: string, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableMySession(id, X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Exchange Session Token
     * @param init_code The part of the code return when initializing the flow.
     * @param return_to_code The part of the code returned by the return_to URL.
     */
    public exchangeSessionToken(init_code: string, return_to_code: string, _options?: Configuration): Promise<SuccessfulNativeLogin> {
        const result = this.api.exchangeSessionToken(init_code, return_to_code, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns the error associated with a user-facing self service errors.  This endpoint supports stub values to help you implement the error UI:  `?id=stub:500` - returns a stub 500 (Internal Server Error) error.  More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).
     * Get User-Flow Errors
     * @param id Error is the error\&#39;s ID
     */
    public getFlowError(id: string, _options?: Configuration): Promise<FlowError> {
        const result = this.api.getFlowError(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a login flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/login\', async function (req, res) { const flow = await client.getLoginFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'login\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Login Flow
     * @param id The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getLoginFlow(id: string, Cookie?: string, _options?: Configuration): Promise<LoginFlow> {
        const result = this.api.getLoginFlow(id, Cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a recovery flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getRecoveryFlow(req.header(\'Cookie\'), req.query[\'flow\'])  res.render(\'recovery\', flow) }) ```  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Get Recovery Flow
     * @param id The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getRecoveryFlow(id: string, Cookie?: string, _options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.getRecoveryFlow(id, Cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a registration flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/registration\', async function (req, res) { const flow = await client.getRegistrationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'registration\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Registration Flow
     * @param id The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getRegistrationFlow(id: string, Cookie?: string, _options?: Configuration): Promise<RegistrationFlow> {
        const result = this.api.getRegistrationFlow(id, Cookie, _options);
        return result.toPromise();
    }

    /**
     * When accessing this endpoint through Ory Kratos\' Public API you must ensure that either the Ory Kratos Session Cookie or the Ory Kratos Session Token are set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  You can access this endpoint without credentials when using Ory Kratos\' Admin API.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Get Settings Flow
     * @param id ID is the Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @param X_Session_Token The Session Token  When using the SDK in an app without a browser, please include the session token here.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public getSettingsFlow(id: string, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.getSettingsFlow(id, X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a verification flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getVerificationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'verification\', flow) }) ```  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Get Verification Flow
     * @param id The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @param cookie HTTP Cookies  When using the SDK on the server side you must include the HTTP Cookie Header originally sent to your HTTP handler here.
     */
    public getVerificationFlow(id: string, cookie?: string, _options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.getVerificationFlow(id, cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.  If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:  ```html <script src=\"https://public-kratos.example.org/.well-known/ory/webauthn.js\" type=\"script\" async /> ```  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get WebAuthn JavaScript
     */
    public getWebAuthnJavaScript(_options?: Configuration): Promise<string> {
        const result = this.api.getWebAuthnJavaScript(_options);
        return result.toPromise();
    }

    /**
     * This endpoints returns all other active sessions that belong to the logged-in user. The current session can be retrieved by calling the `/sessions/whoami` endpoint.
     * Get My Active Sessions
     * @param per_page Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public listMySessions(per_page?: number, page?: number, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<Array<Session>> {
        const result = this.api.listMySessions(per_page, page, X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when the Ory Session Token has been revoked already before.  If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.  This endpoint does not remove any HTTP Cookies - use the Browser-Based Self-Service Logout Flow instead.
     * Perform Logout for Native Apps
     * @param PerformNativeLogoutBody 
     */
    public performNativeLogout(PerformNativeLogoutBody: PerformNativeLogoutBody, _options?: Configuration): Promise<void> {
        const result = this.api.performNativeLogout(PerformNativeLogoutBody, _options);
        return result.toPromise();
    }

    /**
     * Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. When the request it successful it adds the user ID to the \'X-Kratos-Authenticated-Identity-Id\' header in the response.  If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:  ```js pseudo-code example router.get(\'/protected-endpoint\', async function (req, res) { const session = await client.toSession(undefined, req.header(\'cookie\'))  console.log(session) }) ```  When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:  ```js pseudo-code example ... const session = await client.toSession(\"the-session-token\")  console.log(session) ```  Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  This endpoint is useful for:  AJAX calls. Remember to send credentials and set up CORS correctly! Reverse proxies and API Gateways Server-side calls - use the `X-Session-Token` header!  This endpoint authenticates users by checking:  if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie; if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token; if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.  If none of these headers are set or the cookie or token are invalid, the endpoint returns a HTTP 401 status code.  As explained above, this request may fail due to several reasons. The `error.id` can be one of:  `session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token). `session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.
     * Check Who the Current HTTP Session Belongs To
     * @param X_Session_Token Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @param Cookie Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     */
    public toSession(X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<Session> {
        const result = this.api.toSession(X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  Use this endpoint to complete a login flow. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and responds with HTTP 200 and a application/json body with the session token on success; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded; a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Login Flow
     * @param flow The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @param UpdateLoginFlowBody 
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateLoginFlow(flow: string, UpdateLoginFlowBody: UpdateLoginFlowBody, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<SuccessfulNativeLogin> {
        const result = this.api.updateLoginFlow(flow, UpdateLoginFlowBody, X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * This endpoint logs out an identity in a self-service manner.  If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other) to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.  If the `Accept` HTTP header is set to `application/json`, a 204 No Content response will be sent on successful logout instead.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).
     * Update Logout Flow
     * @param token A Valid Logout Token  If you do not have a logout token because you only have a session cookie, call &#x60;/self-service/logout/browser&#x60; to generate a URL for this endpoint.
     * @param return_to The URL to return to after the logout was completed.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateLogoutFlow(token?: string, return_to?: string, Cookie?: string, _options?: Configuration): Promise<void> {
        const result = this.api.updateLogoutFlow(token, return_to, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a recovery flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid. and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended. `sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a recovery link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with a new Recovery Flow ID which contains an error message that the recovery link was invalid.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Complete Recovery Flow
     * @param flow The Recovery Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @param UpdateRecoveryFlowBody 
     * @param token Recovery Token  The recovery token which completes the recovery request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateRecoveryFlow(flow: string, UpdateRecoveryFlowBody: UpdateRecoveryFlowBody, token?: string, Cookie?: string, _options?: Configuration): Promise<RecoveryFlow> {
        const result = this.api.updateRecoveryFlow(flow, UpdateRecoveryFlowBody, token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a registration flow by sending an identity\'s traits and password. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and respond with HTTP 200 and a application/json body with the created identity success - if the session hook is configured the `session` and `session_token` will also be included; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded; a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Update Registration Flow
     * @param flow The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @param UpdateRegistrationFlowBody 
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateRegistrationFlow(flow: string, UpdateRegistrationFlowBody: UpdateRegistrationFlowBody, Cookie?: string, _options?: Configuration): Promise<SuccessfulNativeRegistration> {
        const result = this.api.updateRegistrationFlow(flow, UpdateRegistrationFlowBody, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a settings flow by sending an identity\'s updated password. This endpoint behaves differently for API and browser flows.  API-initiated flows expect `application/json` to be sent in the body and respond with HTTP 200 and an application/json body with the session token on success; HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors. HTTP 401 when the endpoint is called without a valid session token. HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low. Implies that the user needs to re-authenticate.  Browser flows without HTTP Header `Accept` or with `Accept: text/_*` respond with a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded; a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise. a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low.  Browser flows with HTTP Header `Accept: application/json` respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 401 when the endpoint is called without a valid session cookie. HTTP 403 when the page is accessed without a session cookie or the session\'s AAL is too low. HTTP 400 on form validation errors.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`, or initiate a refresh login flow otherwise. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Complete Settings Flow
     * @param flow The Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @param UpdateSettingsFlowBody 
     * @param X_Session_Token The Session Token of the Identity performing the settings flow.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateSettingsFlow(flow: string, UpdateSettingsFlowBody: UpdateSettingsFlowBody, X_Session_Token?: string, Cookie?: string, _options?: Configuration): Promise<SettingsFlow> {
        const result = this.api.updateSettingsFlow(flow, UpdateSettingsFlowBody, X_Session_Token, Cookie, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to complete a verification flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended. `sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a verification link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with a new Verification Flow ID which contains an error message that the verification link was invalid.  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Complete Verification Flow
     * @param flow The Verification Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @param UpdateVerificationFlowBody 
     * @param token Verification Token  The verification token which completes the verification request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @param Cookie HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     */
    public updateVerificationFlow(flow: string, UpdateVerificationFlowBody: UpdateVerificationFlowBody, token?: string, Cookie?: string, _options?: Configuration): Promise<VerificationFlow> {
        const result = this.api.updateVerificationFlow(flow, UpdateVerificationFlowBody, token, Cookie, _options);
        return result.toPromise();
    }


}



import { ObservableIdentityApi } from './ObservableAPI.ts';

import { IdentityApiRequestFactory, IdentityApiResponseProcessor} from "../apis/IdentityApi.ts";
export class PromiseIdentityApi {
    private api: ObservableIdentityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentityApiRequestFactory,
        responseProcessor?: IdentityApiResponseProcessor
    ) {
        this.api = new ObservableIdentityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create and deletes multiple identities
     * @param PatchIdentitiesBody 
     */
    public batchPatchIdentities(PatchIdentitiesBody?: PatchIdentitiesBody, _options?: Configuration): Promise<BatchPatchIdentitiesResponse> {
        const result = this.api.batchPatchIdentities(PatchIdentitiesBody, _options);
        return result.toPromise();
    }

    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     * @param CreateIdentityBody 
     */
    public createIdentity(CreateIdentityBody?: CreateIdentityBody, _options?: Configuration): Promise<Identity> {
        const result = this.api.createIdentity(CreateIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     * @param CreateRecoveryCodeForIdentityBody 
     */
    public createRecoveryCodeForIdentity(CreateRecoveryCodeForIdentityBody?: CreateRecoveryCodeForIdentityBody, _options?: Configuration): Promise<RecoveryCodeForIdentity> {
        const result = this.api.createRecoveryCodeForIdentity(CreateRecoveryCodeForIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param CreateRecoveryLinkForIdentityBody 
     */
    public createRecoveryLinkForIdentity(CreateRecoveryLinkForIdentityBody?: CreateRecoveryLinkForIdentityBody, _options?: Configuration): Promise<RecoveryLinkForIdentity> {
        const result = this.api.createRecoveryLinkForIdentity(CreateRecoveryLinkForIdentityBody, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     * @param id ID is the identity\&#39;s ID.
     */
    public deleteIdentity(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteIdentity(id, _options);
        return result.toPromise();
    }

    /**
     * Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
     * Delete a credential for a specific identity
     * @param id ID is the identity\&#39;s ID.
     * @param type Type is the credential\&#39;s Type. One of totp, webauthn, lookup
     */
    public deleteIdentityCredentials(id: string, type: 'totp' | 'webauthn' | 'lookup', _options?: Configuration): Promise<void> {
        const result = this.api.deleteIdentityCredentials(id, type, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     */
    public deleteIdentitySessions(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteIdentitySessions(id, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     * @param id ID is the session\&#39;s ID.
     */
    public disableSession(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableSession(id, _options);
        return result.toPromise();
    }

    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     * @param id ID is the session\&#39;s ID.
     */
    public extendSession(id: string, _options?: Configuration): Promise<Session> {
        const result = this.api.extendSession(id, _options);
        return result.toPromise();
    }

    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     * @param id ID must be set to the ID of identity you want to get
     * @param include_credential Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
     */
    public getIdentity(id: string, include_credential?: Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'>, _options?: Configuration): Promise<Identity> {
        const result = this.api.getIdentity(id, include_credential, _options);
        return result.toPromise();
    }

    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     * @param id ID must be set to the ID of schema you want to get
     */
    public getIdentitySchema(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.getIdentitySchema(id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     * @param id ID is the session\&#39;s ID.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
     */
    public getSession(id: string, expand?: Array<string>, _options?: Configuration): Promise<Session> {
        const result = this.api.getSession(id, expand, _options);
        return result.toPromise();
    }

    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     * @param per_page Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param credentials_identifier CredentialsIdentifier is the identifier (username, email) of the credentials to look up.
     */
    public listIdentities(per_page?: number, page?: number, credentials_identifier?: string, _options?: Configuration): Promise<Array<Identity>> {
        const result = this.api.listIdentities(per_page, page, credentials_identifier, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     * @param per_page Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     */
    public listIdentitySchemas(per_page?: number, page?: number, _options?: Configuration): Promise<Array<IdentitySchemaContainer>> {
        const result = this.api.listIdentitySchemas(per_page, page, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     * @param per_page Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     */
    public listIdentitySessions(id: string, per_page?: number, page?: number, active?: boolean, _options?: Configuration): Promise<Array<Session>> {
        const result = this.api.listIdentitySessions(id, per_page, page, active, _options);
        return result.toPromise();
    }

    /**
     * Listing all sessions that exist.
     * List All Sessions
     * @param page_size Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param page_token Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
     */
    public listSessions(page_size?: number, page_token?: string, active?: boolean, expand?: Array<string>, _options?: Configuration): Promise<Array<Session>> {
        const result = this.api.listSessions(page_size, page_token, active, expand, _options);
        return result.toPromise();
    }

    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param JsonPatch 
     */
    public patchIdentity(id: string, JsonPatch?: Array<JsonPatch>, _options?: Configuration): Promise<Identity> {
        const result = this.api.patchIdentity(id, JsonPatch, _options);
        return result.toPromise();
    }

    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param UpdateIdentityBody 
     */
    public updateIdentity(id: string, UpdateIdentityBody?: UpdateIdentityBody, _options?: Configuration): Promise<Identity> {
        const result = this.api.updateIdentity(id, UpdateIdentityBody, _options);
        return result.toPromise();
    }


}



import { ObservableMetadataApi } from './ObservableAPI.ts';

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi.ts";
export class PromiseMetadataApi {
    private api: ObservableMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
     * Return Running Software Version.
     */
    public getVersion(_options?: Configuration): Promise<GetVersion200Response> {
        const result = this.api.getVersion(_options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server Status
     */
    public isAlive(_options?: Configuration): Promise<IsAlive200Response> {
        const result = this.api.isAlive(_options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server and Database Status
     */
    public isReady(_options?: Configuration): Promise<IsAlive200Response> {
        const result = this.api.isReady(_options);
        return result.toPromise();
    }


}



