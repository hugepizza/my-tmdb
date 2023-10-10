"use client";
import { useContext, useEffect, useState } from "react";
import fetchSearchMovies from "../sdk/imdb/movie/search";
import { SearchContext } from "./SearchContext";

interface SearchParams {
  sort: string | undefined;
  region: string | undefined;
  releaseDate: string | undefined;
  genres: string | undefined;
}
export default function SearchFilter() {
  const [searchParams, setSearchParams] = useState<SearchParams>(
    {} as SearchParams
  );
  const { setSearchResult, searchResult, setPage } = useContext(SearchContext);
  const search = async (param: SearchParams) => {
    const medias = await fetchSearchMovies(1);
    setSearchResult(medias);
    setPage(1);
  };
  return (
    <div className="flex flex-col flex-shrink-0 w-[260px]">
      <Collapse title="Sort">
        <SortCollapse
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Collapse>
      <Collapse title="Sort">
        <SortCollapse
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Collapse>
      <button
        className="btn mt-2"
        onClick={async () => {
          await search(searchParams);
        }}
      >
        Search
      </button>
    </div>
  );
}

function Collapse({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-10 mb-6">
      <div
        tabIndex={0}
        className="collapse bg-white rounded-lg collapse-arrow border-solid border-[1px] shadow-md"
      >
        <input type="checkbox" className="p-0 min-h-0 h-[50px]" />
        <div className="collapse-title p-0 min-h-0 px-[16px] py-[14px]">
          {title}
        </div>
        <div className="collapse-content">{children}</div>
      </div>
    </div>
  );
}

function SortCollapse({
  searchParams,
  setSearchParams,
}: {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
}) {
  const options = [
    { text: "Popularity Descending", value: "" },
    { text: "Popularity Ascending", value: "" },
    { text: "Rating Descending", value: "" },
    { text: "Rating Ascending", value: "" },
    { text: "Release Date Descending", value: "" },
    { text: "Release Date Ascending", value: "" },
    { text: "Title (A-Z)", value: "" },
    { text: "Title (Z-A)", value: "" },
  ];
  return (
    <select className="select w-full max-w-xs">
      {options.map((ele) => (
        <option
          key={ele.text}
          onClick={() => {
            setSearchParams({ ...searchParams, sort: ele.value });
          }}
        >
          {ele.text}
        </option>
      ))}
    </select>
  );
}
