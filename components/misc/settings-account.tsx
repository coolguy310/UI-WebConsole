import IconPencil from "icons/pencil.tsx"

import { Button } from "../ui/button/index.tsx"

const SettingsAccount = () => {
  return (
    <div className="flex flex-col space-y-5 bg-slate p-8 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3 lg:w-1/2">
          <label className="font-medium text-stroke text-sm">Email Address</label>
          <span className="text-lg font-semibold">john.doe@gmail.com</span>
        </div>
        <Button className="font-semibold text-sm flex items-center space-x-2 !py-3">
          <IconPencil size={16} />
          <span>Edit</span>
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3 lg:w-1/2">
          <label className="font-medium text-stroke text-sm">Password</label>
          <span className="text-lg font-semibold">{[...Array(12)].map(() => "*")}</span>
        </div>
        <Button variant="disabled" className="font-semibold text-sm flex items-center space-x-2 !py-3">
          <IconPencil size={16} />
          <span>Edit</span>
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3 lg:w-1/2">
          <label className="font-medium text-stroke text-sm">Address</label>
          <span className="text-lg font-semibold">Cecilia Chapman, 711-2880 Nulla St. Mankato Mississippi 96522</span>
        </div>
        <Button className="font-semibold text-sm flex items-center space-x-2 !py-3">
          <IconPencil size={16} />
          <span>Edit</span>
        </Button>
      </div>
    </div>
  )
}

export default SettingsAccount
