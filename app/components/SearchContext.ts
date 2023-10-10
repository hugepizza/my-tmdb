import { createContext } from "react";

export const SearchContext = createContext({
  searchResult: [] as Media[],
  setSearchResult: (medias: Media[]) => {},
  page: 1,
  setPage: (page: number) => {},
});
