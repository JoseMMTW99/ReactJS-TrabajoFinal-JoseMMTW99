import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Descuentos from './components/Descuentos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar/>
    <Descuentos/>
  </div>
);