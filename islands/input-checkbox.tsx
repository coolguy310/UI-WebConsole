import { useRef, useState } from "preact/hooks"

import { NodeInputProps } from "../lib/ory-helpers.ts"
import { cn } from "../lib/utils.ts"

const InputCheckbox = (props: NodeInputProps) => {
  const { attributes, disabled, value, node, ...rest } = props

  const ref = useRef<HTMLDivElement>(null)
  const [checked, setChecked] = useState(false)
  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        class="sr-only peer"
        onChange={(evt) => {
          setChecked(evt.currentTarget.checked)
          if (ref.current) {
            ref.current.style.left = evt.currentTarget.checked ? "calc(100% - 1.35rem)" : "6px"
          }
        }}
        {...rest}
      />
      <div className={cn("relative w-14 h-7 rounded-full", checked ? "bg-secondary bg-opacity-10" : "bg-dark")}>
        <div
          ref={ref}
          className={cn(
            "rounded-full w-4 h-4 absolute top-1/2 transform -translate-y-1/2 transition-all",
            checked ? "bg-secondary" : "bg-stroke"
          )}
          style={{
            left: 6,
          }}
        />
      </div>
      {node?.meta?.label?.id && (
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{node?.meta?.label?.text}</span>
      )}
    </label>
  )
}
export default InputCheckbox
