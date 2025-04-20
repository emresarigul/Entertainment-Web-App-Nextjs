import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { GoEye } from "react-icons/go";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const matchedGenres = genre_ids?.map(
    (id) => genreData?.genres?.find((genre) => genre?.id === id)?.name
  );

  return (
    <>
      <Dialog>
        <DialogTrigger className="relative w-40 h-56 sm:w-80 sm:h-96 m-5 duration-300 border-2 border-white border-opacity-0 hover:border-opacity-100 hover:shadow-2xl hover:shadow-white/[.30] rounded-xl cursor-pointer">
          <Image
            className="object-cover rounded-xl"
            src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
            fill={true}
            sizes="100%"
            priority={true}
            alt="movie-image"
          />
          <span className="absolute z-40 bottom-0 w-full px-3 py-4 bg-gradient-to-t from-black to-[#16151a]/[.80] rounded-xl rounded-t-none block">
            <span className="text-white hidden sm:block font-bold text-sm sm:text-lg text-left">
              {titleLength > 20
                ? movieName?.substring(0, 28) + "..."
                : movieName}
            </span>
            <span className="text-white sm:hidden font-bold text-sm sm:text-lg">
              {titleLength > 15
                ? movieName?.substring(0, 15) + "..."
                : movieName}
            </span>
            <span className="flex items-center justify-between">
              <span className="text-[#4e4d52] text-sm font-semibold block">
                {releaseDate?.substring(0, 4)}
              </span>
              <span className="text-[#f8b200]">{voteAverage?.toFixed(1)}</span>
            </span>
          </span>
        </DialogTrigger>
        <DialogContent className="w-11/12 lg:w-[900px] xl:w-[1200px] sm:h-[500px] px-3 py-6 sm:p-16">
          <DialogHeader>
            <DialogDescription>
              <span className="relative z-50 block">
                <span className="flex items-center mb-7 mt-3 md:mt-0 gap-3">
                  <span className="text-white flex items-center gap-2">
                    <IoIosStar className="text-[#f8b200] text-2xl" />
                    <span className="text-2xl font-semibold">
                      {voteAverage?.toFixed(1)}
                    </span>
                  </span>
                  <span className="flex gap-3">
                    {matchedGenres?.slice(0, 4)?.map((genres, index) => {
                      return (
                        <span
                          className="text-[#f8b200] text-sm block"
                          key={index}
                        >
                          {genres}
                        </span>
                      );
                    })}
                  </span>
                </span>
                <span className="text-white text-3xl sm:text-5xl font-bold mb-3 sm:mb-7 block">
                  {movieName}
                </span>
                <span className="text-white max-w-4xl text-sm sm:text-base mb-5 block">
                  {overview}
                </span>
                <Link
                  href={`/detail/${id}?type=movie`}
                  className="inline-flex items-center text-white gap-2 bg-[#dc1623] px-6 py-1.5 md:px-14 md:py-2.5 rounded-full font-medium shadow-2xl shadow-[#dc1623]/[.60] md:hover:bg-[#d00000] duration-200"
                >
                  Detail
                  <GoEye className="text-xl" />
                </Link>
              </span>

              <Image
                className="object-cover object-top brightness-50"
                src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                fill={true}
                sizes="100%"
                priority={true}
                alt="movie-image"
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
