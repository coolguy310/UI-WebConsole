import { PageProps } from "$fresh/src/server/types.ts";
import LogsViewTable from "../../../components/misc/table-logs-view.tsx";

export default function SecretsPage(props: PageProps) {
  return (
    <>
      <h1 className="text-2xl font-semibold">Logs View</h1>
      <LogsViewTable title="50 out of 20k" />
    </>
  );
}
