"use client";
import React from "react";
import MovieSearch from "./MovieSearch";
import SeriesSearch from "./SerieSearch";
import SearchButton from "./SearchButton";

export default function SearchResult({ movieData, SerieData, showName }) {
  console.log("hello");
  return (
    <div>
      <div>
        <SearchButton />
      </div>
      <div>
        <MovieSearch movieData={movieData} showName={showName} />
        <SeriesSearch SerieData={SerieData} showName={showName} />
      </div>
    </div>
  );
}
