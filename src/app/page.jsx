import Hero from "@/components/Hero";
import PopularRatedSlider from "@/components/sliders/PopularRatedSlider";
import Upcomings from "@/components/upcomings/Upcomings";

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
    }?api_key=${process.env.API_KEY}`,
    { cache: "no-cache" }
  );

  const data = await response.json();

  return (
    <section className="-mt-[3.5rem] sm:-mt-[3.8rem] md:-mt-[5rem] bg-[#16151a]">
      <Hero />
      <PopularRatedSlider results={data?.results} />
      <Upcomings />
    </section>
  );
}
