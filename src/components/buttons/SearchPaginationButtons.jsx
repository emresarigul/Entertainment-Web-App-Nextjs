"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function SearchPaginationButtons({ showType, totalPage }) {
  const searchParams = useSearchParams();
  const showPage = +searchParams.get("page") || 1;
  const [windowWidth, setWindowWidth] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // finds the window width
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      const checkMobile = windowWidth > 640 ? false : true;
      setIsMobile(checkMobile);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]);

  const renderPaginationButtons = () => {
    const variableArray = Array.from(
      { length: Math.min(totalPage, 5) },
      (_, index) => index
    );

    const variableArrayMobile = Array.from(
      { length: Math.min(totalPage, 1) },
      (_, index) => index
    );

    if (showPage > 6 && !isMobile) {
      variableArray.reverse();
    }

    return (
      <Pagination>
        <PaginationContent>
          {showPage > 1 && (
            <PaginationItem>
              <Link href={`/${showType}?page=${showPage - 1}`}>
                <PaginationPrevious />
              </Link>
            </PaginationItem>
          )}

          {!isMobile && (
            <>
              <PaginationItem
                className={`${showPage > 6 ? "block" : "hidden"}`}
              >
                <Link href={`/${showType}?page=1`}>
                  <PaginationLink>1</PaginationLink>
                </Link>
              </PaginationItem>
              {variableArray.map((item, index) => {
                return (
                  <PaginationItem key={index}>
                    <Link
                      href={`${
                        showPage > 6
                          ? `/${showType}?page=${showPage - (item + 1)}`
                          : `/${showType}?page=${item + 1}`
                      }`}
                    >
                      <PaginationLink
                        isActive={showPage === item + 1 ? true : false}
                      >
                        {showPage > 6 ? showPage - (item + 1) : item + 1}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                );
              })}
              <PaginationItem
                className={`${showPage >= 6 ? "block" : "hidden"}`}
              >
                <Link href={`/${showType}?page=${showPage}`}>
                  <PaginationLink isActive>{showPage}</PaginationLink>
                </Link>
              </PaginationItem>
            </>
          )}
          {isMobile && (
            <>
              {variableArrayMobile.map((item, index) => {
                return (
                  <PaginationItem key={index}>
                    <Link
                      href={`${
                        showPage > 2
                          ? `/${showType}?page=${item + 1}`
                          : `/${showType}?page=${item + 1}`
                      }`}
                    >
                      <PaginationLink
                        isActive={showPage === item + 1 ? true : false}
                      >
                        {item + 1}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                );
              })}
              <PaginationItem
                className={`${showPage >= 2 ? "block" : "hidden"}`}
              >
                <Link href={`/${showType}?page=${showPage}`}>
                  <PaginationLink isActive>{showPage}</PaginationLink>
                </Link>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationEllipsis
              className={`${
                (showPage === totalPage || totalPage - 1 === showPage) &&
                "hidden"
              } text-white`}
            />
          </PaginationItem>
          <PaginationItem
            className={`${
              (showPage === totalPage || totalPage - 1 === showPage) && "hidden"
            }`}
          >
            <Link href={`/${showType}?page=${totalPage}`}>
              <PaginationLink isActive={showPage === totalPage ? true : false}>
                {totalPage}
              </PaginationLink>
            </Link>
          </PaginationItem>
          <PaginationItem className={`${showPage === totalPage && "hidden"}`}>
            <Link href={`/${showType}?page=${showPage + 1}`}>
              <PaginationNext />
            </Link>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <div className="flex justify-center bg-[#16151a] py-10 gap-10">
      {renderPaginationButtons()}
    </div>
  );
}
