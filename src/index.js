import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dice from './components/Dice/Dice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dice />
  </React.StrictMode>
);
