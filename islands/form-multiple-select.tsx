import { useState } from 'preact/hooks'

import * as Icon from '../components/icons/index.ts'
import { cn } from '../lib/utils.ts'

interface MultipleSelectProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: "UserIcon" | "HomeIcon" | "KeyIcon" | "GlobeIcon" | "EmailIcon" | "SearchIcon"
  options?: {
    label?: string
    value: string
  }[]
}

export const MultipleSelect = ({
  label,
  name,
  placeholder,
  className,
  icon,
  options,
  ...props
}: MultipleSelectProps) => {
  const InputIcon = icon ? Icon[icon] : null
  const [value, setValue] = useState<string>("")

  const [selected, setSelected] = useState<string[]>(["London", "Paris"])

  const handleAddSelected = (value: string) => {
    if (value === "") return
    setSelected([...selected, value])
  }
  return (
    <div className="flex flex-col space-y-3">
      {label && <label className="text-sm text-stroke">{label}</label>}
      <div className="relative group text-placeholder focus-within:text-secondary transition-all">
        {InputIcon && <InputIcon className="absolute lg:left-7 top-1/2 transform -translate-1/2 text-xl" />}
        <input
          name={name}
          placeholder={placeholder}
          className={cn(
            "bg-dark rounded-xl py-3 pr-5 text-white w-full border-none outline-none focus:shadow-input placeholder:text-placeholder text-sm appearance-none",
            InputIcon ? "pl-12" : "pl-5",
            className
          )}
          value={value}
          onChange={(evt) => setValue(evt.currentTarget.value)}
          onKeyUp={(evt) => {
            if (evt.key === "Enter") {
              handleAddSelected(value)
              setValue("")
            }
          }}
          {...props}
        />
      </div>
      {selected?.length > 0 && (
        <div className="flex space-x-3">
          {selected?.map((value) => (
            <div className="flex items-center space-x-2 text-secondary border border-secondary rounded-lg px-4 py-2">
              <span className="text-sm font-medium">{value}</span>
              <button onClick={() => setSelected(selected.filter((item) => item !== value))}>
                <Icon.CloseIcon />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
