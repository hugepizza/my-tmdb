"use client";

import fetchReviews, { Reviews, Review } from "@/app/sdk/imdb/reviews";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Social({
  mediaType,
  mediaId,
}: {
  mediaType: string;
  mediaId: string;
}) {
  const [acvtive, setAcvtive] = useState("Reviews");
  const [reviews, setReviews] = useState<Reviews | null>(null);
  useEffect(() => {
    fetchReviews(mediaType, mediaId).then((data) => {
      setReviews(data);
    });
  }, []);
  const isActive = (flag: string) =>
    acvtive === flag ? "border-b-4 border-solid border-black" : "";

  return (
    <section className="flex flex-col">
      <div className="flex flex-row h-[48px]">
        <div className="mr-[50px] text-2xl font-bold">Social </div>
        <div className="flex flex-row h-[31px] text-xl">
          <div
            className={`mr-5 ${isActive("Reviews")}`}
            onClick={() => {
              setAcvtive("Reviews");
            }}
          >
            Reviews
          </div>
          <div
            className={`${isActive("Discussions")}`}
            onClick={() => {
              setAcvtive("Discussions");
            }}
          >
            Discussions
          </div>
        </div>
      </div>
      {acvtive === "Reviews" && reviews?.results[0] ? (
        <Review review={reviews?.results[0]} />
      ) : (
        <></>
      )}
      {acvtive === "Discussions" && reviews?.results[0] ? (
        "Haven't found discussions api yet"
      ) : (
        <></>
      )}

      <p className="mt-5 text-base">
        <a>Read All Reviews</a>
      </p>
    </section>
  );
}

function Review({ review }: { review: Review }) {
  return (
    <div className="card shadow-md p-6 border-[1px] border-solid rounded-lg">
      <div className="flex flex-row mb-2">
        <div className="avatar">
          <div className="w-[45px] h-[45px] rounded-full mr-4">
            <Image
              alt={review.author_details.name || ""}
              height={45}
              width={45}
              src={
                "https://www.themoviedb.org/t/p/w90_and_h90_face" +
                review.author_details.avatar_path
              }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-extrabold">
            A Review By {review.author}
          </p>
          <p className="text-sm font-extralight">
            {review.author_details.rating && (
              <span className="bg-black rounded-md text-white px-2 mr-1">
                <span className="text-[12px]">{"★" + " "}</span>
                {review.author_details.rating.toFixed(1)}
              </span>
            )}
            Written by {review.author} on {review.created_at}
          </p>
        </div>
      </div>
      <div className="text-base">
        {(review.content.length || 0) > 500 ? (
          <div>
            {review.content.slice(0, 500) + "..."}
            <a href="" className="underline">
              read the rest.
            </a>
          </div>
        ) : (
          <div>{review.content}</div>
        )}
      </div>
    </div>
  );
}
