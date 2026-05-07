import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This finds the 'root' div from HTML and starts the React engine
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);