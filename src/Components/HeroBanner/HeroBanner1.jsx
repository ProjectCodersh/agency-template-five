import { useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const brandLogos = [
  '/assets/img/brand/reinventu-logo2-test.webp',
  '/assets/img/brand/500-logo-test.webp',
  '/assets/img/brand/chenchef-logo-test.webp',
  '/assets/img/brand/christianbookbag-logo-test.webp',
  '/assets/img/brand/anadian-logo-test.webp',
];

const heroContent = {
  bg: '/assets/img/hero/hero-bg-2.png',
  bg2: '/assets/img/hero/bg-shape.png',
  subtitle: 'go for advertising',
  title: 'Your Trusted <br/> Ecommerce Partner',
  content: 'Top Rated White Label Ecommerce Development Agency',
  review: '107+ reviews',
  reviewImg: '/assets/img/empall.png',
};

// Duplicate logos so the marquee loop is seamless (translateX -50%)
const marqueeLogos = [...brandLogos, ...brandLogos];

const HeroBanner1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="hero-section hero-2" data-background={heroContent.bg}>
      <div
        className="glowup-bg w-100 h-100 position-absolute"
        data-background={heroContent.bg2}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container px-3 position-relative z-1">
        <div className="row g-4 align-items-center text-center">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
              <img
                src="/assets/img/shopify-partner.png"
                alt="Shopify Partner Badge"
                style={{ height: '70px', objectFit: 'contain' }}
              />
              <a
                href="https://www.upwork.com/agencies/codersh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/img/Top+Rated+Plus+Upwork_white-325w.webp"
                  alt="Upwork Badge"
                  style={{ height: '70px', objectFit: 'contain' }}
                />
              </a>
            </div>
            <h1 className="wow img-custom-anim-left mb-2" data-wow-delay="0.2s">
              {parse(heroContent.title)}
            </h1>
            <p
              className="wow fadeInUp img-custom-anim-right hero-section-peragraph mb-2 text-white"
              data-wow-delay=".3s"
            >
              {heroContent.content}
            </p>
          </div>

          <div className="col-12">
            <div className="client-items d-flex justify-content-center align-items-center flex-wrap gap-3">
              <div className="clutchreview">
                <a
                  href="https://clutch.co/profile/codersh-web-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/cluchimg.webp"
                    alt="Clutch Reviews"
                    style={{ height: '42px' }}
                  />
                </a>
              </div>

              <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-0 gap-md-2">
                <img src={heroContent.reviewImg} alt="Happy client" className="img-fluid" />
                <div className="star-icon text-center text-sm-start">
                  <div className="star text-warning">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <span className="d-block mt-0 mt-md-1 text-white">{heroContent.review}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 wow fadeInUp d-flex justify-content-center align-items-center flex-wrap gap-3"
            data-wow-delay=".4s"
          >
            <div className="main-button">
              <Link to="/work">
                <span className="hero-theme-btn" style={{ minWidth: '209px' }}>
                  View Our Work
                </span>
              </Link>
            </div>

            <div className="main-button">
              <a
                href="https://calendly.com/codersh-web-services/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hero-theme-btn-second" style={{ minWidth: '209px' }}>
                  Let&#39;s Collaborate
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-wrapper-2">
        <h4 className="brand-title">Trusted by brands across the world</h4>
        <div className="brand-marquee-outer">
          <div className="brand-marquee-track">
            {marqueeLogos.map((imgSrc, index) => (
              <div key={index} className="brand-marquee-item">
                <img src={imgSrc} alt={`brand-${index}`} className="brand-trust-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroBanner1);
