import api from "../axios";
import { MediaDetail } from "../types";

const url = (id: string, lang?: string) => {
  return `https://api.themoviedb.org/3/movie/${id}?language=${lang ?? "en-US"}`;
};

export default async function fetchMovieDetail(id: string, lang?: string) {
  const resp = await api.get<MediaDetail>(url(id, lang));

  return resp.data;
}
