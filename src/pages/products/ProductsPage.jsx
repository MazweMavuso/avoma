import ProductsHeader from './components/ProductsHeader';
import ConsumableList from './components/ConsumableList';
import CertifiedSection from './components/CertifiedSection';
import SEO from '../../components/shared/SEO';

const ProductsPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen">
      <SEO 
        title="Products" 
        description="Explore our range of pharmaceutical products, medical consumables, and surgical equipment. We supply PPE, diagnostics, and internationally certified medicines."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader />
        <ConsumableList />
        <CertifiedSection />
      </div>
    </div>
  );
};

export default ProductsPage;
