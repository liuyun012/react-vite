/*
 * @Author: Qzx
 * @Date: 2021-11-13 17:22:40
 * @LastEditTime: 2022-01-15 19:04:50
 * @LastEditors: Qzx
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'virtual:windi.css';
import '@arco-design/web-react/dist/css/index.less';
import './styles/index.less';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
