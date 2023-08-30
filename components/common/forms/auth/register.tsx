import { Button } from "../../../ui/button/index.tsx"
import { Divider } from "../../../ui/divider/index.tsx"
import { Input } from "../../../ui/forms/input.tsx"
import { Select } from "../../../ui/forms/select.tsx"
import { AuthSocial } from "./social.tsx"

export const AuthRegisterForm = () => {
  return (
    <div className="bg-[#28282B] rounded-3xl px-6 py-8 flex flex-col space-y-5">
      <h1 className="text-2xl font-bold text-center">Create Account</h1>
      <form className="flex flex-col space-y-5">
        <Input label="Full name" type="text" name="name" placeholder="John Doe" icon="UserIcon" />
        <div className="grid grid-cols-2 gap-3">
          <Input label="Address" type="text" name="name" placeholder="Address" icon="HomeIcon" />
          <Select
            label="Country"
            type="text"
            name="name"
            placeholder="Country"
            icon="GlobeIcon"
            options={[
              {
                label: "Country",
                value: "",
              },
              {
                label: "USA",
                value: "us",
              },
            ]}
          />
        </div>
        <Input label="Email" type="email" name="name" placeholder="Email Address" icon="EmailIcon" />
        <div className="grid grid-cols-2 gap-3">
          <Input label="Password" type="text" name="name" placeholder="Password" icon="KeyIcon" />
          <Input label="Confirm Password" type="text" name="name" placeholder="Confirm Password" icon="KeyIcon" />
        </div>
        <Button title="Create Account" href="/auth/login" className="text-center !py-3 font-inter font-bold" />
      </form>
      <Divider text="Or login with" />
      <AuthSocial />
      <div className="text-center text-stroke text-sm">
        <div className="mt-3">
          <span>Already have an account?</span>{" "}
          <a href="/auth/login" className="font-semibold text-accent">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
