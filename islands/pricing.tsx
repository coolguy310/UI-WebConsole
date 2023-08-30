import { useState } from "preact/hooks"

import Tick from "../components/icons/check.tsx"

type IncrementType = "blocks" | "providers" | "regions"
const Pricing = () => {
  const [numberOfBlocks, setNumberOfBlocks] = useState(1)
  const blockPrice = 5
  const [total, setTotal] = useState(numberOfBlocks * blockPrice)
  const [numberOfProviders, setNumberOfProviders] = useState(1)
  const [numberOfRegions, setNumberOfRegions] = useState(1)

  const [list, setList] = useState([
    {
      title: "Addon 1",
      description: "for Logs per Deployment per month",
      price: 1,
      selected: false,
    },
    {
      title: "Addon 2",
      description: "for Logs per Deployment per month",
      price: 2,
      selected: false,
    },
    {
      title: "Addon 3",
      description: "for Logs per Deployment per month",
      price: 4,
      selected: false,
    },
  ])

  const handleSelectAddon = (index: number) => {
    const newList = [...list]
    newList[index].selected = !newList[index].selected
    setList(newList)

    const selectedAddons = newList.filter((item) => item.selected)
    const selectedAddonsPrice = selectedAddons.reduce((acc, item) => acc + item.price, 0)

    setTotal(numberOfProviders * numberOfRegions * numberOfBlocks * (blockPrice + selectedAddonsPrice))
  }
  const handleIncrement = (type: "blocks" | "providers" | "regions") => {
    const addonsTotal = list.filter((item) => item.selected).reduce((a, b) => a + b.price, 0)

    if (type === "blocks") {
      setNumberOfBlocks(numberOfBlocks + 1)
      setTotal(numberOfProviders * numberOfRegions * (numberOfBlocks + 1) * (blockPrice + addonsTotal))
    } else if (type === "providers") {
      setNumberOfProviders(numberOfProviders + 1)
      setTotal((numberOfProviders + 1) * numberOfRegions * numberOfBlocks * (blockPrice + addonsTotal))
    } else if (type === "regions") {
      setNumberOfRegions(numberOfRegions + 1)
      setTotal(numberOfProviders * (numberOfRegions + 1) * numberOfBlocks * (blockPrice + addonsTotal))
    }
  }

  const handleDecrement = (type: IncrementType) => {
    const addonsTotal = list.filter((item) => item.selected).reduce((a, b) => a + b.price, 0)

    if (type === "blocks") {
      if (numberOfBlocks > 1) {
        setNumberOfBlocks(numberOfBlocks - 1)
        setTotal(numberOfProviders * numberOfRegions * (numberOfBlocks - 1) * (blockPrice + addonsTotal))
      }
    } else if (type === "providers") {
      if (numberOfProviders > 1) {
        setNumberOfProviders(numberOfProviders - 1)
        setTotal((numberOfProviders - 1) * numberOfRegions * numberOfBlocks * (blockPrice + addonsTotal))
      }
    } else if (type === "regions") {
      if (numberOfRegions > 1) {
        setNumberOfRegions(numberOfRegions - 1)
        setTotal(numberOfProviders * (numberOfRegions - 1) * numberOfBlocks * (blockPrice + addonsTotal))
      }
    }
  }

  return (
    <div class="my-40 flex lg:space-x-14 justify-between">
      <div className="col-span-2 w-5/12">
        <h3 class="text-5xl font-bold">Pricing Plan</h3>
        <p class="text-gray-100 mt-6">
          Continually utilize distinctive supply chains before cross-media content. Proactively target client-focused
          processes through out-of-the-box initiatives.
        </p>
      </div>
      <div className="col-span-3 grid lg:grid-cols-2 gap-4 w-7/12">
        <div class="bg-secondary-black rounded-3xl py-10 px-8">
          <div className="flex justify-between">
            <p class="font-bold text-2xl">Block</p>
            <p class="text-secondary">
              <span class="font-bold text-2xl">${blockPrice}</span>/block
            </p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <p>Number of Blocks:</p>
            <div class="flex justify-end">
              <span
                class={`bg-secondary cursor-pointer w-6 h-6 flex items-center justify-center rounded-md ${
                  numberOfBlocks === 1 ? "cursor-not-allowed" : "hover:bg-primary"
                }`}
                onClick={() => handleDecrement("blocks")}>
                -
              </span>
              <div class="mx-4 w-4 flex justify-center">{numberOfBlocks}</div>
              <span
                class="bg-secondary cursor-pointer hover:bg-primary w-6 h-6 flex items-center justify-center rounded-md"
                onClick={() => handleIncrement("blocks")}>
                +
              </span>
            </div>
          </div>
          <p class="text-[#B1BCCF] mt-4">“Blocks” are the strategy. A Block is: </p>
          <span class="h-px bg-[#273752] w-28 mx-auto block my-6"></span>
          {["CPU: 128Mhz~", "Memory: 128Mb", "Bandwidth: 100Gb"].map((item) => (
            <ul>
              <li class="text-[#B1BCCF] my-4 flex items-center">
                <span class="text-2xl mr-2 text-secondary">
                  <Tick />
                </span>
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div class="grid gap-4">
          {list.map((item, index) => (
            <div
              onClick={() => handleSelectAddon(index)}
              class="cursor-pointer bg-secondary-black rounded-3xl py-6 px-8 flex items-center">
              <span
                class={`flex-shrink-0 w-[18px] h-[18px] border-2 border-secondary rounded-md ${
                  item.selected ? "bg-secondary" : ""
                }`}>
                {item.selected && (
                  <span class="text-sm">
                    <Tick />
                  </span>
                )}
              </span>
              <p class="ml-4">
                {item.title} :{" "}
                <span class="text-[#B1BCCF]">
                  ${item.price} {item.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Pricing
