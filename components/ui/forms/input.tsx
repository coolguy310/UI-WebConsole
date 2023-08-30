import { useMemo } from "preact/hooks"

import * as Icon from "../../../components/icons/index.ts"
import InputCheckbox from "../../../islands/input-checkbox.tsx"
import { getNodeLabel, NodeInputProps } from "../../../lib/ory-helpers.ts"
import { cn } from "../../../lib/utils.ts"
import { Button } from "../button/index.tsx"

interface InputProps extends NodeInputProps {
  icon?:
    | "UserIcon"
    | "HomeIcon"
    | "KeyIcon"
    | "GlobeIcon"
    | "EmailIcon"
    | "BuildingIcon"
    | "FileIcon"
    | "SearchIcon"
    | "identifier"
    | "password"
  appendText?: string
  hint?: string
  hintClassName?: string
  theme?: "dark" | "light"
  placeholder?: string
  className?: string
}

const Icons = {
  ...Icon,
  identifier: Icon.UserIcon,
  password: Icon.KeyIcon,
}
export const Input = (props: InputProps) => {
  const {
    placeholder,
    className,
    icon,
    appendText,
    hint,
    hintClassName,
    theme = "dark",
    attributes,
    disabled,
    value,
    node,
    ...rest
  } = props

  const InputIcon = icon ? Icons[icon] : null

  const style = useMemo(() => {
    let styles = {
      textColor: "text-stroke",
      hintColor: "text-stroke",
      background: "bg-dark focus:shadow-input",
    }
    if (theme === "light") {
      styles = {
        textColor: "text-light",
        hintColor: "text-white",
        background: "bg-secondary-light",
      }
    }
    return styles
  }, [theme])

  switch (attributes?.type) {
    // case "hidden":
    //   // Render a hidden input field
    //   return <NodeInputHidden {...props} />
    case "checkbox":
      // Render a checkbox. We have one hidden element which is the real value (true/false), and one
      // display element which is the toggle value (true)!
      return <InputCheckbox {...props} />

    case "button":
      // Render a button
      return (
        <Button
          type="button"
          title={getNodeLabel(node)}
          name={attributes.name}
          value={attributes.value || ""}
          disabled={attributes.disabled || disabled}
        />
      )
    case "submit":
      // Render the submit button
      return (
        <Button
          type="submit"
          title={getNodeLabel(node)}
          name={attributes.name}
          value={attributes.value || ""}
          disabled={attributes.disabled || disabled}
        />
      )
  }

  return (
    <div className={cn("flex-col space-y-2", attributes?.type === "hidden" ? "hidden" : "flex")}>
      {node?.meta?.label?.id && (
        <>
          {node?.meta?.label?.text ? (
            <label className={cn("text-sm", style.textColor)}>{node?.meta?.label?.text}</label>
          ) : (
            <label className="text-sm invisible">Label</label>
          )}
        </>
      )}
      <div className="relative group text-placeholder focus-within:text-secondary transition-all">
        {InputIcon && <InputIcon className="absolute lg:left-7 top-1/2 transform -translate-1/2 text-xl" />}
        <input
          type={attributes?.type}
          name={attributes?.name}
          placeholder={placeholder || node?.meta?.label?.text}
          disabled={attributes?.disabled || disabled}
          className={cn(
            "rounded-xl py-3 pr-5 text-white w-full border-none outline-none placeholder:text-placeholder text-sm",
            InputIcon ? "pl-12" : "pl-5",
            style.background,
            className
          )}
          value={value}
          required={attributes?.required}
          {...rest}
        />
        {appendText && (
          <span className={cn("absolute lg:right-7 top-1/2 transform -translate-y-1/2 text-sm", style.textColor)}>
            {appendText}
          </span>
        )}
      </div>
      {hint && <span className={cn("text-sm", hintClassName, style.hintColor)}>{hint}</span>}
    </div>
  )
}
