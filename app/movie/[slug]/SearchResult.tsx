import { CardLarge } from "@/app/components/Card";
import { SearchContext } from "@/app/components/SearchContext";
import fetchSearchMovies from "@/app/sdk/imdb/movie/search";
import { useContext, useEffect } from "react";

export default function SearchResult() {
  const { searchResult, setSearchResult, page, setPage } =
    useContext(SearchContext);

  useEffect(() => {
    const medias = fetchSearchMovies().then((data) => {
      setSearchResult(data);
    });
  }, []);
  return (
    <div className="flex flex-col w-full h-full pl-[20px]">
      <div className="flex flex-row flex-grow w-full h-full  justify-around flex-wrap  mt-[-30px]">
        {searchResult.map((ele) => (
          <CardLarge key={ele.id} {...ele} />
        ))}
      </div>
      <button
        className="btn btn-primary mt-[30px]"
        onClick={async () => {
          const newPage = page + 1;
          const newMedias = await fetchSearchMovies(newPage);
          setSearchResult([...searchResult, ...newMedias]);
          setPage(newPage);
        }}
      >
        Load More
      </button>
    </div>
  );
}
