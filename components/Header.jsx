"use client";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { routes } from "../path";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const openMenu = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <header className="fixed left-0 right-0 top-2 w-full ">
      <nav className="relative z-10 mx-auto flex max-w-full justify-between rounded-full bg-slate-100 px-12 py-4 sm:max-w-[90%] ">
        {/* brand logo and desktop nav*/}
        <div className="flex items-center space-x-12 ">
          <Link href="./">
            <h2 className="font-dancingScript text-xl  font-black text-slate-800 antialiased ">
              tunji.dev
            </h2>
          </Link>
          <div
            className={`absolute right-0  ${
              toggle ? "opacity-1 top-16" : "-top-64"
            }  h-64 w-full space-x-8 bg-slate-100 px-4 transition-all duration-150 ease-in sm:static sm:flex  sm:h-auto`}
          >
            <Link href="#">
              <h2 className="font-raleways text-sm font-semibold text-slate-800 antialiased ">
                Expertise
              </h2>
            </Link>
            <Link href={routes.work}>
              <h2 className="font-raleways text-sm font-semibold text-slate-800 antialiased ">
                Work
              </h2>
            </Link>
            <Link href={routes.blog}>
              <h2 className="font-raleways text-sm font-semibold text-slate-800 antialiased ">
                Tips and Tricks
              </h2>
            </Link>
          </div>
        </div>
        {/* brand logo and mobile nav*/}

        <div className="block sm:hidden ">
          {!toggle ? (
            <HiOutlineMenuAlt3 onClick={openMenu} className="text-xl" />
          ) : (
            <LiaTimesSolid onClick={openMenu} className="text-xl" />
          )}
        </div>
      </nav>
    </header>
  );
}
