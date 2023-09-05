import { LayoutProps, RouteConfig } from "$fresh/server.ts";
import { Footer } from "./(_components)/footer.tsx";
import { VectorBackground } from "./(_components)/vector-background.tsx";
import { Button } from "@/components/ui/button/index.tsx";

export default function LandingPageLayout({ Component, route }: LayoutProps) {
  const isLoginRoute = route.includes("/auth/login");
  const isRegisterRoute = route.includes("/auth/register");
  return (
    <>
      <VectorBackground />
      <div class="bg-dark text-white min-h-screen flex flex-col">
        <header className="px-8 py-5 w-full transition-all">
          <div class="flex justify-between items-center">
            <a href="/">
              <img src="/logo-alt.svg" alt="" />
            </a>
            {isRegisterRoute && (
              <Button
                title="Log In"
                href="/auth/login"
                className="font-semibold"
              />
            )}
            {isLoginRoute && (
              <Button
                title="Register"
                href="/auth/register"
                className="font-semibold"
              />
            )}
          </div>
        </header>
        <div class="flex-1 h-full mx-auto max-w-[511px] w-full grid place-items-center">
          <div class="w-full z-50">
            <div className="bg-[#28282B] rounded-3xl px-6 py-8 flex flex-col space-y-5 w-full">
              <Component />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};
