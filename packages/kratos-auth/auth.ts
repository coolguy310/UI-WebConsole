import {
  Configuration,
  createConfiguration,
  FrontendApi,
  HttpMethod,
  RequestContext,
  UpdateLoginFlowBody,
  UpdateRegistrationFlowBody,
  UpdateVerificationFlowBody,
} from "../kratos-cdk/index.ts";
import { Config } from "./config.ts";

const baseUrl = Config.auth.publicURL;

const feAPi = (url: string, method: HttpMethod) => {
  const api = new FrontendApi(
    createConfiguration({
      baseServer: {
        makeRequestContext: () => {
          const ctx = new RequestContext(baseUrl + url, method);
          return ctx;
        },
      },
    })
  );
  return api;
};

const api = (type: keyof typeof Kratos) => {
  const rss = Kratos[type];
  return feAPi(rss.path, rss.method);
};

export const Kratos = {
  createBrowserLoginFlow: {
    path: "/self-service/login/browser",
    method: HttpMethod.GET,
    fn: () => api("createBrowserLoginFlow").createBrowserLoginFlow(),
  },
  getLoginFlow: {
    path: "/self-service/login/flows",
    method: HttpMethod.GET,
    fn: (id: string, cookie?: string, _options?: Configuration) => {
      return api("getLoginFlow").getLoginFlow(id, cookie, _options);
    },
  },
  updateLoginFlow: {
    path: "/self-service/login",
    method: HttpMethod.POST,
    fn: (id: string, body: UpdateLoginFlowBody, cookie?: string) => {
      return api("updateLoginFlow").updateLoginFlow(id, body, cookie);
    },
  },
  getRegistrationFlow: {
    path: "/self-service/registration/flows",
    method: HttpMethod.GET,
    fn: (id: string, cookie?: string, _options?: Configuration) => {
      return api("getRegistrationFlow").getRegistrationFlow(
        id,
        cookie,
        _options
      );
    },
  },
  createBrowserRegistrationFlow: {
    path: "/self-service/registration/browser",
    method: HttpMethod.GET,
    fn: (_options?: Configuration) =>
      api("createBrowserRegistrationFlow").createBrowserRegistrationFlow(
        undefined,
        undefined,
        undefined,
        _options
      ),
  },
  updateRegistrationFlow: {
    path: "/self-service/registration",
    method: HttpMethod.POST,
    fn: (
      id: string,
      body: UpdateRegistrationFlowBody,
      cookie?: string,
      _options?: Configuration
    ) => {
      // console.log("updateRegistrationFlow", id, body, cookie, _options)
      return api("updateRegistrationFlow").updateRegistrationFlow(
        id,
        body,
        cookie,
        _options
      );
    },
  },
  toSession: {
    path: "/sessions/whoami",
    method: HttpMethod.GET,
    fn: (X_Session_Token?: string, Cookie?: string, _options?: Configuration) =>
      api("toSession").toSession(X_Session_Token, Cookie, _options),
  },
  createBrowserLogoutFlow: {
    path: "/self-service/logout/browser",
    method: HttpMethod.GET,
    fn: (cookie?: string) =>
      api("createBrowserLogoutFlow").createBrowserLogoutFlow(cookie),
  },
  updateLogoutFlow: {
    path: "/self-service/logout",
    method: HttpMethod.POST,
    fn: (token: string) => api("updateLogoutFlow").updateLogoutFlow(token),
  },
  getVerificationFlow: {
    path: "/self-service/verification/flows",
    method: HttpMethod.GET,
    fn: (id: string, cookie?: string, _options?: Configuration) => {
      return api("getVerificationFlow").getVerificationFlow(
        id,
        cookie,
        _options
      );
    },
  },
  createBrowserVerificationFlow: {
    path: "/self-service/verification/browser",
    method: HttpMethod.GET,
    fn: (returnTo?: string) =>
      api("createBrowserVerificationFlow").createBrowserVerificationFlow(
        returnTo
      ),
  },
  updateVerificationFlow: {
    path: "/self-service/verification",
    method: HttpMethod.POST,
    fn: (
      flowId: string,
      body: UpdateVerificationFlowBody,
      token?: string,
      cookie?: string,
      _options?: Configuration
    ) => {
      return api("updateVerificationFlow").updateVerificationFlow(
        flowId,
        body,
        token,
        cookie,
        _options
      );
    },
  },
};
