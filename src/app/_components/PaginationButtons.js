"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function PaginationButtons({ showType }) {
  const searchParams = useSearchParams();
  const showPage = +searchParams.get("page");

  return (
    <div className="flex text-white justify-center bg-[#16151a] py-10">
      {showPage > 1 && (
        <Link href={`/${showType}?page=${showPage - 1}`}>
          <FaChevronLeft className="text-3xl" />
        </Link>
      )}
      <Link href={`/${showType}?page=${showPage + 1}`}>
        <FaChevronRight className="text-3xl" />
      </Link>
    </div>
  );
}
