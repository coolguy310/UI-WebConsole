import { Button } from "../../../ui/button/index.tsx"
import { InputFile } from "../../../ui/forms/input-file.tsx"
import { Input } from "../../../ui/forms/input.tsx"

export const AuthCreateOrganizationForm = () => {
  return (
    <div className="bg-[#28282B] rounded-3xl px-6 py-8 flex flex-col space-y-5">
      <h1 className="text-2xl font-bold text-center">Create Organization</h1>
      <form className="flex flex-col space-y-5">
        <Input label="Organization Name" type="text" name="name" placeholder="Organization Name" icon="BuildingIcon" />
        <InputFile label="Logo" name="name" placeholder="Upload Logo" />
        <Button title="Save" href="/auth/project" className="text-center !py-3 font-inter font-bold" />
      </form>
    </div>
  )
}
