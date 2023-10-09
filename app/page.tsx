import {
  ScrollerTopRated,
  ScrollerTrending,
} from "./components/ScrollerServer";

export default function Home() {
  return (
    <div className="h-full">
      <Discover />
      <ScrollerTrending />
      <ScrollerTopRated />
    </div>
  );
}

function Discover() {
  return (
    <div className="h-[300px] w-full flex flex-row justify-center items-center bg-slate-400">
      <div className="flex flex-col w-full h-[184px] px-10">
        <div className="flex flex-col  mb-5">
          <h2 className="text-5xl">Welcome.</h2>
          <h3 className="text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="flex mt-[30px] w-full relative">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person......"
            className="input w-full rounded-full border-none outline-none shadow-none focus:outline-none px-5"
          />
          <button className="btn btn-neutral absolute inset-y-0 right-0 flex items-center px-3 rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
