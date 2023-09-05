import { PageProps } from "$fresh/server.ts";
import AuthLoginForm from "@/islands/form-auth-login.tsx";

export default function AuthLogin(props: PageProps) {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Login to your Account</h1>
      <AuthLoginForm />
      <div className="text-center text-stroke text-sm">
        <div className="mt-3">
          <span>Not having an account yet?</span>{" "}
          <a href="/auth/register" className="font-semibold text-accent">
            Register
          </a>
        </div>
      </div>
    </>
  );
}
