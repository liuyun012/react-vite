/*
 * @Author: Qzx
 * @Date: 2021-11-15 22:58:21
 * @LastEditTime: 2022-01-15 16:40:54
 * @LastEditors: Qzx
 * @Description:
 */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Home</p>
      <Link to='/admin'>管理页面</Link>
      <Link to='/login'>登录页面</Link>
      <Link to='/admin/config'>管理配置页面</Link>
    </div>
  );
}

export default Home;
