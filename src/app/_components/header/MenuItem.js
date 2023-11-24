"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MenuItem({ title, path, activePath, setNavActive }) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      onClick={() => setNavActive(false)}
      className={`cursor-pointer text-white`}
    >
      {title}
      <div
        className={`${
          activePath === pathname ? "md:block" : "hidden"
        } w-2.5 h-2.5 rounded-full mt-1 bg-[#dc1623] left-0 right-0 mx-auto hidden`}
      ></div>
    </Link>
  );
}
