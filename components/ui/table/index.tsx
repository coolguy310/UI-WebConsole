import { Button } from "../button/index.tsx"

type Data = {
  [key: string]: any
}
type Column = {
  Header?: string
  accessor?: string
  width?: string
  cell?: (row: Data) => preact.JSX.Element
}
interface TableProps {
  columns: Column[]
  data: Data[]
  more?: boolean
}
export const Table = ({ columns, data, more }: TableProps) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="border border-[#3E3E3F] rounded-xl">
        <table className="w-full table-auto">
          <thead>
            <tr>
              {columns?.map((column, i) => (
                <th
                  key={i}
                  className="text-left text-sm font-medium text-stroke bg-[#404042] py-3 px-8 first:rounded-tl-xl last:rounded-tr-xl"
                  style={{
                    width: column.width,
                  }}>
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate">
            {data?.map((row, i) => (
              <tr key={i}>
                {columns?.map((column, j) => (
                  <td key={j} className="py-4 px-8 text-sm">
                    {column.cell ? column.cell(row) : column.accessor && row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {more && (
        <div className="text-center">
          <Button title="View All" href="#!" className="!px-14 !py-3 text-sm font-inter font-bold" />
        </div>
      )}
    </div>
  )
}
