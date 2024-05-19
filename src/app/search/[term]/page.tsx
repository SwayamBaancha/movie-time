import { getImagePath } from "@/lib/getImagePath";
import { getSearchMovies } from "@/lib/getMovies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SearchTerm({
  params,
}: {
  params: { term: string };
}) {
  const searchResult = await getSearchMovies(params.term);

  return (
    <div className="w-1/2 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center font-bold">Search Results</h1>
      {searchResult.length > 0 ? searchResult.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center justify-center gap-3 border-b-2 border-b-white"
          >
            <Link href={`/movie-detail?movie_id=${item?.id}`} className="w-fit lg:min-w-[300px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm my-4">
              <Image
                
                src={getImagePath(
                  item?.backdrop_path || searchResult?.poster_path,
                  false
                )}
                height={1080}
                width={1920}
                alt="movie-cards"
              />{" "}
            </Link>
            <div className="flex flex-col">
              <p className="">{item?.title}</p>
              <p className="text-sm">{item?.overview}</p>
            </div>
          </div>
        );
      }):(
        <div className="flex flex-col items-center justify-center mt-40">
          <h1 className="text-4xl text-center font-bold text-red-400">No Results Found with this keyword {params.term}</h1>
        </div>
      )}
    </div>
  );
}
