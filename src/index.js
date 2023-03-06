import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Table from './Table';
import reportWebVitals from './reportWebVitals';
import HomeTerpisah from './HomeTerpisah';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table />
    <HomeTerpisah />
  </React.StrictMode>
);

reportWebVitals();
