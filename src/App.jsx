// App.jsx

import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css'; // Import CSS file

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <Layout className="layout">
            <Header className="header">Header</Header>
            <Layout>
                <Sider width="25%" className="sider">Sider</Sider>
                <Content className="content">
                    <Input
                        className="input"
                        style={{ width: '200px' }}
                        placeholder="Enter your age"
                        prefix={<UserOutlined />}
                        onChange={handleInputChange}
                    />

                    <p>Your Age: {inputValue}</p>
                </Content>
            </Layout>
            <Footer className="footer">Footer</Footer>
        </Layout>
    );
};

export default App;
