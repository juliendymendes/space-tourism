"use client";
import Image from "next/image";
import Link from "next/link";

function MainNavBar({ children }: { children: React.ReactNode }) {
  function closeSideBar() {
    const input: HTMLInputElement = document.getElementById(
      "drawer",
    ) as HTMLInputElement;
    input.checked = false;
  }
  return (
    <nav>
      <div className="drawer drawer-end ">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col relative">
          <div className="hidden xl:block h-[1px] w-[40%] 2xl:w-[40%] bg-white absolute top-16 left-52 2xl:left-60 z-50 min-[2000px]:left-80"></div>
          {/* NAVBAR */}
          <div className="w-full navbar absolute xl:top-5 md:pt-0 md:pe-0 md:bg-transparent xl:h-[96px]">
            <div className="flex-1 px-2 pt-2 mx-2 xl:ms-10">
              <Image src="/logo.svg" width={40} height={40} alt="Logo" />
            </div>
            <div className="flex-none xl:flex-1 hidden md:block">
              <ul className="menu menu-horizontal flex h-full md:h-[60px] xl:h-[96px] md:py-0 md:px-8 xl:px-16 2xl:px-24 2xl:ps-28 bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl font-barlowCondensed md:text-sm lg:text-base min-[2000px]:text-2xl md:tracking-[2.362px] uppercase text-white md:gap-x-10 2xl:gap-x-24">
                {/* Navbar menu content here */}
                <li>
                  <Link
                    href="/"
                    className="leading-[57px] xl:leading-[94px] !rounded-none hover:border-b-2 active:border-b-2 focus:border-b-2 focus:!bg-transparent focus:!text-white p-0 w-fit  border-white"
                  >
                    <strong className="hidden xl:inline">00</strong>Home
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="leading-[57px] xl:leading-[94px] !rounded-none hover:border-b-2 active:border-b-2 focus:border-b-2 focus:!bg-transparent focus:!text-white p-0 w-fit  border-white"
                  >
                    <strong className="hidden xl:inline">01</strong>Destination
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="leading-[57px] xl:leading-[94px] !rounded-none hover:border-b-2 active:border-b-2 focus:border-b-2 focus:!bg-transparent focus:!text-white p-0 w-fit  border-white"
                  >
                    <strong className="hidden xl:inline">02</strong>Crew
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="leading-[57px] xl:leading-[94px] !rounded-none hover:border-b-2 active:border-b-2 focus:border-b-2 focus:!bg-transparent focus:!text-white p-0 w-fit border-white"
                  >
                    <strong className="hidden xl:inline">03</strong>Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-none md:hidden">
              <label
                htmlFor="drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                  <g fill="#D0D6F9" fill-rule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                  </g>
                </svg>
              </label>
            </div>
          </div>
          {children}
        </div>
        {/* SIDEBAR */}
        <div className="drawer-side">
          <label htmlFor="drawer" aria-label="close sidebar"></label>
          <ul className="menu p-4 w-72 min-h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl font-barlowCondensed text-base tracking-[2.7px] uppercase text-white gap-y-5">
            {/* Sidebar content here */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              aria-label="close sidebar"
              className="self-end mt-4 me-4 mb-6"
              onClick={closeSideBar}
            >
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>

            <li>
              <Link href="/">
                <strong>00</strong> Home
              </Link>
            </li>
            <li>
              <Link href="">
                <strong>01</strong> Destination
              </Link>
            </li>
            <li>
              <Link href="">
                <strong>02</strong> Crew
              </Link>
            </li>
            <li>
              <Link href="">
                <strong>03</strong> Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
