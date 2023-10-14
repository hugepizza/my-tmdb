"use client";
import { useState } from "react";
import DiscoverResult from "./DiscoverResult";
import { DiscoverContext } from "./DiscoverContext";
import DiscoverFilter from "./DiscoverFilter";
import { navConfig } from "../components/Nav";
import { Media, mediaType } from "../sdk/imdb/types";

export default function Page({ params }: { params: { slug: string[] } }) {
  const mediaType = params.slug[0];
  const channel = params.slug[1] ?? "";

  const [discoverResult, setDiscoverResult] = useState<Media[]>([]);
  const [page, setPage] = useState(1);
  const title = navConfig
    .find((ele) => ele.route === mediaType)
    ?.channels.find((ele) => ele.route === channel)?.title;

  if (!title) {
    return <div>Channel Not Exists</div>;
  }
  return (
    <DiscoverContext.Provider
      value={{
        discoverResult: discoverResult,
        setDiscoverResult: setDiscoverResult,
        page: page,
        setPage: setPage,
        mediaType: mediaType as mediaType,
      }}
    >
      <div className="flex flex-col h-full w-full px-10 py-[20px]">
        <div className="w-full mb-5">{title}</div>
        <div className="flex flex-row text-base">
          <DiscoverFilter />
          <DiscoverResult />
        </div>
      </div>
    </DiscoverContext.Provider>
  );
}
