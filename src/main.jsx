import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App';
import '../src/scss/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
);
