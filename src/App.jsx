import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import AboutPage from './pages/about/AboutPage';
import ScrollReset from './components/layout/ScrollReset';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import ScrollProgress from './components/shared/ScrollProgress';
import Chatbot from './components/shared/Chatbot';

const App = () => {
  return (
    <Router>
      <ScrollReset />
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
