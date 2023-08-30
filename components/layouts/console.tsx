import { cn } from "../../lib/utils.ts"
import { Navbar } from "../ui/navbar/index.tsx"
import { Sidebar } from "../ui/sidebar/index.tsx"

interface ConsoleProps {
  children?: preact.ComponentChildren
  location?: URL
  className?: string
}

export const ConsoleLayout = (props: ConsoleProps) => {
  return (
    <div className="bg-dark min-h-screen">
      {/* Sidebar */}
      <Sidebar location={props.location} />
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className={cn("ml-64 p-8 text-white", props.className)}>{props.children}</main>
    </div>
  )
}
