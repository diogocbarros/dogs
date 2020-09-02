import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Login from './Component/Login/Login';
import './App.css';
import Header from './Component/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
