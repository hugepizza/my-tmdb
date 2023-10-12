import api from "./axios";
import { Media, mediaType } from "./types";

interface ExternalIds {
  id: number;
  imdb_id: string;
  wikidata_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

const url = (mediaType: string, id: string) => {
  return `https://api.themoviedb.org/3/${mediaType}/${id}/external_ids`;
};

export default async function fetchExternalIds(mediaType: string, id: string) {
  const resp = await api.get<ExternalIds>(url(mediaType, id));
  return resp.data;
}
