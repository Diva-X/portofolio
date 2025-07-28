import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Import de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Import de Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// ✅ Import fichier SCSS global
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);