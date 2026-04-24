import SEO from '../Components/DynamicSEO/SEO';
import SMBreadcrumbSection from '../Components/SocialMediaServices/SMBreadcrumbSection';
import SMFaqSection from '../Components/SocialMediaServices/SMFaqSection';
import SMLeftSIdeContentSection from '../Components/SocialMediaServices/SMLeftSIdeContentSection';
import SMProcessSection from '../Components/SocialMediaServices/SMProcessSection';
import SMRightSIdeContentSection from '../Components/SocialMediaServices/SMRightSIdeContentSection';
import SMSectionOne from '../Components/SocialMediaServices/SMSectionOne';
import SMWhyChooseSection from '../Components/SocialMediaServices/SMWhyChooseSection';

function SeoServicePage() {
  return (
    <div>
      <SEO
        title="Pricing Plans | Unlimited WordPress & Shopify Development - Codersh"
        description="Choose the right plan for your business with Codersh’s unlimited WordPress and Shopify development services. Flexible pricing, unlimited tasks, and expert support."
        keywords="Codersh pricing, WordPress development pricing, Shopify development pricing, unlimited web development cost, web agency pricing plans"
        url="https://uk.codersh.com/pricing"
      />
      <SMBreadcrumbSection />
      <SMSectionOne />
      <SMRightSIdeContentSection />
      <SMLeftSIdeContentSection />
      <SMProcessSection />
      <SMWhyChooseSection />
      <SMFaqSection />
    </div>
  );
}

export default SeoServicePage;
