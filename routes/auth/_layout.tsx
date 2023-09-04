import { LayoutProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Button } from "@/components/ui/button/index.tsx";
import Footer from "@/components/misc/footer.tsx";

export default function LandingPageLayout({ Component }: LayoutProps) {
  const showLoginButton = true;
  const showRegisterButton = true;
  const hideBottomStroke = true;

  return (
    <>
      <Head>
        <title>Qernal | Auth</title>
      </Head>
      <div class="bg-dark text-white min-h-screen">
        <header className="fixed top-0 px-8 py-5 w-full transition-all">
          <div class="container mx-auto flex flex-wrap items-center justify-between relative border-gray-100 ">
            <a href="/">
              <img src="/logo-alt.svg" alt="" />
            </a>
            {showLoginButton && (
              <Button
                title="Log In"
                href="/auth/login"
                className="font-semibold !px-10"
              />
            )}
            {showRegisterButton && (
              <Button
                title="Register"
                href="/auth/register"
                className="font-semibold !px-10"
              />
            )}
          </div>
        </header>
        <div className="lg:w-[27%] mx-auto flex h-screen flex-col items-center justify-center space-y-3">
          <div class="w-full self-center">
            <Component />
          </div>
          <Footer />
        </div>
        {!hideBottomStroke && (
          <div className="h-px w-11/12 absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-[#28282B]" />
        )}
      </div>
    </>
  );
}
