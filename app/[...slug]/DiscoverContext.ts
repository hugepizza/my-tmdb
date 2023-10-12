import { createContext } from "react";
import { Media, mediaType } from "../sdk/imdb/types";

export const DiscoverContext = createContext({
  discoverResult: [] as Media[],
  setDiscoverResult: (medias: Media[]) => {},
  page: 1,
  setPage: (page: number) => {},
  mediaType: "" as mediaType,
});
