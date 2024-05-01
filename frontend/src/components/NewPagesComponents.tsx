'use client'
import { Card, Carousel } from 'antd';
import React, { Dispatch, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Meta from 'antd/es/card/Meta';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { usePathname } from "next/navigation"
import Link from 'next/link';
import { INews } from '@/app/libs/Features/news/news.interface';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNewsSlice } from '@/app/libs/Features/news/news';
import { RootState } from '@/app/libs/store';

interface Iprops {
    listNews: INews[]
}
const NewPagesComponents = (props: Iprops) => {
    const dispatch: Dispatch<any> = useDispatch()
    const listNewsState = useSelector((state: RootState) => state.newsReducer.news)
    const { listNews } = props
    const pathName = usePathname()
    const nextRef: any = useRef();
    const preRef: any = useRef();
    const { ref, inView } = useInView();
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50%)',
    });
    useEffect(() => {
        if (listNews) {
            dispatch(getAllNewsSlice(listNews))
        }
    }, [listNews, dispatch])
    return (
        <animated.div className={`bg-[#F2F2F2]`} ref={ref}>
            <div className={`h-[100px]  object-cover w-full bg-no-repeat bg-[#000] relative before:content-[""] before:top-0 before:bottom-0 before:right-0 before:left-0  before:w-full ${pathName === "/" ? "hidden" : ""}`}>
                <img className='w-full h-full object-cover opacity-70' src="https://i.pinimg.com/564x/f0/33/67/f033676e1c838d21f2f37575f855a1ee.jpg" alt="" />
                <h1 className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white font-bold text-[30px] tracking-wide'>Tin tức</h1>
            </div>
            <animated.div className="container text-[#777] text-center" style={animation}>
                <h1 className={`text-[30px] font-semibold text-center pt-10 text-main tracking-wide ${pathName === "/" ? "" : "hidden"}`}>Tin tức</h1>
                <Swiper
                    style={{ padding: "40px 0" }}
                    slidesPerView={3}
                    spaceBetween={50}
                    onSlideChange={() => console.log('slide change')}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper: any) => console.log(swiper)}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: preRef.current,
                    }}
                    modules={[Navigation]}
                >
                    {listNewsState?.map((news) => (
                        <SwiperSlide>
                            <Link href={`/newsPage/${news._id}`}>
                                <Card
                                    hoverable
                                    cover={<img className='h-[400px]' alt="example" src={news.image} />}
                                >
                                    <Meta title={news.title} description={news.description} />
                                </Card>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <Link href={`/newsPage`} className={`p-6 pt-0 text-center ${pathName === "/" ? "" : "hidden"}`} >
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main text-white shadow-md shadow-main hover:shadow-lg hover:shadow-main focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none my-10"
                        type="button">
                        xem tất cả
                    </button>
                </Link> */}
            </animated.div>
        </animated.div>
    )
}

export default NewPagesComponents
