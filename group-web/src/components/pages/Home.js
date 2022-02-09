import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../footer';
import Scroll from '../Scroll';

function Home () {
    return (
        <>
        <Scroll showBelow={250}/>
          <HeroSection />
          <Cards />
          <Footer />
        </>
    );
}

export default Home;
