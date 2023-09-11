import { Head } from "$fresh/runtime.ts";
import Header from "@/islands/header.tsx";
import Footer from "@/components/misc/footer.tsx";
import { defineLayout } from "$fresh/src/server/defines.ts";

export default defineLayout((_, ctx) => {
  return (
    <>
      <Head>
        <title>Qernal</title>
      </Head>
      <div class="bg-primary-black text-white min-h-screen">
        <Header />
        <div className="container px-6 lg:px-28 mx-auto pt-24">
          <ctx.Component />
        </div>
        <Footer />
      </div>
    </>
  );
});
