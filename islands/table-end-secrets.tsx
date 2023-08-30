import IconPencil from "icons/pencil.tsx"
import IconTrash from "icons/trash.tsx"

import { Button } from "../components/ui/button/index.tsx"
import { Table } from "../components/ui/table/index.tsx"
import { Wrapper, WrapperProps } from "../components/ui/wrapper/index.tsx"

type EndSecretTableProps = WrapperProps
const EndSecretTable = (props: EndSecretTableProps) => {
  const columns = [
    {
      Header: "Name",
      width: "30%",
      accessor: "name",
    },
    {
      Header: "Secret",
      accessor: "secret",
      cell: () => (
        <div className="flex space-x-1">
          {[...Array(12)].map(() => (
            <span className="text-light text-2xl">*</span>
          ))}
        </div>
      ),
    },
    {
      Header: "",
      accessor: "actions",
      cell: () => (
        <div className="flex space-x-3 items-center justify-end">
          <Button className="font-semibold flex space-x-2 items-center text-sm">
            <IconPencil size={16} />
            <span>Edit</span>
          </Button>
          <Button variant="danger" className="font-semibold flex space-x-2 items-center text-sm">
            <IconTrash size={16} />
            <span>Delete</span>
          </Button>
        </div>
      ),
    },
  ]
  const data = [
    {
      name: "DB-USER",
      secret: "************",
    },
  ]
  return (
    <Wrapper containerClassName="!p-8" {...props}>
      <Table columns={columns} data={data} />
    </Wrapper>
  )
}

export default EndSecretTable
