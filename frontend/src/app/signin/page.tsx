'use server'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import SigninComponents from '@/components/SigninComponents'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <SigninComponents></SigninComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
