import { createContext } from "react";
import { Media, mediaType } from "../sdk/imdb/types";

export const SearchContext = createContext({
  searchResult: [] as Media[],
  setSearchResult: (medias: Media[]) => {},
  page: 1,
  setPage: (page: number) => {},
  mediaType: "" as mediaType,
});
