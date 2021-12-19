import React from 'react';
import Logo from './components/Logo';
import styles from './style/index.module.less';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
}

export default Navbar;
