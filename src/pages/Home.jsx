import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import NewsEvents from '../components/NewsEvents';
import QuickLinks from '../components/QuickLinks';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <MissionVision />
            <NewsEvents />
            <QuickLinks />
            <Footer />
        </div>
    );
};

export default Home;