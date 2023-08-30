import * as Icon from '../../../components/icons/index.ts'
import { cn } from '../../../lib/utils.ts'

interface SelectProps extends preact.JSX.HTMLAttributes<HTMLSelectElement> {
  label?: string
  icon?: "UserIcon" | "HomeIcon" | "KeyIcon" | "GlobeIcon" | "EmailIcon"
  options?: {
    label?: string
    value: string
  }[]
}

export const Select = ({ label, name, placeholder, className, icon, options, ...props }: SelectProps) => {
  const InputIcon = icon ? Icon[icon] : null

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm text-stroke">{label}</label>}
      <div className="relative group text-placeholder focus-within:text-secondary transition-all">
        {InputIcon && <InputIcon className="absolute lg:left-7 top-1/2 transform -translate-1/2 text-xl" />}
        <select
          name={name}
          placeholder={placeholder}
          className={cn(
            "bg-dark rounded-xl py-3 pr-5 text-white w-full border-none outline-none focus:shadow-input placeholder:text-placeholder text-sm appearance-none",
            InputIcon ? "pl-12" : "pl-5",
            className
          )}
          {...props}>
          {options?.map((option, i) => (
            <option key={i} value={option?.value}>
              {option?.label || option?.value}
            </option>
          ))}
        </select>
        <svg
          width="12"
          height="8"
          viewBox="0 0 15 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-5 top-1/2 transform -translate-y-1/2">
          <path
            d="M14.6885 0.329895C14.5889 0.225362 14.4704 0.142392 14.3398 0.0857716C14.2093 0.0291509 14.0693 0 13.9278 0C13.7864 0 13.6464 0.0291509 13.5158 0.0857716C13.3853 0.142392 13.2668 0.225362 13.1672 0.329895L8.26063 5.43783C8.16104 5.54236 8.04255 5.62533 7.912 5.68195C7.78145 5.73857 7.64142 5.76772 7.5 5.76772C7.35857 5.76772 7.21855 5.73857 7.088 5.68195C6.95745 5.62533 6.83896 5.54236 6.73937 5.43783L1.83278 0.329895C1.73319 0.225362 1.6147 0.142392 1.48416 0.0857716C1.35361 0.0291509 1.21358 0 1.07216 0C0.930731 0 0.790705 0.0291509 0.660156 0.0857716C0.529608 0.142392 0.41112 0.225362 0.311528 0.329895C0.111996 0.538854 0 0.821521 0 1.11616C0 1.4108 0.111996 1.69346 0.311528 1.90242L5.22883 7.02151C5.83144 7.64807 6.64831 8 7.5 8C8.35169 8 9.16856 7.64807 9.77117 7.02151L14.6885 1.90242C14.888 1.69346 15 1.4108 15 1.11616C15 0.821521 14.888 0.538854 14.6885 0.329895Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}
