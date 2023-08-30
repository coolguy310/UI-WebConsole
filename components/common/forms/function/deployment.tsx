import Checkbox from "../../../../islands/checkboxes.tsx"
import { MultipleSelect } from "../../../../islands/form-multiple-select.tsx"
import { Wrapper } from "../../../ui/wrapper/index.tsx"

const providers = ["AWS", "GCP", "Azure", "Digital Ocean", null, "Strawberry", "Others"]
const places = ["Europe", "US", "Africa", null, "Australia", "Asia"]
export const FunctionDeploymentForm = () => {
  return (
    <Wrapper title="Deployments" className="flex space-x-5">
      <div className="lg:w-3/4">
        <Checkbox label="Providers" items={providers.map((value) => (value ? { value } : null))} />
      </div>
      <div className="grid grid-cols-2 w-full">
        <Checkbox label="Providers" items={places.map((value) => (value ? { value } : null))} />
        <MultipleSelect label="Cities" placeholder="Search" icon="SearchIcon" />
      </div>
    </Wrapper>
  )
}
