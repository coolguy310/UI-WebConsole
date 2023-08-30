import { useCallback } from "preact/hooks"

import { BuildingIcon, FileIcon, UserIcon } from "../components/icons/index.ts"
import { cn } from "../lib/utils.ts"

const tabs = [
  {
    name: "Account",
    key: "ACCOUNT",
    path: "/console/settings",
    icon: UserIcon,
  },
  {
    name: "Organization",
    key: "ORG",
    path: "/console/settings/organization",
    icon: BuildingIcon,
  },
  {
    name: "Projects",
    key: "PROJECTS",
    path: "/console/settings/projects",
    icon: FileIcon,
  },
] as const
type PageOptions = "ACCOUNT" | "ORG" | "PROJECTS"
interface SettingsTabProps {
  active?: PageOptions
  onClick?: (key: PageOptions) => void
}
export const SettingsTab = ({ active, onClick }: SettingsTabProps) => {
  const isActiveMenu = useCallback(
    (path: PageOptions) => {
      return active === path
    },
    [active]
  )

  return (
    <div className="bg-slate text-white px-5 py-8 rounded-xl">
      <ul className="flex flex-col space-y-8">
        {tabs.map((item) => (
          <li key={item.key} className="relative">
            {isActiveMenu(item.key) && <div className="absolute -left-5 w-0.5 h-full bg-primary rounded-full" />}
            <button className="flex items-center space-x-3 focus:outline-none" onClick={() => onClick?.(item.key)}>
              <item.icon className={cn("w-5 h-5", isActiveMenu(item.key) ? "text-primary" : "text-stroke")} />
              <span className={cn(isActiveMenu(item.key) ? "font-semibold" : "text-stroke")}>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
