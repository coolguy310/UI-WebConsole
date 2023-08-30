import { PageProps } from "$fresh/src/server/types.ts"

import { ConsoleLayout } from "../../components/layouts/console.tsx"
import { OverviewStats } from "../../islands/overview-stats.tsx"
import FunctionsTable from "../../islands/table-functions.tsx"

export default function Console(props: PageProps) {
  return (
    <ConsoleLayout location={props.url} className="flex flex-col space-y-8">
      <div>
        <h1 className="text-xl font-semibold mb-5">Overview</h1>
        <OverviewStats />
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-5">Functions</h1>
        <FunctionsTable />
      </div>
    </ConsoleLayout>
  )
}
