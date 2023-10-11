import api from "./axios";
import { Media, mediaType } from "./types";

const url = (mediaType: mediaType, page?: number, lang?: string) => {
  return `https://api.themoviedb.org/3/search/${mediaType}?include_adult=false&language=${
    lang ?? "en-US"
  }&page=${page ?? 1}&query=hero`;
};

export default async function fetchSearch(
  mediaType: mediaType,
  page?: number,
  lang?: string
) {
  const resp = await api.get<{ results: Media[] }>(url(mediaType, page, lang));
  return resp.data.results;
}
