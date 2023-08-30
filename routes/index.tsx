import About from "../components/common/about/index.tsx"
import { Hero } from "../components/common/hero/index.tsx"
import Providers from "../components/common/providers/index.tsx"
import { LandingPageLayout } from "../components/layouts/landing-page.tsx"
import Benefits from "../islands/benefit.tsx"
import Deployment from "../islands/deploy.tsx"
import Pricing from "../islands/pricing.tsx"

export default function Home() {
  return (
    <LandingPageLayout>
      <Hero />
      <Providers />
      <Benefits />
      <About />
      <Pricing />
      <Deployment />
    </LandingPageLayout>
  )
}
