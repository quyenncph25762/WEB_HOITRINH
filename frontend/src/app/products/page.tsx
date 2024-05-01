import { fetchAllProduct } from '@/API/product'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import ProductComponents from '@/components/ProductComponents'
import React from 'react'

const page = async () => {
    const listProduct = await fetchAllProduct()
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <ProductComponents listProduct={listProduct ? listProduct : []}></ProductComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
