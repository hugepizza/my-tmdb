import api from "./axios";
import { Media, mediaType } from "./types";
const url = (mediaType: mediaType, lang?: string) => {
  return `https://api.themoviedb.org/3/${mediaType}/top_rated`;
};

export default async function fetchTopRated(
  mediaType: mediaType,
  lang?: string
) {
  const resp = await api.get<{ results: Media[] }>(
    url(mediaType ?? "all", lang)
  );
  return resp.data.results;
}
