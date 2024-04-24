import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// Define light colors
const lightColors = {
    lightBlue: '#D6EAF8',
    lightGreen: '#D5F5E3',
    lightYellow: '#FCF3CF',
    lightPink: '#FADBD8',
    lightPurple: '#D2B4DE',
    lightGray: '#F2F3F4',
    darkGray: '#808B96',
};

const { lightBlue, lightGreen, lightYellow, lightPink, lightPurple, lightGray, darkGray } = lightColors;

const headerStyle = {
    textAlign: 'center',
    color: darkGray,
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: lightBlue, // Change to lightBlue
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: darkGray,
    backgroundColor: lightGray, // Change to lightGray
};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: darkGray,
    backgroundColor: lightYellow, // Change to lightYellow
};

const footerStyle = {
    textAlign: 'center',
    color: darkGray,
    backgroundColor: lightBlue, // Change to lightBlue
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
};

const App = () => (
    <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
            <Sider width="25%" style={siderStyle}>Sider</Sider>
            <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
    </Layout>
);

export default App;
