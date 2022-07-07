import React from 'react'
import {Routes,Route} from "react-router-dom";

import Home from 'pages/Home/home';
import Header from 'components/Header/header';
import About from 'pages/About/about';


function App() {

    return(
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
            </Routes>
        </div>
    )
}

export default App;