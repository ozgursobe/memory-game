import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MemoryGame from './components/MemoryGame';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
);



