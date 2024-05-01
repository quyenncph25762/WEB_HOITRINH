'use client'
import React, { useState } from 'react';
import { Divider, Form, Input, Modal, Radio, Table } from 'antd';
import type { FormProps, TableColumnsType } from 'antd';
import { ICategory } from '@/app/libs/Features/categories/category.interface';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { updateCategory } from '@/API/categories';
import { useRouter } from "next/navigation"
interface IProps {
    getOneCategory: ICategory
    id: string
}
const CategoryUpdateComponents = (props: IProps) => {
    const [form] = Form.useForm()
    const { getOneCategory, id } = props
    const router = useRouter()
    form.setFieldsValue({
        categoryName: getOneCategory.categoryName
    })
    const onFinish = async (values: ICategory) => {
        try {
            await updateCategory(id, values)
            message.success("Cập nhật thành công!")
            router.push("/admin/category")
        } catch (error) {
            console.log(error)
        }
    };
    const onFinishFailed: FormProps<ICategory>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h1 className='text-[28px] font-semibold'>Sửa thể loại</h1>
            <div className="mt-4">
                <Form
                    form={form}
                    name="basic"
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<ICategory>
                        label="categoryName"
                        name="categoryName"
                        rules={[{ required: true, message: 'Please input your category!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default CategoryUpdateComponents
