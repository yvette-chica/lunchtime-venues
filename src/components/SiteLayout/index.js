import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const SiteLayout = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Title>LunchTime</Title>
            </Header>
            <Content>
                {children}
            </Content>
        <Footer>Footer</Footer>
    </Layout> 
    )
}

export default SiteLayout;
