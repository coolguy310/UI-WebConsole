import { LayoutProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Button } from "@/components/ui/button/index.tsx";
import Footer from "@/components/misc/footer.tsx";

export default function LandingPageLayout({ Component, route }: LayoutProps) {
  const showLoginButton = route === "/register";
  const showRegisterButton = false;
  const hideBottomStroke = false;

  return <Component />;
}
