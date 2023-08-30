import Blocks from '../../../islands/blocks.tsx'
import Dropdown from '../../../islands/dropdown.tsx'
import Notification from '../../../islands/notification.tsx'
import { Input } from '../forms/input.tsx'

export const Navbar = () => {
  return (
    <header className="ml-64 justify-between bg-slate w-[calc(100%-16rem)] px-8 py-3 text-white border-r border-dark flex items-center justify-between">
      <div className="w-64">
        <Input type="search" label={null} icon="SearchIcon" placeholder="search" />
      </div>
      <div className="flex items-center space-x-8">
        <Blocks />
        <Notification />
        <Dropdown
          width="10rem"
          items={[
            { label: "Profile", onClick: () => console.log("Profile") },
            { label: "Logout", onClick: () => console.log("Logout") },
          ]}>
          <div className="flex items-center space-x-2">
            <img src="/vectors/avatar.svg" alt="" width={42} height={42} className="rounded-full" />
            <span>Andrew</span>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}
