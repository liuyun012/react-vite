/*
 * @Author: Qzx
 * @Date: 2021-12-21 22:30:21
 * @LastEditTime: 2021-12-28 21:38:22
 * @LastEditors: your name
 * @Description:
 */
import { get, post } from '@/utils/axios';

// 登录接口
export interface ILoginParams {
  key: any;
}
export function login(data: ILoginParams) {
  return post('/login', data);
}

// 退出登录态
export function logout() {
  return post('/logout');
}

// 验证用户是否登录过
export function isLogin() {
  return get('/isLogin');
}

// 获取token 接口
export function getToken() {
  return get('/token');
}
