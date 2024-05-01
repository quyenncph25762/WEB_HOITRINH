'use client'
import React from 'react'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const SignupComponents = () => {
    const { ref, inView } = useInView();
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50%)',
    });
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='bg-[#F2F2F2] py-10'>
            <div className="container flex items-center justify-center w-full h-full">
                <animated.div className="bg-white p-8 rounded-lg" ref={ref} style={animation}>
                    <h1 className='text-center mb-2'>Đăng kí</h1>
                    <Form
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!', type: "email" }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="confirmPassword"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Singup
                            </Button>
                            Or <Link href="/signin">login now!</Link>
                        </Form.Item>
                    </Form>
                </animated.div>
            </div>
        </div>
    )
}

export default SignupComponents
