import { useMemo, useState } from "preact/hooks"
import { Fragment } from "preact/jsx-runtime"

import { cn } from "../lib/utils.ts"

type Option = {
  label?: string
  value: string
}
export interface CheckboxProps {
  label?: string
  items?: (Option | null)[]
  name?: string
}
const Checkboxes = ({ label, items, name }: CheckboxProps) => {
  const [checked, setChecked] = useState<string[]>([])

  const options = useMemo(() => {
    // divide array by null items
    const result: Option[][] = []
    let temp: Option[] = []
    items?.forEach((item) => {
      if (item === null) {
        result.push(temp)
        temp = []
      } else {
        temp.push(item)
      }
    })
    result.push(temp)
    return result
  }, [items])
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && <label className="text-sm text-stroke">{label}</label>}
      <div className="flex flex-col space-y-4">
        {options?.map((option, i) => (
          <div className="flex space-x-3" key={i}>
            {option?.map((item, index) => {
              return (
                <div key={index} className="flex">
                  <input
                    id={name + item?.value}
                    type="checkbox"
                    name={name + item?.value}
                    className="peer hidden"
                    onChange={(evt) => {
                      if (evt.currentTarget?.checked) {
                        setChecked([...checked, item.value])
                      } else {
                        setChecked(checked.filter((v) => v !== item.value))
                      }
                    }}
                    checked={checked.includes(item.value)}
                  />
                  <label
                    htmlFor={name + item.value}
                    className={cn(
                      "bg-dark py-3 px-5 rounded-xl text-center text-sm text-stroke w-full cursor-pointer border font-semibold",
                      checked.includes(item.value) ? "border-secondary text-secondary" : "border-dark"
                    )}>
                    {item.label || item.value}
                  </label>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checkboxes
