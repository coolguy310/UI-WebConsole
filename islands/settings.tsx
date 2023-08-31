import { PageProps } from "$fresh/src/server/types.ts"
import { useMemo, useState } from "preact/hooks"

import SettingsAccount from "../components/misc/settings-account.tsx"
import { SettingsTab } from "./settings-tab.tsx"

const SettingsPage = () => {
  const [active, setActive] = useState<"ACCOUNT" | "ORG" | "PROJECTS">("ACCOUNT")

  const PAGE = useMemo(
    () => ({
      ACCOUNT: <SettingsAccount />,
      ORG: <div>ORG</div>,
      PROJECTS: <div>PROJECTS</div>,
    }),
    [active]
  )

  return (
    <div className="flex space-x-5">
      <div className="w-64">
        <SettingsTab active={active} onClick={(path) => setActive(path)} />
      </div>
      <div className="flex-1">{PAGE[active]}</div>
    </div>
  )
}

export default SettingsPage
