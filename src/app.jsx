import React from 'react'
import {Routes,Route} from "react-router-dom";


import Home from 'pages/Home/home';
import Header from 'components/Header/header';
import About from 'pages/About/about';
import Location from 'pages/Location/location';
import Error from 'pages/Error/error';
import Footer from 'components/Footer/footer';
import "swiper/css/bundle";

function App() {

    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/appartement/:locationId" element={<Location />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;