import Image from "next/image";
import fetchTending from "../sdk/imdb/trending";
import { useEffect, useState } from "react";

import React from "react";

declare module "react" {
  interface CSSProperties {
    "--value"?: string | number;
    "--size"?: string | number;
    "--thickness"?: string | number;
  }
}
export interface CardProps {
  original_name: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
}

const rateColor = (rate: number) => {
  return rate >= 7
    ? "text-green-300"
    : rate >= 5
    ? "text-yellow-200"
    : "text-red-400";
};
export function Card({
  original_name,
  original_title,
  poster_path,
  vote_average,
  first_air_date,
  release_date,
}: CardProps) {
  const title = original_name ?? original_title;
  const date = first_air_date ?? release_date;
  return (
    <div className="flex w-[150px]  h-[295px]  ml-10 flex-col flex-shrink-0">
      <div className="relative">
        <a>
          <Image
            src={
              "https://www.themoviedb.org/t/p/w440_and_h660_face/" + poster_path
            }
            alt={title}
            width={150}
            height={225}
            className="rounded-lg"
          ></Image>
        </a>
        <div className="absolute">
          {/* <button className="btn">...</button> */}
        </div>
      </div>
      <div className="flex flex-col relative">
        <div
          className={`absolute h-[30px] w-[30px] top-[-16px] left-[10px] radial-progress border-[2px] border-black bg-black ${rateColor(
            vote_average
          )}
            `}
          style={{
            "--value": (vote_average * 10).toFixed(0),
            "--size": "12rem",
            "--thickness": "2px",
          }}
        >
          <span className="text-xs text-white">
            {(vote_average * 10).toFixed(0)}
            <span className="text-[6px]">{"%"}</span>
          </span>
        </div>
        <div className="mt-[26px] mx-[10px] text-[16px]">
          <h1 className="">{title}</h1>
          <p className="font-normal text-slate-500">{date}</p>
        </div>
      </div>
    </div>
  );
}

export function CardLarge({
  original_name,
  original_title,
  poster_path,
  vote_average,
  first_air_date,
  release_date,
}: CardProps) {
  const title = original_name ?? original_title;
  const date = first_air_date ?? release_date;

  return (
    <div className="flex h-[344px] mt-[30px] flex-col ml-0 flex-shrink-0 border-solid border-[1px] shadow-md rounded-lg bg-white box-border large-card">
      <div className="relative  w-full h-full">
        <a className=" w-full h-full">
          <Image
            src={
              "https://www.themoviedb.org/t/p/w440_and_h660_face/" + poster_path
            }
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg rounded-b-none"
          />
        </a>
      </div>
      <div className="flex flex-col relative">
        <div
          className={`absolute h-[30px] w-[30px] top-[-16px] left-[10px] radial-progress border-[px] border-black bg-black 
            ${rateColor(vote_average)}`}
          style={{ "--value": 70, "--size": "12rem", "--thickness": "2px" }}
        >
          <span className="text-xs text-white">
            {(vote_average * 10).toFixed(0)}
            <span className="text-[6px]">{"%"}</span>
          </span>
        </div>
        <div className="mt-[26px] mx-[10px] text-[16px]">
          <h1 className="text-black">{title}</h1>
          <p className=" font-normal text-slate-500">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default async function CardList({ cards }: { cards: CardProps[] }) {
  cards.forEach((ele) => {
    console.log([ele.poster_path, ele.original_name]);
  });

  return (
    <div className="flex flex-row overflow-x-auto py-5 overflow-y-hidden">
      {cards.map((ele) => (
        <Card key={ele.original_name} {...ele} />
      ))}
    </div>
  );
}
