import ChevronRightFillIcon from "../components/icons/chevron-right-fill.tsx"
import { hexToRgbA } from "../lib/utils.ts"

// This will be from api
const data = [
  {
    type: "org",
    name: "Twinscy Inc.",
    brand_color: "#02C2B7",
    logo: "/logo/twinscy.svg",
  },
  {
    type: "project",
    name: "Vimeo Inc.",
    brand_color: "#FFEB37",
    logo: "/logo/vimeo.svg",
  },
]
const OrganizationsList = () => {
  return (
    <ul className="flex flex-col space-y-5">
      {data.map((item, i) => (
        <li key={i} className="flex justify-between">
          <div className="flex items-center space-x-3">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full bg-dark"
              style={{
                backgroundColor: hexToRgbA(item.brand_color, 0.2),
              }}>
              <img src={item.logo} alt="" />
            </div>
            <div>
              <span className="text-sm text-stroke">{item.type === "org" ? "Organization" : "Project"}</span>
              <h3 className="font-semibold">{item.name}</h3>
            </div>
          </div>
          <button className="text-2xl">
            <ChevronRightFillIcon />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default OrganizationsList
