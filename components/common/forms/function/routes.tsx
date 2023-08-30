import FormRoutesCreate from "../../../../islands/form-routes-create.tsx"
import { Input } from "../../../ui/forms/input.tsx"
import { Wrapper } from "../../../ui/wrapper/index.tsx"

export const FunctionRoutesForm = () => {
  return (
    <Wrapper title="Routes">
      <FormRoutesCreate />
    </Wrapper>
  )
}
