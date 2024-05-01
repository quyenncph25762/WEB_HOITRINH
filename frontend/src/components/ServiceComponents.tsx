'use client'
import { Carousel } from 'antd';
import React, { Dispatch, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { usePathname } from "next/navigation"
import { IProductQuanlity } from '@/app/libs/Features/productQuanlity/productQuanlity.interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { listProductQuanlitySlice } from '@/app/libs/Features/productQuanlity/productQuanlity';

interface IProps {
    listProductQuanlity: IProductQuanlity[]
}
const ServiceComponents = (props: IProps) => {
    const { listProductQuanlity } = props
    const pathName = usePathname()
    const nextRef: any = useRef();
    const preRef: any = useRef();
    const { ref, inView } = useInView();
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50%)',
    });
    // dispatch
    const dispatch: Dispatch<any> = useDispatch()
    const listProductQuanlityState = useSelector((state: RootState) => state.productQuantityReducer.productsQuantity)
    useEffect(() => {
        dispatch(listProductQuanlitySlice(listProductQuanlity))
    }, [listProductQuanlity])

    return (
        <animated.div className={`bg-white w-full py-[40px]`} ref={ref}>
            <animated.div className="container text-center text-[#777]" style={animation}>
                <h1 className='text-[30px] font-semibold text-main'>Chất lượng đảm bảo</h1>
                <p className='my-4'>Chúng tôi tự hào vì đã có những quý kháczh nhà hàng đặt niềm tin và tin tưởng vào những sản phẩm do chúng tôi làm ra , ... Với chất lượng đảm bảo và an toàn thực phẩm bảo vệ sức khỏe của người dân.</p>
                <Swiper
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
                    {listProductQuanlityState.map((productQuanlity, index) => (
                        <SwiperSlide>
                            <div className="flex flex-col text-gray-700 bg-white border-2 shadow-md bg-clip-border rounded-xl mt-[20px]">
                                <div
                                    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img
                                        className='w-full h-full object-cover'
                                        src={productQuanlity.image}
                                        alt="card-image" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-main">
                                        {productQuanlity.title}
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit truncate">
                                        {productQuanlity.description}
                                    </p>
                                </div>
                                <Link href={`/quanlityProduct/${productQuanlity._id!}`} className="p-6 pt-0">
                                    <button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main text-white shadow-md shadow-main hover:shadow-lg hover:shadow-main focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        type="button">
                                        xem thêm
                                    </button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                {/* <Link href={`/quanlityProduct`} className={`p-6 pt-0 text-center ${pathName === "/" ? "" : "hidden"}`} >
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main text-white shadow-md shadow-main hover:shadow-lg hover:shadow-main focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-10"
                        type="button">
                        xem tất cả
                    </button>
                </Link> */}
            </animated.div>
        </animated.div>
    )
}

export default ServiceComponents
