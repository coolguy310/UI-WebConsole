import * as Social from "../../../icons/socials.tsx"

const providers = [
  {
    name: "Google",
    icon: Social.GoogleIcon,
  },
  {
    name: "Facebook",
    icon: Social.FacebookIcon,
  },
  {
    name: "Apple",
    icon: Social.AppleIcon,
  },
]
export const AuthSocial = () => {
  return (
    <div className="grid grid-cols-3 gap-x-3">
      {providers?.map((provider, index) => (
        <button
          key={index}
          className="flex items-center space-x-1.5 bg-[#3B3B3C] rounded-xl text-stroke font-inter px-3 justify-center py-2.5 font-bold">
          <span>
            <provider.icon className="text-base" />
          </span>
          <span className="text-sm">{provider?.name}</span>
        </button>
      ))}
    </div>
  )
}
