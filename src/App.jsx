import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
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
