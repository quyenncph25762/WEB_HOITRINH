'use client'
import React, { Dispatch, useEffect } from 'react'
import { Alert, Button, Card, Input, List, Rate } from 'antd';
import Meta from 'antd/es/card/Meta';
import { IProduct } from '@/app/libs/Features/products/product.interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { listProductsClient } from '@/app/libs/Features/products/productSlice';
import Marquee from 'react-fast-marquee';
import { AudioOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
interface IProps {
    listProduct: IProduct[]
}
const ProductComponents = (props: IProps) => {
    const dispatch: Dispatch<any> = useDispatch()
    const productState = useSelector((state: RootState) => state.productClientSliceReducer.products)
    const { listProduct } = props
    useEffect(() => {
        if (listProduct.length > 0) {
            dispatch(listProductsClient(listProduct))
        }
    }, [listProduct])
    // Search
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className="">
            <Alert
                banner
                message={
                    <Marquee style={{ background: "main" }} pauseOnHover gradient={true}>
                        Nhà hàng nem chua Hội trình xin kính chào quý khách ! Chúc quý khách mua xem hàng vui vẻ !
                    </Marquee>
                }
            />
            <div className='bg-[#F2F2F2] h-[100vh] py-10'>
                <div className="container">
                    <div className="grid grid-cols-3 gap-[50px] pt-4 pb-[50px]">
                        <div className="bg-white rounded-sm p-4 col-span-2">
                            <p className='text-main'>Lọc sản phẩm theo: </p>
                            <div className="mt-4">
                                <Button style={{ borderColor: "green", color: "Green" }}>Nem</Button>
                            </div>
                        </div>
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    </div>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 4,
                        }}
                        dataSource={productState}
                        grid={{
                            gutter: 2,
                            xs: 1,
                            sm: 2,
                            md: 5,
                            lg: 4,
                            xl: 4,
                            xxl: 4,
                        }
                        }
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <Card
                                    hoverable
                                    style={{ width: 280 }}
                                    cover={<img alt="example" className='h-[250px] object-cover w-full' src={`${item.image}`} />}
                                >
                                    <Meta title={item.title} />
                                    <p className='text-red-500 font-semibold mt-2'>{(item.price - item.discount).toLocaleString("vi-VN")}đ <span className='ml-2 text-xs text-[#777]'><del>{(item.price).toLocaleString("vi-VN")}</del>đ</span></p>
                                    <Rate value={item.averageStar} disabled style={{ fontSize: "14px" }}></Rate>
                                    <Button style={{ background: "green", color: "white", marginTop: "12px" }}>Thêm vào giỏ hàng</Button>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductComponents
