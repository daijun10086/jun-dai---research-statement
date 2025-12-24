
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 如果有 index.css 文件，取消下面的注释
// import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
