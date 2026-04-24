import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Partners />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
