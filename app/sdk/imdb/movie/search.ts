import api from "../axios";

const url = (page?: number, lang?: string) => {
  return `https://api.themoviedb.org/3/search/movie?include_adult=false&language=${
    lang ?? "en-US"
  }&page=${page ?? 1}&query=hero`;
};

export default async function fetchSearchMovies(page?: number, lang?: string) {
  const resp = await api.get<{ results: Media[] }>(url(page, lang));
  return resp.data.results;
}
