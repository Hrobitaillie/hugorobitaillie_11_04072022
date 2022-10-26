import React from 'react'
import {Routes,Route} from "react-router-dom";


import Home from 'pages/Home/home';
import Header from 'components/Header/header';
import About from 'pages/About/about';
import Location from 'pages/Location/location';
import Error from 'pages/Error/error';
import Footer from 'components/Footer/footer';

function App() {

    return(
        <>
            <Header />
            <Routes>
                {/* route par defaut */}
                <Route path="/" element={<Home />} />
                {/* route page a propos */}
                <Route path="/a-propos" element={<About />} />
                {/* route page des locations */}
                <Route path="/appartement/:id" element={<Location />} />
                {/* route pour les erreurs */}
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;