import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@arco-design/web-react';
import styles from './style/layout.module.less';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

function PageLayout() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.layoutNavbar}>{/* <Navbar /> */}</Header>
      <Content className={styles.layoutCon}>
        <Outlet />
      </Content>
      <Footer>底部</Footer>
    </Layout>
  );
}

export default PageLayout;
