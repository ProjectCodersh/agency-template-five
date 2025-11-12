import Slider from 'react-slick';

const Brand2 = () => {
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
          slidesToShow: 2,
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

  return (
    <div className="brand-section-22">
      <div className="container">
        <div className="brand-wrapper-2">
          <h4 className="brand-title">1k + Brands Trust Us</h4>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                {brandContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="brand-img center  brand-img-slider">
                      <img
                        src={item.img}
                        alt={`Trusted brand ${i + 1}`}
                        className="brand-trust-img"
                        style={{ maxHeight: '70px' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand2;
