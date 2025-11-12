import SEO from '../Components/DynamicSEO/SEO';

import { useEffect } from 'react';
import loadBackgroudImages from '../Components/Common/loadBackgroudImages';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
const Error404Page = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const heroContent = {
    bg: '/assets/img/hero/hero-bg-3.jpg',
    subtitle: 'Oops! Page Not Found',
    title: '<span>404 </span> <br/>   Something went wrong!',
    content:
      "The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track to explore our amazing services.",
    img: '/assets/img/hero/hero-image-3.png',
    btnname: 'Back To Home ',
    btnurl: '/',
    linkname: 'Contact Us ',
    linkurl: '/contact-us',
  };

  return (
    <div>
      <SEO
        title="404 - Page Not Found | Codersh"
        description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
        keywords="404, page not found, error"
        url="https://agency-template-five.vercel.app/404"
      />
      <section
        className="hero-section hero-3 breadcrumb-wrapper-margin-top"
        data-background={heroContent.bg}
      >
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12">
              <div className="hero-content error-page-hero-content" style={{ maxWidth: '100%' }}>
                <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {parse(heroContent.title)}
                </h1>
                <p className="wow fadeInUp mt-lg-4" data-wow-delay=".5s">
                  {heroContent.content}
                </p>
                <div className="hero-button">
                  <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                    <Link to={heroContent.btnurl}>
                      {' '}
                      <span className="theme-btn">{heroContent.btnname} </span>
                    </Link>
                  </div>
                  <Link
                    to={heroContent.linkurl}
                    className="link-btn wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {heroContent.linkname}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="error-section-padding"></section>
      <section className="section-padding section-bg">
        <div className="container px-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title mb-5">
                <h2 className="title">Explore Our Services</h2>
                <p className="subtitle">
                  While you-re here, discover what we can do for your business
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 g-md-0 g-lg-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-box-items text-center">
                <div className="content w-100">
                  <h4>
                    <Link to="/">Unlimited WordPress Services</Link>
                  </h4>
                  <p>
                    Get unlimited WordPress development, SEO, and design services for your agency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-box-items text-center">
                <div className="content w-100">
                  <h4>
                    <Link to="/unlimited-shopify">Unlimited Shopify Services</Link>
                  </h4>
                  <p>
                    Scale your e-commerce business with unlimited Shopify development and
                    optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-box-items text-center">
                <div className="content w-100">
                  <h4>
                    <Link to="/case-study">View Case Studies</Link>
                  </h4>
                  <p>See how we-ve helped other businesses achieve their digital goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Error404Page;

