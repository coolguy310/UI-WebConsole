import { Handlers } from "$fresh/server.ts";
import AuthRegisterForm from "@/islands/form-auth-register.tsx";
import { VectorBackground } from "./(_components)/vector-background.tsx";

// import { Kratos } from "../../packages/kratos-auth/auth.ts"

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    // const getFlow = await Kratos.createBrowserRegistrationFlow.fn()
    // console.log(getFlow)
    return resp;
  },
};

export default function AuthLogin() {
  return (
    <>
      <VectorBackground />
      <div className="relative z-10">
        <AuthRegisterForm />
      </div>
    </>
  );
}
