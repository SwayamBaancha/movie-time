"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const Slider = ({ upcomingMovies }: any) => {
  return (
    <div>
      <Carousel
        className="w-screen max-w-5xl"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {upcomingMovies.map((movie: any, index: number) => {
            return (
              <CarouselItem key={index}>
                <Link href={`/movie-detail?movie_id=${movie?.id}`}>
                  {/* <div className=""> */}
                  <Card className="relative">
                    <CardContent className="flex aspect-video items-center justify-center p-0 pt-0 relative">
                      <Image
                        src={getImagePath(
                          movie?.backdrop_path || movie?.poster_path,
                          true
                        )}
                        height={1080}
                        width={1920}
                        alt="upcoming-movie-carousel"
                      />
                    </CardContent>
                    <CardFooter className="text-xl text-center flex items-center justify-center">
                      <p>{movie.title}</p>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
