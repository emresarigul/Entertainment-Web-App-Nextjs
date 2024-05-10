"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationButtons({ showType, totalPage }) {
  const searchParams = useSearchParams();
  const showPage = +searchParams.get("page") || 1;

  return (
    <div className="flex justify-center bg-[#16151a] py-10 gap-10">
      <Pagination>
        <PaginationContent>
          {showPage > 1 && (
            <PaginationItem>
              <Link href={`/${showType}?page=${showPage - 1}`}>
                <PaginationPrevious />
              </Link>
            </PaginationItem>
          )}
          <PaginationItem>
            <Link href={`/${showType}?page=1`}>
              <PaginationLink isActive={showPage === 1 ? true : false}>
                1
              </PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem className="hidden md:block">
            <Link
              href={`/${showType}?page=${showPage < 6 ? "2" : showPage - 3}`}
            >
              <PaginationLink isActive={showPage === 2 ? true : false}>
                {showPage < 6 ? "2" : showPage - 3}
              </PaginationLink>
            </Link>
          </PaginationItem>

          <PaginationItem className="hidden md:block">
            <Link
              href={`/${showType}?page=${showPage < 6 ? "3" : showPage - 2}`}
            >
              <PaginationLink isActive={showPage === 3 ? true : false}>
                {showPage < 6 ? "3" : showPage - 2}
              </PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem className="hidden md:block">
            <Link
              href={`/${showType}?page=${showPage < 6 ? "4" : showPage - 1}`}
            >
              <PaginationLink isActive={showPage === 4 ? true : false}>
                {showPage < 6 ? "4" : showPage - 1}
              </PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem className="hidden md:block">
            <Link href={`/${showType}?page=${showPage < 6 ? "5" : showPage}`}>
              <PaginationLink
                isActive={
                  showPage < 6 && showPage === 5
                    ? true
                    : showPage >= 6
                    ? true
                    : false
                }
              >
                {showPage < 6 ? "5" : showPage}
              </PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem className="block md:hidden">
            <Link href={`/${showType}?page=${showPage < 3 ? "2" : showPage}`}>
              <PaginationLink
                isActive={
                  showPage < 3 && showPage === 2
                    ? true
                    : showPage >= 3
                    ? true
                    : false
                }
              >
                {showPage < 3 ? "2" : showPage}
              </PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis
              className={`${
                (showPage === totalPage || totalPage - 1 === showPage) &&
                "hidden"
              } text-white`}
            />
          </PaginationItem>
          <PaginationItem className={`${showPage === totalPage && "hidden"}`}>
            <Link href={`/${showType}?page=${totalPage}`}>
              <PaginationLink>{totalPage}</PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem className={`${showPage === totalPage && "hidden"}`}>
            <Link href={`/${showType}?page=${showPage + 1}`}>
              <PaginationNext />
            </Link>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
