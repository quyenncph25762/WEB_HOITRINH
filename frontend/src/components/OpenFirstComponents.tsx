'use client'
import { Button } from 'antd'
import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
const OpenFirstComponents = () => {
    const { ref, inView } = useInView();
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50%)',
    });
    return (
        <animated.div className={`py-[100px] bg-[#F2F2F2]`} ref={ref} style={animation}>
            <div className="container text-center text-[#777]">
                <h1 className='text-[30px] font-semibold text-main'>Lời mở đầu của chúng tôi</h1>
                <p>Nhà làm chúng tôi , chuyên nhận đặt làm nem , nem rán , giò đám cưới , những dịp lễ , những nhà hàng , quán bia quanh khu vực Từ Sơn . Có trách nhiệm cao về bảo đảm an toàn thực phẩm  </p>
                <p className='my-4'>Mọi thắc mắc hãy liên hệ qua hotline: 0967-584-597</p>
                <p className='mb-4'>Chân thành cảm ơn các bạn đã quan tâm đến chúng tôi .</p>
                <Link href={"/introduce"}>
                    <Button style={{ background: "#1AA84F", color: "white" }}>Xem thêm về chúng tôi</Button>
                </Link>
            </div>
        </ animated.div>
    )
}

export default OpenFirstComponents
