/*
 * @Author: your name
 * @Date: 2021-11-21 17:48:38
 * @LastEditTime: 2022-01-15 16:30:32
 * @LastEditors: your name
 * @Description:
 */
import React from 'react';
import { Result, Button } from '@arco-design/web-react';
import history from '@/utils/history';

const NoFoundPage: React.FC = () => (
  <Result
    status='404'
    title='404'
    subTitle='Sorry, the page you visited does not exist.'
    extra={
      <Button type='primary' onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
