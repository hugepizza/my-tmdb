import {
  ScrollerTopRated,
  ScrollerTrending,
} from "./components/ScrollerServer";

export default function Home() {
  return (
    <div className="h-full  mx-16">
      <Discover />
      <ScrollerTrending />
      <ScrollerTopRated />
    </div>
  );
}

function Discover() {
  const backgrounds = [
    "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\\(duotone,00192f,00baff\\)/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg",
    "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\\(duotone,00192f,00baff\\)/xcXALwBjdHIjrESpGVhghqj8fGT.jpg",
    "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\\(duotone,00192f,00baff\\)/9YDXLJnp2N62uicerbvK2zGhetP.jpg",
    "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\\(duotone,00192f,00baff\\)/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg",
    "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\\(duotone,00192f,00baff\\)/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg",
  ];
  return (
    <div
      className="h-[300px]  flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url(${
          backgrounds[Math.floor(Math.random() * backgrounds.length)]
        })`,
      }}
    >
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
