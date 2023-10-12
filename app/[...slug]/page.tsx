"use client";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { SearchContext } from "./SearchContext";
import SearchFilter from "./SearchFilter";
import { navConfig } from "../components/Nav";
import { Media, mediaType } from "../sdk/imdb/types";

export default function Page({ params }: { params: { slug: string[] } }) {
  const mediaType = params.slug[0];
  const channel = params.slug[1] ?? "";

  const [searchResult, setSearchResult] = useState<Media[]>([]);
  const [page, setPage] = useState(1);
  const title = navConfig
    .find((ele) => ele.route === mediaType)
    ?.channels.find((ele) => ele.route === channel)?.title;

  if (!title) {
    return <div>Channel Not Exists</div>;
  }
  return (
    <SearchContext.Provider
      value={{
        searchResult: searchResult,
        setSearchResult: setSearchResult,
        page: page,
        setPage: setPage,
        mediaType: mediaType as mediaType,
      }}
    >
      <div className="flex flex-col h-full w-full px-10 py-[20px] test">
        <div className="w-full mb-5">{title}</div>
        <div className="flex flex-row text-base">
          <SearchFilter />
          <SearchResult />
        </div>
      </div>
    </SearchContext.Provider>
  );
}
