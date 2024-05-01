'use client'
import { FacebookOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'

const SubHeaderComponents = () => {
    return (
        <div className='bg-[#1AA84F] py-[20px] h-[20px] flex items-center'>
            <div className="container flex items-center justify-between text-white">
                <div className="flex text-sm">
                    <div className="">
                        <PhoneOutlined />
                        <span className='ml-2'>0967-584-597</span>
                    </div>
                    <div className="ml-4">
                        <MailOutlined />
                        <span className='ml-2'>nguyencongquyen1610203@gmail.com</span>
                    </div>
                </div>

                <div className="">
                    <FacebookOutlined />
                </div>
            </div>
        </div>
    )
}

export default SubHeaderComponents
