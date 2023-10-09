import api from "../axios";

const url = (page?: number, lang?: string) => {
  return `https://api.themoviedb.org/3/tv/top_rated?language=${
    lang ?? "en-US"
  }&page=${page ?? 1}`;
};

export default async function fetchTopRatedTv(
  page?: number,
  lang?: string
) {
  const resp = await api.get<{ results: Media[] }>(url(page, lang));
  return resp.data.results;
}
