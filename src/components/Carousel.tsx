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

const Slider = ({ upcomingMovies, className, isAutoplay }: any) => {
  return (
    <div>
      <Carousel
        className={`  ${className}`}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="bg-black"> 
           {upcomingMovies.map((movie: any, index: number) => {
            return (
              <CarouselItem key={index}> 
                <Link href={`/movie-detail/${movie?.id}`}>
                  {/* <div className=""> */}
                  <Card className="relative">
                    <CardContent className="flex items-center justify-center p-0 pt-0">
                       <Image
                        src={getImagePath(
                          movie?.backdrop_path || movie?.poster_path,
                          true
                        )}
                        height={1080}
                        width={1920}
                        alt="upcoming-movie-carousel"
                      />
                       {/* <img src={getImagePath(
                          movie?.backdrop_path || movie?.poster_path,
                          true
                        )} />  */}
                    </CardContent> 
                    <CardFooter className="text-xl text-center flex items-center justify-center bg-black text-white">
                      <p>{movie.title}</p>
                    </CardFooter>
                  </Card>
                </Link>
               </CarouselItem>
            );
          })}
         </CarouselContent>
        <CarouselPrevious className="bg-black text-white"/>
        <CarouselNext className="bg-black text-white" />
      </Carousel>
    </div>
  );
};

export default Slider;
