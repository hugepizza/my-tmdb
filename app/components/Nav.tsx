import Image from "next/image";
export default function Nav() {
  return (
    <div className="flex-grow-0 w-full h-16 bg-slate-800 justify-between">
      <div className="flex flex-row h-full py-3 px-10 items-center">
        <a href="/" className="mr-4">
          <Image alt="imdb" src={"nav_logo.svg"} width={154} height={20} />
        </a>
        <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
          <li className="mr-[14px]">
            <a className="p-2">Movies</a>
          </li>
          <li className="mr-[14px]">
            <a className="p-2">TV Shows</a>
          </li>
          <li className="mr-[14px]">
            <a className="p-2">People</a>
          </li>
          <li className="mr-[14px]">
            <a className="p-2">More</a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <ul></ul>
      </div>
    </div>
  );
}
