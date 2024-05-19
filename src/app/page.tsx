import { getPopularMovies, getUpcomingMovies } from "@/lib/getMovies";
import Slider from "@/components/Carousel";
import LoadMore from "@/components/LoadMore";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const data = await getPopularMovies(1);
  const upcomingMovies = await getUpcomingMovies();

  return (
    <main>
        <div className="flex items-center justify-center">
          <Slider upcomingMovies={upcomingMovies} />
        </div>
        <section className="grid grid-cols-4 gap-3">
          <MovieCard data={data} />
         {data}
        </section>
        <LoadMore />
    </main>
  );
}
