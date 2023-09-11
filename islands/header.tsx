import { useMemo, useState } from "preact/hooks";

import { Button } from "../components/ui/button/index.tsx";
import { useWindowScrolled } from "../hooks/use-window-scrolled.ts";
import { cn } from "../lib/utils.ts";

const Header = () => {
  const isWindowScrolled = useWindowScrolled();
  const [isOpen, setIsOpen] = useState(false);

  const NavList = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "Console", href: "/console" },
  ];

  const headerClass = useMemo(() => {
    return cn(
      "px-6 py-3 lg:px-28 fixed top-0 left-0 w-full z-50 transition-all border-b text-gray-100",
      isWindowScrolled
        ? "bg-primary-black border-gray-900"
        : "border-transparent pt-8"
    );
  }, [isWindowScrolled]);

  return (
    <header class={headerClass}>
      <div class="container mx-auto flex flex-wrap items-center justify-between relative border-gray-100">
        <a href="/">
          <img src="./logo.svg" alt="" />
        </a>
        <div
          onClick={() => setIsOpen(!isOpen)}
          class="lg:hidden bg-secondary bg-opacity-30 rounded-lg w-10 h-10 p-2 flex flex-col justify-around"
        >
          <span class="block w-full h-[2px] bg-white"></span>
          <span class="block w-full h-[2px] bg-white"></span>
          <span class="block w-full h-[2px] bg-white"></span>
        </div>
        <div
          class={`lg:flex items-center text-sm ${
            isOpen
              ? "w-full lg:w-auto flex flex-col lg:flex-row absolute top-0 mt-12 lg:mt-0 p-4 lg:p-0 bg-primary-black lg:bg-transparent z-20 lg:relative"
              : "hidden"
          }`}
        >
          <nav
            class={`lg:mr-8 lg:space-x-4 ${
              isOpen
                ? "flex flex-col items-center lg:block mb-4 lg:mb-0"
                : "block"
            }`}
          >
            {NavList.map((item) => (
              <a href={item.href} class="p-2 hover:text-secondary">
                {item.name}
              </a>
            ))}
          </nav>
          <Button href="/auth/login" title="Log In" />
          {/* <Button title="Logout" onClick={onLogout}></Button> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
