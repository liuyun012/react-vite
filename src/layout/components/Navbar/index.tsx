/*
 * @Author: Qzx
 * @Date: 2021-11-21 19:17:12
 * @LastEditTime: 2022-01-15 17:00:20
 * @LastEditors: Qzx
 * @Description:
 */
import React from 'react';
import styles from './style/index.module.less';
import { Logo, NavMenu, UserInfo } from './components';

function Navbar() {
  return (
    <div data-name='layout-navbar' className={styles['navbar']}>
      {/* 左侧内容 */}
      <div className={styles['navbar-hd']}>
        <Logo />
      </div>

      {/* 中间区域 */}
      <div className={styles['navbar-bd']}>
        <NavMenu />
      </div>

      {/* 右侧操作 */}
      <ul className={styles['navbar-ft']}>
        <li>
          <UserInfo />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
