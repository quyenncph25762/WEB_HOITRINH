'use client'
import React, { useState } from 'react';
import { Alert, Divider, Form, Input, Modal, Radio, Space, Table } from 'antd';
import type { FormProps, TableColumnsType } from 'antd';
import { ICategory } from '@/app/libs/Features/categories/category.interface';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import Link from 'next/link';
import { addCategory, removeCategory } from '@/API/categories';


interface IProps {
    categories: ICategory[]
}
const CategoryComponents = (props: IProps) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';

    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Loaded!',
                duration: 2,
            });
        }, 1000);
    };
    const { categories } = props
    // click form
    const onFinish: FormProps<ICategory>['onFinish'] = async (values: ICategory) => {
        await addCategory(values)
        openMessage()
        setTimeout(() => {
            setOpen(false)
            form.setFieldsValue({
                categoryName: "",
            });
        }, 1000);
    };

    const onFinishFailed: FormProps<ICategory>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = (id?: string) => {
        if (id) {
            console.log(id)
            setOpen(true);
        } else {
            setOpen(true);
        }
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const columns: TableColumnsType<ICategory> = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'categoryName',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'actions',
            render: (record: ICategory) => (
                <>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={async () => {
                            await removeCategory(record._id!)
                            message.success("Xóa thành công")
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Button style={{ borderColor: 'orange', color: 'orange', marginLeft: '10px' }}>
                        <Link href={`/admin/category/${record._id}`}>UPDATE</Link>
                    </Button>
                </>
            )
        },
    ];
    const data: ICategory[] = categories.map((cate: ICategory, index) => ({
        key: index + 1,
        _id: cate._id,
        categoryName: cate.categoryName
    }));
    return (
        <div>
            {contextHolder}
            <Modal
                title="Thêm thể loại"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
            >
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
            </Modal>
            <Button style={{ borderColor: 'green', color: 'green', marginBottom: '10px' }} onClick={() => showModal("1")}>ADD</Button>
            <Table
                columns={columns}
                dataSource={data ? data : []}
            />
        </div>
    )
}

export default CategoryComponents
