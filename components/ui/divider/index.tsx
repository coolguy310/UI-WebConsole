interface DividerProps {
  type?: "horizontal" | "vertical"
  text?: string
}
export const Divider = (props: DividerProps) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <div className="h-px w-4 bg-stroke" />
      {props?.text && <span className="text-stroke text-sm">{props.text}</span>}
      <div className="h-px w-4 bg-stroke" />
    </div>
  )
}
