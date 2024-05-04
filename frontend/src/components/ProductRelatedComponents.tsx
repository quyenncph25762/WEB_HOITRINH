import React, { useRef } from 'react'
import Link from 'next/link';
import Meta from 'antd/es/card/Meta';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card, Rate } from 'antd';
const ProductRelatedComponents = () => {
    const nextRef: any = useRef();
    const preRef: any = useRef();
    return (
        <div>
            <Swiper
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: preRef.current,
                }}
                modules={[Navigation]}
                style={{ marginLeft: "-10px" }}
            >
                <SwiperSlide style={{ marginLeft: "10px" }}>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="example" className='h-[250px] object-cover w-full' src={`https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908`} />}
                    >
                        <Link href={`/products/1`}>
                            <Meta title="Product A" />
                            <p className='text-red-500 font-semibold mt-2'>{(100000 - 20000).toLocaleString("vi-VN")}đ <span className='ml-2 text-xs text-[#777]'><del>{(100000).toLocaleString("vi-VN")}</del>đ</span></p>
                            <Rate value={4} disabled style={{ fontSize: "14px" }}></Rate>
                        </Link>
                        <Button style={{ background: "green", color: "white", marginTop: "12px" }}>Thêm vào giỏ hàng</Button>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductRelatedComponents
