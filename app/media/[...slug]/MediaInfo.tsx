import fetchMovieCredit from "@/app/sdk/imdb/movie/credit";
import fetchMovieDetail from "@/app/sdk/imdb/movie/detail";
import Image from "next/image";
export default async function MediaInfo({
  mediaType,
  mediaId,
}: {
  mediaType: string;
  mediaId: string;
}) {
  const media = await fetchMovieDetail(mediaId);
  const credit = await fetchMovieCredit(mediaId);
  const director = credit.crew.find((ele) => ele.job.includes("Director"));
  const writer = credit.crew.find((ele) => ele.job.includes("Writer"));
  return (
    <div
      className="flex flex-row media-info"
      style={{
        backgroundImage: `url(${
          "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" +
          media.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "left",
        backgroundPositionY: "top",
      }}
    >
      <div
        className="w-full h-full flex flex-row  px-[40px] py-[30px] "
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="min-h-[450px] min-w-[300px]">
          <Image
            src={`${
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
              media.poster_path
            }`}
            alt={media.original_title}
            width={300}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col pl-10 text-white">
          <h1 className="text-[35px] font-semibold">
            {media.title}{" "}
            <span className="text-slate-400">
              {`(${media.release_date.split("-")[0]})`}
            </span>
          </h1>
          <div className="text-[16px] font-extralight tracking-wide">
            {/* <span>{media.budget }</span> */}
            <span>
              {media.release_date.split("-").reverse().join("/") +
                (media.production_countries[0]
                  ? `(${media.production_countries[0].iso_3166_1})`
                  : "")}
            </span>
            <span>
              {" • "}
              {media.genres.map((ele) => ele.name).join(",")}
            </span>
            <span>
              {" • "}
              {`${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m`}
            </span>
            <div className="flex flex-col">
              <h3 className="italic font-thin">{media.tagline}</h3>
              <h3 className="font-medium my-[10px]">Overview</h3>
              <div>{media.overview}</div>
              <div className="flex flex-row mt-5">
                {director && (
                  <div className="mr-4">
                    <p className="font-extrabold">
                      <a href={"/person/" + director.id}>{director.name}</a>
                    </p>
                    <p>{director.job}</p>
                  </div>
                )}
                {writer && (
                  <div>
                    <p className="font-extrabold">
                      <a href={"/person/" + writer.id}>{writer.name}</a>
                    </p>
                    <p>{writer.job}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
