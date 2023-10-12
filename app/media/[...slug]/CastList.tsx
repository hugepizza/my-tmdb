import Image from "next/image";
import fetchMovieCredit from "@/app/sdk/imdb/movie/credit";
export default async function CastList({
  mediaType,
  mediaId,
}: {
  mediaType: string;
  mediaId: string;
}) {
  const credit = await fetchMovieCredit(mediaId);
  return (
    <section className="flex flex-col overflow-y-hidden overflow-x-auto w-full pb-[30px] h-[373px]">
      <h3 className="h-7 pb-4">Series Cast</h3>
      <div className="flex flex-row">
        {credit?.cast.map((ele) => (
          <div
            key={ele.cast_id}
            className="card flex-shrink-0 my-[10px] mx-1 border-solid border pb-[10px] h-[261px] w-[138px] rounded-md"
          >
            <figure className="w-full h-[175px] relative flex-shrink-0">
              <Image
                src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${ele.profile_path}`}
                alt="Shoes"
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div className="card-body p-0 flex-shrink">
              <p className="card-title text-base px-[10px] pt-[10px] overflow-hidden font-extrabold">
                {ele.name}
              </p>
              <p className="text-sm px-[10px]">{ele.known_for_department}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-base">
        <a>Full Cast & Crew</a>
      </p>
    </section>
  );
}
