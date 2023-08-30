import { Star } from "../../icons/misc.tsx"

const About = () => {
  const list = [
    {
      title: "Global Deployments Instantly",
      description: "Scale in blocks of capacity instead of guessing at your next bill",
      icon: Star,
    },
    {
      title: "Easy to Use",
      description: "Scale in blocks of capacity instead of guessing at your next bill",
      icon: Star,
    },
    {
      title: "Build by Engineers, For Engineers",
      description: "Scale in blocks of capacity instead of guessing at your next bill",
      icon: Star,
    },
  ]
  return (
    <div class="my-20 grid lg:grid-cols-2 gap-4 lg:gap-40 items-center">
      <div class="order-2 lg:order-1">
        <h3 class="text-5xl font-bold">About Us</h3>
        <p class="text-gray-100 mt-6">
          We will help a client's problems to develop the products they have with high quality
        </p>
        {list.map((item) => (
          <div class="group flex items-center rounded-2xl my-12">
            <span class="bg-primary rounded-full bg-opacity-30 group-hover:bg-opacity-100 transition-all text-primary group-hover:text-[#16E1EE]">
              <item.icon tapeColor="currentColor" />
            </span>
            <div class="ml-6">
              <h5 class="text-gray-200 group-hover:text-white text-2xl font-semibold">{item.title}</h5>
              <p class="text-gray-100 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <img class="order-1 lg:order-2 mx-auto" src="./about-us-illustration.png" alt="about us illustration" />
    </div>
  )
}
export default About
