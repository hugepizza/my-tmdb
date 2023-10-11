import api from "./axios";
import { Media, mediaType, timeWindow } from "./types";
const url = (mediaType: mediaType, timeWindow: timeWindow, lang?: string) => {
  return `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}`;
};

export default async function fetchTending(
  timeTindow: timeWindow,
  mediaType?: mediaType,
  lang?: string
) {
  const resp = await api.get<{ results: Media[] }>(
    url(mediaType ?? "all", timeTindow, lang)
  );
  return resp.data.results;
}
