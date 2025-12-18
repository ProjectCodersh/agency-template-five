import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import HomeImgSlider from '@/Components/ImageSliderNew/HomeImgSliderTwo';

const HeroSection = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const heroContent = {
    bg: '/assets/img/hero/hero-bg-3.jpg',
    subtitle: 'WHITE-LABEL SOLUTIONS',
    // title: ' Achieve <span>Top Search </span> Rankings With Our <br/> SEO services',
    title: ' White Label <span> Shopify Development </span> Service',
    content:
      'Are you looking to deliver high-quality Shopify projects <strong> without hiring, training, or managing an in-house team? </strong> Codersh Web Services offers <strong> reliable White Label Shopify Development Services </strong> designed exclusively for agencies, consultants, and freelancers who want to scale profitably.',
    img: '/assets/img/newservices/shopify-service-vector-1.png',
    btnname: 'HIRE EXPERTS',
    linkname: 'VIEW OUR WORK',
    linkurl: '/case-study',
    btnurl: '/new-services',
  };

  return (
    <section className="hero-section hero-3" data-background={heroContent.bg}>
      {/* <div className="line-shape">
        <img src="/assets/img/hero/line-shape.png" alt="img" />
      </div> */}
      <div className="container-fluid">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" style={{ maxWidth: '640px' }}>
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heroContent.title)}
              </h1>
              <p className="wow fadeInUp mt-4" data-wow-delay=".5s">
                {parse(heroContent.content)}
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
          <div className="col-lg-5">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              {/* <img src={heroContent.img} alt="img" /> */}
              <HomeImgSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
