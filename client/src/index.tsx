import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router/AppRouter';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
