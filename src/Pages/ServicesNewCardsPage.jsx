import { lazy, Suspense, memo } from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import '../assets/servicecards.css';
// import ServicesCardsContainer from '../Components/ServicesNewCards/ServicesCardsContainer';

// Lazy-load with Webpack prefetch hint
const VideoTestimonialSlickSecond = lazy(
  () => import('../Components/Testimonial/VideoTestimonialTwo')
);
const ServicesCardsContainer = lazy(
  () => import('../Components/ServicesNewCards/ServicesCardsContainer')
);

// Memoized wrapper for performance
const MemoizedBreadCumb = memo(function BreadCumbWrapper() {
  return <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Services" />;
});

function ServicesNewCardsPage() {
  return (
    <main>
      <MemoizedBreadCumb />
      <Suspense fallback={<div className="loading">Loading data...</div>}>
        <ServicesCardsContainer />
        <VideoTestimonialSlickSecond />
      </Suspense>
    </main>
  );
}

export default memo(ServicesNewCardsPage);
