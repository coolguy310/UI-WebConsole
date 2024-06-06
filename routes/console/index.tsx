import { PageProps } from "$fresh/src/server/types.ts";

import { ConsoleLayout } from "../../components/layouts/console.tsx";
import { OverviewStats } from "../../components/misc/overview-stats.tsx";
import FunctionsTable from "../../components/misc/table-functions.tsx";

export default function Console(props: PageProps) {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold mb-5">Overview</h1>
        <OverviewStats />
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-5">Functions</h1>
        <FunctionsTable />
      </div>
    </div>
  );
}
