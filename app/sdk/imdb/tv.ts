import api from "./axios";

const url = (page?: number, lang?: string) => {
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${
    lang ?? "en-US"
  }&page=${page ?? 1}&sort_by=popularity.desc`;
};

export default async function fetchPopularMovies(page?: number, lang?: string) {
  const resp = await api.get<{ results: Media[] }>(url(page, lang));
  return resp.data.results;
}
