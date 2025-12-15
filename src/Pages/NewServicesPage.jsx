import ServiceCardSection from '../Components/NewServices/ServiceCardSection';
import ServiceHeroSection from '../Components/NewServices/ServiceHeroSection';
import HomeImgSlider from '../Components/ImageSliderNew/HomeImgSlider';
import ServiceActionSection from '../Components/NewServices/ServiceActionSectio';
import ServicesContentOne from '../Components/NewServices/ServiceContentOne';
import ServiceContentTwo from '../Components/NewServices/ServiceContentTwo';
// import Testimonial4 from '../Components/Testimonial/Testimonial4';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';

function NewServicesPage() {
  return (
    <div>
      {/* <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Our Services" /> */}
      <ServiceHeroSection />
      <ServiceCardSection />
      <HomeImgSlider />
      <ServiceActionSection />
      <ServicesContentOne />
      <ServiceContentTwo />
      <VideoTestimonialSlickSecond />
      {/* <Testimonial4 /> */}
    </div>
  );
}

export default NewServicesPage;
