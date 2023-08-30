import About from "../components/common/about/index.tsx";
import { Hero } from "../components/common/hero/index.tsx";
import Providers from "../components/common/providers/index.tsx";
import Benefits from "../components/misc/benefit.tsx";
import Deployment from "../islands/deploy.tsx";
import Pricing from "../islands/pricing.tsx";

export default function Home() {
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
}
