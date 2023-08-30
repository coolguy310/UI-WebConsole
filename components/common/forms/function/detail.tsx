import { Input } from "../../../ui/forms/input.tsx"
import { Wrapper } from "../../../ui/wrapper/index.tsx"

export const FunctionDetailForm = () => {
  return (
    <Wrapper title="Name & Description" className="flex flex-col space-y-4">
      <Input label="Function Name" placeholder="Function Name" />
      <Input label="Description" placeholder="Type details here..." />
      <Input label="Image Source" placeholder="Find: myimage/qernal/new" />
    </Wrapper>
  )
}
