import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonial';
import HeroSection from '../Components/WhiteLabelServices/HeroSection';
import FAQSection from '../Components/WhiteLabelServices/FAQSection';
import LeftContentBox from '../Components/WhiteLabelServices/LeftContentBox';
import RightContentBox from '../Components/WhiteLabelServices/RightContentBox';
import LogoSection from '../Components/WhiteLabelServices/LogoSection';

// json data files
import paymentData from '../../public/assets/data/WhiteLabelData/UpdationLogo.json';
import NormalData from '../../public/assets/data/WhiteLabelData/NormalLogo.json';

function WhiteLabelServicePage() {
  return (
    <div>
      <HeroSection />
      <LeftContentBox />
      <RightContentBox />
      <LogoSection data={paymentData} />
      <LogoSection data={NormalData} />
      <FAQSection />
      <VideoTestimonialSlickSecond />
    </div>
  );
}

export default WhiteLabelServicePage;
