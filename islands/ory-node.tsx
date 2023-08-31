import { Input } from "../components/ui/forms/input.tsx"
import { FormDispatcher, ValueSetter } from "../lib/ory-helpers.ts"
import { UiNode, UiNodeAttributes } from "../packages/kratos-cdk/index.ts"

interface Props {
  node: UiNode
  disabled: boolean
  value: any
  setValue: ValueSetter
  dispatchSubmit: FormDispatcher
  submitting?: boolean
}

const OryNode = ({ node, value, setValue, disabled, dispatchSubmit, submitting }: Props) => {
  if (node.type === "input") {
    return (
      <Input
        node={node}
        value={value}
        setValue={setValue}
        disabled={disabled}
        attributes={node.attributes as any}
        dispatchSubmit={dispatchSubmit}
        icon={node.attributes?.name as "identifier" | "password"}
        isLoading={submitting}
      />
    )
  }
  return null
}
export default OryNode
