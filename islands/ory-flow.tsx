import { useMemo, useState } from "preact/hooks"

import { Loader } from "../components/ui/loader/index.tsx"
import {
  LoginFlow,
  RecoveryFlow,
  RegistrationFlow,
  SettingsFlow,
  UiNode,
  UpdateLoginFlowBody,
  UpdateRecoveryFlowBody,
  UpdateRegistrationFlowBody,
  UpdateSettingsFlowBody,
  UpdateVerificationFlowBody,
  VerificationFlow,
} from "../packages/kratos-cdk/index.ts"
import { Messages } from "./flow-message.tsx"
import OryNode from "../components/misc/ory-node.tsx"

export type Methods = "oidc" | "password" | "profile" | "totp" | "webauthn" | "link" | "lookup_secret"

export type Values = Partial<
  | UpdateLoginFlowBody
  | UpdateRegistrationFlowBody
  | UpdateRecoveryFlowBody
  | UpdateSettingsFlowBody
  | UpdateVerificationFlowBody
>

declare function GetNodeId({ attributes }: UiNode): string

interface FlowProps<T> {
  // The flow
  flow?: LoginFlow | RegistrationFlow | SettingsFlow | VerificationFlow | RecoveryFlow
  // Only show certain nodes. We will always render the default nodes for CSRF tokens.
  only?: Methods
  // Is triggered on submission
  onSubmit: (values: T) => Promise<void>
  // Do not show the global messages. Useful when rendering them elsewhere.
  hideGlobalMessages?: boolean
  // loading state for fields
  loading?: boolean
}
function emptyState<T>(): T {
  return {} as T
}
const Flow = <T extends Values>(props: FlowProps<T>) => {
  const { flow, onSubmit, loading } = props
  const [isLoading, setLoading] = useState(false)
  const [values, setValues] = useState<T>(emptyState())

  const nodes = useMemo((): Array<UiNode> => {
    const { flow, only } = props
    if (!flow) {
      return []
    }
    return flow.ui.nodes.filter(({ group }) => {
      if (!only) {
        return true
      }
      return group === "default" || group === only
    })
  }, [props])

  const handleSubmit = (event: any) => {
    // Prevent all native handlers
    event.stopPropagation()
    event.preventDefault()

    // Prevent double submission!
    if (isLoading) {
      return Promise.resolve()
    }

    const form = event.currentTarget

    let body: T | undefined

    if (form && form instanceof HTMLFormElement) {
      const formData = new FormData(form)
      body = Object.fromEntries(formData) as T

      if (event.nativeEvent && "submitter" in event.nativeEvent) {
        const method = event.nativeEvent.submitter
        body = {
          ...body,
          ...{ [method.name]: method.value },
        }
      }
    }
    setLoading(true)

    return onSubmit({ ...body, ...values }).finally(() => {
      setLoading(false)
    })
  }

  const getNodeId: typeof GetNodeId = (v) => v.attributes?.id

  if (loading) {
    return (
      <div className="min-h-[15rem] w-full flex justify-center items-center">
        <Loader />
      </div>
    )
  }

  return (
    <form
      action={flow?.ui.action}
      method={flow?.ui.method}
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 min-h-[8rem]">
      {!props.hideGlobalMessages ? <Messages messages={props.flow?.ui.messages} /> : null}
      {nodes.map((node, k) => {
        const id = getNodeId(node) as keyof Values
        return (
          <OryNode
            key={`${id}-${k}`}
            disabled={isLoading}
            node={node}
            value={values?.[id] || node.attributes?.value}
            dispatchSubmit={handleSubmit}
            submitting={isLoading}
            setValue={(value) =>
              setValues((values) => ({
                ...values,
                ...{ [id]: value },
              }))
            }
          />
        )
      })}
    </form>
  )
}

export default Flow
