import { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router-dom';
import axios from 'axios';
import overlayImage from '/assets/img/hero/bg-shape.png';
import bgImage from '/assets/img/hero/hero-bg-2.png';

const SolutionHero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [heroContent, setHeroContent] = useState([]);

  const fetchingContent = async () => {
    try {
      const response = await axios.get('/assets/data/WebsiteRedesign.json');

      const hero = response?.data?.ServicePageData?.[0]?.heroSection;

      if (hero) {
        setHeroContent(hero);
      } else {
        console.error('Hero section data not found in JSON');
      }
    } catch (error) {
      console.log('There is an error while fetching data', error);
    }
  };

  useEffect(() => {
    fetchingContent();
  }, []);

  return (
    <section
      className="hero-section hero-4 mb-0"
      style={{ background: '#6a47ed' }}
      data-background={bgImage}
    >
      <div
        className="glowup-bg w-100 h-100"
        data-background={overlayImage}
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
            className="col-12 wow fadeInUp img-custom-anim-top client-items d-flex justify-content-center align-items-center flex-wrap"
            data-wow-delay=".7s"
          >
            <div className="clutchreview">
              <img
                src={heroContent.badge?.image}
                alt={heroContent.badge?.alt}
                style={{ height: heroContent.badge?.height }}
              />
            </div>

            <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-2">
              <img src={heroContent.review?.image} alt="Happy client" className="img-fluid" />
              <div className="star-icon text-center text-sm-start">
                <div className="star text-warning">
                  {Array.from({ length: heroContent.review?.ratingStars }, (_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                  {Array.from(
                    { length: heroContent.review?.totalStars - heroContent.review?.ratingStars },
                    (_, i) => (
                      <i key={`empty-${i}`} className="fa-regular fa-star"></i>
                    )
                  )}
                </div>
                <span className="d-block mt-1">{heroContent.review?.text}</span>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-sm-1 gap-md-3 gap-lg-4">
            {heroContent.buttons?.map((btn, idx) => (
              <div key={idx} className="main-button wow fadeInUp" data-wow-delay=".3s">
                <Link to={btn.link}>
                  <span className={idx === 1 ? 'hero-theme-btn-second' : 'hero-theme-btn'}>
                    {btn.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
