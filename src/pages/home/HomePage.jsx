import Hero from './components/Hero';
import HomeAbout from './components/HomeAbout';
import FocusAreas from './components/FocusAreas';
import Partners from '../../components/shared/Partners';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import SEO from '../../components/shared/SEO';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Your trusted partner for medicines, medical consumables & surgical equipment across Southern Africa. Serving Eswatini and Mozambique since 2019."
      />
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
