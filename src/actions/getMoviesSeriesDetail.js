export default async function getMoviesSeriesDetail(params, searchParams) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${searchParams.type}/${params.id}?api_key=${process.env.API_KEY}&append_to_response=videos,credits`,
      {
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Network response was not ok");
      return [];
    }

    return result;
  } catch (err) {
    console.error("Error fetching data:", err);
    return undefined;
  }
}
