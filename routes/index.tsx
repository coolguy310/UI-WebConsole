import { Hero } from "@/components/common/hero/index.tsx";
import Providers from "@/components/common/providers/index.tsx";
import Benefits from "@/components/misc/benefit.tsx";
import About from "@/components/common/about/index.tsx";
import Pricing from "@/islands/pricing.tsx";
import Deployment from "@/islands/deploy.tsx";
import { defineRoute } from "$fresh/src/server/defines.ts";

export default defineRoute(() => {
  return (
    <>
      <Hero />
      <Providers />
      <Benefits />
      <About />
      <Pricing />
      <Deployment />
    </>
  );
});
