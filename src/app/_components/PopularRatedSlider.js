"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function PopularRatedSlider({ results }) {
  return (
    <div className="pt-16 pb-24 bg-[#16151a]">
      <div className="h-14 font-semibold px-2.5 md:px-5 max-w-7xl mx-auto mb-10 pb-8 border-b border-gray-500/[.30]">
        <div className="flex justify-between items-center">
          <Button buttonText="Trends Now" param="trendsNow" />
          <Button buttonText="Top Rated Movies" param="topRatedMovies" />
          <Button buttonText="Top Rated Series" param="topRatedSeries" />
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {results.map((result, index) => {
          const titleLength =
            result.title?.length || result.original_name?.length;
          const movieName = result.title || result.original_name;
          const releaseDate = result.release_date || result.first_air_date;
          const voteAverage = result.vote_average;
          return (
            <SwiperSlide
              key={index}
              className="relative !h-[19.2rem] md:!h-[25rem] lg:!h-[30rem]"
            >
              <Link
                href={`/detail/${result.id}?type=${
                  result.first_air_date ? "tv" : "movie"
                }`}
              >
                <Image
                  className="object-cover rounded-xl pb-16 !h-[20rem] md:!h-[25rem] lg:!h-[30rem]"
                  width={1000}
                  height={500}
                  src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                  sizes="100%"
                  priority={true}
                  quality={50}
                  placeholder="blur"
                  blurDataURL={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                  alt="movie-image"
                />
                <div className=" absolute z-50 bottom-0 w-full px-2 md:px-3">
                  <div className="text-white text-sm font-semibold md:font-bold md:text-lg">
                    {titleLength > 20
                      ? movieName.substring(0, 19) + "..."
                      : movieName}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[#4e4d52] text-sm font-semibold">
                      {releaseDate.substring(0, 4)}
                    </div>
                    <div className="text-[#f8b200] text-sm md:text-base">
                      {voteAverage.toFixed(1)}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
