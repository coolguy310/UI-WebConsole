import { PageProps } from "$fresh/server.ts";
import AuthVerificationForm from "@/islands/form-auth-verification.tsx";
import { VectorBackground } from "./(_components)/vector-background.tsx";

export default function AuthVerification(props: PageProps) {
  return (
    <>
      <VectorBackground />
      <div className="relative z-10">
        <AuthVerificationForm />
      </div>
    </>
  );
}
