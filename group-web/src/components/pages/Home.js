import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../footer';

function Home () {
    return (
        <>
          <HeroSection />
          <Cards />
          <Footer />
        </>
    );
}

export default Home;
