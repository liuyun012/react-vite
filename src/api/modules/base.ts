/*
 * @Author: Qzx
 * @Date: 2021-12-21 22:30:21
 * @LastEditTime: 2021-12-22 23:01:42
 * @LastEditors: your name
 * @Description:
 */
import axios from '@/utils/axios';

// 登录接口
export interface ILoginParams {
  key: any;
}
export function login(data: ILoginParams) {
  return axios.post('/login', data);
}

// 退出登录态
export function logout() {
  return axios.post('/logout');
}

// 验证用户是否登录过
export function isLogin() {
  return axios.get('/isLogin');
}

// 获取token 接口
export function getToken() {
  return axios.get('/token');
}
