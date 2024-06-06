import Copyright from "@/components/misc/copyright.tsx";

const menu = [
  {
    title: "Sitemap",
    url: "/",
  },
  {
    title: "Dev",
    url: "/",
  },
  {
    title: "Help",
    url: "/",
  },
];

export const Footer = () => {
  return (
    <div className={"text-sm flex w-full mt-6 justify-between items-center"}>
      <div
        className={
          "text-stroke divide-x divide-stroke flex items-center space-x-3"
        }
      >
        {menu?.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className={"hover:text-secondary pl-3 first-child:pl-0"}
          >
            {item.title}
          </a>
        ))}
      </div>
      <Copyright textColorVariant={"text-stroke"} />
    </div>
  );
};
