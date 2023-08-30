import { Table } from "../ui/table/index.tsx"
import { Wrapper, WrapperProps } from "../ui/wrapper/index.tsx"

type FunctionsTableProps = WrapperProps
const FunctionsTable = (props: FunctionsTableProps) => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Region",
      accessor: "region",
    },
    {
      Header: "Deployed",
      accessor: "deployed",
    },
    {
      Header: "SCaling",
      accessor: "scaling",
    },
    {
      Header: "Request/sec",
      accessor: "request_persec",
    },
    {
      Header: "Errors",
      accessor: "errors",
      cell: (row: any) => <span className="text-danger">{row?.errors}</span>,
    },
  ]
  const data = [
    {
      name: "Function Name",
      region: "Europe",
      deployed: "2/2",
      scaling: "2/6",
      request_persec: "0.3",
      errors: "03",
    },
    {
      name: "Function Name",
      region: "Australia",
      deployed: "3/3",
      scaling: "3/10",
      request_persec: "0.3",
      errors: "03",
    },
    {
      name: "Function Name",
      region: "Canada",
      deployed: "2/2",
      scaling: "2/6",
      request_persec: "1.2",
      errors: "03",
    },
    {
      name: "Function Name",
      region: "Europe",
      deployed: "2/2",
      scaling: "2/6",
      request_persec: "0.3",
      errors: "03",
    },
    {
      name: "Function Name",
      region: "Asia",
      deployed: "2/2",
      scaling: "2/6",
      request_persec: "0.3",
      errors: "03",
    },
    {
      name: "Function Name",
      region: "USA",
      deployed: "2/2",
      scaling: "2/6",
      request_persec: "0.3",
      errors: "03",
    },
  ]
  return (
    <Wrapper containerClassName="!p-8" {...props}>
      <Table columns={columns} data={data} more />
    </Wrapper>
  )
}

export default FunctionsTable
