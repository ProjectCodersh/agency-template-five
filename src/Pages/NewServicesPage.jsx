import ServiceCardSection from '../Components/NewServices/ServiceCardSection';
import ServiceHeroSection from '../Components/NewServices/ServiceHeroSection';
import HomeImgSlider from '../Components/ImageSliderNew/HomeImgSlider';
import ServiceActionSection from '../Components/NewServices/ServiceActionSectio';
import ServicesContentOne from '../Components/NewServices/ServiceContentOne';
import ServiceContentTwo from '../Components/NewServices/ServiceContentTwo';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';
// import Testimonial4 from '../Components/Testimonial/Testimonial4';
// import CaseStudy1 from '../Components/CaseStudy/CaseStudy3';

function NewServicesPage() {
  return (
    <div>
      {/* <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Our Services" /> */}
      <ServiceHeroSection />
      <ServiceCardSection />
      <HomeImgSlider />
      <ServicesContentOne />
      <ServiceContentTwo />
      <ServiceActionSection />
      {/* <CaseStudy1 /> */}
      <VideoTestimonialSlickSecond />
      {/* <Testimonial4 /> */}
    </div>
  );
}

export default NewServicesPage;
