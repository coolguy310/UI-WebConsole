import { useMemo, useState } from 'preact/hooks'

import CloseIcon from '../components/icons/close.tsx'
import { cn } from '../lib/utils.ts'
import { UiText } from '../packages/kratos-cdk/index.ts'

interface MessageProps {
  message: UiText
}

export const Message = ({ message }: MessageProps) => {
  const [show, setShow] = useState(true)

  const style = useMemo(() => {
    switch (message?.type) {
      case "info":
        return "bg-primary text-primary"
      case "success":
        return "bg-green-600 text-green-600"
      case "error":
        return "bg-red-500 text-red-400"
      default:
        break
    }
  }, [message])
  if (!show) return <></>
  return (
    <div className={cn("rounded-xl p-4 bg-opacity-10", style)}>
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm font-medium">{message?.text}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 focus:outline-none"
              onClick={() => setShow(false)}>
              <span className="sr-only">Dismiss</span>
              <CloseIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MessagesProps {
  messages?: Array<UiText>
}

export const Messages = ({ messages }: MessagesProps) => {
  if (!messages) {
    // No messages? Do nothing.
    return null
  }

  return (
    <div className="flex flex-col space-y-3">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}
