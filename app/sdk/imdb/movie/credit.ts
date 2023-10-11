import api from "../axios";
import { Credit } from "../types";

const url = (id: string, lang?: string) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?language=${
    lang ?? "en-US"
  }`;
};
export default async function fetchMovieCredit(id: string, lang?: string) {
  const resp = await api.get<Credit>(url(id, lang));

  return resp.data;
}
