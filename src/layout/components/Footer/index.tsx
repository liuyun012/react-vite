import React from 'react';
import { Layout } from '@arco-design/web-react';
import { FooterProps } from '@arco-design/web-react/es/Layout/interface';
import styles from './style/index.module.less';

const Footer = Layout.Footer;

function FooterBar(props: FooterProps = {}) {
  const { ...restProps } = props;

  return (
    <Footer className={styles.footer} {...restProps}>
      Arco Design Pro
    </Footer>
  );
}

export default FooterBar;
