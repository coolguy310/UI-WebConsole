import { useEffect, useState } from "preact/hooks";

import { Kratos } from "../packages/kratos-auth/auth.ts";
import {
  LoginFlow,
  UpdateLoginFlowBody,
} from "../packages/kratos-cdk/index.ts";
import Flow from "./ory-flow.tsx";

const AuthLoginForm = () => {
  const [flowLoading, setFlowLoading] = useState(true);
  const [flow, setFlow] = useState<LoginFlow>();

  const handleLoginFlow = async () => {
    setFlowLoading(true);
    const getFlow = await Kratos.createBrowserLoginFlow.fn();
    // const loginFlow = await AuthAPI.getLoginFlow(flow.id)
    setFlow(getFlow);
    setFlowLoading(false);
  };

  const onLogin = async (values: UpdateLoginFlowBody) => {
    if (!flow) return;
    await Kratos.updateLoginFlow
      .fn(flow?.id, {
        ...values,
        method: "password",
      })
      .then(() => {
        if (flow?.return_to) {
          window.location.href = flow?.return_to;
          return;
        }
        window.location.href = "/";
      })
      .then(() => {})
      .catch((err: any) => {
        // If the previous handler did not catch the error it's most likely a form validation error
        if (err.code === 400) {
          // Yup, it is!
          setFlow(err.body);
          return;
        }

        return Promise.reject(err);
      });
  };
  useEffect(() => {
    handleLoginFlow();
  }, []);
  return <Flow flow={flow} onSubmit={onLogin} loading={flowLoading} />;
};

export default AuthLoginForm;
