import React from 'react'

import NavBar from './Navbar'
import Hero from './Herosection';
import Appsection from "./Appsection"
import CardSection from "./Cardsection"
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Appsection />
            <CardSection title='Card1' text="My text" button="My button" />
            <Footer />
        </div>
    )
}
export default App