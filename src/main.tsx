import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss'
import Home from './pages/home/home';
import Search from './pages/search/search';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/:userName" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
