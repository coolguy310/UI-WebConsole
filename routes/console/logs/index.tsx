import { PageProps } from "$fresh/src/server/types.ts"

import { ConsoleLayout } from "../../../components/layouts/console.tsx"
import LogsViewTable from "../../../components/misc/table-logs-view.tsx"

export default function SecretsPage(props: PageProps) {
  return (
    <ConsoleLayout location={props.url} className="flex flex-col space-y-8">
      <h1 className="text-2xl font-semibold">Logs View</h1>
      <LogsViewTable title="50 out of 20k" />
    </ConsoleLayout>
  )
}
