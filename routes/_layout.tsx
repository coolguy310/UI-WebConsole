import { LayoutProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import Footer from "../components/misc/footer.tsx";
import Header from "../islands/header.tsx";

export default function LandingPageLayout({ Component }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Qernal</title>
      </Head>
      <div class="bg-primary-black text-white min-h-screen">
        <Header />
        <div className="container px-6 lg:px-28 mx-auto pt-24">
          <Component />
        </div>
        <Footer />
      </div>
    </>
  );
}
