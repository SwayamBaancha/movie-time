"use client";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/getImagePath";
import { Button } from "@/components/ui/button";
import { fetchMovieDetail } from "@/lib/getMovies"

const MovieDetail = () => {
  const searchParams = useSearchParams();
  const [movieId, setMovieId] = useState("");
  const [movieDetail, setMovieDetail] = useState<any>([]);

  useEffect(() => {
    setMovieId(searchParams.get("movie_id") || "swayam");
    getData();
  }, [movieId]);

  const getData = async () => {
    const getDetail = await fetchMovieDetail(movieId);
    setMovieDetail(getDetail);
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex flex-row gap-4">
        <div className="flex items-center justify-center">
          <Image
            className="w-fit lg:min-w-96 h-96 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-xl"
            src={getImagePath(
              movieDetail?.backdrop_path || movieDetail?.poster_path,
              true
            )}
            height={1080}
            width={1920}
            alt="movie-detail"
          />
        </div>
        <div className="p-2">
          <h1 className="text-4xl font-bold mb-3">
            {movieDetail?.original_title}
          </h1>
          <p>{movieDetail?.overview}</p>
          <p className="text-xl mt-2 font-semibold">Genre</p>
          <p>{movieDetail?.genres?.map((item: any) => item.name).join(", ")}</p>
          <h5 className="text-xl mt-2 font-semibold">Runtime</h5>
          <p>{movieDetail?.runtime} minutes</p>
          <h5 className="text-xl mt-2 font-semibold">Release Date</h5>
          <p>{movieDetail?.release_date}</p>
          {movieDetail?.belongs_to_collection?.poster_path ? (
            <div className="flex flex-row items-center justify-start gap-3">
              <h5 className="text-xl mt-2 font-semibold">Collection </h5>
              <Image
                className="w-fit lg:min-w-32 h-32 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-full"
                src={getImagePath(
                  movieDetail?.belongs_to_collection?.poster_path,
                  false
                )}
                height={1080}
                width={1920}
                alt="movie-detail"
              />
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-row items-start justify-center">
            <h5 className="text-xl mt-2 font-semibold">Production </h5>
            {movieDetail?.production_companies?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-row gap-4 mt-6">
                  <Image
                    className="w-fit lg:min-w-32 h-32 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-full"
                    src={getImagePath(item?.logo_path, false)}
                    height={108}
                    width={192}
                    alt="movie-detail"
                  />
                </div>
              );
            })}
          </div>
          <div className="text-right mt-4">
            <Button>
            <Link
              href={movieDetail?.homepage || ""}
              rel="noopener noreferrer"
              target="_blank"
            >
              Play Now
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
