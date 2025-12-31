import { useEffect, memo } from 'react';
import Slider from 'react-slick';
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
  title: 'Grow profits, save time, <br/> and scale your agency',
  content: 'White Label WordPress Development Partner for Digital Agencies at Fixed Cost.',
  review: '450+ reviews',
  reviewImg: '/assets/img/hero/client-demo.png',
};

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 100,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    { breakpoint: 1399, settings: { slidesToShow: 4 } },
    { breakpoint: 1199, settings: { slidesToShow: 3 } },
    { breakpoint: 767, settings: { slidesToShow: 2 } },
    { breakpoint: 575, settings: { slidesToShow: 1 } },
  ],
};

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
                    src="/assets/img/hero/clutchreview-2.png"
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
        <h4 className="brand-title">1k + Brands Trust Us</h4>
        <div className="swiper brand-slider">
          <div className="swiper-wrapper cs_slider_gap_30">
            <Slider {...sliderSettings}>
              {brandLogos.map((imgSrc, index) => (
                <div key={index} className="swiper-slide">
                  <div className="brand-img center">
                    <img src={imgSrc} alt={`brand-${index}`} className="brand-trust-img" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroBanner1);
