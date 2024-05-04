import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Card, Image, Rate, Skeleton } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect } from 'react'

const ListCommentComponents = () => {

    return (
        <div className="mx-auto">
            <div className="space-y-4">
                <div className="grid gap-4">
                    <div className="grid w-full gap-1.5">
                        <label htmlFor="comment">Bình luận</label>
                        <TextArea id="comment" placeholder="Write your comment here..." />
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                        Submit Comment
                    </Button>
                </div>
                <h2 className="font-semibold text-xl mt-10">110 Comments</h2>
                <div className="text-sm flex items-start gap-4">
                    <Avatar className="w-10 border" size={40} icon={<UserOutlined />} />
                    <div className="grid gap-1.5">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold">@iamwillpursell</div>
                            <div className="text-gray-500 text-xs dark:text-gray-400">5 months ago</div>
                        </div>
                        <Rate className='text-sm' defaultValue={3} disabled>
                        </Rate>
                        <div>
                            I really love the ecosystem Vercel is creating. The way each component can be added and modified with ease
                            really makes these tools attractive.
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Image
                                width={80}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCommentComponents
