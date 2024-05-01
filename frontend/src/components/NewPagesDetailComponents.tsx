import { INews } from '@/app/libs/Features/news/news.interface'
import React from 'react'

interface IProps {
    getOneNews: INews
}
const NewPagesDetailComponents = (props: IProps) => {
    const { getOneNews } = props
    return (
        <div className='bg-[#F2F2F2]'>
            <div className={`h-[100px]  object-cover w-full bg-no-repeat bg-[#000] relative before:content-[""] before:top-0 before:bottom-0 before:right-0 before:left-0  before:w-full`}>
                <img className='w-full h-full object-cover opacity-70' src={getOneNews.image} alt="" />
                <h1 className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white font-bold text-[30px] tracking-wide'>Chi tiết tin tức</h1>
            </div>
            <div className="container">
                <div className="py-10 grid grid-cols-2">
                    <img className='h-[450px] rounded-lg' src={getOneNews.image} alt="" />
                    <div className="p-10 text-[#777]">
                        <h1 className='text-[30px] font-semibold mb-4 tracking-wide text-main'>{getOneNews.title}</h1>
                        <p className=''>{getOneNews.description}</p>
                        <p className='mt-5 text-[24px] font-semibold text-main'>Sứ mệnh</p>
                        <ul className='mt-4'>
                            <li>
                                <strong>Đối với Khách hàng</strong>: <span> luôn cải tiến và sáng tạo không ngừng. Tạo nên những sản phẩm có chất lượng tối ưu, mang lại sự hài lòng cho khách hàng ở mức độ cao nhất.</span>
                            </li>
                            <li className='mt-4'>
                                <strong>Đối với cộng đồng: </strong>
                                <span>
                                    Luôn đáp ứng và thỏa mãn các quy định của pháp luật về vấn đề an toàn vệ sinh thực phẩm, đảm bảo không ảnh hưởng đến môi trường sống xung quanh, luôn cam kết thực hiện tốt nghĩa vụ tài chính đối với nhà nước.
                                </span>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPagesDetailComponents
