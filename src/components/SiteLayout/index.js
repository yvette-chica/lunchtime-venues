import React from 'react';
import { Layout } from 'antd';

import './style.scss';

const { Header, Content } = Layout;

const SiteLayout = ({ children }) => {
    return (
        <Layout className="site-layout">
            <Header className="site-layout__header">
                <span className="site-layout__title">LunchTime Voting</span>
            </Header>
            <Content className="site-layout__content">
                {children}
            </Content>
    </Layout> 
    )
}

export default SiteLayout;
