'use client'
import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const ProductReviewsComponents = () => {
    const { ref, inView } = useInView();
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(50%)',
    });
    return (
        <animated.div className={`w-full py-[40px] bg-[#fff]`} ref={ref} style={animation}>
            <h1 className='text-center text-[30px] font-semibold text-main'>Góc ẩm thực</h1>
            <div className="grid grid-cols-3 gap-[20px] my-4 mx-[20px]">
                <img className='w-full h-[350px] object-cover' src="https://i.pinimg.com/736x/85/cc/c4/85ccc4a54968126e77531563a1b0675b.jpg" alt="" />
                <img className='w-full h-[350px] object-cover' src="https://i.pinimg.com/564x/c5/35/a7/c535a71c85dfa552d01580468ba3dfa0.jpg" alt="" />
                <img className='w-full h-[350px] object-cover' src="https://i.pinimg.com/564x/9d/e0/11/9de011d0d458a1a75c4b8ec73c074909.jpg" alt="" />
            </div>
        </animated.div>
    )
}

export default ProductReviewsComponents
