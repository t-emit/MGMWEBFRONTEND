// App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import NewsEvents from './components/NewsEvents';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Sidebar /> */}
      <About />
      <MissionVision />
      <NewsEvents />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;