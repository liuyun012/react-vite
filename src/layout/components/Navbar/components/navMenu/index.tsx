import React from 'react';
import { Menu } from '@arco-design/web-react';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function NavMenu() {
  return (
    <div className='menu-demo'>
      <Menu mode='horizontal' defaultSelectedKeys={['0']}>
        <MenuItem key='0'>Home</MenuItem>
        <SubMenu key='1' title='About'>
          <MenuItem key='1-1'>About11</MenuItem>
        </SubMenu>
        <MenuItem key='2'>Solution</MenuItem>
        <MenuItem key='3'>Cloud Service</MenuItem>
        <MenuItem key='4'>Cooperation</MenuItem>
      </Menu>
    </div>
  );
}

export default NavMenu;
