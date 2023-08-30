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

import { ObservableCourierApi } from "./ObservableAPI.ts";
import { CourierApiRequestFactory, CourierApiResponseProcessor} from "../apis/CourierApi.ts";

export interface CourierApiGetCourierMessageRequest {
    /**
     * MessageID is the ID of the message.
     * @type string
     * @memberof CourierApigetCourierMessage
     */
    id: string
}

export interface CourierApiListCourierMessagesRequest {
    /**
     * Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type number
     * @memberof CourierApilistCourierMessages
     */
    page_size?: number
    /**
     * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type string
     * @memberof CourierApilistCourierMessages
     */
    page_token?: string
    /**
     * Status filters out messages based on status. If no value is provided, it doesn\&#39;t take effect on filter.
     * @type CourierMessageStatus
     * @memberof CourierApilistCourierMessages
     */
    status?: CourierMessageStatus
    /**
     * Recipient filters out messages based on recipient. If no value is provided, it doesn\&#39;t take effect on filter.
     * @type string
     * @memberof CourierApilistCourierMessages
     */
    recipient?: string
}

export class ObjectCourierApi {
    private api: ObservableCourierApi

    public constructor(configuration: Configuration, requestFactory?: CourierApiRequestFactory, responseProcessor?: CourierApiResponseProcessor) {
        this.api = new ObservableCourierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     * @param param the request object
     */
    public getCourierMessage(param: CourierApiGetCourierMessageRequest, options?: Configuration): Promise<Message> {
        return this.api.getCourierMessage(param.id,  options).toPromise();
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     * @param param the request object
     */
    public listCourierMessages(param: CourierApiListCourierMessagesRequest = {}, options?: Configuration): Promise<Array<Message>> {
        return this.api.listCourierMessages(param.page_size, param.page_token, param.status, param.recipient,  options).toPromise();
    }

}

import { ObservableFrontendApi } from "./ObservableAPI.ts";
import { FrontendApiRequestFactory, FrontendApiResponseProcessor} from "../apis/FrontendApi.ts";

export interface FrontendApiCreateBrowserLoginFlowRequest {
    /**
     * Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @type boolean
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    refresh?: boolean
    /**
     * Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    aal?: string
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    return_to?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    Cookie?: string
    /**
     * An optional Hydra login challenge. If present, Kratos will cooperate with Ory Hydra to act as an OAuth2 identity provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?login_challenge&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApicreateBrowserLoginFlow
     */
    login_challenge?: string
}

export interface FrontendApiCreateBrowserLogoutFlowRequest {
    /**
     * HTTP Cookies  If you call this endpoint from a backend, please include the original Cookie header in the request.
     * @type string
     * @memberof FrontendApicreateBrowserLogoutFlow
     */
    cookie?: string
    /**
     * Return to URL  The URL to which the browser should be redirected to after the logout has been performed.
     * @type string
     * @memberof FrontendApicreateBrowserLogoutFlow
     */
    return_to?: string
}

export interface FrontendApiCreateBrowserRecoveryFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserRecoveryFlow
     */
    return_to?: string
}

export interface FrontendApiCreateBrowserRegistrationFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserRegistrationFlow
     */
    return_to?: string
    /**
     * Ory OAuth 2.0 Login Challenge.  If set will cooperate with Ory OAuth2 and OpenID to act as an OAuth2 server / OpenID Provider.  The value for this parameter comes from &#x60;login_challenge&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?login_challenge&#x3D;abcde&#x60;).  This feature is compatible with Ory Hydra when not running on the Ory Network.
     * @type string
     * @memberof FrontendApicreateBrowserRegistrationFlow
     */
    login_challenge?: string
    /**
     * The URL to return the browser to after the verification flow was completed.  After the registration flow is completed, the user will be sent a verification email. Upon completing the verification flow, this URL will be used to override the default &#x60;selfservice.flows.verification.after.default_redirect_to&#x60; value.
     * @type string
     * @memberof FrontendApicreateBrowserRegistrationFlow
     */
    after_verification_return_to?: string
}

export interface FrontendApiCreateBrowserSettingsFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserSettingsFlow
     */
    return_to?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApicreateBrowserSettingsFlow
     */
    Cookie?: string
}

export interface FrontendApiCreateBrowserVerificationFlowRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateBrowserVerificationFlow
     */
    return_to?: string
}

export interface FrontendApiCreateNativeLoginFlowRequest {
    /**
     * Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @type boolean
     * @memberof FrontendApicreateNativeLoginFlow
     */
    refresh?: boolean
    /**
     * Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session\&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session\&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @type string
     * @memberof FrontendApicreateNativeLoginFlow
     */
    aal?: string
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApicreateNativeLoginFlow
     */
    X_Session_Token?: string
    /**
     * EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @type boolean
     * @memberof FrontendApicreateNativeLoginFlow
     */
    return_session_token_exchange_code?: boolean
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateNativeLoginFlow
     */
    return_to?: string
}

export interface FrontendApiCreateNativeRecoveryFlowRequest {
}

export interface FrontendApiCreateNativeRegistrationFlowRequest {
    /**
     * EnableSessionTokenExchangeCode requests the login flow to include a code that can be used to retrieve the session token after the login flow has been completed.
     * @type boolean
     * @memberof FrontendApicreateNativeRegistrationFlow
     */
    return_session_token_exchange_code?: boolean
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof FrontendApicreateNativeRegistrationFlow
     */
    return_to?: string
}

export interface FrontendApiCreateNativeSettingsFlowRequest {
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApicreateNativeSettingsFlow
     */
    X_Session_Token?: string
}

export interface FrontendApiCreateNativeVerificationFlowRequest {
}

export interface FrontendApiDisableMyOtherSessionsRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApidisableMyOtherSessions
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApidisableMyOtherSessions
     */
    Cookie?: string
}

export interface FrontendApiDisableMySessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof FrontendApidisableMySession
     */
    id: string
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApidisableMySession
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApidisableMySession
     */
    Cookie?: string
}

export interface FrontendApiExchangeSessionTokenRequest {
    /**
     * The part of the code return when initializing the flow.
     * @type string
     * @memberof FrontendApiexchangeSessionToken
     */
    init_code: string
    /**
     * The part of the code returned by the return_to URL.
     * @type string
     * @memberof FrontendApiexchangeSessionToken
     */
    return_to_code: string
}

export interface FrontendApiGetFlowErrorRequest {
    /**
     * Error is the error\&#39;s ID
     * @type string
     * @memberof FrontendApigetFlowError
     */
    id: string
}

export interface FrontendApiGetLoginFlowRequest {
    /**
     * The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetLoginFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetLoginFlow
     */
    Cookie?: string
}

export interface FrontendApiGetRecoveryFlowRequest {
    /**
     * The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetRecoveryFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetRecoveryFlow
     */
    Cookie?: string
}

export interface FrontendApiGetRegistrationFlowRequest {
    /**
     * The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetRegistrationFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetRegistrationFlow
     */
    Cookie?: string
}

export interface FrontendApiGetSettingsFlowRequest {
    /**
     * ID is the Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetSettingsFlow
     */
    id: string
    /**
     * The Session Token  When using the SDK in an app without a browser, please include the session token here.
     * @type string
     * @memberof FrontendApigetSettingsFlow
     */
    X_Session_Token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApigetSettingsFlow
     */
    Cookie?: string
}

export interface FrontendApiGetVerificationFlowRequest {
    /**
     * The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApigetVerificationFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK on the server side you must include the HTTP Cookie Header originally sent to your HTTP handler here.
     * @type string
     * @memberof FrontendApigetVerificationFlow
     */
    cookie?: string
}

export interface FrontendApiGetWebAuthnJavaScriptRequest {
}

export interface FrontendApiListMySessionsRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof FrontendApilistMySessions
     */
    per_page?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof FrontendApilistMySessions
     */
    page?: number
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApilistMySessions
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApilistMySessions
     */
    Cookie?: string
}

export interface FrontendApiPerformNativeLogoutRequest {
    /**
     * 
     * @type PerformNativeLogoutBody
     * @memberof FrontendApiperformNativeLogout
     */
    PerformNativeLogoutBody: PerformNativeLogoutBody
}

export interface FrontendApiToSessionRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof FrontendApitoSession
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof FrontendApitoSession
     */
    Cookie?: string
}

export interface FrontendApiUpdateLoginFlowRequest {
    /**
     * The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateLoginFlow
     */
    flow: string
    /**
     * 
     * @type UpdateLoginFlowBody
     * @memberof FrontendApiupdateLoginFlow
     */
    UpdateLoginFlowBody: UpdateLoginFlowBody
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApiupdateLoginFlow
     */
    X_Session_Token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateLoginFlow
     */
    Cookie?: string
}

export interface FrontendApiUpdateLogoutFlowRequest {
    /**
     * A Valid Logout Token  If you do not have a logout token because you only have a session cookie, call &#x60;/self-service/logout/browser&#x60; to generate a URL for this endpoint.
     * @type string
     * @memberof FrontendApiupdateLogoutFlow
     */
    token?: string
    /**
     * The URL to return to after the logout was completed.
     * @type string
     * @memberof FrontendApiupdateLogoutFlow
     */
    return_to?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateLogoutFlow
     */
    Cookie?: string
}

export interface FrontendApiUpdateRecoveryFlowRequest {
    /**
     * The Recovery Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateRecoveryFlow
     */
    flow: string
    /**
     * 
     * @type UpdateRecoveryFlowBody
     * @memberof FrontendApiupdateRecoveryFlow
     */
    UpdateRecoveryFlowBody: UpdateRecoveryFlowBody
    /**
     * Recovery Token  The recovery token which completes the recovery request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @type string
     * @memberof FrontendApiupdateRecoveryFlow
     */
    token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateRecoveryFlow
     */
    Cookie?: string
}

export interface FrontendApiUpdateRegistrationFlowRequest {
    /**
     * The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateRegistrationFlow
     */
    flow: string
    /**
     * 
     * @type UpdateRegistrationFlowBody
     * @memberof FrontendApiupdateRegistrationFlow
     */
    UpdateRegistrationFlowBody: UpdateRegistrationFlowBody
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateRegistrationFlow
     */
    Cookie?: string
}

export interface FrontendApiUpdateSettingsFlowRequest {
    /**
     * The Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateSettingsFlow
     */
    flow: string
    /**
     * 
     * @type UpdateSettingsFlowBody
     * @memberof FrontendApiupdateSettingsFlow
     */
    UpdateSettingsFlowBody: UpdateSettingsFlowBody
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof FrontendApiupdateSettingsFlow
     */
    X_Session_Token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateSettingsFlow
     */
    Cookie?: string
}

export interface FrontendApiUpdateVerificationFlowRequest {
    /**
     * The Verification Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof FrontendApiupdateVerificationFlow
     */
    flow: string
    /**
     * 
     * @type UpdateVerificationFlowBody
     * @memberof FrontendApiupdateVerificationFlow
     */
    UpdateVerificationFlowBody: UpdateVerificationFlowBody
    /**
     * Verification Token  The verification token which completes the verification request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @type string
     * @memberof FrontendApiupdateVerificationFlow
     */
    token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof FrontendApiupdateVerificationFlow
     */
    Cookie?: string
}

export class ObjectFrontendApi {
    private api: ObservableFrontendApi

    public constructor(configuration: Configuration, requestFactory?: FrontendApiRequestFactory, responseProcessor?: FrontendApiResponseProcessor) {
        this.api = new ObservableFrontendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter `?refresh=true` was set.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  The optional query parameter login_challenge is set when using Kratos with Hydra in an OAuth2 flow. See the oauth2_provider.url configuration option.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Browsers
     * @param param the request object
     */
    public createBrowserLoginFlow(param: FrontendApiCreateBrowserLoginFlowRequest = {}, options?: Configuration): Promise<LoginFlow> {
        return this.api.createBrowserLoginFlow(param.refresh, param.aal, param.return_to, param.Cookie, param.login_challenge,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns a 401 error.  When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.
     * Create a Logout URL for Browsers
     * @param param the request object
     */
    public createBrowserLogoutFlow(param: FrontendApiCreateBrowserLogoutFlowRequest = {}, options?: Configuration): Promise<LogoutFlow> {
        return this.api.createBrowserLogoutFlow(param.cookie, param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to `selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists, the browser is returned to the configured return URL.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects or a 400 bad request error if the user is already authenticated.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Browsers
     * @param param the request object
     */
    public createBrowserRecoveryFlow(param: FrontendApiCreateBrowserRecoveryFlowRequest = {}, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.createBrowserRecoveryFlow(param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url`.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Browsers
     * @param param the request object
     */
    public createBrowserRegistrationFlow(param: FrontendApiCreateBrowserRegistrationFlowRequest = {}, options?: Configuration): Promise<RegistrationFlow> {
        return this.api.createBrowserRegistrationFlow(param.return_to, param.login_challenge, param.after_verification_return_to,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid Ory Kratos Session Cookie is included in the request, a login flow will be initialized.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session was set, the browser will be redirected to the login endpoint.  If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects or a 401 forbidden error if no valid session was set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Browsers
     * @param param the request object
     */
    public createBrowserSettingsFlow(param: FrontendApiCreateBrowserSettingsFlowRequest = {}, options?: Configuration): Promise<SettingsFlow> {
        return this.api.createBrowserSettingsFlow(param.return_to, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to `selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Browser Clients
     * @param param the request object
     */
    public createBrowserVerificationFlow(param: FrontendApiCreateBrowserVerificationFlowRequest = {}, options?: Configuration): Promise<VerificationFlow> {
        return this.api.createBrowserVerificationFlow(param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a login flow for native apps that do not use a browser, such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks, including CSRF login attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Login Flow for Native Apps
     * @param param the request object
     */
    public createNativeLoginFlow(param: FrontendApiCreateNativeLoginFlowRequest = {}, options?: Configuration): Promise<LoginFlow> {
        return this.api.createNativeLoginFlow(param.refresh, param.aal, param.X_Session_Token, param.return_session_token_exchange_code, param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error.  To fetch an existing recovery flow call `/self-service/recovery/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Create Recovery Flow for Native Apps
     * @param param the request object
     */
    public createNativeRecoveryFlow(param: FrontendApiCreateNativeRecoveryFlowRequest = {}, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.createNativeRecoveryFlow( options).toPromise();
    }

    /**
     * This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Create Registration Flow for Native Apps
     * @param param the request object
     */
    public createNativeRegistrationFlow(param: FrontendApiCreateNativeRegistrationFlowRequest = {}, options?: Configuration): Promise<RegistrationFlow> {
        return this.api.createNativeRegistrationFlow(param.return_session_token_exchange_code, param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on. You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.  To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Create Settings Flow for Native Apps
     * @param param the request object
     */
    public createNativeSettingsFlow(param: FrontendApiCreateNativeSettingsFlowRequest = {}, options?: Configuration): Promise<SettingsFlow> {
        return this.api.createNativeSettingsFlow(param.X_Session_Token,  options).toPromise();
    }

    /**
     * This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.  To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Create Verification Flow for Native Apps
     * @param param the request object
     */
    public createNativeVerificationFlow(param: FrontendApiCreateNativeVerificationFlowRequest = {}, options?: Configuration): Promise<VerificationFlow> {
        return this.api.createNativeVerificationFlow( options).toPromise();
    }

    /**
     * Calling this endpoint invalidates all except the current session that belong to the logged-in user. Session data are not deleted.
     * Disable my other sessions
     * @param param the request object
     */
    public disableMyOtherSessions(param: FrontendApiDisableMyOtherSessionsRequest = {}, options?: Configuration): Promise<DeleteMySessionsCount> {
        return this.api.disableMyOtherSessions(param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * Calling this endpoint invalidates the specified session. The current session cannot be revoked. Session data are not deleted.
     * Disable one of my sessions
     * @param param the request object
     */
    public disableMySession(param: FrontendApiDisableMySessionRequest, options?: Configuration): Promise<void> {
        return this.api.disableMySession(param.id, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * Exchange Session Token
     * @param param the request object
     */
    public exchangeSessionToken(param: FrontendApiExchangeSessionTokenRequest, options?: Configuration): Promise<SuccessfulNativeLogin> {
        return this.api.exchangeSessionToken(param.init_code, param.return_to_code,  options).toPromise();
    }

    /**
     * This endpoint returns the error associated with a user-facing self service errors.  This endpoint supports stub values to help you implement the error UI:  `?id=stub:500` - returns a stub 500 (Internal Server Error) error.  More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).
     * Get User-Flow Errors
     * @param param the request object
     */
    public getFlowError(param: FrontendApiGetFlowErrorRequest, options?: Configuration): Promise<FlowError> {
        return this.api.getFlowError(param.id,  options).toPromise();
    }

    /**
     * This endpoint returns a login flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/login\', async function (req, res) { const flow = await client.getLoginFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'login\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Login Flow
     * @param param the request object
     */
    public getLoginFlow(param: FrontendApiGetLoginFlowRequest, options?: Configuration): Promise<LoginFlow> {
        return this.api.getLoginFlow(param.id, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a recovery flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getRecoveryFlow(req.header(\'Cookie\'), req.query[\'flow\'])  res.render(\'recovery\', flow) }) ```  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Get Recovery Flow
     * @param param the request object
     */
    public getRecoveryFlow(param: FrontendApiGetRecoveryFlowRequest, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.getRecoveryFlow(param.id, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a registration flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/registration\', async function (req, res) { const flow = await client.getRegistrationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'registration\', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Registration Flow
     * @param param the request object
     */
    public getRegistrationFlow(param: FrontendApiGetRegistrationFlowRequest, options?: Configuration): Promise<RegistrationFlow> {
        return this.api.getRegistrationFlow(param.id, param.Cookie,  options).toPromise();
    }

    /**
     * When accessing this endpoint through Ory Kratos\' Public API you must ensure that either the Ory Kratos Session Cookie or the Ory Kratos Session Token are set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  You can access this endpoint without credentials when using Ory Kratos\' Admin API.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Get Settings Flow
     * @param param the request object
     */
    public getSettingsFlow(param: FrontendApiGetSettingsFlowRequest, options?: Configuration): Promise<SettingsFlow> {
        return this.api.getSettingsFlow(param.id, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a verification flow\'s context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request\'s HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get(\'/recovery\', async function (req, res) { const flow = await client.getVerificationFlow(req.header(\'cookie\'), req.query[\'flow\'])  res.render(\'verification\', flow) }) ```  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Get Verification Flow
     * @param param the request object
     */
    public getVerificationFlow(param: FrontendApiGetVerificationFlowRequest, options?: Configuration): Promise<VerificationFlow> {
        return this.api.getVerificationFlow(param.id, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.  If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:  ```html <script src=\"https://public-kratos.example.org/.well-known/ory/webauthn.js\" type=\"script\" async /> ```  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get WebAuthn JavaScript
     * @param param the request object
     */
    public getWebAuthnJavaScript(param: FrontendApiGetWebAuthnJavaScriptRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getWebAuthnJavaScript( options).toPromise();
    }

    /**
     * This endpoints returns all other active sessions that belong to the logged-in user. The current session can be retrieved by calling the `/sessions/whoami` endpoint.
     * Get My Active Sessions
     * @param param the request object
     */
    public listMySessions(param: FrontendApiListMySessionsRequest = {}, options?: Configuration): Promise<Array<Session>> {
        return this.api.listMySessions(param.per_page, param.page, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when the Ory Session Token has been revoked already before.  If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.  This endpoint does not remove any HTTP Cookies - use the Browser-Based Self-Service Logout Flow instead.
     * Perform Logout for Native Apps
     * @param param the request object
     */
    public performNativeLogout(param: FrontendApiPerformNativeLogoutRequest, options?: Configuration): Promise<void> {
        return this.api.performNativeLogout(param.PerformNativeLogoutBody,  options).toPromise();
    }

    /**
     * Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. When the request it successful it adds the user ID to the \'X-Kratos-Authenticated-Identity-Id\' header in the response.  If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:  ```js pseudo-code example router.get(\'/protected-endpoint\', async function (req, res) { const session = await client.toSession(undefined, req.header(\'cookie\'))  console.log(session) }) ```  When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:  ```js pseudo-code example ... const session = await client.toSession(\"the-session-token\")  console.log(session) ```  Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  This endpoint is useful for:  AJAX calls. Remember to send credentials and set up CORS correctly! Reverse proxies and API Gateways Server-side calls - use the `X-Session-Token` header!  This endpoint authenticates users by checking:  if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie; if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token; if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.  If none of these headers are set or the cookie or token are invalid, the endpoint returns a HTTP 401 status code.  As explained above, this request may fail due to several reasons. The `error.id` can be one of:  `session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token). `session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.
     * Check Who the Current HTTP Session Belongs To
     * @param param the request object
     */
    public toSession(param: FrontendApiToSessionRequest = {}, options?: Configuration): Promise<Session> {
        return this.api.toSession(param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  Use this endpoint to complete a login flow. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and responds with HTTP 200 and a application/json body with the session token on success; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded; a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Login Flow
     * @param param the request object
     */
    public updateLoginFlow(param: FrontendApiUpdateLoginFlowRequest, options?: Configuration): Promise<SuccessfulNativeLogin> {
        return this.api.updateLoginFlow(param.flow, param.UpdateLoginFlowBody, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint logs out an identity in a self-service manner.  If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other) to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.  If the `Accept` HTTP header is set to `application/json`, a 204 No Content response will be sent on successful logout instead.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).
     * Update Logout Flow
     * @param param the request object
     */
    public updateLogoutFlow(param: FrontendApiUpdateLogoutFlowRequest = {}, options?: Configuration): Promise<void> {
        return this.api.updateLogoutFlow(param.token, param.return_to, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a recovery flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid. and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended. `sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a recovery link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with a new Recovery Flow ID which contains an error message that the recovery link was invalid.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Complete Recovery Flow
     * @param param the request object
     */
    public updateRecoveryFlow(param: FrontendApiUpdateRecoveryFlowRequest, options?: Configuration): Promise<RecoveryFlow> {
        return this.api.updateRecoveryFlow(param.flow, param.UpdateRecoveryFlowBody, param.token, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a registration flow by sending an identity\'s traits and password. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and respond with HTTP 200 and a application/json body with the created identity success - if the session hook is configured the `session` and `session_token` will also be included; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded; a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Update Registration Flow
     * @param param the request object
     */
    public updateRegistrationFlow(param: FrontendApiUpdateRegistrationFlowRequest, options?: Configuration): Promise<SuccessfulNativeRegistration> {
        return this.api.updateRegistrationFlow(param.flow, param.UpdateRegistrationFlowBody, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a settings flow by sending an identity\'s updated password. This endpoint behaves differently for API and browser flows.  API-initiated flows expect `application/json` to be sent in the body and respond with HTTP 200 and an application/json body with the session token on success; HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors. HTTP 401 when the endpoint is called without a valid session token. HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low. Implies that the user needs to re-authenticate.  Browser flows without HTTP Header `Accept` or with `Accept: text/_*` respond with a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded; a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise. a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session\'s AAL is too low.  Browser flows with HTTP Header `Accept: application/json` respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 401 when the endpoint is called without a valid session cookie. HTTP 403 when the page is accessed without a session cookie or the session\'s AAL is too low. HTTP 400 on form validation errors.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`, or initiate a refresh login flow otherwise. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Complete Settings Flow
     * @param param the request object
     */
    public updateSettingsFlow(param: FrontendApiUpdateSettingsFlowRequest, options?: Configuration): Promise<SettingsFlow> {
        return this.api.updateSettingsFlow(param.flow, param.UpdateSettingsFlowBody, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a verification flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended. `sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a verification link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with a new Verification Flow ID which contains an error message that the verification link was invalid.  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/self-service/flows/verify-email-account-activation).
     * Complete Verification Flow
     * @param param the request object
     */
    public updateVerificationFlow(param: FrontendApiUpdateVerificationFlowRequest, options?: Configuration): Promise<VerificationFlow> {
        return this.api.updateVerificationFlow(param.flow, param.UpdateVerificationFlowBody, param.token, param.Cookie,  options).toPromise();
    }

}

import { ObservableIdentityApi } from "./ObservableAPI.ts";
import { IdentityApiRequestFactory, IdentityApiResponseProcessor} from "../apis/IdentityApi.ts";

export interface IdentityApiBatchPatchIdentitiesRequest {
    /**
     * 
     * @type PatchIdentitiesBody
     * @memberof IdentityApibatchPatchIdentities
     */
    PatchIdentitiesBody?: PatchIdentitiesBody
}

export interface IdentityApiCreateIdentityRequest {
    /**
     * 
     * @type CreateIdentityBody
     * @memberof IdentityApicreateIdentity
     */
    CreateIdentityBody?: CreateIdentityBody
}

export interface IdentityApiCreateRecoveryCodeForIdentityRequest {
    /**
     * 
     * @type CreateRecoveryCodeForIdentityBody
     * @memberof IdentityApicreateRecoveryCodeForIdentity
     */
    CreateRecoveryCodeForIdentityBody?: CreateRecoveryCodeForIdentityBody
}

export interface IdentityApiCreateRecoveryLinkForIdentityRequest {
    /**
     * 
     * @type CreateRecoveryLinkForIdentityBody
     * @memberof IdentityApicreateRecoveryLinkForIdentity
     */
    CreateRecoveryLinkForIdentityBody?: CreateRecoveryLinkForIdentityBody
}

export interface IdentityApiDeleteIdentityRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApideleteIdentity
     */
    id: string
}

export interface IdentityApiDeleteIdentityCredentialsRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApideleteIdentityCredentials
     */
    id: string
    /**
     * Type is the credential\&#39;s Type. One of totp, webauthn, lookup
     * @type &#39;totp&#39; | &#39;webauthn&#39; | &#39;lookup&#39;
     * @memberof IdentityApideleteIdentityCredentials
     */
    type: 'totp' | 'webauthn' | 'lookup'
}

export interface IdentityApiDeleteIdentitySessionsRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApideleteIdentitySessions
     */
    id: string
}

export interface IdentityApiDisableSessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof IdentityApidisableSession
     */
    id: string
}

export interface IdentityApiExtendSessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof IdentityApiextendSession
     */
    id: string
}

export interface IdentityApiGetIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to get
     * @type string
     * @memberof IdentityApigetIdentity
     */
    id: string
    /**
     * Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
     * @type Array&lt;&#39;password&#39; | &#39;totp&#39; | &#39;oidc&#39; | &#39;webauthn&#39; | &#39;lookup_secret&#39;&gt;
     * @memberof IdentityApigetIdentity
     */
    include_credential?: Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'>
}

export interface IdentityApiGetIdentitySchemaRequest {
    /**
     * ID must be set to the ID of schema you want to get
     * @type string
     * @memberof IdentityApigetIdentitySchema
     */
    id: string
}

export interface IdentityApiGetSessionRequest {
    /**
     * ID is the session\&#39;s ID.
     * @type string
     * @memberof IdentityApigetSession
     */
    id: string
    /**
     * ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
     * @type Array&lt;string&gt;
     * @memberof IdentityApigetSession
     */
    expand?: Array<string>
}

export interface IdentityApiListIdentitiesRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof IdentityApilistIdentities
     */
    per_page?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof IdentityApilistIdentities
     */
    page?: number
    /**
     * CredentialsIdentifier is the identifier (username, email) of the credentials to look up.
     * @type string
     * @memberof IdentityApilistIdentities
     */
    credentials_identifier?: string
}

export interface IdentityApiListIdentitySchemasRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof IdentityApilistIdentitySchemas
     */
    per_page?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof IdentityApilistIdentitySchemas
     */
    page?: number
}

export interface IdentityApiListIdentitySessionsRequest {
    /**
     * ID is the identity\&#39;s ID.
     * @type string
     * @memberof IdentityApilistIdentitySessions
     */
    id: string
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof IdentityApilistIdentitySessions
     */
    per_page?: number
    /**
     * Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @type number
     * @memberof IdentityApilistIdentitySessions
     */
    page?: number
    /**
     * Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @type boolean
     * @memberof IdentityApilistIdentitySessions
     */
    active?: boolean
}

export interface IdentityApiListSessionsRequest {
    /**
     * Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type number
     * @memberof IdentityApilistSessions
     */
    page_size?: number
    /**
     * Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @type string
     * @memberof IdentityApilistSessions
     */
    page_token?: string
    /**
     * Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @type boolean
     * @memberof IdentityApilistSessions
     */
    active?: boolean
    /**
     * ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
     * @type Array&lt;string&gt;
     * @memberof IdentityApilistSessions
     */
    expand?: Array<string>
}

export interface IdentityApiPatchIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to update
     * @type string
     * @memberof IdentityApipatchIdentity
     */
    id: string
    /**
     * 
     * @type Array&lt;JsonPatch&gt;
     * @memberof IdentityApipatchIdentity
     */
    JsonPatch?: Array<JsonPatch>
}

export interface IdentityApiUpdateIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to update
     * @type string
     * @memberof IdentityApiupdateIdentity
     */
    id: string
    /**
     * 
     * @type UpdateIdentityBody
     * @memberof IdentityApiupdateIdentity
     */
    UpdateIdentityBody?: UpdateIdentityBody
}

export class ObjectIdentityApi {
    private api: ObservableIdentityApi

    public constructor(configuration: Configuration, requestFactory?: IdentityApiRequestFactory, responseProcessor?: IdentityApiResponseProcessor) {
        this.api = new ObservableIdentityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create and deletes multiple identities
     * @param param the request object
     */
    public batchPatchIdentities(param: IdentityApiBatchPatchIdentitiesRequest = {}, options?: Configuration): Promise<BatchPatchIdentitiesResponse> {
        return this.api.batchPatchIdentities(param.PatchIdentitiesBody,  options).toPromise();
    }

    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     * @param param the request object
     */
    public createIdentity(param: IdentityApiCreateIdentityRequest = {}, options?: Configuration): Promise<Identity> {
        return this.api.createIdentity(param.CreateIdentityBody,  options).toPromise();
    }

    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     * @param param the request object
     */
    public createRecoveryCodeForIdentity(param: IdentityApiCreateRecoveryCodeForIdentityRequest = {}, options?: Configuration): Promise<RecoveryCodeForIdentity> {
        return this.api.createRecoveryCodeForIdentity(param.CreateRecoveryCodeForIdentityBody,  options).toPromise();
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param param the request object
     */
    public createRecoveryLinkForIdentity(param: IdentityApiCreateRecoveryLinkForIdentityRequest = {}, options?: Configuration): Promise<RecoveryLinkForIdentity> {
        return this.api.createRecoveryLinkForIdentity(param.CreateRecoveryLinkForIdentityBody,  options).toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     * @param param the request object
     */
    public deleteIdentity(param: IdentityApiDeleteIdentityRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIdentity(param.id,  options).toPromise();
    }

    /**
     * Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
     * Delete a credential for a specific identity
     * @param param the request object
     */
    public deleteIdentityCredentials(param: IdentityApiDeleteIdentityCredentialsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIdentityCredentials(param.id, param.type,  options).toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     * @param param the request object
     */
    public deleteIdentitySessions(param: IdentityApiDeleteIdentitySessionsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIdentitySessions(param.id,  options).toPromise();
    }

    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     * @param param the request object
     */
    public disableSession(param: IdentityApiDisableSessionRequest, options?: Configuration): Promise<void> {
        return this.api.disableSession(param.id,  options).toPromise();
    }

    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     * @param param the request object
     */
    public extendSession(param: IdentityApiExtendSessionRequest, options?: Configuration): Promise<Session> {
        return this.api.extendSession(param.id,  options).toPromise();
    }

    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     * @param param the request object
     */
    public getIdentity(param: IdentityApiGetIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.getIdentity(param.id, param.include_credential,  options).toPromise();
    }

    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     * @param param the request object
     */
    public getIdentitySchema(param: IdentityApiGetIdentitySchemaRequest, options?: Configuration): Promise<any> {
        return this.api.getIdentitySchema(param.id,  options).toPromise();
    }

    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     * @param param the request object
     */
    public getSession(param: IdentityApiGetSessionRequest, options?: Configuration): Promise<Session> {
        return this.api.getSession(param.id, param.expand,  options).toPromise();
    }

    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     * @param param the request object
     */
    public listIdentities(param: IdentityApiListIdentitiesRequest = {}, options?: Configuration): Promise<Array<Identity>> {
        return this.api.listIdentities(param.per_page, param.page, param.credentials_identifier,  options).toPromise();
    }

    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     * @param param the request object
     */
    public listIdentitySchemas(param: IdentityApiListIdentitySchemasRequest = {}, options?: Configuration): Promise<Array<IdentitySchemaContainer>> {
        return this.api.listIdentitySchemas(param.per_page, param.page,  options).toPromise();
    }

    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     * @param param the request object
     */
    public listIdentitySessions(param: IdentityApiListIdentitySessionsRequest, options?: Configuration): Promise<Array<Session>> {
        return this.api.listIdentitySessions(param.id, param.per_page, param.page, param.active,  options).toPromise();
    }

    /**
     * Listing all sessions that exist.
     * List All Sessions
     * @param param the request object
     */
    public listSessions(param: IdentityApiListSessionsRequest = {}, options?: Configuration): Promise<Array<Session>> {
        return this.api.listSessions(param.page_size, param.page_token, param.active, param.expand,  options).toPromise();
    }

    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     * @param param the request object
     */
    public patchIdentity(param: IdentityApiPatchIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.patchIdentity(param.id, param.JsonPatch,  options).toPromise();
    }

    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     * @param param the request object
     */
    public updateIdentity(param: IdentityApiUpdateIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.updateIdentity(param.id, param.UpdateIdentityBody,  options).toPromise();
    }

}

import { ObservableMetadataApi } from "./ObservableAPI.ts";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi.ts";

export interface MetadataApiGetVersionRequest {
}

export interface MetadataApiIsAliveRequest {
}

export interface MetadataApiIsReadyRequest {
}

export class ObjectMetadataApi {
    private api: ObservableMetadataApi

    public constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
     * Return Running Software Version.
     * @param param the request object
     */
    public getVersion(param: MetadataApiGetVersionRequest = {}, options?: Configuration): Promise<GetVersion200Response> {
        return this.api.getVersion( options).toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server Status
     * @param param the request object
     */
    public isAlive(param: MetadataApiIsAliveRequest = {}, options?: Configuration): Promise<IsAlive200Response> {
        return this.api.isAlive( options).toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server and Database Status
     * @param param the request object
     */
    public isReady(param: MetadataApiIsReadyRequest = {}, options?: Configuration): Promise<IsAlive200Response> {
        return this.api.isReady( options).toPromise();
    }

}
