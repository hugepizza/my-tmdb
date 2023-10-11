import fetchTopRated from "../sdk/imdb/top_rated";
import fetchTending from "../sdk/imdb/trending";
import CardList from "./Card";
import Scroller from "./ScrollerClient";

export interface ScrollerProps {
  title: string;
  panel: string;
  tabs: { group: string }[];
}
export async function ScrollerTrending() {
  const days = await fetchTending("day");
  const weeks = await fetchTending("week");
  return (
    <Scroller switchProps={{ title: "Tending" }}>
      {{
        Today: <CardList cards={days} />,
        "This Week": <CardList cards={weeks} />,
      }}
    </Scroller>
  );
}

export async function ScrollerTopRated() {
  const movies = await fetchTopRated("movie");
  movies.forEach((ele) => (ele.media_type = "movie"));
  const tv = await fetchTopRated("tv");
  tv.forEach((ele) => (ele.media_type = "tv"));
  return (
    <Scroller switchProps={{ title: "Top Rated" }}>
      {{
        Movie: <CardList cards={movies} />,
        TV: <CardList cards={tv} />,
      }}
    </Scroller>
  );
}
