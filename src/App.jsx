import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content, Sider } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 64px)',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    width: '100vw',
    height: '100vh',
};

const App = () => (
    <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
    </Layout>
);

export default App;
