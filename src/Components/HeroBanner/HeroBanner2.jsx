import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
// import { Link } from "react-router-dom";

const HeroBanner2 = () => {
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brandContent = [
    { img: '/assets/img/brand/01.png' },
    { img: '/assets/img/brand/02.png' },
    { img: '/assets/img/brand/03.png' },
    { img: '/assets/img/brand/04.png' },
  ];

  const heroContent = {
    bg: '/assets/img/hero/hero-bg-2.png',
    bg2: '/assets/img/hero/bg-shape.png',
    subtitle: 'go for advertising',
    title: ' Innovative Solutions for a Digital World.',
    content:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised',
    img: '/assets/img/hero/hero-image-2.png',
    btnname: 'EXPLORE MORE',
    btnurl: '/about',
  };

  return (
    <section className="hero-section hero-2" data-background={heroContent.bg}>
      <div
        className="glowup-bg w-100 h-100"
        data-background={heroContent.bg2}
        style={{
          position: 'absolute',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container px-3" style={{ zIndex: '9' }}>
        <div className="row g-4 align-items-center text-center hero-rows">
          <div className="col-12">
            <h1
              className="wow img-custom-anim-left mb-3"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              {heroContent.title}
            </h1>
            <p
              className="wow fadeInUp img-custom-anim-right hero-section-peragraph"
              data-wow-delay=".3s"
            >
              {heroContent.content}
            </p>
          </div>

          <div
            className="col-12 wow fadeInUp client-items d-flex justify-content-center align-items-center flex-wrap"
            data-wow-delay=".7s"
          >
            <div className="client-logo me-3">
              <img src={heroContent.reviewlogo} alt="Client review logo" className="img-fluid" />
            </div>

            <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-2">
              <img src={heroContent.reviewimg} alt="Happy client" className="img-fluid" />
              <div className="star-icon text-center text-sm-start">
                <div className="star text-warning">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="d-block mt-1">{heroContent.review}</span>
              </div>
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
                  <div className="brand-img center">
                    <img src={item.img} alt="img" />
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

export default HeroBanner2;
