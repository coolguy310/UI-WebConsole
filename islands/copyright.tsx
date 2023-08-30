import { cn } from "../lib/utils.ts"

interface CopyrightProps {
  textColorVariant?: "text-stroke" | "text-placeholder"
}
const Copyright = ({ textColorVariant = "text-stroke" }: CopyrightProps) => {
  return (
    <div className={cn("text-center text-sm", textColorVariant)}>
      <span>© Qernal {new Date().getFullYear()}</span>
    </div>
  )
}

export default Copyright
