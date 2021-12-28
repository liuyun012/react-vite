/*
 * @Author: Qzx
 * @Date: 2021-12-20 21:33:59
 * @LastEditTime: 2021-12-28 21:41:18
 * @LastEditors: your name
 * @Description: axios 请求封装
 */
import axios from 'axios';
import qs from 'qs';

// 创建实例时设置配置的默认值
const instance = axios.create({
  baseURL: '/api', // 设置请求基地址
  timeout: 60000, // 设置超时
  withCredentials: true, // 跨域时是否发送cookie
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (config.data && config.headers && config.headers['content-type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回(JSON格式处理)
    const { data } = response;
    return new Promise((resolve, reject) => {
      if (data.status === 200) {
        resolve(data);
      } else {
        handleCode(data.code, data.message);
        reject(data);
      }
    });
  },
  (err) => {
    errMsg(err);
    return Promise.reject(err);
  }
);

// 处理code异常
function handleCode(code: number, msg: string) {
  switch (code) {
    default:
      console.log(msg);
      break;
  }
}

// 失败错误码提示处理
function errMsg(err: any) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log(err.response.data.error.details);
        break;
      case 401:
        console.log('未授权，请登录');
        break;
      case 500:
        console.log('服务器内部错误');
        break;
      default:
        console.log(err.response.msg);
    }
  }
}

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url = '', params = {}) {
  return instance.get(url, { params: params });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url = '', data = {}) {
  return instance.post(url, data);
}

export default instance;
