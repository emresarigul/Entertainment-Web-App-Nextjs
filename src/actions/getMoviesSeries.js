"use server";
export default async function getMoviesSeries(searchTerm) {
  try {
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
      {
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("Error fetching data:", err);
    return undefined;
  }
}
