import AboutHero from './components/AboutHero';
import MissionVision from './components/MissionVision';
import CompanyHistory from './components/CompanyHistory';
import FAQ from './components/FAQ';
import Partners from '../../components/shared/Partners';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <MissionVision />
        <CompanyHistory />
        <FAQ />
        <div className="mt-20">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
