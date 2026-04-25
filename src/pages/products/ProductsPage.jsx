import ProductsHeader from './components/ProductsHeader';
import ConsumableList from './components/ConsumableList';
import CertifiedSection from './components/CertifiedSection';

const ProductsPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader />
        <ConsumableList />
        <CertifiedSection />
      </div>
    </div>
  );
};

export default ProductsPage;
