import { Input } from "../../../ui/forms/input.tsx"
import { Wrapper } from "../../../ui/wrapper/index.tsx"

export const FunctionBlocksForm = () => {
  return (
    <Wrapper title="Blocks" className="flex flex-col space-y-5 justify-between">
      <Input
        label="CPU"
        placeholder="Enter CPU cores"
        appendText="MHz"
        hint="per Deployment"
        hintClassName="text-center"
      />
      <Input
        label="Memory"
        placeholder="Enter Memory"
        appendText="mb"
        hint="per Deployment"
        hintClassName="text-center"
      />
    </Wrapper>
  )
}
