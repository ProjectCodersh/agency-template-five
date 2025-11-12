import { memo } from 'react';
import Slider from 'react-slick';

const brandLogos = [
  '/assets/img/brand/kucrimson-brand.webp',
  '/assets/img/brand/datadepot-brand.webp',
  '/assets/img/brand/informadist-brand.webp',
  '/assets/img/brand/squreit-brand.webp',
];

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
    { breakpoint: 575, settings: { slidesToShow: 2 } },
  ],
};

const Brand1 = () => {
  return (
    <section className="brand-section-22">
      <div className="container">
        <div className="brand-wrapper-2">
          <h4 className="brand-title">1k+ Brands Trust Us</h4>
          <div className="swiper brand-slider">
            <Slider {...sliderSettings}>
              {brandLogos.map((src, index) => (
                <div key={index} className="swiper-slide">
                  <div className="brand-img center brand-img-slider">
                    <img
                      src={src}
                      alt={`Trusted brand ${index + 1}`}
                      className="brand-trust-img"
                      loading="lazy"
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

export default memo(Brand1);
