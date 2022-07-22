import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/Home/Home"
import Service from "./pages/Service/Service"
import Blog from "./pages/Blog/Blog"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

