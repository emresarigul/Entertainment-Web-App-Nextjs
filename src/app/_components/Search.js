"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";

export default function Search() {
  const router = useRouter();
  const [showName, setShowName] = useState("");
  const [showType, setShowType] = useState({
    text: "Select search option",
    showType: "movie",
    barStatue: false,
  });

  const searchHandler = (e) => {
    e.preventDefault();
    router.push(`/search-result/${showType.showType}/${showName}`);
    setShowName("");
    document.activeElement.blur();
  };

  return (
    <div className="relative sm:basis-[20rem] md:basis-[40rem]">
      <IoSearch
        className="text-white/50 hidden md:block md:text-xl cursor-pointer absolute right-3 top-2.5"
        onClick={searchHandler}
      />
      <form onSubmit={searchHandler}>
        <input
          onChange={(e) => {
            setShowName(e.target.value);
          }}
          className="w-full h-8 md:h-10 text-xs md:text-base bg-black/10 border border-white/50 rounded-lg outline-none focus:bg-white/10 text-white pl-2 pr-5 sm:pr-14 md:pr-20 lg:pr-52"
          type="text"
          value={showName}
        />
        <div className="absolute top-2 md:top-2.5 right-4 md:right-11 text-right text-sm text-white/50 w-40">
          <div
            onClick={() => {
              setShowType({
                ...showType,
                barStatue: !showType.barStatue,
              });
            }}
            className="cursor-pointer relative"
          >
            <div className="mr-6 hidden lg:block">{showType.text}</div>
            <IoSettingsOutline className="absolute right-0 top-[2px] md:text-base" />
          </div>
          <select
            onChange={(e) => {
              setShowType({
                barStatue: false,
                showType: e.target.value,
                text: e.target.value,
              });
            }}
            className={`text-black w-28 md:w-full text-xs md:text-base text-center ${
              showType.barStatue ? "block" : "hidden"
            }`}
            name="shows"
            id="shows"
          >
            <option value="movie">Search in movies</option>
            <option value="serie">Search in tv series</option>
          </select>
        </div>
      </form>
    </div>
  );
}
