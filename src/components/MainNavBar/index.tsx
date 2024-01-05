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
      <div className="drawer drawer-end">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-dark">
            <div className="flex-1 px-2 mx-2">
              <Image src="/logo.svg" width={40} height={40} alt="Logo" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
            <div className="flex-none lg:hidden">
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
        <div className="drawer-side">
          <label
            htmlFor="drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
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
              <Link href="">
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
