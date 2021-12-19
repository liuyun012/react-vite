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
