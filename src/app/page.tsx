import { getPopularMovies, getUpcomingMovies } from "@/lib/getMovies";
import Slider from "@/components/Carousel";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await getPopularMovies(1);
  const upcomingMovies = await getUpcomingMovies();
  console.log('utl', process.env.MONGODB_URL);
  
  return (
    <main>
        <div className="flex items-center justify-center">
          <Slider upcomingMovies={upcomingMovies} className="w-72 md:w-full max-w-5xl" />
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4">
         {data}
        <LoadMore />
        </section>
    </main>
  );
}
