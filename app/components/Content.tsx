import React from "react";
export default function Content({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col flex- grow text-[25px]">{children}</div>;
}
