"use server";

import MovieCard from "@/components/MovieCard";
import { fetchCommentFromDb } from "./actions/comment.action";

async function fetchDataFromTMDB(url: URL, cacheTime?: number) {
  // url.searchParams.set("page", "1");
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBIC_ACCESS_TOKEN}`,
    },

    next: {
      revalidate: cacheTime || 60 * 60 * 24, //24 hrs default
    },
  };
  // console.log(url); 
  const response = await fetch(url.toString(), options);
  
  // console.log(url.toString());

  const data = await response.json();
  return data;
}

export async function getUpcomingMovies() {
  const url = new URL(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );
  const data = await fetchDataFromTMDB(url);
  // console.log(data);

  return data.results;
}

export async function getPopularMovies(page: number) {
  const url = new URL(`https://api.themoviedb.org/3/movie/popular?page=${page}`);
  const result = await fetchDataFromTMDB(url);
  const data = result.results;
return data.map((item: any, index: number) => (
  // console.log(item);
  
      <MovieCard key={item.id} id={item.id} data={item} index={index} />
))
}

export async function searchMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);
  const data = await fetchDataFromTMDB(url);
  return data.results;
}

export async function getSearchMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  const data = await fetchDataFromTMDB(url);
  return data.results;
}

export async function fetchMovieDetail(id: string) {
  // console.log(id, 'id');

  const url = new URL(
    `https://api.themoviedb.org/3/movie/${id}`
  );
  const data = await fetchDataFromTMDB(url);
  return data;
};

export const fetchComment = async (movie_id: string) => {

  try {
    const res = await fetchCommentFromDb(movie_id);
    return res
  } catch (error:any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

export async function getSimilarMovies(id:string) {
  const url = new URL(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
  );
  // console.log(url);
  
  const data = await fetchDataFromTMDB(url);
  // console.log(data);

  return data.results;
}