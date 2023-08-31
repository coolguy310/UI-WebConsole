import { useMemo } from "preact/hooks"

import { cn } from "../../../lib/utils.ts"
import { colors } from "../../../twind.config.ts"
import { Loader } from "../loader/index.tsx"

// type Variants = keyof typeof colors

interface Props extends preact.JSX.HTMLAttributes<HTMLButtonElement> {
  href?: string
  title?: string
  children?: preact.ComponentChildren
  className?: string
  variant?: "primary" | "secondary" | "danger" | "disabled"
  style?: Record<string, any>
  isLoading?: boolean
}

export const Button = ({
  href,
  title,
  className,
  children,
  style,
  variant = "primary",
  isLoading,
  ...rest
}: Props & preact.JSX.HTMLAttributes<HTMLAnchorElement>) => {
  const props = useMemo(() => {
    const styles = {
      primary: "bg-primary hover:bg-primary hover:bg-opacity-80 disabled:bg-opacity-50",
      secondary: "bg-secondary hover:bg-secondary hover:bg-opacity-80 disabled:bg-opacity-50",
      danger: "bg-danger hover:bg-danger hover:bg-opacity-80 disabled:bg-opacity-50",
      disabled: "bg-placeholder hover:bg-placeholder hover:bg-opacity-50 cursor-not-allowed",
    }
    return {
      class: cn(
        "hover:bg-secondary text-white py-2 px-6 relative rounded-lg cursor-pointer flex items-center justify-center space-x-2",
        className,
        styles[variant]
      ),
      style,
      ...rest,
    }
  }, [style, className, rest])

  if (href) {
    return (
      <a href={href} {...props}>
        <span>{children || title}</span>
      </a>
    )
  }

  return (
    <button {...props}>
      {isLoading && <Loader color="#fff" size={16} className="absolute top-3 -ml-4" />}
      <span>{children || title}</span>
    </button>
  )
}
