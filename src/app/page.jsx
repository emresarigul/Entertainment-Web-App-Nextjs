import Hero from "@/components/Hero";
import PopularRatedSlider from "@/components/sliders/PopularRatedSlider";
import Upcomings from "@/components/upcomings/Upcomings";
import getMoviesSeries from "@/actions/getMoviesSeries";

export default async function Home({ searchParams }) {
  const searchTerm = searchParams.genre || "trendsNow";
  //"It fetches data from the API based on the "searchTerm" variable.
  const data = await getMoviesSeries(searchTerm);

  return (
    <section className="-mt-[3.5rem] sm:-mt-[3.8rem] md:-mt-[5rem] bg-[#16151a]">
      <Hero />
      <PopularRatedSlider results={data?.results} />
      <Upcomings />
    </section>
  );
}
