/*
 * @Author: Qzx
 * @Date: 2021-12-22 23:48:54
 * @LastEditTime: 2022-01-15 18:30:32
 * @LastEditors: Qzx
 * @Description:
 */
import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Checkbox, Link, Button, Space } from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import { login as apiLogin } from '@/api/modules/base';
import styles from '../style/index.module.less';

export default function LoginForm() {
  const formRef: any = useRef<FormInstance>(); // 表单对象
  const [errorMessage, setErrorMessage] = useState(''); // 报错信息
  const [loading, setLoading] = useState(false); // 接口请求loading
  const [rememberPassword, setRememberPassword] = useState(false); // 是否记住密码

  function afterLoginSuccess(params: any) {
    // 记住密码
    if (rememberPassword) {
      localStorage.setItem('loginParams', JSON.stringify(params));
    } else {
      localStorage.removeItem('loginParams');
    }
    // 记录登录状态
    localStorage.setItem('userStatus', 'login');
    // 跳转首页
    // window.location.href = history.createHref({
    //   pathname: '/'
    // });
  }

  function fetchLogin(params: any) {
    setErrorMessage('');
    setLoading(true);
    apiLogin(params)
      .then((res) => {
        const { status, msg } = res.data;
        if (status === 'ok') {
          afterLoginSuccess(params);
        } else {
          setErrorMessage(msg || '登录出错，请刷新重试');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onSubmitClick() {
    formRef?.current?.validate().then((values: any) => {
      fetchLogin(values);
    });
  }

  // 读取 localStorage，设置初始值
  useEffect(() => {
    const params = localStorage.getItem('loginParams');
    const rememberPassword = !!params;
    setRememberPassword(rememberPassword);
    if (formRef.current && rememberPassword) {
      const parseParams = JSON.parse(params);
      formRef.current.setFieldsValue(parseParams);
    }
  }, []);

  return (
    <div className={styles['login-form-wrapper']} data-name='login-form'>
      <div className={styles['login-form-title']}>登录页面</div>
      <div className={styles['login-form-sub-title']}>登录副标题</div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form className={styles['login-form']} layout='vertical' ref={formRef}>
        <Form.Item field='userName' rules={[{ required: true, message: '用户名不能为空' }]}>
          <Input prefix={<IconUser />} placeholder='用户名：admin' onPressEnter={onSubmitClick} />
        </Form.Item>
        <Form.Item field='password' rules={[{ required: true, message: '密码不能为空' }]}>
          <Input.Password prefix={<IconLock />} placeholder='密码：admin' onPressEnter={onSubmitClick} />
        </Form.Item>
        <Space size={16} direction='vertical'>
          <div className={styles['login-form-password-actions']}>
            <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
              记住密码
            </Checkbox>
            <Link>忘记密码？</Link>
          </div>
          <Button type='primary' long onClick={onSubmitClick} loading={loading}>
            登录
          </Button>
        </Space>
      </Form>
    </div>
  );
}
