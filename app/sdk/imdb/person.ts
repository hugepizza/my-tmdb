import api from "./axios";

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface PersonDetail {
  adult: false;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

const url = (id: string, lang?: string) => {
  return `https://api.themoviedb.org/3/person/${id}?language=${
    lang ?? "en-US"
  }`;
};

export default async function fetchPersonDetail(id: string, lang?: string) {
  const resp = await api.get<PersonDetail>(url(id, lang));
  return resp.data;
}
