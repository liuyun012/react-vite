import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '@/pages/home';

function RouterViews() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/', element: <Home /> }
  ]);

  return routes;
}

export default RouterViews;
