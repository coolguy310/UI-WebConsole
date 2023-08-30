import IconPlus from "icons/plus.tsx"
import { useState } from "preact/hooks"

import { Button } from "../components/ui/button/index.tsx"
import { Input } from "../components/ui/forms/input.tsx"
import Checkbox from "../islands/checkboxes.tsx"

const methods = ["GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE", "CONNECT", "TRACE", "PATCH"]
const initialState = {
  path: "",
  methods: [],
}
const FormRoutesCreate = () => {
  const [routes, setRoutes] = useState([initialState])

  const handleAddRoute = () => {
    setRoutes([...routes, initialState])
  }
  return (
    <div className="flex flex-col space-y-5">
      {routes?.map((route, index) => (
        <div key={index} className="flex space-x-5">
          <div>
            <Input label={"Path " + Number(index + 1)} placeholder={`path/v${Number(index + 1)}/hello-world`} />
          </div>
          <Checkbox
            label={"Methods " + Number(index + 1)}
            items={methods.map((v) => ({ value: v }))}
            name={`methods-${index + 1}`}
          />
        </div>
      ))}
      <div>
        <Button
          className="flex space-x-1 items-center text-sm font-inter mx-auto !py-3 !px-14"
          style={{
            width: "fit-content",
          }}
          onClick={handleAddRoute}>
          <IconPlus size={14} />
          <span>Add More</span>
        </Button>
      </div>
    </div>
  )
}

export default FormRoutesCreate
