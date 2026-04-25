import Hero from './components/Hero';
import HomeAbout from './components/HomeAbout';
import FocusAreas from './components/FocusAreas';
import Partners from '../../components/shared/Partners';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <FocusAreas />
      <Partners />
      <Contact />
      <Newsletter />
    </>
  );
};

export default HomePage;
