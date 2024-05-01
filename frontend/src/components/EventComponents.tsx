'use client'
import { Carousel } from 'antd';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { usePathname } from "next/navigation"
import Link from 'next/link';
const EventComponents = () => {
    const pathName = usePathname()
    const nextRef: any = useRef();
    const preRef: any = useRef();
    const { ref, inView } = useInView();
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50%)',
    });
    return (
        <animated.div className={`w-full bg-[#F2F2F2]`} ref={ref}>
            <div className={`h-[100px]  object-cover w-full bg-no-repeat bg-[#000] relative before:content-[""] before:top-0 before:bottom-0 before:right-0 before:left-0  before:w-full ${pathName === "/" ? "hidden" : ""}`}>
                <img className='w-full h-full object-cover opacity-70' src="https://i.pinimg.com/564x/f0/33/67/f033676e1c838d21f2f37575f855a1ee.jpg" alt="" />
                <h1 className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white font-bold text-[30px] tracking-wide'>Về dịch vụ</h1>
            </div>
            <animated.div className="container text-center text-[#777]" style={animation}>
                <h1 className={`text-[30px] font-semibold pt-10 text-main tracking-wide ${pathName === "/" ? "" : "hidden"}`}>Dịch vụ</h1>
                <Swiper
                    style={{ padding: "40px 0px" }}
                    slidesPerView={'auto'}
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
                    <SwiperSlide>
                        <div className="grid grid-cols-2 gap-[40px] mt-[20px]">
                            <img className='rounded-lg shadow-sm' src="https://watermark.lovepik.com/photo/20211130/large/lovepik-operator-customer-service-beauty-picture_501226753.jpg" alt="" />
                            <div className="p-[20px]">
                                <h1 className='text-main font-semibold text-[18px]'>Tư vấn trước khi đặt hàng</h1>
                                <ul className='mt-4'>
                                    <li><strong>Thông Tin Chi Tiết</strong>: Chúng tôi sẽ cung cấp cho bạn thông tin đầy đủ về thành phần, quy trình sản xuất, và các tính năng đặc biệt của từng sản phẩm. Điều này giúp bạn hiểu rõ hơn về chất lượng và giá trị của sản phẩm trước khi quyết định mua.</li>
                                    <li className='mt-2'><strong>Tư Vấn Chuyên Nghiệp</strong>: Đội ngũ tư vấn của chúng tôi sẵn lòng tư vấn về các lựa chọn phù hợp với nhu cầu và mong muốn của bạn. Họ sẽ đưa ra các gợi ý và đề xuất để giúp bạn chọn lựa sản phẩm phù hợp nhất.</li>
                                    <li className='mt-2'><strong>Yêu Cầu Đặc Biệt</strong>: Nếu bạn có bất kỳ yêu cầu đặc biệt nào, chúng tôi sẽ lắng nghe và cố gắng đáp ứng những mong muốn đó. Hãy tự tin chia sẻ với chúng tôi về mọi điều bạn cần.</li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-2 gap-[40px] mt-[20px]">
                            <img className='rounded-lg shadow-sm' src="https://pos.nvncdn.com/4cb811-2260/art/20200801_q3U496yQbAfALY2OeDKADQ58.jpg" alt="" />
                            <div className="p-[20px]">
                                <h1 className='text-main font-semibold text-[18px]'>Dịch vụ đổi trả</h1>
                                <ul className='mt-4'>
                                    <li><strong>Điều kiện đổi trả:</strong>Sản phẩm kém chất lượng , màu sắc nhợt nhạt , sản phẩm hỏng ....</li>
                                    <li><strong>Quy trình đổi trả:</strong>Để yêu cầu đổi trả, quý khách vui lòng liên hệ với chúng tôi qua [email/điện thoại]. Chúng tôi sẽ hướng dẫn bạn về quy trình đổi trả và cung cấp thông tin cần thiết.</li>
                                    <li><strong>Hoàn Tiền hoặc Đổi Hàng:</strong>Sau khi nhận được sản phẩm đổi trả và kiểm tra tình trạng của nó, chúng tôi sẽ tiến hành hoàn tiền hoặc đổi lại sản phẩm khác theo yêu cầu của quý khách</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-2 gap-[40px] mt-[20px]">
                            <img className='rounded-lg shadow-sm' src="https://supership.vn/wp-content/uploads/2020/06/Dich-vu-giao-hang-nao-re-nhat.jpg" alt="" />
                            <div className="p-[20px]">
                                <h1 className='text-main font-semibold text-[18px]'>Giao hàng nhanh chóng</h1>
                                <ul className='mt-4'>
                                    <li><strong>Giao Hàng Nhanh Chóng và An Toàn:</strong>Chúng tôi cam kết mang đến dịch vụ giao hàng nhanh chóng và an toàn nhằm đảm bảo bạn nhận được sản phẩm một cách thuận tiện và kịp thời.</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Link href={`/service`} className={`p-6 pt-0 text-center ${pathName === "/" ? "" : "hidden"}`} >
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-main text-white shadow-md shadow-main hover:shadow-lg hover:shadow-main focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none my-10"
                        type="button">
                        xem tất cả
                    </button>
                </Link>
            </animated.div>
        </animated.div>
    )
}

export default EventComponents
