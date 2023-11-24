"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function SearchButton({ param }) {
  const params = useParams();
  const pathname = usePathname();
  console.log(pathname);
  console.log(param);
  return (
    <Link
      href={`/search-result/${param.toLowerCase()}/${params.showName}`}
      className={` text-white md:text-2xl py-5 font-semibold`}
    >
      {param}
      <div
        className={` ${
          pathname.includes(param.toLowerCase())
            ? "w-full h-1 bg-[#dc1623]  block"
            : "hidden"
        }`}
      ></div>
    </Link>
  );
}
