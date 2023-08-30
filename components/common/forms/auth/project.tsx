import { Button } from "../../../ui/button/index.tsx"
import { InputFile } from "../../../ui/forms/input-file.tsx"
import { Input } from "../../../ui/forms/input.tsx"

export const AuthCreateProjectForm = () => {
  return (
    <div className="bg-[#28282B] rounded-3xl px-6 py-8 flex flex-col space-y-5">
      <h1 className="text-2xl font-bold text-center">Create Project</h1>
      <form className="flex flex-col space-y-5">
        <Input label="Project Name" type="text" name="name" placeholder="Project Name" icon="FileIcon" />
        <InputFile label="Logo" name="name" placeholder="Upload Logo" />
        <Button title="Save" href="/console" className="text-center !py-3 font-inter font-bold" />
      </form>
    </div>
  )
}
