import { PageProps } from "$fresh/src/server/types.ts"

import {
  FunctionBlocksForm,
  FunctionCostForm,
  FunctionDeploymentForm,
  FunctionDetailForm,
  FunctionRoutesForm,
  FunctionScalingForm,
} from "../../../components/common/forms/function/index.ts"
import RocketIcon from "../../../components/icons/rocket.tsx"
import { ConsoleLayout } from "../../../components/layouts/console.tsx"
import { Button } from "../../../components/ui/button/index.tsx"

export default function Console(props: PageProps) {
  return (
    <ConsoleLayout location={props.url}>
      <h1 className="text-xl font-semibold mb-5">Create Functions</h1>
      <div className="flex flex-col space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <FunctionDetailForm />
          <FunctionBlocksForm />
        </div>
        <FunctionRoutesForm />
        <FunctionDeploymentForm />
        <div className="grid grid-cols-2 gap-5">
          <FunctionScalingForm />
          <FunctionCostForm />
        </div>
      </div>
      <Button className="!py-3 !px-14 mt-5 flex items-center space-x-2 mx-auto">
        <RocketIcon />
        <span>Deploy</span>
      </Button>
    </ConsoleLayout>
  )
}
