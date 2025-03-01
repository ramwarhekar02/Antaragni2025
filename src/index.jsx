// index.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

// basename={process.env.PUBLIC_URL}