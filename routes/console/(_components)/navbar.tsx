import { Input } from "@/components/ui/forms/input.tsx";
import Blocks from "@/components/misc/blocks.tsx";
import ProfileDropdown from "@/islands/console/profile-dropdown.tsx";
import Notification from "@/components/misc/notification.tsx";
export const Navbar = () => {
  return (
    <header className="ml-64 justify-between bg-slate w-[calc(100%-16rem)] px-8 py-3 text-white border-r border-dark flex items-center justify-between">
      <div className="w-64">
        <Input
          type="search"
          label={null}
          icon="SearchIcon"
          placeholder="search"
        />
      </div>
      <div className="flex items-center space-x-8">
        <Blocks />
        <Notification />
        <ProfileDropdown />
      </div>
    </header>
  );
};
