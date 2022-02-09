import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../footer';
import BackToTop from '../BackToTop';

function Home () {
    return (
        <>
        <BackToTop/>
          <HeroSection />
          <Cards />
          <Footer />
        </>
    );
}

export default Home;
