import FileInput from '../../../islands/input-file.tsx'
import { cn } from '../../../lib/utils.ts'
import { UploadIcon } from '../../icons/upload.tsx'

export interface InputFileProps extends preact.JSX.HTMLAttributes<HTMLInputElement> {
  label?: string
}
export const InputFile = (props: InputFileProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {props?.label && <label className="text-sm text-stroke">{props?.label}</label>}
      <FileInput {...props} />
    </div>
  )
}
