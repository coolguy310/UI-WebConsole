import { PageProps } from "$fresh/src/server/types.ts"
import IconTrash from "icons/trash.tsx"

import { ConsoleLayout } from "../../../components/layouts/console.tsx"
import { Button } from "../../../components/ui/button/index.tsx"
import SettingsPage from "../../../islands/settings.tsx"

export default function SettingsMasterPage(props: PageProps) {
  return (
    <ConsoleLayout location={props.url} className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <Button variant="danger" className="text-sm flex items-center space-x-1 !py-3 font-semibold">
          <IconTrash size={16} />
          <span>Delete Account</span>
        </Button>
      </div>
      <SettingsPage />
    </ConsoleLayout>
  )
}
