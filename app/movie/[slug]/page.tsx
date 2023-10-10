"use client";
import { SearchContext } from "@/app/components/SearchContext";
import SearchFilter from "@/app/components/SearchFilter";
import { useState } from "react";
import SearchResult from "./SearchResult";

export default function Page({ params }: { params: { slug: string } }) {
  const mod = () => {
    switch (params.slug) {
      case "popular":
        return "Popular Movies";
    }
  };
  const [searchResult, setSearchResult] = useState<Media[]>([]);
  const [page, setPage] = useState(1);
  return (
    <SearchContext.Provider
      value={{
        searchResult: searchResult,
        setSearchResult: setSearchResult,
        page: page,
        setPage: setPage,
      }}
    >
      <div className="flex flex-col h-full w-full px-10 py-[20px] test">
        <div className="w-full mb-5">{mod()}</div>
        <div className="flex flex-row text-base">
          <SearchFilter />
          <SearchResult />
        </div>
      </div>
    </SearchContext.Provider>
  );
}
