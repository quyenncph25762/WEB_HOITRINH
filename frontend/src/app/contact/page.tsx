import ContactComponents from '@/components/ContactComponents'
import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeaderComponents></HeaderComponents>
            <ContactComponents></ContactComponents>
            <FooterComponents></FooterComponents>
        </div>
    )
}

export default page
