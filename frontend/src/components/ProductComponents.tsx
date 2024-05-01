'use client'
import React from 'react'
import { Card, List } from 'antd';
import Meta from 'antd/es/card/Meta';
const ProductComponents = () => {
    const data = [
        {
            title: 'Giò lụa',
            image: "https://pos.nvncdn.com/fc9213-103046/ps/20210812_gSpRDJnRTxOc9uzQeBLJa9Mh.jpg",
            price: 99000,
            discount: 3000,
            star: 4
        },
    ];
    return (
        <div className='bg-[#F2F2F2] h-[100vh] py-10'>
            <div className="container">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    dataSource={data}
                    grid={{
                        gutter: 4,
                        xs: 1,
                        sm: 2,
                        md: 5,
                        lg: 5,
                        xl: 5,
                        xxl: 6,
                    }
                    }
                    renderItem={(item) => (
                        <List.Item>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default ProductComponents
