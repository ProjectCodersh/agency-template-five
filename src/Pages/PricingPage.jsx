import BreadCumb from '../Components/Common/BreadCumb';
import SEO from '../Components/DynamicSEO/SEO';
import Pricng2 from '../Components/Pricing/Pricng2';

const PricingPage = () => {
  return (
    <div>
      <SEO
        title="Pricing Plans | Unlimited WordPress & Shopify Development - Codersh"
        description="Choose the right plan for your business with Codersh’s unlimited WordPress and Shopify development services. Flexible pricing, unlimited tasks, and expert support."
        keywords="Codersh pricing, WordPress development pricing, Shopify development pricing, unlimited web development cost, web agency pricing plans"
        url="https://agency-template-five.vercel.app/pricing"
      />

      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Pricing" />
      <Pricng2></Pricng2>
    </div>
  );
};

export default PricingPage;
