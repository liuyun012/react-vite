import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Typography, Dropdown, Menu } from '@arco-design/web-react';
import { ReducerState } from '@/redux';
import styles from '../style/index.module.less';

function UserInfo() {
  const userInfo = useSelector((state: ReducerState) => state.global.userInfo) || {};

  function onMenuItemClick() {
    console.log(11);
  }

  return (
    <div>
      <Avatar size={24} style={{ marginRight: 8 }}>
        <img alt='avatar' src={userInfo.avatar} />
      </Avatar>
      <Dropdown
        trigger='click'
        droplist={
          <Menu onClickMenuItem={onMenuItemClick}>
            <Menu.Item key='logout'>登出</Menu.Item>
          </Menu>
        }
      >
        <Typography.Text className={styles.username}>{userInfo.name}</Typography.Text>
      </Dropdown>
    </div>
  );
}

export default UserInfo;
