"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function SearchButton({ param }) {
  const params = useParams();
  const pathname = usePathname();

  return (
    <>
      <Link
        href={`/search-result/${param.toLowerCase()}/${params.showName}`}
        className="py-5"
      >
        <Button
          className={`text-white md:text-xl font-semibold bg-transparent md:hover:bg-[#dc1623] ${
            pathname.includes(param.toLowerCase())
              ? "bg-[#dc1623]"
              : "bg-transparent"
          }`}
        >
          {param}
        </Button>
      </Link>
    </>
  );
}
