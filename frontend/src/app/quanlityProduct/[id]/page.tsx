"use server"
import { fetchOneProductQuanlity } from '@/API/productQuanlity'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import QuanlityProductDetailComponents from '@/components/QuanlityProductDetailComponents'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const getOneProductQuanlity = await fetchOneProductQuanlity(params.id ? params.id : "")
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <QuanlityProductDetailComponents getOneProductQuanlity={getOneProductQuanlity ? getOneProductQuanlity : { title: "Chưa cập nhật", image: "", description: "Chưa cập nhật" }} id={params.id}></QuanlityProductDetailComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
