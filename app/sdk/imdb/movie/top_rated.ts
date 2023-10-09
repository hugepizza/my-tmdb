import api from "../axios";

const url = (page?: number, lang?: string) => {
  return `https://api.themoviedb.org/3/movie/top_rated?language=${
    lang ?? "en-US"
  }&page=${page ?? 1}`;
};

export default async function fetchTopRatedMovies(
  page?: number,
  lang?: string
) {
  const resp = await api.get<{ results: Media[] }>(url(page, lang));
  return resp.data.results;
}
