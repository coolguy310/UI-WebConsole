import { Head } from "$fresh/runtime.ts"

import Footer from "../../islands/footer.tsx"
import Header from "../../islands/header.tsx"

interface LandingPageLayoutProps {
  children: preact.ComponentChildren
}
export const LandingPageLayout = (props: LandingPageLayoutProps) => {
  return (
    <>
      <Head>
        <title>Qernal</title>
      </Head>
      <div class="bg-primary-black text-white min-h-screen">
        <Header />
        <div className="container px-6 lg:px-28 mx-auto pt-24">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}
