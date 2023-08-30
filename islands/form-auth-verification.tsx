import { useEffect, useState } from 'preact/hooks'

import CloseIcon from '../components/icons/close.tsx'
import { Kratos } from '../packages/kratos-auth/auth.ts'
import { UpdateVerificationFlowBody, VerificationFlow } from '../packages/kratos-cdk/index.ts'
import Flow from './ory-flow.tsx'

const AuthVerificationForm = () => {
  const [params, setParams] = useState<Record<string, string>>()

  const [flowLoading, setFlowLoading] = useState(true)
  const [flow, setFlow] = useState<VerificationFlow>()

  const handleVerificationFlow = async () => {
    setFlowLoading(true)
    try {
      if (params?.flow) {
        const verificationFlow = await Kratos.getVerificationFlow.fn(params?.flow)
        setFlow(verificationFlow)
        return
      }
      // otherwise, we initialize the verification flow
      Kratos.createBrowserVerificationFlow
        .fn(params?.return_to)
        .then((data) => {
          setFlow(data)
        })
        .catch((err: any) => {
          switch (err.response?.status) {
            case 400:
              // Status code 400 implies the user is already signed in
              window.location.href = "/"
              return
          }

          throw err
        })
    } catch (error) {
      alert(error)
    } finally {
      setFlowLoading(false)
    }
  }

  const onVerification = async (values: UpdateVerificationFlowBody) => {
    await Kratos.updateVerificationFlow
      .fn(String(flow?.id), values)
      .then((data) => {
        // Form submission was successful, show the message to the user!
        setFlow(data)
      })
      .catch((err: any) => {
        switch (err?.code) {
          case 400:
            // Status code 400 implies the form validation had an error
            setFlow(err.body)
            return
          case 410: {
            const newFlowID = err.body?.use_flow_id
            history.pushState({}, "", `/verification?flow=${newFlowID}`)

            Kratos.getVerificationFlow.fn(newFlowID).then((data) => setFlow(data))
            return
          }
        }

        throw err
      })
  }

  useEffect(() => {
    handleVerificationFlow()
  }, [params])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setParams(Object.fromEntries(urlParams))
  }, [])
  return (
    <div className="bg-[#28282B] rounded-3xl px-6 py-8 flex flex-col space-y-5">
      <h1 className="text-2xl font-bold text-center">Verify your Account</h1>
      <Flow flow={flow} onSubmit={onVerification} loading={flowLoading} />
      <div className="text-center text-stroke text-sm">
        <div className="mt-3">
          <span>Not having an account yet?</span>{" "}
          <a href="/auth/register" className="font-semibold text-accent">
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthVerificationForm
