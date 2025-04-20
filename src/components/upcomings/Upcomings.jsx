import React from "react";
import UpcomingShows from "./UpcomingShows";
import getUpcomings from "@/actions/getUpcomings";
import getMovieGenre from "@/actions/getMovieGenre";

export default async function Upcomings() {
  const upcomingMovieData = await getUpcomings();

  const genreData = await getMovieGenre();

  return (
    <div className="pb-16">
      <div className="flex justify-center gap-2 text-white font-bold text-2xl md:text-3xl mb-5">
        Upcoming Movies
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 relative justify-items-center px-3 bg-[#16151a]">
        {upcomingMovieData?.results?.map((movie, index) => {
          return <UpcomingShows key={index} {...movie} genreData={genreData} />;
        })}
      </div>
    </div>
  );
}
