'use client'
import React, { useRef, useState } from 'react'
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Button, Card, InputNumber, InputNumberProps, Radio, RadioChangeEvent, Rate, Tabs, TabsProps } from 'antd';
import ListCommentComponents from './ListCommentComponents';
import ProductWatchingComponents from './ProductWatchingComponents';
import { IProduct } from '@/app/libs/Features/products/product.interface';
import ProductRelatedComponents from './ProductRelatedComponents';

const onChangeTab = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Mô tả sản phẩm',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Đánh giá nhận xét từ khách hàng',
        children: <>
            <ListCommentComponents></ListCommentComponents>
        </>
    },

];

interface IProps {
    getOneProduct: IProduct
}
const ProductDetailComponents = (props: IProps) => {
    const { getOneProduct } = props
    const nextRef: any = useRef();
    const preRef: any = useRef();
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChangeInputNumber: InputNumberProps['onChange'] = (value) => {
        console.log('changed', value);
    };
    return (
        <div className='p-10'>
            <div className="container">
                <div className="grid grid-cols-3 gap-[40px]">
                    <div className="col-span-1">
                        <div className="">
                            <Swiper
                                slidesPerView={1}
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
                                    <img className='object-cover h-[400px] w-full' src={getOneProduct.image} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="mt-3">
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
                                    <img className='object-cover h-[100px] w-full' src="https://i.pinimg.com/564x/fc/19/3e/fc193e935bf9727cee14dcc92e26dbaf.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide style={{ marginLeft: "10px" }}>
                                    <img className='object-cover h-[100px] w-full' src="https://i.pinimg.com/564x/0d/b8/50/0db8505f6fb35eeb20306a197c540885.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide style={{ marginLeft: "10px" }}>
                                    <img className='object-cover h-[100px] w-full' src="https://i.pinimg.com/564x/fc/19/3e/fc193e935bf9727cee14dcc92e26dbaf.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide style={{ marginLeft: "10px" }}>
                                    <img className='object-cover h-[100px] w-full' src="https://i.pinimg.com/564x/0d/b8/50/0db8505f6fb35eeb20306a197c540885.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-span-2 p-6">
                        {/* title */}
                        <h1 className='text-[24px] font-semibold'>{getOneProduct.productName}</h1>
                        <Rate style={{ margin: "20px 0" }} value={4} disabled className='text-[14px]'></Rate>
                        <br />
                        {/* varriants */}
                        <span className='mr-4'>Loại: </span>
                        <Radio.Group defaultValue="a">
                            <Radio.Button value="a">1kg</Radio.Button>
                            <Radio.Button value="b">3kg</Radio.Button>
                            <Radio.Button value="c">5ks</Radio.Button>
                        </Radio.Group>
                        <br />
                        <div className="flex my-5">
                            <span className='mr-4'>Giá:</span>
                            <div className="flex font-semibold">
                                <p className='text-red-500'>{(getOneProduct.price - getOneProduct.discount).toLocaleString("vi-VN")}đ</p><span className='ml-2 text-[#777]'>{getOneProduct.price.toLocaleString("vi-VN")}đ</span>
                            </div>
                        </div>
                        {/* quantity */}
                        <span className='mr-5'>Số lượng</span>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChangeInputNumber} />
                        <div className="flex gap-4 my-5">
                            <Button type="primary" style={{ background: "#007BFF", color: "#fff" }}>
                                Thêm vào giỏ hàng
                            </Button>
                            <Button type="primary" danger>
                                Mua ngay
                            </Button>
                        </div>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
                        {/* Sản phẩm liên quan */}
                    </div>
                </div>
                <h1 className='text-main text-[24px] font-semibold text-center mb-10'>Sản phẩm liên quan</h1>
                <ProductRelatedComponents></ProductRelatedComponents>
                <h1 className='text-main text-[24px] font-semibold text-center my-10'>Sản phẩm vừa xem</h1>
                <ProductWatchingComponents></ProductWatchingComponents>
            </div>
        </div>
    )
}

export default ProductDetailComponents
