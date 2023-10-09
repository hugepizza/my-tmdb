"use client";
import { useState } from "react";
export interface ScrollerProps {
  title: string;
}

export default function Scroller({
  children,
  switchProps,
}: {
  children: { [key: string]: React.ReactNode };
  switchProps: ScrollerProps;
}) {
  const tabs = Object.keys(children);
  const [active, setActive] = useState<string>(tabs[0]);
  const onClick = (tab: string) => {
    setActive(tab);
  };
  const display = children[active];

  return (
    <div className="flex flex-col h-[394px] mt-[30px]">
      <div className="flex flex-row h-[30px] items-center ml-10">
        <div className="mr-4 text-xl">
          <h2>{switchProps.title}</h2>
        </div>
        <div className="tabs tabs-boxed">
          {tabs.map((ele) => (
            <a
              className={`tab ${ele === active ? "tab-active" : ""}`}
              key={ele}
              onClick={() => {
                onClick(ele);
              }}
            >
              {ele}
            </a>
          ))}
        </div>
      </div>

      {display}
    </div>
  );
}
