import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <p>Home</p>
      <Link to='/admin'>管理页面</Link>
      <Link to='/login'>登录页面</Link>
      <Link to='/admin/config'>管理配置页面</Link>
    </div>
  );
};

export default Home;
