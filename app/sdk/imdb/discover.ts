import api from "./axios";
import { Media, mediaType } from "./types";
const url = (mediaType: mediaType, lang?: string) => {
  return `https://api.themoviedb.org/3/discover/${mediaType}`;
};

export default async function fetchDiscover(
  mediaType: mediaType,
  lang?: string
) {
  const resp = await api.get<{ results: Media[] }>(url(mediaType, lang));
  return resp.data.results;
}
