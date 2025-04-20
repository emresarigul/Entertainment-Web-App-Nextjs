"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Search() {
  const router = useRouter();
  const [showName, setShowName] = useState("");
  const [showType, setShowType] = useState({
    text: "Search in movies",
    showType: "movie",
    barStatue: false,
  });

  const searchHandler = (e) => {
    e.preventDefault();
    if (!showName.trim()) {
      setShowName("");
      return;
    }
    router.push(
      `/search-result/${
        showType.showType === null ? "movie" : showType.showType
      }/${showName.trim()}`
    );
    setShowName("");
    document.activeElement.blur();
  };

  return (
    <div className="relative sm:basis-[20rem] md:basis-[40rem]">
      <IoSearch
        className="text-white/50 hidden md:block md:text-xl cursor-pointer absolute right-3 top-2.5 z-50"
        onClick={searchHandler}
      />
      <form className="relative" onSubmit={searchHandler}>
        <input
          onChange={(e) => {
            setShowName(e.target.value);
          }}
          className="w-full h-8 md:h-10 text-base bg-black/10 border border-white/50 rounded-lg outline-none focus:bg-white/10 text-white pl-2 pr-5 sm:pr-14 md:pr-20 lg:pr-52"
          type="text"
          value={showName}
          placeholder="Search..."
        />
        <div className="absolute -top-1 md:top-0.5 right-0 md:right-11 text-right text-sm w-10 md:w-40">
          <div
            onClick={() => {
              setShowType({
                ...showType,
                barStatue: !showType.barStatue,
              });
            }}
            className="cursor-pointer relative"
          >
            <Select
              onValueChange={(showType) => {
                setShowType({
                  barStatue: false,
                  showType: showType,
                  text: showType,
                });
              }}
              defaultValue="movie"
            >
              <SelectTrigger className="md:w-[180px] bg-transparent border-none text-white/50 focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder={showType.text} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="movie">Search in movies</SelectItem>
                <SelectItem value="serie">Search in series</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
}
