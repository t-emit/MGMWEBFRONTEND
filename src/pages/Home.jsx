import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import NewsEvents from '../components/NewsEvents';
import QuickLinks from '../components/QuickLinks';

const Home = () => {
    return (
        <div className="App">
            <Hero />
            <About />
            <MissionVision />
            <NewsEvents />
            <QuickLinks />
        </div>
    );
};

export default Home;