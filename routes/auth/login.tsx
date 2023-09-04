import { PageProps } from "$fresh/server.ts";
import AuthLoginForm from "@/islands/form-auth-login.tsx";
import { VectorBackground } from "@/routes/auth/register.tsx";

export default function AuthLogin(props: PageProps) {
  return (
    <>
      <VectorBackground />
      <div className="relative z-10">
        <AuthLoginForm />
      </div>
    </>
  );
}
