import EventComponents from '@/components/EventComponents'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import ServiceComponents from '@/components/ServiceComponents'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <EventComponents></EventComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
