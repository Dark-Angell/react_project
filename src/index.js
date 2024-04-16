import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter } from 'react-router-dom'
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>

);

// 监测 redux 中状态的修改，及时刷新页面
// store.subscribe(() => {
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// })
