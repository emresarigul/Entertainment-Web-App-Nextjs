import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function page({ params, searchParams }) {
  const showType = searchParams.type || "movie";
  const personResponse = await fetch(
    `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.API_KEY}&&append_to_response=movie_credits,tv_credits`,
    { cache: "no-cache" }
  );
  const response = await personResponse.json();
  //removes the movies which does not have poster
  const filteredMovies = response.movie_credits.cast.filter(
    (movie) => movie.poster_path !== null
  );
  // sorts movies by popularity
  const sortedMovies = filteredMovies.sort(
    (a, b) => b.popularity - a.popularity
  );
  //removes the series which does not have poster
  const filteredSeries = response.tv_credits.cast.filter(
    (serie) => serie.poster_path !== null
  );
  // sorts series by popularity
  const sortedSeries = filteredSeries.sort(
    (a, b) => b.popularity - a.popularity
  );

  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${sortedMovies[0].backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
      className="min-h-screen"
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-background-overlay"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center px-5 pt-12 gap-5 md:gap-7 lg:gap-10">
        <div className="basis-2/6 mx-5 sm:mx-0">
          <Image
            className="border-2 rounded-lg"
            src={`https://image.tmdb.org/t/p/w780${response.profile_path}`}
            width={350}
            height={500}
            alt=""
          />
        </div>
        <div className="basis-5/6 space-y-5 text-white">
          <h2 className="font-bold text-2xl lg:text-3xl">{response.name}</h2>
          <span className="text-sm">
            {response.birthday?.split("-").reverse().join("-")}
          </span>
          <div>
            <h3 className="font-semibold text-base lg:text-lg mb-2">
              Biography
            </h3>
            <p className="text-sm lg:text-base lg:pr-10">
              {response.biography}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white flex justify-center gap-5 text-lg font-semibold relative z-10 pt-20">
          <Link
            href={`/person/${params.id}?type=movie`}
            scroll={false}
            className="cursor-pointer"
          >
            Movies
            {showType === "movie" && (
              <div className="block w-full md:w-2.5 h-1 md:h-2.5 rounded-full md:mt-1 bg-[#dc1623] left-0 right-0 mx-auto"></div>
            )}
          </Link>
          <Link
            href={`/person/${params.id}?type=tv`}
            scroll={false}
            className="cursor-pointer"
          >
            Series
            {showType === "tv" && (
              <div className="block w-full md:w-2.5 h-1 md:h-2.5 rounded-full md:mt-1 bg-[#dc1623] left-0 right-0 mx-auto"></div>
            )}
          </Link>
        </div>
        <div className="relative z-10 flex gap-10 overflow-x-scroll pt-10 pb-10 px-5">
          {sortedMovies.map((movie) => {
            const titleLength = movie.original_title?.length;
            return (
              <Link
                href={`/detail/${movie.id}?type=movie`}
                className={`shrink-0 basis-40 md:basis-48 ${
                  showType === "tv" ? "hidden" : "block"
                }`}
                key={movie.id}
              >
                <Image
                  className="rounded-3xl mb-3 border-2"
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  width={300}
                  height={300}
                  alt=""
                />
                <div>
                  <div className="text-white">
                    {titleLength > 20
                      ? movie.original_title.substring(0, 19) + "..."
                      : movie.original_title}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-[#4e4d52] text-sm font-semibold">
                      {movie.release_date.substring(0, 4)}
                    </div>
                    <div className="text-[#f8b200] text-sm md:text-base">
                      {movie.vote_average.toFixed(1)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          {sortedSeries.map((serie, index) => {
            const titleLength = serie.original_name?.length;
            return (
              <Link
                href={`/detail/${serie.id}?type=tv`}
                className={`shrink-0 basis-40 md:basis-48 ${
                  showType === "movie" ? "hidden" : "block"
                }`}
                key={index}
              >
                <Image
                  className="rounded-3xl mb-3 border-2"
                  src={`https://image.tmdb.org/t/p/w780${serie.poster_path}`}
                  width={300}
                  height={300}
                  alt=""
                />
                <div>
                  <div className="text-white">
                    {titleLength > 20
                      ? serie.original_name.substring(0, 19) + "..."
                      : serie.original_name}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-[#4e4d52] text-sm font-semibold">
                      {serie.first_air_date.substring(0, 4)}
                    </div>
                    <div className="text-[#f8b200] text-sm md:text-base">
                      {serie.vote_average.toFixed(1)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
