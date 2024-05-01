"use server"
import { fetchOneNews } from '@/API/news'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import NewPagesDetailComponents from '@/components/NewPagesDetailComponents'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const getOneNews = await fetchOneNews(params?.id)
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <NewPagesDetailComponents getOneNews={getOneNews}></NewPagesDetailComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
