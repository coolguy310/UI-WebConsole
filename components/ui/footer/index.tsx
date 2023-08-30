import Copyright from "../../../islands/copyright.tsx"
import { cn } from "../../../lib/utils.ts"

const menu = [
  {
    title: "Sitemap",
    url: "#!",
  },
  {
    title: "Dev",
    url: "#!",
  },
  {
    title: "Help",
    url: "#!",
  },
  {
    title: "Docs",
    url: "#!",
  },
]

interface FooterProps {
  layout?: "vertical" | "horizontal"
}
export const Footer = ({ layout = "horizontal" }: FooterProps) => {
  return (
    <div
      className={cn(
        "text-sm flex w-full",
        layout === "vertical" ? "flex-col space-y-5" : "justify-between items-center"
      )}>
      <div
        className={cn(
          "text-stroke",
          layout === "horizontal" ? "divide-x divide-stroke flex items-center space-x-3" : "grid grid-cols-2 gap-3"
        )}>
        {menu?.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className={cn(
              "hover:text-secondary hover:font-semibold",
              layout === "horizontal" && "pl-3 first-child:pl-0"
            )}>
            {item.title}
          </a>
        ))}
      </div>
      <Copyright textColorVariant={layout === "horizontal" ? "text-stroke" : "text-placeholder"} />
    </div>
  )
}
