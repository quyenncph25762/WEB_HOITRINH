'use client'
import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const ContactComponents = () => {
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <div className="w-full">
            <div className='h-[100px]  object-cover w-full bg-no-repeat bg-[#000] relative before:content-[""] before:top-0 before:bottom-0 before:right-0 before:left-0  before:w-full'>
                <img className='w-full h-full object-cover opacity-70' src="https://i.pinimg.com/564x/f0/33/67/f033676e1c838d21f2f37575f855a1ee.jpg" alt="" />
                <h1 className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white font-bold text-[30px] tracking-wide'>Liên hệ</h1>
            </div>
            <div className='container'>
                <div className="py-[100px] grid grid-cols-2">
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        validateMessages={validateMessages}
                    >
                        <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'tel'} label="tel" >
                            <Input type='number' />
                        </Form.Item>
                        <Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'description'} label="description">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button className='bg-main' style={{ background: "main" }} type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="">
                        <h1 className='text-[18px] text-main font-semibold uppercase'>Nhà làm hàng nem chua Hội trình , giò chả kính chào quý khách !</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponents
