import React from "react";
import SearchButton from "../_components/buttons/SearchButton";
export default function SearchLayout({ children }) {
  return (
    <section>
      <div className="flex justify-center gap-10 bg-[#16151a]">
        <SearchButton param="Movie" />
        <SearchButton param="Serie" />
      </div>
      {children}
    </section>
  );
}
