/*
 * @Author: Qzx
 * @Date: 2021-11-13 17:22:40
 * @LastEditTime: 2021-12-22 22:03:50
 * @LastEditors: your name
 * @Description:
 */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import RouterViews from './routes';
import rootReducer from './redux';
const store = createStore(rootReducer);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // 窗口聚焦不重新获取数据
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <RouterViews />
        </Provider>
      </BrowserRouter>

      {/* react-query 开发工具 */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
