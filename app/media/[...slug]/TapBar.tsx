const config = [
  { title: "Overview", items: [{ title: "Main", route: "/" }] },
  { title: "Media", items: [{ title: "Media", route: "/" }] },
  { title: "Fandom", items: [{ title: "Fandom", route: "/" }] },
  { title: "Share", items: [{ title: "Share", route: "/" }] },
];
export default function TopBar() {
  return (
    <div className="tabs h-[46px]">
      {config.map((ele) => (
        <div key={ele.title} className="tab h-full tab-bordered">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="">
              {ele.title}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52"
            >
              {ele.items.map((ite) => (
                <li key={ite.title}>
                  <a href={ite.route}>{ite.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
