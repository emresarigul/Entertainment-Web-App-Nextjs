"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { GoEye } from "react-icons/go";
import Link from "next/link";

export default function UpcomingShows({
  id,
  backdrop_path,
  title,
  original_name,
  release_date,
  first_air_date,
  vote_average,
  genreData,
  genre_ids,
  overview,
}) {
  const titleLength = title?.length || original_name?.length;
  const movieName = title || original_name;
  const releaseDate = release_date || first_air_date;
  const voteAverage = vote_average;
  const [modal, setModal] = useState(false);
  const matchedGenres = [];

  genre_ids.forEach((id) => {
    const matchedGenre = genreData.genres.find((genre) => genre.id === id);
    if (matchedGenre) {
      matchedGenres.push(matchedGenre.name);
    }
  });

  return (
    <>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/[0.70] flex items-center justify-center z-50"
        >
          <div className="relative z-50 w-full lg:w-[900px] xl:w-[1200px] sm:h-[500px] left-0 right-0 px-5 lg:mx-auto mx-5">
            <div className=" relative z-50 px-3 py-6 sm:p-16">
              <div className="flex items-center mb-7 gap-3">
                <div className="text-white flex items-center gap-2">
                  <IoIosStar className="text-[#f8b200] text-2xl" />
                  <div className="text-2xl font-semibold">
                    {voteAverage.toFixed(1)}
                  </div>
                </div>
                <div className="flex gap-3">
                  {matchedGenres.slice(0, 4).map((genres, index) => {
                    return (
                      <div className="text-[#f8b200] text-sm" key={index}>
                        {genres}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-white text-3xl sm:text-5xl font-bold mb-3 sm:mb-7">
                {movieName}
              </div>
              <div className="text-white max-w-4xl text-sm sm:text-base mb-5">
                {overview}
              </div>
              <Link
                href={`/detail/${id}?type=movie`}
                className="inline-flex items-center text-white gap-2 bg-[#dc1623] px-6 py-1.5 md:px-14 md:py-2.5 rounded-full font-medium shadow-2xl shadow-[#dc1623]/[.60]"
              >
                Detail
                <GoEye className="text-xl" />
              </Link>
            </div>

            <Image
              className="object-cover object-top brightness-50"
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              fill={true}
              sizes="100%"
              priority={true}
              alt="movie-image"
            />
          </div>
        </div>
      )}
      <div
        onClick={() => setModal(true)}
        className="relative w-40 h-56 sm:w-80 sm:h-96 m-5 border border-white rounded-xl hover:opacity-80 duration-300 hover:shadow-2xl hover:shadow-white/[.50] cursor-pointer"
      >
        <Image
          className="object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          fill={true}
          sizes="100%"
          priority={true}
          alt="movie-image"
        />
        <div className=" absolute z-40 bottom-0 w-full px-3 py-4 bg-gradient-to-t from-black  to-[#16151a]/[.80] rounded-xl rounded-t-none">
          <div className="text-white hidden sm:block font-bold text-sm sm:text-lg">
            {titleLength > 20 ? movieName.substring(0, 28) + "..." : movieName}
          </div>
          <div className="text-white sm:hidden font-bold text-sm sm:text-lg">
            {titleLength > 15 ? movieName.substring(0, 15) + "..." : movieName}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[#4e4d52] text-sm font-semibold">
              {releaseDate.substring(0, 4)}
            </div>
            <div className="text-[#f8b200]">{voteAverage.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
