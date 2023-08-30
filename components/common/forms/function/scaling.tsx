import Switch from '../../../../islands/switch.tsx'
import { Input } from '../../../ui/forms/input.tsx'
import { Select } from '../../../ui/forms/select.tsx'
import { Wrapper } from '../../../ui/wrapper/index.tsx'

export const FunctionScalingForm = () => {
  return (
    <Wrapper
      title="Scaling"
      actionEl={<Switch label="Individual" />}
      className="flex flex-col space-y-5 justify-between">
      <div className="grid grid-cols-2 gap-5">
        <Input label="Global" placeholder="0" appendText="Minimum" />
        <Input placeholder="0" appendText="Maksimum" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Select
          label="Based on"
          placeholder="CPU"
          options={[
            {
              label: "CPU",
              value: "",
            },
            {
              label: "USA",
              value: "us",
            },
          ]}
        />
        <Input placeholder="at 60%" />
      </div>
    </Wrapper>
  )
}
