import React from "react";
import MainSlider from "./sliders/MainSlider";
import getMainSliderShows from "@/actions/getMainSliderShows";

export default async function Hero() {
  const data = await getMainSliderShows();

  return (
    <>
      <MainSlider results={data?.results} />
    </>
  );
}
