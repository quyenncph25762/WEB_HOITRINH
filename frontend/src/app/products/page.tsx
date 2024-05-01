import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import ProductComponents from '@/components/ProductComponents'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <ProductComponents></ProductComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
