import React from 'react'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import SignupComponents from '@/components/SignupComponents'
const page = () => {
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <SignupComponents></SignupComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
