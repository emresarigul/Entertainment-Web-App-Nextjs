"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineRise } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevision } from "react-icons/pi";

export default function Button({ buttonText, param }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("genre") || "trendsNow";

  return (
    <>
      <Link href={`/?genre=${param}`} scroll={false} className="relative">
        <div
          className={`flex items-center gap-3 transition-all duration-300 hover:text-white ${
            searchTerm === param
              ? "sm:text-xl text-white"
              : "text-sm sm:text-base text-gray-500"
          }`}
        >
          {param === "trendsNow" ? (
            <AiOutlineRise
              className={`transition duration-150 hidden md:block ${
                searchTerm === param ? "scale-150" : "scale-120"
              }`}
            />
          ) : param === "topRatedMovies" ? (
            <BiCameraMovie
              className={`transition duration-150 hidden md:block ${
                searchTerm === param ? "scale-150" : "scale-120"
              }`}
            />
          ) : (
            <PiTelevision
              className={`transition duration-150 hidden md:block ${
                searchTerm === param ? "scale-150" : "scale-120"
              }`}
            />
          )}
          <div className="relative">
            {buttonText}
            <div
              className={` transition-all duration-300 w-2.5 h-2.5 rounded-full mt-1 bg-[#dc1623] absolute right-0 left-0 mx-auto ${
                searchTerm === param
                  ? " opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            ></div>
          </div>
        </div>
      </Link>
    </>
  );
}
