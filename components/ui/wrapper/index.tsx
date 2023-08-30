import { cn } from "../../../lib/utils.ts"

export interface WrapperProps {
  title?: string
  background?: string
  className?: string
  containerClassName?: string
  children?: preact.ComponentChildren
  actionEl?: preact.ComponentChildren
}
export const Wrapper = ({ title, children, containerClassName, className, actionEl, background }: WrapperProps) => {
  return (
    <div
      className={cn("rounded-lg p-6", containerClassName, !background && "bg-slate")}
      style={{
        background,
      }}>
      <div className="flex items-center justify-between">
        {title && <h2 className="text-lg font-semibold mb-5">{title}</h2>}
        {actionEl && actionEl}
      </div>
      <div className={cn(className)}>{children}</div>
    </div>
  )
}
