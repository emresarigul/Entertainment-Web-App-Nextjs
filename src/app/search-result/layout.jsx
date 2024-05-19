import React from "react";
import SearchButton from "@/components/buttons/SearchButton";

export default function SearchLayout({ children }) {
  return (
    <section className="bg-[#16151a] min-h-screen">
      <div className="flex justify-center gap-10">
        <SearchButton param="Movie" />
        <SearchButton param="Serie" />
      </div>
      {children}
    </section>
  );
}
