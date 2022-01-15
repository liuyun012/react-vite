/*
 * @Author: Qzx
 * @Date: 2021-11-23 23:28:45
 * @LastEditTime: 2022-01-15 17:34:39
 * @LastEditors: Qzx
 * @Description:
 */
import React from 'react';
import { Typography, Space } from '@arco-design/web-react';
import LogoSvg from '@/assets/logo.svg';

function Logo() {
  return (
    <div>
      <Space size={8}>
        {/* <LogoSvg /> */}
        <img src={LogoSvg} alt='React Logo' />
        <Typography.Title style={{ margin: 0, fontSize: 18 }} heading={5}>
          Arco Pro
        </Typography.Title>
      </Space>
    </div>
  );
}

export default Logo;
