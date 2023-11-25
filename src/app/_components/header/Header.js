"use client";
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import MobileNav from "./MobileNav";
import Search from "../search/Search";

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  const searchParams = useSearchParams();
  const headerCheck = searchParams.get("page");
  const pathname = usePathname();
  const pathnameCheck = pathname.includes("search-result");

  const navActiveHandler = () => {
    setNavActive(!navActive);
  };

  return (
    <header
      className={`md:h-20 px-3 py-3 md:py-0 relative z-50 border-b ${
        !pathnameCheck && !headerCheck ? "bg-black/[.10]" : "bg-black/[.92]"
      } border-gray-500/[.30]`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-5 md:gap-10 h-full">
        <Link href="/" className="text-[#dc1623] font-extrabold text-xl">
          TWISTFLIX
        </Link>
        <Search />
        <div className="hidden md:flex space-x-20 py-5 h-16">
          <MenuItem
            setNavActive={setNavActive}
            title="Home"
            path="/"
            activePath="/"
          />
          <MenuItem
            setNavActive={setNavActive}
            title="Movies"
            path={`/movies?page=${1}`}
            activePath="/movies"
          />
          <MenuItem
            setNavActive={setNavActive}
            title="Series"
            path={`/series?page=${1}`}
            activePath="/series"
          />
        </div>
        <IoMdMenu
          onClick={navActiveHandler}
          className="block md:hidden text-2xl text-white cursor-pointer"
        />
        <MobileNav navActive={navActive} setNavActive={setNavActive} />
      </div>
    </header>
  );
}
