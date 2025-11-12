import { lazy, Suspense, memo } from 'react';
import SEO from '../Components/DynamicSEO/SEO';

// Lazy load components for performance
const BreadCumb = lazy(() => import('../Components/Common/BreadCumb'));
const BrandsCards = lazy(() => import('../Components/BrandsCardPage/BrandsCards'));

const BrandsCardpage = () => {
  return (
    <main role="main">
      <SEO
        title="Our Partner Brands | Shopify Design & Development Case Studies – Codersh"
        description="Discover the diverse brands we've partnered with to deliver exceptional Shopify design & development solutions. Explore case studies from food & beverage, fashion, lifestyle, and more."
        keywords="Shopify design & development brands, Shopify portfolio, ecommerce website design, Shopify projects, Shopify agency brands"
        url="https://agency-template-five.vercel.app/brands"
      />
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Brands" />
        <BrandsCards />
      </Suspense>
    </main>
  );
};

export default memo(BrandsCardpage);
