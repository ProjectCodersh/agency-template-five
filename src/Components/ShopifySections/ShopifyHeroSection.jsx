import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ShopifyHeroSlider from '@/Components/ImageSliderNew/ShopifyHeroSlider';

const ShopifyHeroSection = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const heroContent = {
    // bg: '/assets/img/hero/hero-bg-3.jpg',
    subtitle: 'go for advertising',
    title: 'Ready-Made <span>Shopify Sections</span> for Faster Store Growth',
    content:
      'Launch stunning, ready-to-use Shopify sections that improve user experience, increase conversions, and save development time; no coding required.',
    img: '/assets/img/hero/hero-image-3.png',
    btnname: 'Explore Sections',
    btnurl: '/new-services/cms/shopify-sections/image-with-text-section',
    linkname: 'View Our Work',
    linkurl: '/work',
  };

  return (
    <>
      <style>
        {`
          .shopify-hero-section {
            padding-top: 40px;
            padding-bottom: 40px;
            min-height: auto;
          }
          @media (min-width: 768px) {
            .shopify-hero-section {
              padding-top: 50px;
              padding-bottom: 50px;
            }
          }
          @media (min-width: 992px) {
            .shopify-hero-section {
              padding-top: 60px;
              padding-bottom: 60px;
            }
          }
          @media (min-width: 1200px) {
            .shopify-hero-section-margin-top {
              margin-top: 40px;
            }
          }
        `}
      </style>
      <section
        className="hero-section hero-3 breadcrumb-wrapper-margin-top shopify-hero-section shopify-hero-section-margin-top"
        data-background={heroContent.bg}
        style={{ backgroundColor: '#f6f3fe' }}
      >
        {/* <div className="line-shape">
        <img src="/assets/img/hero/line-shape.png" alt="img" />
      </div> */}
        <div className="container-fluid">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hero-content" style={{ maxWidth: 'none' }}>
                <div className="section-title mb-0">
                  <div className="sub-title wow fadeInUp" style={{ backgroundColor: '#384bff1a' }}>
                    <span>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i> Loved By 1000+ Happy Clients
                    </span>
                  </div>
                </div>
                {/* <h6 className="wow fadeInUp">{heroContent.subtitle}</h6> */}
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {parse(heroContent.title)}
                </h1>
                <p className="wow fadeInUp mt-4" data-wow-delay=".5s">
                  {heroContent.content}
                </p>
                <div className="hero-button mt-4">
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
            <div className="col-lg-5">
              <div
                className="hero-image wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <ShopifyHeroSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopifyHeroSection;
