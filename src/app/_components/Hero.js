import React from "react";
import MainSlider from "./MainSlider";

export default async function Hero() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();

  return (
    <>
      <MainSlider results={data.results} />
    </>
  );
}
