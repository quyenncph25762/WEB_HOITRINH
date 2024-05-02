"use server"
import { fetchAllProduct } from '@/API/product'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import ProductComponents from '@/components/ProductComponents'
import React from 'react'
import { Flex, Layout } from 'antd';
import { fetchAllCategory } from '@/API/categories'

const page = async () => {
    const listProduct = await fetchAllProduct()
    const listCategories = await fetchAllCategory()
    return (
        <div>

            <HeaderComponents></HeaderComponents>
            <ProductComponents listCategories={listCategories ? listCategories : []} listProduct={listProduct ? listProduct : []}></ProductComponents>
            <FooterComponents></FooterComponents>

        </div>
    )
}

export default page
