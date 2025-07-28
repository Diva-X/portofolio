import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Import Bootstrap and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Import burger
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import SCSS principal
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

