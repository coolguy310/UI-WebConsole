import { useRef, useState } from "preact/hooks";
import { cn } from "@/lib/utils.ts";
const ProfileDropdown = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState(false);
  return (
    <div>
      <button
        ref={buttonRef}
        className="flex space-x-2 items-center"
        onClick={() => setState(!state)}
      >
        <div className="flex items-center space-x-2">
          <img
            src="/vectors/avatar.svg"
            alt=""
            width={42}
            height={42}
            className="rounded-full"
          />
          <span>Andrew</span>
        </div>
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("transition-all", state && "transform rotate-180")}
        >
          <path
            d="M11.0164 0.247421C10.9417 0.169022 10.8528 0.106794 10.7549 0.0643287C10.657 0.0218632 10.552 0 10.4459 0C10.3398 0 10.2348 0.0218632 10.1369 0.0643287C10.039 0.106794 9.95011 0.169022 9.87541 0.247421L6.19547 4.07837C6.12078 4.15677 6.03191 4.219 5.934 4.26146C5.83609 4.30393 5.73107 4.32579 5.625 4.32579C5.51893 4.32579 5.41391 4.30393 5.316 4.26146C5.21809 4.219 5.12922 4.15677 5.05453 4.07837L1.37459 0.247421C1.29989 0.169022 1.21103 0.106794 1.11312 0.0643287C1.01521 0.0218632 0.910186 0 0.804117 0C0.698048 0 0.593029 0.0218632 0.495117 0.0643287C0.397206 0.106794 0.30834 0.169022 0.233646 0.247421C0.0839971 0.404141 0 0.616141 0 0.837119C0 1.0581 0.0839971 1.2701 0.233646 1.42682L3.92162 5.26613C4.37358 5.73605 4.98623 6 5.625 6C6.26377 6 6.87642 5.73605 7.32838 5.26613L11.0164 1.42682C11.166 1.2701 11.25 1.0581 11.25 0.837119C11.25 0.616141 11.166 0.404141 11.0164 0.247421Z"
            fill="#A2A2A2"
          />
        </svg>
      </button>
      {/* TODO: dropdown menu */}
      {state && (
        <div
          className="rounded-lg bg-[#464646] shadow fixed z-10 overflow-hidden p-3 flex flex-col"
          style={{
            top: `calc(${buttonRef?.current?.offsetTop}px + ${buttonRef?.current?.offsetHeight}px + 10px)`,
            right: `calc(100% - ${
              buttonRef?.current?.getBoundingClientRect().left
            }px - ${buttonRef?.current?.offsetWidth}px)`,
            minWidth: buttonRef?.current?.offsetWidth,
            filter: "drop-shadow(0px -4px 100px rgba(0, 0, 0, 0.20))",
          }}
        >
          <a
            href="/"
            className="w-full text-left py-2.5 px-5 hover:bg-[#3F3F41] text-sm rounded-lg"
          >
            Profile
          </a>
          <form method="post" action={"/api/logout"}>
            <button
              type="submit"
              className="w-full text-left py-2.5 px-5 hover:bg-[#3F3F41] text-sm rounded-lg"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
