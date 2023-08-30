import { JSX } from "preact/jsx-runtime"

import { UiNode, UiNodeInputAttributes } from "../packages/kratos-cdk/index.ts"

export type ValueSetter = (value: string | number | boolean | undefined) => void

export type FormDispatcher = (e?: JSX.TargetedEvent<HTMLFormElement> | MouseEvent) => Promise<void> | undefined

export interface NodeInputProps {
  node?: UiNode
  attributes?: UiNodeInputAttributes
  value?: any
  disabled?: boolean
  dispatchSubmit?: FormDispatcher
  setValue?: ValueSetter
}

export const getNodeLabel = (node?: UiNode) => {
  return node?.meta?.label?.text
}

export const errors = {
  session_already_available: "You are already logged in.",
}

export const handleFlowError = (err: Record<string, any>) => {
  switch (err.body?.error?.id) {
    case "session_already_available":
      window.location.href = "/"
      break
    case "self_service_flow_expired":
      window.location.href = "/auth/register"
      break
  }
}
