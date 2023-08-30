import { EnvelopeIcon, MobilePhoneIcon } from "../icons/index.ts"

const Footer = () => {
  const List = [
    {
      title: "Company",
      items: [
        { name: "Contact Us", href: "/contact-us" },
        {
          name: "Community",
          href: "/community",
        },
        {
          name: "Console",
          href: "/console",
        },
        {
          name: "Docs",
          href: "/docs",
        },
      ],
    },
    {
      title: "Information",
      items: [
        {
          name: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          name: "Terms & Condition",
          href: "/terms-condition",
        },
        {
          name: "Report Abuse",
          href: "/report-abuse",
        },
      ],
    },
  ]
  return (
    <footer class="py-10 px-6 lg:px-28 font-medium">
      <div class="container mx-auto bg-primary bg-opacity-10 rounded-4xl px-8 py-16 lg:py-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 mb-12 lg:mb-0">
            <a href="/">
              <img src="./Logo.svg" alt="qernal logo" />
            </a>
            <p class="text-gray-100 mt-9 lg:mr-24">
              This is a big one and i consider it one of the most important things for a designer.
            </p>
          </div>
          <span class="hidden lg:block"></span>
          {List.map((item) => (
            <div className="col-span-1">
              <h3 className="text-lg text-primary font-semibold">{item.title}</h3>
              <ul className="mt-5 space-y-2">
                {item.items.map((item) => (
                  <li>
                    <a href={item.href} className="text-gray-100 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <span class="bg-[#273752] bg-opacity-40 h-[2px] w-full block my-12"></span>
        <div class="grid lg:grid-cols-5 items-center justify-between">
          <p class="lg:col-span-2 text-gray-100 mb-4 lg:mb-0">Copyright © 2022 Qernal. Made with ♥ in the UK</p>
          <span class="hidden lg:block"></span>
          <a class="my-2 lg:my-0 flex items-center text-gray-100 hover:text-white" href="tel:+1-202-555-0109">
            <MobilePhoneIcon class="flex-shrink-0 mr-2 text-accent" />
            +1-202-555-0109
          </a>
          <a class="my-2 lg:my-0 flex items-center text-gray-100 hover:text-white" href="mailto:hello@qernal.com">
            <EnvelopeIcon class="flex-shrink-0 mr-2 text-accent" />
            hello@qernal.com
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
