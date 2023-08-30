import { useMemo } from "preact/hooks"

import { cn } from "../../../lib/utils.ts"
import { colors } from "../../../twind.config.ts"

// type Variants = keyof typeof colors

interface Props extends preact.JSX.HTMLAttributes<HTMLButtonElement> {
  href?: string
  title?: string
  children?: preact.ComponentChildren
  className?: string
  variant?: "primary" | "secondary" | "danger" | "disabled"
  style?: Record<string, any>
}

export const Button = ({
  href,
  title,
  className,
  children,
  style,
  variant = "primary",
  ...rest
}: Props & preact.JSX.HTMLAttributes<HTMLAnchorElement>) => {
  const props = useMemo(() => {
    const styles = {
      primary: "bg-primary hover:bg-primary hover:bg-opacity-80",
      secondary: "bg-secondary hover:bg-secondary hover:bg-opacity-80",
      danger: "bg-danger hover:bg-danger hover:bg-opacity-80",
      disabled: "bg-placeholder hover:bg-placeholder hover:bg-opacity-80 cursor-not-allowed",
    }
    return {
      class: cn("hover:bg-secondary text-white py-2 px-6 rounded-lg cursor-pointer", className, styles[variant]),
      style,
      ...rest,
    }
  }, [style, className, rest])

  if (href) {
    return (
      <a href={href} {...props}>
        {children || title}
      </a>
    )
  }

  return <button {...props}>{children || title}</button>
}
