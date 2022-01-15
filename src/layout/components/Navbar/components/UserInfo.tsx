/*
 * @Author: Qzx
 * @Date: 2021-11-23 23:37:00
 * @LastEditTime: 2022-01-15 17:45:45
 * @LastEditors: Qzx
 * @Description:
 */
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
    <>
      <Avatar size={24} style={{ marginRight: 8 }}>
        <img alt='avatar' src={userInfo.avatar} />
      </Avatar>
      <Dropdown
        trigger='hover'
        droplist={
          <Menu onClickMenuItem={onMenuItemClick}>
            <Menu.Item key='logout'>退出登录</Menu.Item>
          </Menu>
        }
      >
        <Typography.Text className={styles.username}>{userInfo.name}</Typography.Text>
      </Dropdown>
    </>
  );
}

export default UserInfo;
