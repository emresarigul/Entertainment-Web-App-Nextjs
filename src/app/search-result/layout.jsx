import React from "react";
import SearchResultButton from "@/components/buttons/SearchResultButton";

export default function SearchLayout({ children }) {
  return (
    <section className="bg-[#16151a] min-h-screen">
      <div className="flex justify-center gap-10">
        <SearchResultButton param="Movie" />
        <SearchResultButton param="Serie" />
      </div>
      {children}
    </section>
  );
}
