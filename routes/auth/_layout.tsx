import { LayoutProps } from "$fresh/server.ts";
import { AuthLayout } from "@/components/layouts/auth.tsx";

export default function LandingPageLayout({ Component, route }: LayoutProps) {
  const showLoginButton = route === "/register";
  const showRegisterButton = false;
  const hideBottomStroke = false;

  return (
    <AuthLayout>
      <Component />
    </AuthLayout>
  );
}
