const data = [
  {
    title: "Deployed",
    current_value: 15,
    target_value: 10,
    target_label: "/",
  },
  {
    title: "Scaling",
    current_value: 15,
    target_value: 32,
    target_label: "/",
  },
  {
    title: "Requests/sec",
    current_value: 2.3,
  },
  {
    title: "Credits",
    current_value: 15,
    target_label: "k so far",
  },
]
export const OverviewStats = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5">
      {data?.map((item, i) => (
        <div key={i} className="p-7 rounded-xl bg-slate hover:bg-primary group">
          <div className="flex flex-col space-y-5">
            <span className="font-medium text-stroke group-hover:text-[#CCCBFF]">{item.title}</span>
            <div>
              <span className="text-5xl text-secondary group-hover:text-white font-bold">{item.current_value}</span>
              <span className="text-xl text-stroke font-medium">
                {item.target_label}
                {item.target_value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
