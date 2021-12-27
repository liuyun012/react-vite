/*
 * @Author: Qzx
 * @Date: 2021-12-22 23:46:38
 * @LastEditTime: 2021-12-23 23:11:46
 * @LastEditors: your name
 * @Description:
 */
import React from 'react';
import './style/index.less';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <div className='login' data-name='login'>
      <div className='login-form'>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
