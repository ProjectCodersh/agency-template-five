// src/Pages/Home.jsx
import { lazy, Suspense } from 'react';

import HeroBanner1 from '@/Components/HeroBanner/HeroBanner1';
import Brand1 from '@/Components/Brand/Brand1';
import WhatWeDo from '@/Components/WhatWeDo/WhatWeDo';
import Counter4 from '@/Components/WhatWeDo/WhatWeDo3';
import Tools1 from '@/Components/Extra/HomePage/Tools1';
import Brandsection1 from '@/Components/Extra/HomePage/Brandsection1';
import BrandSection2 from '@/Components/Extra/HomePage/BrandSection2';
import Brandsection3 from '@/Components/Extra/HomePage/BrandSection3';
import SEO from '../Components/DynamicSEO/SEO';
import HomeImgSlider from '@/Components/ImageSliderNew/HomeImgSlider';

// Lazy load below-the-fold components
const Faq1 = lazy(() => import('@/Components/Faq/Faq1'));
const VideoTestimonialSlick = lazy(() => import('@/Components/Testimonial/VideoTestimonial'));
const ContactInfo1 = lazy(() => import('@/Components/ContactInfo/ContactInfo1'));

const Home = () => {
  return (
    <div>
      <SEO
        title="Unlimited WordPress Services | Grow Your Agency Profits with Codersh"
        description="Codersh offers unlimited WordPress SEO, design, and development services to help agencies grow profits, save time, and scale faster."
        keywords="unlimited WordPress services, WordPress SEO, WordPress development agency, page builder integration, digital agency tools"
        url="https://agency-template-five.vercel.app/"
      />
      <HeroBanner1 />
      <Brand1 />
      <WhatWeDo />
      <HomeImgSlider />
      <Counter4 />
      <Tools1 />
      <Brandsection1 />
      <BrandSection2 />
      <Brandsection3 />
      <Suspense fallback={<div className="loading">Loading FAQ...</div>}>
        <Faq1 addclass="faq-section section-padding2 pb-0" />
        <VideoTestimonialSlick />
        <ContactInfo1 />
      </Suspense>
    </div>
  );
};

export default Home;
