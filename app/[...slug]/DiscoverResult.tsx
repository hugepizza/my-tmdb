import { CardLarge } from "@/app/components/Card";
import { DiscoverContext } from "@/app/[...slug]/DiscoverContext";
import { useContext, useEffect } from "react";
import fetchSearch from "../sdk/imdb/search";
import fetchDiscover from "../sdk/imdb/discover";

export default function DiscoverResult() {
  const { mediaType, discoverResult, setDiscoverResult, page, setPage } =
    useContext(DiscoverContext);

  useEffect(() => {
    fetchDiscover(mediaType, 1).then((data) => {
      setDiscoverResult(data);
    });
  }, []);

  if (discoverResult.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full pl-[20px]">
      <div className="flex flex-row flex-grow w-full h-full  justify-around flex-wrap  mt-[-30px]">
        {discoverResult.map((ele) => (
          <CardLarge key={ele.id} {...ele} media_type={mediaType} />
        ))}
      </div>
      <button
        className="btn btn-primary mt-[30px]"
        onClick={async () => {
          const newPage = page + 1;
          const newMedias = await fetchSearch(mediaType, newPage);
          setDiscoverResult([...discoverResult, ...newMedias]);
          setPage(newPage);
        }}
      >
        Load More
      </button>
    </div>
  );
}
