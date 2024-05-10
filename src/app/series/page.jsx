import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaginationButtons from "@/components/buttons/PaginationButtons";

export default async function page({ searchParams }) {
  const seriePage = searchParams.page || 1;
  // it fetches the top rated series
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&page=${seriePage}`
  );
  const data = await response.json();
  const totalPage = data.total_pages;

  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 relative justify-items-center px-3 bg-[#16151a] min-h-screen">
        {data.results.map((serie, index) => {
          const titleLength =
            serie.title?.length || serie.original_name?.length;
          const serieName = serie.title || serie.original_name;
          const releaseDate = serie.release_date || serie.first_air_date;
          const voteAverage = serie.vote_average;
          return (
            <Link
              href={`/detail/${serie.id}?type=tv`}
              className="relative w-80 h-96 m-5 border border-white rounded-xl hover:opacity-80 duration-300 hover:shadow-2xl hover:shadow-white/[.50]"
              key={index}
            >
              <Image
                className="object-cover rounded-xl"
                src={`https://image.tmdb.org/t/p/w780${serie.backdrop_path}`}
                fill={true}
                sizes="100%"
                priority={true}
                alt="movie-image"
              />
              <div className=" absolute z-50 bottom-0 w-full px-3 py-4 bg-gradient-to-t from-black  to-[#16151a]/[.80] rounded-xl rounded-t-none">
                <h2 className="text-white font-bold text-lg">
                  {titleLength > 20
                    ? serieName.substring(0, 28) + "..."
                    : serieName}
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
      <PaginationButtons totalPage={totalPage} showType="series" />
    </>
  );
}
