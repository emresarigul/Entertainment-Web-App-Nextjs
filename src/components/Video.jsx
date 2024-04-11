"use client";
import React, { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { ImYoutube2 } from "react-icons/im";
import Link from "next/link";

export default function Video({ videoDatas }) {
  const [windowWidth, setWindowWidth] = useState(null);

  // finds the window width
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // finds the official video from the api data
  function findOfficialTrailers(el) {
    const officialTrailers = el.results.filter((item) => {
      return item.type === "Trailer";
    });
    return officialTrailers;
  }

  const officialTrailers = findOfficialTrailers(videoDatas);

  // for making youtube video autoplay
  const onReady = (event) => {
    const player = event.target;
    player.playVideo();
  };

  return (
    <div>
      {windowWidth >= 1280 && (
        <YouTube
          opts={{
            width: "100%",
            height: "1200",
            playerVars: {
              mute: 1,
              controls: 0,
              disablekb: 1,
              loop: 1,
              playlist:
                officialTrailers[0]?.key ||
                videoDatas.results[0]?.key ||
                videoDatas.results[1]?.key ||
                videoDatas.results[2]?.key ||
                videoDatas.results[3]?.key ||
                videoDatas.results[4]?.key,
            },
          }}
          onReady={onReady}
          videoId={
            officialTrailers[0]?.key ||
            videoDatas.results[0]?.key ||
            videoDatas.results[1]?.key ||
            videoDatas.results[2]?.key ||
            videoDatas.results[3]?.key ||
            videoDatas.results[4]?.key
          }
          className="overflow-hidden brightness-[0.70] w-full -mt-[350px] h-[50rem]"
        />
      )}
      {windowWidth >= 768 && windowWidth <= 1279 && (
        <YouTube
          opts={{
            width: "100%",
            height: "1000",
            playerVars: {
              mute: 1,
              controls: 0,
              disablekb: 1,
              loop: 1,
              playlist:
                officialTrailers[0]?.key ||
                videoDatas.results[0]?.key ||
                videoDatas.results[1]?.key ||
                videoDatas.results[2]?.key ||
                videoDatas.results[3]?.key ||
                videoDatas.results[4]?.key,
            },
          }}
          onReady={onReady}
          videoId={
            officialTrailers[0]?.key ||
            videoDatas.results[0]?.key ||
            videoDatas.results[1]?.key ||
            videoDatas.results[2]?.key ||
            videoDatas.results[3]?.key ||
            videoDatas.results[4]?.key
          }
          className="overflow-hidden brightness-[0.70] w-full -mt-[400px] h-[45rem]"
        />
      )}
      {windowWidth < 768 && (
        <YouTube
          opts={{
            width: "100%",
            height: "550",
            playerVars: {
              mute: 1,
              controls: 0,
              disablekb: 1,
              loop: 1,
              playlist:
                officialTrailers[0]?.key ||
                videoDatas.results[0]?.key ||
                videoDatas.results[1]?.key ||
                videoDatas.results[2]?.key ||
                videoDatas.results[3]?.key ||
                videoDatas.results[4]?.key,
            },
          }}
          onReady={onReady}
          videoId={
            officialTrailers[0]?.key ||
            videoDatas.results[0]?.key ||
            videoDatas.results[1]?.key ||
            videoDatas.results[2]?.key ||
            videoDatas.results[3]?.key ||
            videoDatas.results[4]?.key
          }
          className="overflow-hidden lg:w-full h-[23rem] -mt-[240px] brightness-[0.70]"
        />
      )}

      <Link
        href={`https://www.youtube.com/watch?v=${
          officialTrailers[0]?.key ||
          videoDatas.results[0]?.key ||
          videoDatas.results[1]?.key ||
          videoDatas.results[2]?.key ||
          videoDatas.results[3]?.key ||
          videoDatas.results[4]?.key
        }`}
        className="absolute right-5 z-50 top-36 text-5xl flex md:hidden items-center gap-1"
      >
        <div className="text-white text-xs">Watch on</div>
        <ImYoutube2 className="text-white" />
      </Link>
    </div>
  );
}
