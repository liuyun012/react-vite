import React, { FC, useEffect } from 'react';
import { Button } from '@arco-design/web-react';
import RouterViews from './routes';
import './app.less';

const App: FC = () => {
  useEffect(() => {
    console.log(`vite-react-cil`);
  }, []);

  return (
    <div className='App'>
      <h2>Welcome to vite-react-cil</h2>
      <Button type='primary'>Primary</Button>
      {RouterViews}
    </div>
  );
};

export default App;
