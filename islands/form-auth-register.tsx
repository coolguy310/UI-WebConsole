import { useEffect, useState } from "preact/hooks";

import { AuthSocial } from "../components/common/forms/auth/social.tsx";
import { Divider } from "../components/ui/divider/index.tsx";
import { handleFlowError } from "../lib/ory-helpers.ts";
import { Kratos } from "../packages/kratos-auth/auth.ts";
import {
  RegistrationFlow,
  UpdateRegistrationFlowBody,
} from "../packages/kratos-cdk/index.ts";
import Flow, { Values } from "./ory-flow.tsx";

const AuthRegisterForm = () => {
  const [flowLoading, setFlowLoading] = useState(true);
  const [flow, setFlow] = useState<RegistrationFlow>();

  const handleLoginFlow = async () => {
    setFlowLoading(true);
    try {
      if (window.location.search.includes("flow=")) {
        const flowId = window.location.search.split("flow=")[1];
        await Kratos.getRegistrationFlow
          .fn(flowId)
          .then((data) => {
            setFlow(data);
          })
          .catch(handleFlowError);
        return;
      }
      await Kratos.createBrowserRegistrationFlow
        .fn()
        .then((data) => {
          // set the flow id to url, but dont redirect
          window.history.replaceState({}, "", "/auth/register?flow=" + data.id);
          setFlow(data);
        })
        .catch(handleFlowError);
    } catch (error) {
      console.log(error.response);
    } finally {
      setFlowLoading(false);
    }
  };

  const onRegister = async (values: Record<string, any>) => {
    if (!flow?.id) return;
    // const registrationFlow = await Kratos.getRegistrationFlow.fn(flow?.id)
    await Kratos.updateRegistrationFlow
      .fn(String(flow?.id), {
        method: "password",
        provider: "ory",
        csrf_token: values?.csrf_token,
        password: values.password,
        traits: {
          email: values?.["traits.email"],
          name: {
            first: values?.["traits.name.first"],
            last: values?.["traits.name.last"],
          },
        },
      })
      .then((data) => {
        // If we ended up here, it means we are successfully signed up!
        //
        // You can do cool stuff here, like having access to the identity which just signed up:
        console.log("This is the user session: ", data, data.identity);
        // continue_with is a list of actions that the user might need to take before the registration is complete.
        // It could, for example, contain a link to the verification form. fe5f912a-9e4e-47b8-9167-a2be55a81293
        if (data.continue_with) {
          for (const item of data.continue_with) {
            switch (item.action) {
              case "show_verification_ui":
                window.location.href =
                  "/auth/verification?flow=" + item.flow.id;
                return;
            }
          }
        }
        // If continue_with did not contain anything, we can just return to the home page.
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err?.body?.ui?.messages[0]?.text);
        // If the previous handler did not catch the error it's most likely a form validation error
        if (err.response?.status === 400) {
          // Yup, it is!
          setFlow(err.response?.data);
          return;
        }

        return Promise.reject(err);
      });
  };

  useEffect(() => {
    handleLoginFlow();
  }, []);
  return <Flow flow={flow} onSubmit={onRegister} loading={flowLoading} />;
};

export default AuthRegisterForm;
