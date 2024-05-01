import FooterComponents from '@/components/FooterComponents'
import HeaderComponents from '@/components/HeaderComponents'
import React from 'react'

const page = () => {
    return (
        <>
            <HeaderComponents></HeaderComponents>
            <div className='w-full h-[100vh]'>
                <div className='h-[100px]  object-cover w-full bg-no-repeat bg-[#000] relative before:content-[""] before:top-0 before:bottom-0 before:right-0 before:left-0  before:w-full'>
                    <img className='w-full h-full object-cover opacity-70' src="https://i.pinimg.com/564x/f0/33/67/f033676e1c838d21f2f37575f855a1ee.jpg" alt="" />
                    <h1 className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white font-bold text-[30px] tracking-wide'>Giới thiệu</h1>
                </div>
                <div className="grid grid-cols-2">
                    <div className="bg-main text-white text-center p-10">
                        <h1 className='text-[30px] font-semibold'>Về chúng tôi</h1>
                        <p>Nem chua và giò chả là hai món ăn truyền thống đặc trưng của ẩm thực Việt Nam, không chỉ mang lại hương vị đặc biệt mà còn là biểu tượng của sự tinh tế và kỹ năng trong việc chế biến thực phẩm. Hội trình tay nghề với hơn 15 năm kinh nghiệm, bắt đầu từ năm 2024, đã góp phần quan trọng trong việc giữ gìn và phát triển di sản ẩm thực này.
                        </p>
                        <p className='my-4'>Trải qua 15 năm hoạt động, hội trình đã chứng minh được sự am hiểu sâu sắc về quy trình chế biến nem chua và giò chả, từ việc lựa chọn nguyên liệu tốt nhất, đến quá trình phối trộn gia vị và chế biến, đảm bảo mỗi sản phẩm mang lại hương vị đậm đà và chất lượng tuyệt vời.</p>

                        <p className='my-4'>Sứ mệnh của hội trình không chỉ là tạo ra những sản phẩm ăn ngon, mà còn là bảo tồn và phát triển nghề truyền thống của người Việt. Qua mỗi đợt hội trình, họ chia sẻ kiến thức, kỹ năng và kinh nghiệm với thế hệ trẻ, tạo ra một cộng đồng người làm nem chua và giò chả ngày càng phát triển và chất lượng. Đồng thời, họ cũng không ngừng nâng cao chất lượng sản phẩm và tìm kiếm cách tiếp cận mới để đáp ứng nhu cầu của thị trường hiện đại.</p>

                        <p className='my-4'> Với 15 năm hành trình không ngừng phát triển và hoàn thiện, hội trình tay nghề nem chua giò chả đã trở thành một biểu tượng của sự đam mê, sự kiên nhẫn và sự tận tụy trong nghề, đồng thời là niềm tự hào của người làm nghề và là niềm tin của người tiêu dùng trong sự lựa chọn thực phẩm an toàn và ngon miệng.</p>
                    </div>
                    <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/b9/6e/2f/b96e2f3115829bf7420fe4372a3282aa.jpg" alt="" />
                </div>
            </div >
            <FooterComponents></FooterComponents>
        </>
    )
}

export default page
