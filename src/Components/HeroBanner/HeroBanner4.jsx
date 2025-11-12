import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const HeroBanner4 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const settings = {
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
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brandContent = [
    { img: '/assets/img/brand/reinventu-logo2-test.webp' },
    { img: '/assets/img/brand/500-logo-test.webp' },
    { img: '/assets/img/brand/chenchef-logo-test.webp' },
    { img: '/assets/img/brand/christianbookbag-logo-test.webp' },
    { img: '/assets/img/brand/anadian-logo-test.webp' },
  ];

  const heroContent = {
    bg: '/assets/img/hero/hero-bg-2.png',
    bg2: '/assets/img/hero/bg-shape.png',
    subtitle: 'go for advertising',
    title: 'Grow profits, save time, <br/> and scale your agency',
    content: 'White Label Shopify Development Partner for Digital Agencies at Fixed Cost.',
    content2:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.',
    img: '/assets/img/hero/hero-text.png',
    reviewlogo: '/assets/img/hero/logo.png',
    reviewimg: '/assets/img/hero/client-demo.png',
    review: '450+ reviews',
  };

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
            <div className="client-items d-flex justify-content-center align-items-center flex-wrap gap-3 ">
              <div className="clutchreview">
                <a
                  href="https://clutch.co/profile/codersh-web-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/hero/clutchreview-2.png"
                    alt="clutchreview"
                    style={{ height: '42px' }}
                  />
                </a>
              </div>

              <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-0 gap-md-2">
                <img src={heroContent.reviewimg} alt="Happy client" className="img-fluid" />
                <div className="star-icon text-center text-sm-start">
                  <div className="star text-warning">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <span className="d-block mt-0 mt-md-1 text-white">{heroContent.review}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 wow fadeInUp d-flex justify-content-center align-items-center flex-wrap gap-3 "
            data-wow-delay=".4s"
          >
            <div className="main-button">
              <Link to="/pricing">
                <span className="hero-theme-btn" style={{ minWidth: '209px' }}>
                  GET A FREE QUOTE
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
            <Slider {...settings}>
              {brandContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="brand-img center d-flex justify-content-center">
                    <img
                      src={item.img}
                      alt="img"
                      className="brand-trust-img"
                      style={{ maxHeight: '70px' }}
                    />
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

export default HeroBanner4;
