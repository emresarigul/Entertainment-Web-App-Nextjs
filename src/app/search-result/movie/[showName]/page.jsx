import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchPaginationButtons from "@/components/buttons/SearchPaginationButtons";
import getMovieSearch from "@/actions/getMovieSearch";

export default async function page({ params, searchParams }) {
  const showSearchPage = searchParams.page || 1;

  const movieData = await getMovieSearch(params, showSearchPage);
  const totalPage = movieData?.total_pages;

  const movieImageCheck = movieData?.results?.filter(
    (movie) => movie.backdrop_path !== null
  );

  if (movieImageCheck?.length === 0) {
    return (
      <div className="text-white flex flex-col items-center pt-40">
        <div className="text-2xl sm:text-4xl font-semibold mb-3">
          No Results
        </div>
        <p className="text-base sm:text-lg">
          Go back to{" "}
          <Link className="font-bold underline hover:text-[#dc1623]" href="/">
            main page
          </Link>{" "}
          or search again.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 relative justify-items-center px-3 bg-[#16151a]">
        {movieImageCheck?.map((movie, index) => {
          const titleLength =
            movie?.title?.length || movie?.original_name?.length;
          const moviName = movie?.title || movie?.original_name;
          const releaseDate = movie?.release_date || movie?.first_air_date;
          const voteAverage = movie?.vote_average;
          return (
            <Link
              href={`/detail/${movie?.id}?type=movie`}
              className="relative w-80 h-96 m-5 border border-white rounded-xl hover:opacity-80 duration-300 hover:shadow-2xl hover:shadow-white/[.50]"
              key={index}
            >
              <Image
                className="object-cover rounded-xl"
                src={`https://image.tmdb.org/t/p/w780${movie?.backdrop_path}`}
                fill={true}
                sizes="100%"
                priority={true}
                alt="movie-image"
              />
              <div className=" absolute z-50 bottom-0 w-full px-3 py-4 bg-gradient-to-t from-black  to-[#16151a]/[.80] rounded-xl rounded-t-none">
                <h2 className="text-white font-bold text-lg">
                  {titleLength > 20
                    ? moviName?.substring(0, 28) + "..."
                    : moviName}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-[#4e4d52] text-sm font-semibold">
                    {releaseDate?.substring(0, 4)}
                  </div>
                  <div className="text-[#f8b200]">
                    {voteAverage?.toFixed(1)}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Suspense>
        <SearchPaginationButtons
          totalPage={totalPage}
          showType={`search-result/movie/${params.showName}`}
        />
      </Suspense>
    </>
  );
}
