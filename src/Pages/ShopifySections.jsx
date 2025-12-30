import { lazy, Suspense, memo } from 'react';
// import BreadCumb from '../Components/Common/BreadCumb';

const VideoTestimonialSlickSecond = lazy(
  () => import('../Components/Testimonial/VideoTestimonialTwo')
);

const ShopifySectionsContainer = lazy(
  () => import('../Components/ShopifySections/ShopifySectionsContainer')
);

const ShopifyHeroSection = lazy(() => import('../Components/ShopifySections/ShopifyHeroSection'));

// const MemoizedBreadCumb = memo(function BreadCumbWrapper() {
//   return <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Shopify Sections" />;
// });

function ShopifySections() {
  return (
    <main>
      {/* <MemoizedBreadCumb /> */}
      <ShopifyHeroSection />
      <Suspense fallback={<div className="loading">Loading data...</div>}>
        <ShopifySectionsContainer />
        <VideoTestimonialSlickSecond />
      </Suspense>
    </main>
  );
}

export default memo(ShopifySections);
