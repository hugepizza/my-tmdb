import Image from "next/image";
import fetchTending from "../sdk/imdb/trending";

export interface CardProps {
  original_name: string;
  original_title: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
}
export function Card({
  original_name,
  original_title,
  backdrop_path,
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
              "https://www.themoviedb.org/t/p/w440_and_h660_face/" +
              backdrop_path
            }
            alt={title}
            width={150}
            height={225}
          ></Image>
        </a>
        <div className="absolute">
          {/* <button className="btn">...</button> */}
        </div>
      </div>
      <div className="flex flex-col relative">
        {/* <div className="absolute">{vote}</div> */}
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default async function CardList({ cards }: { cards: CardProps[] }) {
  cards.forEach((ele) => {
    console.log([ele.backdrop_path, ele.original_name]);
  });

  return (
    <div className="flex flex-row overflow-x-auto py-5 overflow-y-hidden">
      {cards.map((ele) => (
        <Card key={ele.original_name} {...ele} />
      ))}
    </div>
  );
}
