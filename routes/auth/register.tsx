import { Handlers } from "$fresh/server.ts"

import { SittingWomanIlustration } from "@/components/icons/index.ts"
import SittingManIlustration from "@/components/icons/sitting-man.tsx"
import { AuthLayout } from "@/components/layouts/auth.tsx"
import AuthRegisterForm from "@/islands/form-auth-register.tsx"

// import { Kratos } from "../../packages/kratos-auth/auth.ts"

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render()
    // const getFlow = await Kratos.createBrowserRegistrationFlow.fn()
    // console.log(getFlow)
    return resp
  },
}

export const VectorBackground = () => {
  return (
    <>
      <div
        className="absolute left-0 top-12 w-full pointer-events-none"
        style={{
          background: "url(/vectors/programs.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
          height: "calc(100vh - 3rem)",
        }}></div>
      <SittingWomanIlustration className="absolute bottom-14 left-24 mb-1" />
      <SittingManIlustration className="absolute bottom-12 right-24" />
    </>
  )
}
export default function AuthLogin() {
  return (
    <AuthLayout showLoginButton>
      <VectorBackground />
      <div className="relative z-10">
        <AuthRegisterForm />
      </div>
    </AuthLayout>
  )
}
