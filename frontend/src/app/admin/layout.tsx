'use client'
import { Inter } from "next/font/google";
import { Providers } from "../libs/Providers";
const inter = Inter({ subsets: ["latin"] });
import React, { useState } from 'react';
import {
    AppstoreAddOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { ICategory } from "../libs/Features/categories/category.interface";
import Link from "next/link";

const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const items: MenuItem[] = [
        getItem(<Link href={"/admin"}>Dashboard</Link>, "1", <AppstoreAddOutlined />),
        getItem(<Link href={"/admin/category"}>Quản lí danh mục</Link>, "2", <AppstoreAddOutlined />)
    ]
    return (
        <html lang="en" >
            <head>
            </head>
            <body>
                <Providers>
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={collapsed}>
                            <div className="demo-logo-vertical" />
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                items={items}
                            />
                        </Sider>
                        <Layout>
                            <Header style={{ padding: 0, background: colorBgContainer }}>
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 64,
                                        height: 64,
                                    }}
                                />
                            </Header>
                            <Content
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    minHeight: "100vh",
                                    background: colorBgContainer,
                                    borderRadius: borderRadiusLG,
                                }}
                            >
                                {children}
                            </Content>
                        </Layout>
                    </Layout>
                </Providers>
            </body>
        </html>
    );
}