import BreadCumb from '../Components/Common/BreadCumb';
import ContactInfo2 from '../Components/ContactInfo/ContactInfo2';
import SEO from '../Components/DynamicSEO/SEO';

const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Contact Us | Let's Discuss Your Next Project"
        description="Get in touch with Codersh for WordPress, Shopify, and web development services. Contact us today to discuss your project and see how we can help your business grow."
        keywords="contact Codersh, web development contact, WordPress agency contact, Shopify agency contact, Ahmedabad web design company, get in touch Codersh"
        url="https://agency-template-five.vercel.app/contact-us"
      />

      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Contact" />
      <ContactInfo2 />
    </div >
  );
};

export default ContactPage;
