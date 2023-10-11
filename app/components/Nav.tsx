import { channel } from "diagnostics_channel";
import Image from "next/image";

export const navConfig = [
  {
    title: "Movies",
    route: "movie",
    channel: [
      { title: "Popular", route: "" },
      { title: "Now Playing", route: "now-playing" },
      { title: "Upcoming", route: "upcoming" },
      { title: "Top Rated", route: "top-rated" },
    ],
  },
  {
    title: "TV shows",
    route: "movie",
    channel: [
      { title: "Popular", route: "" },
      { title: "Airing Today", route: "airing-today" },
      { title: "On TV", route: "on-the-air" },
      { title: "Top Rated", route: "top-rated" },
    ],
  },
  {
    title: "People",
    route: "person",
    channel: [{ title: "Popular People", route: "" }],
  },
];

export default function Nav() {
  return (
    <div className="flex flex-grow-0 w-full h-16 bg-slate-800 justify-between">
      <div className="flex flex-row h-full py-3 px-10 items-center   flex-shrink-0">
        <a href="/" className="mr-4">
          <Image alt="imdb" src={"/nav_logo.svg"} width={154} height={20} />
        </a>
        <ul className="menu menu-horizontal lg:menu-horizontal rounded-box text-gray-100">
          {navConfig.map((ele, index) => (
            <div key={ele.route} className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="btn m-1 bg-slate-800 border-none text-white hover:bg-slate-950"
              >
                {ele.title}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-lg w-52 text-black"
              >
                {ele.channel.map((c) => (
                  <li key={c.route}>
                    <a href={`/${ele.route}/${c.route}`}>{c.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex">
        <ul></ul>
      </div>
    </div>
  );
}
