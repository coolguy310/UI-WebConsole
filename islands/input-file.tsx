import { useState } from 'preact/hooks'

import { UploadIcon } from '../components/icons/upload.tsx'
import { InputFileProps } from '../components/ui/forms/input-file.tsx'
import { cn } from '../lib/utils.ts'

const InputFile = ({ label, name, placeholder, className, icon, ...props }: InputFileProps) => {
  const [selectedFile, setSelectedFile] = useState<File>()

  const handleFileChange = (evt: any) => {
    setSelectedFile(evt.target.files?.[0])
  }

  return (
    <>
      <label className="relative group text-placeholder focus-within:text-secondary transition-all">
        <input
          type="file"
          name={name}
          placeholder={placeholder}
          className={cn("w-full h-full opacity-0 absolute cursor-pointer", className)}
          onChange={handleFileChange}
          {...props}
        />
        <button
          type="button"
          className="bg-dark rounded-xl py-3 pr-5 text-white w-full border-none outline-none focus:shadow-input placeholder:text-placeholder text-sm flex justify-center items-center space-x-3 text-secondary">
          <UploadIcon />
          <span>{placeholder}</span>
        </button>
      </label>
      <span className="text-sm text-center text-stroke block mt-2">{selectedFile?.name}</span>
    </>
  )
}

export default InputFile
