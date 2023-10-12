"use client";
import { useContext, useEffect, useState } from "react";
import { DiscoverContext } from "./DiscoverContext";
import fetchDiscover from "../sdk/imdb/discover";

interface DiscoverParams {
  sort: string | undefined;
  region: string | undefined;
  releaseDate: string | undefined;
  genres: string | undefined;
}
export default function DiscoverFilter() {
  const [discoverParams, setDiscoverParams] = useState<DiscoverParams>(
    {} as DiscoverParams
  );
  const { mediaType, setDiscoverResult, setPage } = useContext(DiscoverContext);
  const discover = async (param: DiscoverParams) => {
    const medias = await fetchDiscover(mediaType, 1);
    setDiscoverResult(medias);
    setPage(1);
  };
  return (
    <div className="flex flex-col flex-shrink-0 w-[260px]">
      <Collapse title="Sort">
        <SortCollapse
          discoverParams={discoverParams}
          setDiscoverParams={setDiscoverParams}
        />
      </Collapse>
      <Collapse title="Sort">
        <SortCollapse
          discoverParams={discoverParams}
          setDiscoverParams={setDiscoverParams}
        />
      </Collapse>
      <button
        className="btn mt-2"
        onClick={async () => {
          await discover(discoverParams);
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
  discoverParams,
  setDiscoverParams,
}: {
  discoverParams: DiscoverParams;
  setDiscoverParams: (params: DiscoverParams) => void;
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
            setDiscoverParams({ ...discoverParams, sort: ele.value });
          }}
        >
          {ele.text}
        </option>
      ))}
    </select>
  );
}
