import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import TopBar from './components/layout/TopBar';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import ScrollReset from './components/layout/ScrollReset';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import ScrollProgress from './components/shared/ScrollProgress';
import Chatbot from './components/shared/Chatbot';
import Loader from './components/shared/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Loader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <ScrollReset />
          <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
            <TopBar />
            <ScrollProgress />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <Chatbot />
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
