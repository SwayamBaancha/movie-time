import { redirect, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/getImagePath";
import { Button } from "@/components/ui/button";
import { fetchComment, fetchMovieDetail, getSimilarMovies } from "@/lib/getMovies";
import { CommentForm } from "@/components/form/CommentForm";
import { fetchCommentFromDb } from "@/lib/actions/comment.action";
import Slider from "@/components/Carousel";

export default async function Page({ params }: { params: { detail: string } }) {
  const movieDetail = await fetchMovieDetail(params.detail);
  // const comment = await fetchCommentFromDb(params.detail);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
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
            priority
          />
        </div>
        <div className="p-2">
          <h1 className="text-4xl font-bold mb-3">
            {movieDetail?.original_title}
          </h1>
          <p>{movieDetail?.overview}</p>
          <p className="text-xl mt-2 font-semibold">Genre</p>
          <div className="flex flex-row gap-2">
          {movieDetail?.genres?.map((item:any, index:any)=>(
            <div key={index}>
            <p className="bg-red-400 p-2 rounded-lg">{item.name}</p>
            </div>
          ))}
          </div>
          <h5 className="text-xl mt-2 font-semibold">Runtime</h5>
          <p>{movieDetail?.runtime} minutes</p>
          <h5 className="text-xl mt-2 font-semibold">Release Date</h5>
          <p>{movieDetail?.release_date}</p>
          {movieDetail?.belongs_to_collection?.poster_path ? (
            <div className="flex flex-row items-center justify-start gap-3 overflow-hidden">
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
          {/* <div className="flex flex-row items-start justify-center overflow-hidden">
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
          </div> */}
          <div className="flex items-center justify-between mt-4">
              {/* <CommentForm movie_id={params.detail} refresh={movieDetail} /> */}
            <Button variant="ghost">
              <Link
                href={movieDetail?.homepage || ""}
                rel="noopener noreferrer"
                target="_blank"
              >
                Watch Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* <div>
        <h3 className="font-bold text-lg">Reviews</h3>
        {comment.length>1 ? comment.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className="border border-red-800 p-4 rounded-xl my-2"
            >
              <ul>
                <li>{item.remarks}</li>
              </ul>
            </div>
          );
        }) : <p className="text-white text-sm mt-4">No review yet. Be the first one to review</p>}
      </div> */}
        {/* <Slider upcomingMovies={similarMovies} className="w-full max-w-xs" isAutoplay={false} /> */}
    </div>
  );
}

// export default MovieDetail;
