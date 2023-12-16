import React from "react";
import SearchButton from "../_components/buttons/SearchButton";
export default function SearchLayout({ children }) {
  return (
    <section className="h-screen bg-[#16151a]">
      <div className="flex justify-center gap-10">
        <SearchButton param="Movie" />
        <SearchButton param="Serie" />
      </div>
      {children}
    </section>
  );
}
