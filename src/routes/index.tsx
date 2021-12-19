import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/base/login';
import Admin from '@/pages/admin';
import Config from '@/pages/admin/config';
import NoFoundPage from '@/pages/base/404';

function RouterViews() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {
      path: '/admin',
      element: <Admin />,
      children: [{ path: 'config', element: <Config /> }]
    },
    { path: '*', element: <NoFoundPage /> }
  ]);

  return routes;
}

export default RouterViews;
