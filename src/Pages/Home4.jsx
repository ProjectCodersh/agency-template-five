// import About3 from "../Components/About/About3";
// import About4 from "../Components/About/About4";
// import BrandSection5 from "../Components/Extra/HomePage/BrandSection5";
// import Blog1 from "../Components/Blog/Blog1";
// import CaseStudy1 from "../Components/CaseStudy/CaseStudy1";
// import Marquee1 from "../Components/Marquee/Marquee1";
// import Pricing1 from "../Components/Pricing/Pricing1";
// import SuccessStories from "../Components/SuccessStories/SuccessStories";
// import Testimonial4 from "../Components/Testimonial/Testimonial4";
// import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';
// import WhyChoose1 from "../Components/WhyChoose/WhyChoose1";
import ContactInfo1 from '../Components/ContactInfo/ContactInfo1';
import Counter6 from '../Components/WhatWeDo/WhatWeDo5';
import Faq2 from '../Components/Faq/Faq2';
import HeroBanner4 from '../Components/HeroBanner/HeroBanner4';
import WhatWeDo4 from '../Components/WhatWeDo/WhatWeDo4';
import Tools2 from '../Components/Extra/HomePage/Tools2';
import Brandsection4 from '../Components/Extra/HomePage/Brandsection4';
import Brandsection6 from '../Components/Extra/HomePage/BrandSection6';
import Brand2 from '../Components/Brand/Brand2';
import VideoTestimonialSlick from '../Components/Testimonial/VideoTestimonial';
import SEO from '../Components/DynamicSEO/SEO';
import HomeImgSlider from '@/Components/ImageSliderNew/HomeImgSlider';
import ShopifyPartnerSection from '@/Components/Extra/HomePage/ShopifyPartnerSection';
import AppointmentBooking from '@/Components/AppointmentBooking/AppointmentBooking';

const Home4 = () => {
  return (
    <div>
      <SEO
        title="Unlimited Shopify Services | Scale Your E-Commerce Business with Codersh"
        description="Get unlimited Shopify design, development, and SEO services with CODERSH. Save time, boost sales, and grow your e-commerce store."
        keywords="unlimited Shopify services, Shopify design, Shopify development, Shopify SEO, Shopify agency, Shopify store optimization,"
        url="https://agency-template-five.vercel.app/unlimited-shopify"
      />
      <HeroBanner4></HeroBanner4>
      <Brand2></Brand2>
      <WhatWeDo4></WhatWeDo4>
      <HomeImgSlider />
      <Counter6></Counter6>
      <Tools2></Tools2>
      <Brandsection4></Brandsection4>
      <Brandsection6></Brandsection6>
      <ShopifyPartnerSection />
      <Faq2 addclass="faq-section section-padding2 pb-0"></Faq2>
      <AppointmentBooking />
      <VideoTestimonialSlick />
      <ContactInfo1></ContactInfo1>
      {/* <About4 addclass="about-section-2 fix section-padding"></About4> */}
      {/* <About3></About3> */}
      {/* <BrandSection5></BrandSection5> */}
      {/* <div className="section-padding3"></div> */}
      {/* <Testimonial4></Testimonial4> */}
      {/* <VideoTestimonialSlickSecond></VideoTestimonialSlickSecond> */}
    </div>
  );
};

export default Home4;
