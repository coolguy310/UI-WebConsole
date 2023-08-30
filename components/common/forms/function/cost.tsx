import { Input } from '../../../ui/forms/input.tsx'
import { Wrapper } from '../../../ui/wrapper/index.tsx'

export const FunctionCostForm = () => {
  return (
    <Wrapper title="Cost" className="flex flex-col space-y-5 justify-between" background="#5351C8">
      <Input label="Minimum" placeholder="0" appendText="blocks per month" theme="light" />
      <Input label="Maksimum" placeholder="0" appendText="blocks per month" theme="light" />
    </Wrapper>
  )
}
