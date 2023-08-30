export const Hero = () => {
  return (
    <div class="relative flex flex-col items-center text-center bg">
      <span class="py-2 px-6 rounded-2xl bg-accent bg-opacity-30 text-accent">Qernal [Kur-nl]</span>
      <h1 class="text-5xl font-bold my-4 leading-12">Deploy Code & Application Faster</h1>
      <p class="text-gray-100 max-w-2xl px-6 mx-auto">
        Cross-media content. Proactively target client-focused processes through out-of-the-box initiatives.
      </p>

      <a
        href="#"
        class="mt-8 inline-block bg-primary hover:bg-secondary text-white py-4 px-12 rounded-lg relative z-20">
        Get Started
      </a>
      <div className="relative">
        <img src="./hero.svg" alt="qernal website" className="-mt-20" />
        <span className="absolute bottom-0 w-full left-0 righ-0 bg-gradient-to-t from-primary-black h-14"></span>
      </div>

      <div className="hidden lg:block absolute left-0 bottom-0 ml-40 mb-24 text-[#395C92]">C++</div>
      <div className="hidden lg:block absolute right-0 mt-20 ">
        <span class="bg-[#162235] text-[#395C92] mt-5 py-2 px-4 rounded-2xl">C++</span>
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 mb-40 mr-24 text-[#395C92]">PHP</div>
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
        <div className="relative">
          <svg
            class="inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.7918 12.5927C20.8987 12.5927 20.1842 11.8783 20.1842 10.9852V1.60758C20.1842 0.714482 20.8987 0 21.7918 0C22.6849 0 23.3994 0.714482 23.3994 1.60758V10.9852C23.4887 11.8783 22.6849 12.5927 21.7918 12.5927Z"
              fill="#6A67FC"
            />
            <path
              d="M15.2717 15.2721C14.6465 15.8973 13.5748 15.8973 12.9496 15.2721L6.42997 8.66318C5.71548 8.03801 5.71548 7.0556 6.42997 6.43043C7.05514 5.80525 8.12686 5.80525 8.75203 6.43043L15.361 13.0394C15.8968 13.6646 15.8968 14.647 15.2717 15.2721Z"
              fill="#6A67FC"
            />
            <path
              d="M12.5927 21.7917C12.5927 22.6848 11.8783 23.3992 10.9852 23.3992H1.60758C0.714482 23.3992 0 22.6848 0 21.7917C0 20.8986 0.714482 20.1841 1.60758 20.1841H10.9852C11.8783 20.1841 12.5927 20.8986 12.5927 21.7917Z"
              fill="#6A67FC"
            />
          </svg>
          <span class="absolute bg-[#162235] text-[#395C92] mt-5 py-2 px-4 rounded-2xl">
            PHP
            <span
              style={{
                borderBottom: "30px solid transparent",
                borderRight: "30px solid #162235",
              }}
              class="w-0 h-0 block absolute right-0 bottom-0 translate-y-1/2"></span>
          </span>
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 mr-52 bottom-1/2 text-[#395C92]">HTML</div>
      <div className="hidden lg:block absolute text-[#395C92] left-0 top-0 mt-4 ml-24">CSS</div>
    </div>
  )
}
