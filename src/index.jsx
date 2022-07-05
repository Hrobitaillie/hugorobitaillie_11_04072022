
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './pages/Home/home';
import Header from './components/Header/header';
import About from './pages/Home/About/about';

import 'assets/styles/main.scss'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);