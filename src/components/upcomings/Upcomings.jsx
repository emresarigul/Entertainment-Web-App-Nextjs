import React from "react";
import UpcomingShows from "./UpcomingShows";

export default async function Upcomings() {
  const upcomingMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`,
    { cache: "no-cache" }
  );
  const upcomingMovieData = await upcomingMovieResponse.json();

  const movieGenreResponse = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`,
    { cache: "no-cache" }
  );

  const genreData = await movieGenreResponse.json();

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
