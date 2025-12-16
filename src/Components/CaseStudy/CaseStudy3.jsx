import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const CaseStudy3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
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

  const chooseContent = [
    {
      subtitle: 'Wine Brand (LGBTQ+ Focused)',
      title: 'Shopify Based Wine Store',
      img: '/assets/img/casestudy/new-imgs/shopify-based-wine-store-1.webp',
    },
    {
      subtitle: 'E-Commerce (cocktail store)',
      title: 'E-Commerce Cocktail Shop',
      img: '/assets/img/casestudy/new-imgs/e-commerce-cocktail-shop-2.webp',
    },
    {
      subtitle: 'Wine Brand (LGBTQ+ Focused)',
      title: 'Shopify Based Wine Store',
      img: '/assets/img/casestudy/new-imgs/shopify-based-wine-store-1.webp',
    },
    {
      subtitle: 'E-Commerce (cocktail store)',
      title: 'E-Commerce Cocktail Shop',
      img: '/assets/img/casestudy/new-imgs/e-commerce-cocktail-shop-2.webp',
    },
  ];

  return (
    <section className="case-studies-section-3 fix section-padding">
      <div className="container px-3">
        <div className="section-title text-center">
          <div className="sub-title wow fadeInUp">
            <span>Case Studies</span>
          </div>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Are A Creative Digital <br />
            Marketing Agency
          </h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="swiper project-slider">
          <div className="swiper-wrapper cs_slider_gap_30">
            <Slider {...settings}>
              {chooseContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="case-studies-card-items">
                    <div className="thumb">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="content">
                      <div className="title">
                        <h3>
                          <Link to="/project/project-details">{item.title}</Link>
                        </h3>
                        <p>{item.subtitle}</p>
                      </div>
                      <Link to="/project/project-details" className="icon">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
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

export default CaseStudy3;
