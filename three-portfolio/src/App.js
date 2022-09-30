import React from 'react';
import NavBar from './NavbarTop';
import NavBarBtm from './NavbarBottom';
import Portfolio from "./Portfolio";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Copyright from './Copyright';
const App = () => {
    return (
        <div>
            <NavBar />
            <NavBarBtm />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
        </div>
    )
}

export default App