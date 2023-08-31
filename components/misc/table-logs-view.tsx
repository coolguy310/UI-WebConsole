import IconPencil from "icons/pencil.tsx"
import IconTrash from "icons/trash.tsx"

import { Button } from "../ui/button/index.tsx"
import { Table } from "../ui/table/index.tsx"
import { Wrapper, WrapperProps } from "../ui/wrapper/index.tsx"

type LogsViewTableProps = WrapperProps
const LogsViewTable = (props: LogsViewTableProps) => {
  const columns = [
    {
      Header: "Date",
      width: "30%",
      accessor: "date",
    },
    {
      Header: "Logs",
      accessor: "logs",
    },
  ]
  const data = [
    {
      date: "20th May 2022",
      logs: "Proactively communicate transparent technologies vis-a-vis long-term impact.",
    },
    {
      date: "17th May 2022",
      logs: "Proactively communicate transparent technologies vis.",
    },
    {
      date: "12th May 2022",
      logs: "Proactively communicate transparent technologies vis-a-vis.",
    },
    {
      date: "28th April 2022",
      logs: "Proactively communicate transparent technologies vis-a-vis long.",
    },
    {
      date: "15th April 2022",
      logs: "Proactively communicate transparent technologies vis-a-vis long-term impact.",
    },
  ]
  return (
    <Wrapper containerClassName="!p-8" {...props}>
      <Table columns={columns} data={data} />
    </Wrapper>
  )
}

export default LogsViewTable
