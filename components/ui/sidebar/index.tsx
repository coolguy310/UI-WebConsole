import { NavigationItems } from "../../../islands/navigation-items.tsx"
import OrganizationsList from "../../../islands/org-list.tsx"
import { Footer } from "../footer/index.tsx"

interface SidebarProps {
  location?: URL
}
export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 flex flex-col justify-between bg-slate w-64 min-h-screen p-5 text-white border-r border-dark">
      <div className="flex flex-col space-y-5 divide-y divide-[#3E3E3F]">
        <div className="flex justify-center items-center">
          {/* Logo */}
          <a href="/">
            <img src="/logo-alt.svg" alt="" width={100} />
          </a>
        </div>
        <div className="pt-5">
          <OrganizationsList />
        </div>
        <div className="pt-5">
          <NavigationItems path={props.location?.pathname} />
        </div>
      </div>
      <div className="border-t border-[#3E3E3F] pt-5">
        <Footer layout="vertical" />
      </div>
    </aside>
  )
}
