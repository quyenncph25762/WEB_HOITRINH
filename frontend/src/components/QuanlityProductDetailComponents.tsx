"use client"
import { IProductQuanlity } from '@/app/libs/Features/productQuanlity/productQuanlity.interface'
import React from 'react'

interface IProps {
    id: string
    getOneProductQuanlity: IProductQuanlity
}
const QuanlityProductDetailComponents = (props: IProps) => {
    const { id, getOneProductQuanlity } = props
    return (
        <div className='bg-[#F2F2F2] w-full'>
            <div className={`h-[100px] w-full  object-cover w-full bg-no-repeat bg-[#000] relative before:content-[""] before:top-0 before:bottom-0 before:right-0 before:left-0  before:w-full`}>
                <img className='w-full h-full object-cover opacity-70' src={getOneProductQuanlity.image} alt="" />
                <h1 className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white font-bold text-[30px] tracking-wide'>Chi tiết bảo quản</h1>
            </div>
            <div className="container">
                <div className="py-10 grid grid-cols-2">
                    <img className='h-[450px] rounded-lg' src={getOneProductQuanlity.image} alt="" />
                    <div className="p-10 text-[#777]">
                        <h1 className='text-[30px] font-semibold mb-4 tracking-wide text-main'>{getOneProductQuanlity.title}</h1>
                        <p className=''>{getOneProductQuanlity.description}.</p>
                        <div className="mt-10">
                            <strong className='mt-5 mb-2 text-main'>Đội ngũ làm việc</strong>
                            <p>- Có kinh nghiệm  trên 10 năm trong nghề cung cấp cho người tiêu dùng đầy đủ dịch vụ và chế độ an toàn thực phẩm</p>
                            <br />
                            <strong className='text-main'>Dịch vụ</strong>
                            <p className='mt-1'>- Sẵn sàng đổi trả và hoàn tiền những sản phẩm kém chất lượng nếu sản phẩm bị hỏng</p>
                            <p className='mt-1'>- Tư vấn khách hàng trước khi đặt hàng nhiệt tình</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuanlityProductDetailComponents
