import React from "react";
import MenuItem from "./MenuItem";
import { IoIosClose } from "react-icons/io";

export default function MobileNav({ navActive, setNavActive }) {
  return (
    <div
      className={`absolute left-0 right-0 top-0 flex flex-col items-center justify-center space-y-3 md:space-y-5 md:hidden bg-black/[.80] h-36 md:h-44 -translate-y-52 duration-300 ${
        navActive && "active-mobile-nav"
      }`}
    >
      <IoIosClose
        onClick={() => setNavActive(false)}
        className="text-white text-4xl absolute right-1.5 top-3 cursor-pointer"
      />
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
  );
}
