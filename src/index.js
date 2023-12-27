import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// Create an instance of browser history
const history = createBrowserHistory();

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <Router history={history}>
    <App />
  </Router>,
);
