import { JSX } from "preact"

export interface IconProps extends JSX.HTMLAttributes<SVGSVGElement> {
  size?: number
}

export { TickIcon } from "./check.tsx"
export { EnvelopeIcon } from "./envelope.tsx"
export { MobilePhoneIcon } from "./mobile.tsx"
export * as Misc from "./misc.tsx"
export { SittingWomanIlustration } from "./sitting-woman.tsx"
export { UserIcon, UserIcon as User } from "./user.tsx"
export { GlobeIcon } from "./globe.tsx"
export { KeyIcon } from "./key.tsx"
export { HomeIcon } from "./home.tsx"
export { EmailIcon } from "./email.tsx"
export { BuildingIcon } from "./building.tsx"
export { FileIcon } from "./file.tsx"
export { ChevronRightFillIcon } from "./chevron-right-fill.tsx"
export { ComputerIcon } from "./computer.tsx"
export { DatabaseIcon } from "./database.tsx"
export { MarketplaceIcon } from "./marketplace.tsx"
export { SettingsIcon } from "./settings.tsx"
export { SearchIcon } from "./search.tsx"
export { ScreenIcon } from "./screen.tsx"
export { CloseIcon } from "./close.tsx"
export { RocketIcon } from "./rocket.tsx"
export * from "./socials.tsx"
