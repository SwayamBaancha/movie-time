import Image from "next/image";
import { CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { getImagePath } from "@/lib/getImagePath";
import { MotionDiv } from "./MotionDiv";
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}
const MovieCard = ({key, data, index }: any) => {
    return (
        <div key={key}>
            <MotionDiv variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: index * 0.25, ease: "easeInOut", }} viewport={{ amount: 0 }}>
                <Link href={`/movie-detail?movie_id=${data?.id}`}>
                    <CardHeader>
                        <Image
                            className="w-fit lg:min-w-[300px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
                            src={getImagePath(
                                data?.backdrop_path || data?.poster_path,
                                false
                            )}
                            height={1080}
                            width={1920}
                            alt="movie-cards"
                        />
                    </CardHeader>
                </Link>
                <CardFooter className="flex justify-between">
                    <h4 className="text-sm font-semibold text-white">{data?.title}</h4>
                </CardFooter>
            </MotionDiv>

        </div>
    )
}

export default MovieCard