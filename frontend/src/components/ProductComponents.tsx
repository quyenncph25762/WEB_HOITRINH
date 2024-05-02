'use client'
import React, { Dispatch, useEffect } from 'react'
import { Alert, Button, Card, Input, List, Rate, Slider } from 'antd';
import Meta from 'antd/es/card/Meta';
import { IProduct } from '@/app/libs/Features/products/product.interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { listProductByCategoryClients, listProductsClient, searchProductBynameClients } from '@/app/libs/Features/products/productSlice';
import Marquee from 'react-fast-marquee';
import { AudioOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
import { Flex, Layout } from 'antd';
import { ICategory } from '@/app/libs/Features/categories/category.interface';
import Link from 'next/link';
const { Search } = Input;

interface IProps {
    listProduct: IProduct[]
    listCategories: ICategory[]
}
const ProductComponents = (props: IProps) => {
    const dispatch: Dispatch<any> = useDispatch()
    const productState = useSelector((state: RootState) => state.productClientSliceReducer.products)
    console.log(productState)
    const { listProduct, listCategories } = props
    useEffect(() => {
        if (listProduct.length > 0) {
            dispatch(listProductsClient(listProduct))
        }
    }, [listProduct, dispatch])
    // loc san pham theo category
    const handleProductByCate = (id?: string) => {
        if (id) {
            dispatch(listProductsClient(listProduct))
            dispatch(listProductByCategoryClients(id))
        } else {
            dispatch(listProductsClient(listProduct))
        }
    }
    const onSearch: SearchProps['onSearch'] = (value: string) => {
        if (value.trim() === "") {
            dispatch(listProductsClient(listProduct))
        }
        if (value && productState) {
            dispatch(listProductsClient(listProduct))
            dispatch(searchProductBynameClients({ nameTerm: value, products: productState }))
        }
    }
    return (
        <div className="min-h-[100vh] bg-[#fff]">
            <Alert
                banner
                message={
                    <Marquee style={{ background: "main" }} pauseOnHover gradient={true}>
                        Nhà hàng nem chua Hội trình xin kính chào quý khách ! Chúc quý khách mua xem hàng vui vẻ !
                    </Marquee>
                }
            />
            <div className='h-[100vh] grid grid-cols-4 container mt-10'>
                <div className="h-[100%] col-span-1 flex flex-col items-center">
                    <div className="flex flex-col w-full">
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        <h1 className='bg-main text-white w-full text-center py-1 mt-2'>Danh mục sản phẩm</h1>
                        <ul>
                            <li onClick={() => handleProductByCate(undefined)} className='w-full text-center py-1 border border-1 cursor-pointer bg-white hover:bg-main hover:text-white ease-linear transition-all'>Tất cả sản phẩm</li>
                            {listCategories?.map((cate, index) => (
                                <li onClick={() => handleProductByCate(cate._id)} key={index} className='w-full text-center py-1 border border-1 cursor-pointer bg-white hover:bg-main hover:text-white ease-linear transition-all'>{cate.categoryName}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full mt-5">
                        <h1 className='font-semibold text-[#777] text-[18px]'>Lọc theo giá</h1>
                        <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
                    </div>
                    <div className="w-full mt-5">
                        <h1 className='font-semibold text-[#777] text-[18px]'>Có thể bạn thích</h1>
                        <div className="flex items-center  border-b-2 p-2 cursor-pointer">
                            <img className='w-[80px] h-[60px]' src="https://i.pinimg.com/736x/c3/36/ce/c336ce57eb395e908475994dfb8eb5b2.jpg" alt="" />
                            <div className="ml-1">
                                <p className='text-[#777] font-semibold hover:text-main'>Giò đám cưới</p>
                                <del>600.000đ</del><span className='text-red-500 ml-1 font-semibold'>500.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }}
                        dataSource={productState}
                        grid={{
                            gutter: 4,
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
                                    style={{ width: 230 }}
                                    cover={<img alt="example" className='h-[250px] object-cover w-full' src={`${item.image}`} />}
                                >
                                    <Link href={`/products/${item._id}`}>
                                        <Meta title={item.productName} />
                                        <p className='text-red-500 font-semibold mt-2'>{(item.price - item.discount).toLocaleString("vi-VN")}đ <span className='ml-2 text-xs text-[#777]'><del>{(item.price).toLocaleString("vi-VN")}</del>đ</span></p>
                                        <Rate value={item.averageStar} disabled style={{ fontSize: "14px" }}></Rate>
                                    </Link>
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
