import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DEV_DATA } from './devData.js';
import './styles.css';

// Di produksi, index.php mengisi window.__DATA__ dari database.
// Saat `npm run dev`, tidak ada PHP, jadi pakai data contoh (DEV_DATA).
const data = (typeof window !== 'undefined' && window.__DATA__) ? window.__DATA__ : DEV_DATA;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
