import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaginationButtons from "../_components/buttons/PaginationButtons";

export default async function page({ searchParams }) {
  const moviePage = searchParams.page || 1;
  // it fetches the top rated movies
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=${moviePage}`
  );
  const data = await response.json();

  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 relative justify-items-center px-3 bg-[#16151a] min-h-screen">
        {data.results.map((movie, index) => {
          let titleLength = movie.title?.length || movie.original_name?.length;
          let movieName = movie.title || movie.original_name;
          let releaseDate = movie.release_date || movie.first_air_date;
          let voteAverage = movie.vote_average;
          return (
            <Link
              href={`/detail/${movie.id}?type=movie`}
              className="relative w-80 h-96 m-5 border border-white rounded-xl hover:opacity-80 duration-300 hover:shadow-2xl hover:shadow-white/[.50]"
              key={index}
            >
              <Image
                className="object-cover rounded-xl"
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                fill={true}
                sizes="100%"
                priority={true}
                alt="movie-image"
              />
              <div className=" absolute z-50 bottom-0 w-full px-3 py-4 bg-gradient-to-t from-black  to-[#16151a]/[.80] rounded-xl rounded-t-none">
                <h2 className="text-white font-bold text-lg">
                  {titleLength > 20
                    ? movieName.substring(0, 28) + "..."
                    : movieName}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-[#4e4d52] text-sm font-semibold">
                    {releaseDate.substring(0, 4)}
                  </div>
                  <div className="text-[#f8b200]">{voteAverage.toFixed(1)}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <PaginationButtons showType="movies" />
    </>
  );
}
