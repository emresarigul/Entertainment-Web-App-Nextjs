export default async function getMainSliderShows() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`,
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
