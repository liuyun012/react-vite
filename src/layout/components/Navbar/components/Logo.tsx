import React from 'react';
import { Typography, Space } from '@arco-design/web-react';

function Logo() {
  return (
    <div>
      <Space size={8}>
        <Logo />
        <Typography.Title style={{ margin: 0, fontSize: 18 }} heading={5}>
          Arco Design Pro
        </Typography.Title>
      </Space>
    </div>
  );
}

export default Logo;
