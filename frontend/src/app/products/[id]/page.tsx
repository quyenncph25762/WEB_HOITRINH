'use server'
import { fetchOneProduct } from '@/API/product'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import ProductDetailComponents from '@/components/ProductDetailComponents'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const getOneProduct = await fetchOneProduct(params?.id)
    console.log(getOneProduct)
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <ProductDetailComponents getOneProduct={getOneProduct}></ProductDetailComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
