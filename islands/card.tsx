import { cn } from "../lib/utils.ts"

interface CardProps {
  item: Record<string, any>
  active?: number
  setActive?: (id: number) => void
}

const Card = ({ item, active, setActive }: CardProps) => {
  return (
    <div
      onClick={() => setActive?.(item.id)}
      className={cn(
        "group cursor-pointer my-2 flex items-center p-8 rounded-2xl hover:bg-secondary-black border-b-[3px] hover:border-primary ml-16 transition-all",
        active === item.id ? "bg-secondary-black border-primary" : "border-transparent"
      )}>
      <span
        class={cn(
          "-ml-16 bg-primary rounded-full bg-opacity-30 group-hover:bg-opacity-100 transition-all group-hover:text-white",
          active === item.id ? "bg-opacity-100 text-white" : "text-secondary"
        )}>
        <item.icon forkColor="currentColor" />
      </span>
      <div class="ml-6">
        <h5
          class={cn("text-gray-200 group-hover:text-white text-2xl font-semibold", active === item.id && "text-white")}>
          {item.title}
        </h5>
        <p class="text-gray-100 mt-1">{item.description}</p>
      </div>
    </div>
  )
}

export default Card
