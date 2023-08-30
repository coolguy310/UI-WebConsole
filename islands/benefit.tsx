import {
  Bills,
  Cloud,
  Integration,
  Polyglot,
  Region,
  Security,
  Serverless,
  Support,
} from "../components/icons/misc.tsx"
import Card from "./card.tsx"

const Benefits = () => {
  const list = [
    {
      id: 0,
      title: "Region Unlocked",
      description: "Globally distribute with ease - run your code like a CDN",
      icon: Region,
    },
    {
      id: 1,
      title: "Polyglot",
      description: "Write your code in any language - we’ll run it or a thousand “its” - you choose",
      icon: Polyglot,
    },
    {
      id: 2,
      title: "Cloud Agnostic",
      description: "Our platform leverages multiple providers, making your app available anywhere, anytime",
      icon: Cloud,
    },
    {
      id: 3,
      title: "Serverless",
      description: "Focus on developing your app, not your infrastructure - that's our job",
      icon: Serverless,
    },
    {
      id: 4,
      title: "No Unexpected Bills",
      description: "Scale in blocks of capacity instead of guessing at your next bill",
      icon: Bills,
    },
    {
      id: 5,
      title: "CI/CD Integration",
      description: "We deploy when you make a change",
      icon: Integration,
    },
    {
      id: 6,
      title: "Support",
      description: "Help when you really need it",
      icon: Support,
    },
    {
      id: 7,
      title: "Managed Security",
      description: "Proactive analysis before you deploy to make security simple",
      icon: Security,
    },
  ]
  return (
    <div class="my-40">
      <h3 class="text-5xl font-semibold text-center mb-16">Our Benefits</h3>
      <div className="grid lg:grid-cols-2 gap-8 -ml-8">
        {list?.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  )
}
export default Benefits
