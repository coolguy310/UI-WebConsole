import { useCallback, useState } from "preact/hooks"

import { Cli } from "../components/icons/misc.tsx"
import Card from "./card.tsx"

const Deployment = () => {
  const [active, setActive] = useState(0)
  const list = [
    {
      id: 0,
      title: "CLI code example of Deployment",
      description: "Scale in blocks of capacity instead of guessing at your next bill",
      icon: Cli,
      code: CodeBlock,
    },
    {
      id: 1,
      title: "Terraform code example of Deployment",
      description: "We will help a client's problems to develop the products they have with high quality",
      icon: Cli,
      code: CodeBlock2,
    },
  ]

  const Code = useCallback(() => {
    const activeList = list?.find((item) => item.id === active)
    if (activeList) return <activeList.code />
    return <></>
  }, [active])

  return (
    <div class="my-40 flex flex-col lg:flex-row items-center">
      <div class="relative flex">
        <img class="relative z-10" src="./deployment-bg.png" alt="deployment background" />
        <div className="absolute z-20  inset-0 my-12 mx-6 lg:mx-0 lg:translate-x-20 ">
          <div className="relative bg-secondary p-8 rounded-2xl h-full">
            <img
              class="absolute top-0 right-0 translate-x-2/3 -translate-y-2/3"
              src="./deployment-fancy-icon.svg"
              alt=""
            />
            <div className="grid grid-cols-3 mb-4">
              <div class="flex space-x-2">
                <span class="w-3 h-3 rounded-full bg-[#6CFFE5]"></span>
                <span class="w-3 h-3 rounded-full bg-[#FF9E44]"></span>
                <span class="w-3 h-3 rounded-full bg-[#FF7171]"></span>
              </div>
              <CliTitle />
            </div>
            <Code />
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 ml-auto mt-12 lg:mt-0">
        <h1 class="text-5xl font-bold">Deployment</h1>
        <p class="text-gray-100 mt-6 mb-12">
          We will help a client's problems to develop the products they have with high quality
        </p>
        {list.map((item) => (
          <Card item={item} active={active} setActive={setActive} />
        ))}
      </div>
    </div>
  )
}

const CodeBlock = () => (
  <pre class="lg:leading-8 overflow-hidden">
    <code class="block text-[#FFDA19]">{`<script>`}</code>
    <code class="block text-[#FF9F2F]">{`var x =`}</code>
    <code class="block">{`document.getElementById("demo");`}</code>
    <code class="block">{`function getLocation() {`}</code>
    <code class="text-[#48FFB2]">{`if `}</code>
    <code>{`(navigator.geolocation) {`}</code>
    <code class="block">{`navigator.geolocation.watch`}</code>
    <code class="block">{`Position(showPosition);`}</code>
    <code>{`}`}</code>
    <code class="text-[#48FFB2]">{` else `}</code>
    <code>{`{`}</code>
    <code class="block text-[#FF9F2F]">{`x.innerHTML =`}</code>
    <code class="block">{`"Geolocation is not`}</code>
    <code class="block">{`supported by this browser.";`}</code>
    <code class="block text-[#FFDA19]">{`</script>`}</code>
  </pre>
)

const CodeBlock2 = () => (
  <pre class="lg:leading-8 overflow-hidden">
    <code class="block text-[#FFDA19]">{`<script>`}</code>
    <code class="block text-[#FF9F2F]">{`var y =`}</code>
    <code class="block">{`document.getElementById("another");`}</code>
    <code class="block">{`function getParams() {`}</code>
    <code class="text-[#48FFB2]">{`if `}</code>
    <code>{`(navigator.params) {`}</code>
    <code class="block">{`navigator.params.watch`}</code>
    <code class="block">{`Position(showPosition);`}</code>
    <code>{`}`}</code>
    <code class="text-[#48FFB2]">{` else `}</code>
    <code>{`{`}</code>
    <code class="block text-[#FF9F2F]">{`x.innerHTML =`}</code>
    <code class="block">{`"Geolocation is not`}</code>
    <code class="block">{`supported by this browser.";`}</code>
    <code class="block text-[#FFDA19]">{`</script>`}</code>
  </pre>
)

const CliTitle = () => (
  <svg class="mx-auto" width="83" height="18" viewBox="0 0 83 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38.4245 2.57593C39.8645 2.57593 41.0539 2.95459 41.9925 3.71193C42.9419 4.46926 43.5552 5.49326 43.8325 6.78393H40.9365C40.7232 6.26126 40.3925 5.8506 39.9445 5.55193C39.5072 5.25326 38.9845 5.10393 38.3765 5.10393C37.5765 5.10393 36.9312 5.39726 36.4405 5.98393C35.9499 6.57059 35.7045 7.3546 35.7045 8.33593C35.7045 9.31726 35.9499 10.1013 36.4405 10.6879C36.9312 11.2639 37.5765 11.5519 38.3765 11.5519C38.9845 11.5519 39.5072 11.4026 39.9445 11.1039C40.3925 10.8053 40.7232 10.3999 40.9365 9.88793H43.8325C43.5552 11.1679 42.9419 12.1919 41.9925 12.9599C41.0539 13.7173 39.8645 14.0959 38.4245 14.0959C37.3259 14.0959 36.3605 13.8559 35.5285 13.3759C34.6965 12.8853 34.0512 12.2026 33.5925 11.3279C33.1445 10.4533 32.9205 9.45593 32.9205 8.33593C32.9205 7.21593 33.1445 6.21859 33.5925 5.34393C34.0512 4.46926 34.6965 3.79193 35.5285 3.31193C36.3605 2.82126 37.3259 2.57593 38.4245 2.57593Z"
      fill="white"
    />
    <path d="M48.1019 11.9039H51.7499V13.9999H45.3659V2.68793H48.1019V11.9039Z" fill="white" />
    <path d="M55.7425 2.68793V13.9999H53.0065V2.68793H55.7425Z" fill="white" />
    <path
      d="M9.50426 14.44C9.80832 14.7456 9.97903 15.1591 9.97903 15.5902C9.97903 16.0212 9.80832 16.4348 9.50426 16.7403C9.19509 17.0375 8.78292 17.2035 8.35409 17.2035C7.92526 17.2035 7.51307 17.0375 7.2039 16.7403L0.0116665 9.43163C-0.00388884 9.38435 -0.00388884 9.33332 0.0116665 9.28603C0.000262948 9.21857 0.000262948 9.14969 0.0116665 9.08223C-9.97046e-05 9.02459 -9.97046e-05 8.96512 0.0116665 8.90748V8.73278C0.0116665 8.73278 0.0116665 8.73278 0.0116665 8.55807V8.38337C-0.00031595 8.31595 -0.00031595 8.24693 0.0116665 8.17952C0.0116665 8.17952 0.0116665 7.97568 0.0116665 7.94657C0.0466831 7.869 0.1088 7.80688 0.18637 7.77186L7.37863 0.463151C7.68779 0.165981 8.09997 0 8.52879 0C8.95762 0 9.36982 0.165981 9.67898 0.463151C9.98304 0.768719 10.1537 1.18227 10.1537 1.61334C10.1537 2.04442 9.98304 2.45792 9.67898 2.76349L3.62235 8.87838L9.50426 14.44Z"
      fill="#272C64"
    />
    <path
      d="M14.235 15.8024L20.5246 0.864588C20.5953 0.694425 20.6989 0.539884 20.8293 0.409746C20.9598 0.279607 21.1147 0.176449 21.285 0.106147C21.4553 0.035846 21.6379 -0.000237274 21.8221 1.17411e-06C22.0064 0.000239622 22.1888 0.0367828 22.359 0.107525C22.5292 0.178267 22.6838 0.281803 22.8139 0.412278C22.944 0.542754 23.0472 0.697619 23.1175 0.867965C23.1878 1.03831 23.2238 1.22081 23.2236 1.40509C23.2234 1.58938 23.1869 1.77179 23.1161 1.94196L16.8265 16.9089C16.7136 17.1616 16.5295 17.3759 16.2969 17.5258C16.0642 17.6758 15.793 17.7548 15.5162 17.7533C15.3537 17.794 15.1837 17.794 15.0212 17.7533C14.8301 17.6918 14.6549 17.589 14.508 17.4523C14.361 17.3156 14.246 17.1482 14.171 16.962C14.0959 16.7758 14.0628 16.5755 14.0739 16.3751C14.0849 16.1747 14.1399 15.9791 14.235 15.8024Z"
      fill="#272C64"
    />
    <path
      d="M82.1421 9.83924C82.0996 9.91131 82.0394 9.97142 81.9673 10.0139L74.7751 17.3227C74.4565 17.6145 74.0424 17.7801 73.6104 17.7886C73.1862 17.7841 72.7798 17.6174 72.4747 17.3227C72.1707 17.0171 72 16.6036 72 16.1725C72 15.7414 72.1707 15.3279 72.4747 15.0223L78.5314 8.87833L72.4747 2.76349C72.1707 2.45792 72 2.04437 72 1.6133C72 1.18222 72.1707 0.768674 72.4747 0.463106C72.7839 0.165936 73.1961 0 73.6249 0C74.0538 0 74.466 0.165936 74.7751 0.463106L81.9673 7.77186C82.0449 7.80688 82.1071 7.86899 82.1421 7.94656C82.2009 8.01729 82.2498 8.09565 82.2876 8.17952C82.2756 8.2567 82.2756 8.33529 82.2876 8.41247V8.93658C82.28 9.01404 82.28 9.09207 82.2876 9.16953L82.1421 9.83924Z"
      fill="#272C64"
    />
  </svg>
)
export default Deployment
