import api from "./axios";
import { Media, mediaType } from "./types";

interface Keywords {
  id: number;
  keywords: {
    id: number;
    name: string;
  }[];
}

const url = (mediaType: string, id: string) => {
  return `https://api.themoviedb.org/3/${mediaType}/${id}/keywords`;
};

export default async function fetchKeywords(mediaType: string, id: string) {
  const resp = await api.get<Keywords>(url(mediaType, id));
  return resp.data;
}
