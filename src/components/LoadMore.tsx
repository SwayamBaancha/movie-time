"use client"
import { getPopularMovies } from '@/lib/getMovies'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
let page = 2;
const LoadMore = () => {
    const { inView, ref } = useInView()
    const [data, setData] = useState<any>([])
    useEffect(() => {
        if (inView) {
            getPopularMovies(page).then((res) => {
                setData([...data, ...res])
                page++;
            })
        }
    }, [inView, data])
    return (
        <>
            {/* <section className="grid grid-cols-4 gap-3"> */}
                {data}
            {/* </section> */}
            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    <Image
                        src="./spinner.svg"
                        alt="spinner"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                </div>
            </section>
        </>
    )
}

export default LoadMore