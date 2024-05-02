import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import ProductDetailComponents from '@/components/ProductDetailComponents'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeaderComponents></HeaderComponents>\
            <ProductDetailComponents></ProductDetailComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
