import { CardLarge } from "@/app/components/Card";
import { SearchContext } from "@/app/[...slug]/SearchContext";
import { useContext, useEffect } from "react";
import fetchSearch from "../sdk/imdb/search";

export default function SearchResult() {
  const { mediaType, searchResult, setSearchResult, page, setPage } =
    useContext(SearchContext);

  useEffect(() => {
    fetchSearch(mediaType, 1).then((data) => {
      setSearchResult(data);
    });
  }, []);

  if (searchResult.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full pl-[20px]">
      <div className="flex flex-row flex-grow w-full h-full  justify-around flex-wrap  mt-[-30px]">
        {searchResult.map((ele) => (
          <CardLarge key={ele.id} {...ele} media_type={mediaType} />
        ))}
      </div>
      <button
        className="btn btn-primary mt-[30px]"
        onClick={async () => {
          const newPage = page + 1;
          const newMedias = await fetchSearch(mediaType, newPage);
          setSearchResult([...searchResult, ...newMedias]);
          setPage(newPage);
        }}
      >
        Load More
      </button>
    </div>
  );
}
