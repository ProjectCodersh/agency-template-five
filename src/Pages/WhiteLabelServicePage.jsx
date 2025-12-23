// import FAQSectionTwo from '../Components/WhiteLabelServices/FAQSectionTwo';
// import LeftContentBox from '../Components/WhiteLabelServices/LeftContentBox';
// import CardSectionTwo from '../Components/WhiteLabelServices/CardSectionTwo';
import FAQSection from '../Components/WhiteLabelServices/FAQSection';
import RightContentBox from '../Components/WhiteLabelServices/RightContentBox';
import CardsSection from '../Components/WhiteLabelServices/CardsSection';
import HeroSection from '../Components/WhiteLabelServices/HeroSection';
import LogoSection from '../Components/WhiteLabelServices/LogoSection';
// import ShopifyPartnersSection from '../Components/WhiteLabelServices/ShopifyPartnersSection';
// import DarkSection from '../Components/WhiteLabelServices/DarkSection';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonial';

// json data files
import ThemesLogo from '../../public/assets/data/WhiteLabelData/ThemesLogo.json';
import ProjectLogo from '../../public/assets/data/WhiteLabelData/ProjectLogo.json';
import PaymentData from '../../public/assets/data/WhiteLabelData/PaymentLogo.json';
import LeftRightSectionData from '../../public/assets/data/WhiteLabelData/LeftRightSection.json';
import CardsSectionData from '../../public/assets/data/WhiteLabelData/CardsSection.json';
import FAQSectionData from '../../public/assets/data/WhiteLabelData/FAQSection.json';
// import DarkSectionData from '../../public/assets/data/shopifymigration/darksection.json';
// import ShopifyPartnersSectionData from '../../public/assets/data/WhiteLabelData/ShopifyPartnersSection.json';
// import FAQSectionTwoData from '../../public/assets/data/WhiteLabelData/FAQSectionTwo.json';
// import CardSectionTwoData from '../../public/assets/data/WhiteLabelData/CardSectionTwo.json';
// import ContentSection from '../Components/WhiteLabelServices/ContentSection';
// import ContentSectionData from '../../public/assets/data/shopifysubscriptions/contentSection.json';
function WhiteLabelServicePage() {
  return (
    <div>
      <HeroSection />
      <CardsSection data={CardsSectionData} />
      {/* <FAQSectionTwo data={FAQSectionTwoData} /> */}
      {/* <CardSectionTwo data={CardSectionTwoData} /> */}
      {/* <LeftContentBox data={LeftRightSectionData} /> */}
      <RightContentBox data={LeftRightSectionData} />
      {/* <ShopifyPartnersSection data={ShopifyPartnersSectionData} /> */}
      <LogoSection data={ProjectLogo} />
      <LogoSection data={ThemesLogo} />
      <LogoSection data={PaymentData} />
      {/* <DarkSection data={DarkSectionData} /> */}
      {/* <ContentSection data={ContentSectionData} /> */}
      <FAQSection data={FAQSectionData} />
      <VideoTestimonialSlickSecond />
    </div>
  );
}

export default WhiteLabelServicePage;
