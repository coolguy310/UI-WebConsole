import { useCallback } from "preact/hooks"

import * as Icon from "../components/icons/index.ts"
import { cn } from "../lib/utils.ts"

// we might want to get items from static data
const menuItems = [
  {
    name: "Dashboard",
    key: "/",
    path: "/console",
    icon: Icon.HomeIcon,
  },
  {
    name: "Compute",
    key: "/compute",
    path: "/console/compute",
    icon: Icon.ComputerIcon,
  },
  {
    name: "Database",
    key: "/database",
    path: "/console/database",
    icon: Icon.DatabaseIcon,
  },
  {
    name: "Marketplace",
    key: "/marketplace",
    path: "/console/marketplace",
    icon: Icon.MarketplaceIcon,
  },
  {
    name: "Settings",
    key: "/settings",
    path: "/console/settings",
    icon: Icon.SettingsIcon,
  },
]
interface NavigationItemsProps {
  path?: string
}
export const NavigationItems = (props: NavigationItemsProps) => {
  const pathname = props.path

  const isActiveMenu = useCallback(
    (path: string) => {
      // if path is /console, then only return true if pathname is /console
      if (path === "/console") {
        return pathname === "/console"
      }
      return pathname?.startsWith(path)
    },
    [pathname]
  )
  return (
    <nav>
      <ul className="flex flex-col space-y-5">
        {menuItems.map((item) => (
          <li key={item.key} className="relative">
            {isActiveMenu(item.path) && <div className="absolute -left-5 w-0.5 h-full bg-primary rounded-full" />}
            <a href={item.path} className="flex items-center space-x-3">
              <item.icon className={cn("w-5 h-5", isActiveMenu(item.path) ? "text-primary" : "text-stroke")} />
              <span className={cn(isActiveMenu(item.path) ? "font-semibold" : "text-stroke")}>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
