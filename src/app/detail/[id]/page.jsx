import React from "react";
import Video from "@/components/Video";
import Image from "next/image";
import Link from "next/link";
import getMoviesSeriesDetail from "@/actions/getMoviesSeriesDetail";

export default async function page({ params, searchParams }) {
  const data = await getMoviesSeriesDetail(params, searchParams);

  const checkVideo = data?.videos?.results?.length;

  return (
    <section className="bg-black">
      {checkVideo === 0 || undefined ? (
        <div className="relative w-full h-96 brightness-[0.70]">
          <Image
            className="object-cover"
            fill={true}
            src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
            alt="src"
          />
        </div>
      ) : (
        <Video videoDatas={data?.videos} checkVideo={checkVideo} />
      )}

      <div className="relative py-5 border-t-4 border-[#dc1623]">
        <Image
          className="bg-no-repeat bg-cover bg-center object-cover h-[550px] w-full absolute top-0 brightness-[0.15]"
          src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
          alt="img"
          fill={true}
          quality={10}
        />

        <div className="relative z-50 text-2xl md:text-3xl text-white font-bold px-5 mb-3 flex items-center flex-wrap gap-3">
          <h2>{data?.title || data?.original_name}</h2>
          <div className="relative z-50 flex items-center text-[#f8b200] text-sm font-normal">
            {data?.genres?.map((genre, index) => {
              return (
                <div className="text-xs md:text-base mx-1" key={index}>
                  {genre?.name}
                </div>
              );
            })}
          </div>
        </div>

        <p className="relative z-50 text-sm md:text-base text-white px-5 max-w-7xl mb-6">
          {data?.overview}
        </p>
        <div className="relative z-50 text-white text-3xl font-semibold px-5">
          Cast
        </div>
        <div className="relative z-50 flex mt-5 overflow-auto gap-10 pb-5 px-5">
          {data?.credits?.cast
            ?.filter((cast) => cast.profile_path)
            ?.map((cast, index) => {
              return (
                <Link
                  href={`/person/${cast?.id}`}
                  className=" basis-40 md:basis-48 grow-0 shrink-0"
                  key={index}
                >
                  <Image
                    className="border-2 border-white rounded-3xl mb-3"
                    width={500}
                    height={500}
                    priority={true}
                    src={`https://image.tmdb.org/t/p/h632${cast?.profile_path}`}
                    alt={cast?.name}
                  />
                  <div className="text-white text-base md:text-lg font-semibold">
                    {cast?.name}
                  </div>
                  <div className="text-white text-sm md:text-base">
                    {cast?.character}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
