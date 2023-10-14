import api from "./axios";

interface AuthorDetail {
  name: string;
  username: string;
  avatar_path: string;
  rating?: number;
}

export interface Review {
  author: string;
  author_details: AuthorDetail;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface Reviews {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

const url = (mediaType: string, id: string) => {
  return `https://api.themoviedb.org/3/${mediaType}/${id}/reviews`;
};

export default async function fetchReviews(mediaType: string, id: string) {
  const resp = await api.get<Reviews>(url(mediaType, id));
  return resp.data;
}
