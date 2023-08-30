import { PageProps } from "$fresh/server.ts"

import { AuthLayout } from "@/components/layouts/auth.tsx"
import AuthVerificationForm from "@/islands/form-auth-verification.tsx"
import { VectorBackground } from "@/routes/auth/register.tsx"

export default function AuthVerification(props: PageProps) {
  return (
    <AuthLayout>
      <VectorBackground />
      <div className="relative z-10">
        <AuthVerificationForm />
      </div>
    </AuthLayout>
  )
}
