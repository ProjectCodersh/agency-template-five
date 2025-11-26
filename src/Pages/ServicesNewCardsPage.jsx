import { lazy, Suspense, memo } from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const VideoTestimonialSlickSecond = lazy(
  () => import('../Components/Testimonial/VideoTestimonialTwo')
);

const ServicesCardsContainer = lazy(
  () => import('../Components/ServicesNewCards/ServicesCardsContainer')
);

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
