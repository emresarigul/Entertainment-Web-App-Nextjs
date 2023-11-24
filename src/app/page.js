import Hero from "./_components/Hero";
import PopularRatedSlider from "./_components/sliders/PopularRatedSlider";
import Upcomings from "./_components/upcomings/Upcomings";

export default async function Home({ searchParams }) {
  const searchTerm = searchParams.genre || "trendsNow";
  //"It fetches data from the API based on the "searchTerm" variable.
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      searchTerm === "trendsNow"
        ? "trending/all/week"
        : searchTerm === "topRatedMovies"
        ? "movie/top_rated"
        : searchTerm === "topRatedSeries"
        ? "tv/top_rated"
        : null
    }?api_key=${process.env.API_KEY}`
  );

  const data = await response.json();

  return (
    <div className="-mt-[3.8rem] md:-mt-[5rem] bg-[#16151a]">
      <Hero />
      <PopularRatedSlider results={data.results} />
      <Upcomings />
    </div>
  );
}
