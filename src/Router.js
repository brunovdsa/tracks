import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import App from './App';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
