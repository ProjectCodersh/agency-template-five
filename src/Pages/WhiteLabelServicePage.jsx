import ServiceCardSection from '../Components/NewServices/ServiceCardSection';
import HomeImgSlider from '../Components/ImageSliderNew/HomeImgSlider';
import ServiceActionSection from '../Components/NewServices/ServiceActionSectio';
import ServicesContentOne from '../Components/NewServices/ServiceContentOne';
import ServiceContentTwo from '../Components/NewServices/ServiceContentTwo';
// import Testimonial4 from '../Components/Testimonial/Testimonial4';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';
import CaseStudy1 from '../Components/CaseStudy/CaseStudy3';
import HeroSection from '../Components/WhiteLabelServices/HeroSection';
import FAQSection from '../Components/WhiteLabelServices/FAQSection';

function WhiteLabelServicePage() {
  return (
    <div>
      {/* <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Our Services" /> */}
      <HeroSection />
      <FAQSection />
      <ServiceCardSection />
      <HomeImgSlider />
      <ServiceActionSection />
      <ServicesContentOne />
      <ServiceContentTwo />
      <CaseStudy1 />
      <VideoTestimonialSlickSecond />
      {/* <Testimonial4 /> */}
    </div>
  );
}

export default WhiteLabelServicePage;
