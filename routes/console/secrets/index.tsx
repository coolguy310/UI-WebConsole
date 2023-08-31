import { PageProps } from "$fresh/src/server/types.ts"

import { ConsoleLayout } from "../../../components/layouts/console.tsx"
import EndSecretTable from "../../../components/misc/table-end-secrets.tsx"
import RegistrySecretTable from "../../../components/misc/table-registry-secrets.tsx"

export default function SecretsPage(props: PageProps) {
  return (
    <ConsoleLayout location={props.url} className="flex flex-col space-y-8">
      <h1 className="text-2xl font-semibold">Secrets</h1>
      <RegistrySecretTable title="Registry Secrets" />
      <EndSecretTable title="End Secrets" />
    </ConsoleLayout>
  )
}
