"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { GoEye } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function MainSlider({ results }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#dc1623",
        }}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {results?.map((result, index) => {
          const voteAverage = result?.vote_average;
          const descriptionLength = result?.overview?.length;
          const showNameLength =
            result?.title?.length || result?.original_name?.length;
          return (
            <SwiperSlide className="" key={index}>
              <div className="relative !w-full !h-[33rem] md:!h-[45rem]">
                <div className="absolute top-32 md:top-40 lg:top-48 left-5 md:left-20 lg:left-28 xl:left-36 2xl:left-48 m-auto text-white z-50">
                  <div
                    className={`${
                      showNameLength > 20
                        ? "text-xl w-80 md:w-full"
                        : "text-3xl"
                    } md:text-4xl lg:text-5xl font-bold mb-5 lg:mb-10 flex items-center gap-3 lg:gap-5`}
                  >
                    <h2>{result?.title || result?.original_name}</h2>
                    <div className="text-[#f8b200] text-sm lg:text-2xl">
                      {voteAverage?.toFixed(1)}
                    </div>
                  </div>
                  <p className="text-sm md:text-base max-w-5xl mb-8 mr-8 truncate-2">
                    {descriptionLength > 400
                      ? result?.overview?.substring(0, 300) + "..."
                      : result?.overview}
                  </p>
                  <Link
                    href={`/detail/${result?.id}?type=${result?.media_type}`}
                    className="inline-flex items-center gap-2 bg-[#dc1623] px-6 py-1.5 md:px-14 md:py-2.5 rounded-full font-medium shadow-2xl shadow-[#dc1623]/[.60] md:hover:bg-[#d00000] duration-200"
                  >
                    Detail
                    <GoEye className="text-xl" />
                  </Link>
                </div>
                <Image
                  className="object-cover object-top brightness-[0.50]"
                  src={`https://image.tmdb.org/t/p/w1280${result?.backdrop_path}`}
                  fill={true}
                  sizes="100%"
                  alt="movie-image"
                  placeholder="blur"
                  quality={50}
                  blurDataURL={`https://image.tmdb.org/t/p/w1280${result?.backdrop_path}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
