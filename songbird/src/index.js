import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import birdsData from './birdsData';

ReactDOM.render(
  <React.StrictMode>
    <App birdsData={birdsData} />
  </React.StrictMode>,
  document.getElementById('root')
);