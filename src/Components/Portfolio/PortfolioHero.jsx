import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

const PortfolioHero = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const defaultContent = {
    subtitle: 'OUR PORTFOLIO',
    title: 'Creative Work <span>Portfolio</span>',
    content:
      'Explore our collection of innovative projects and creative solutions that showcase our expertise and commitment to excellence.',
  };

  const heroContent = data || defaultContent;

  return (
    <section
      className="hero-section hero-3 breadcrumb-wrapper-margin-top"
      style={{ backgroundColor: '#f6f3fe' }}
    >
      <div className="container-fluid">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-lg-10">
            <div className="hero-content text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {heroContent.subtitle && (
                <div
                  className="sub-title wow fadeInUp"
                  style={{ backgroundColor: '#6a47ed', color: 'white' }}
                  data-wow-delay=".1s"
                >
                  <span>{heroContent.subtitle}</span>
                </div>
              )}
              {heroContent.title && (
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {parse(heroContent.title)}
                </h1>
              )}
              {heroContent.content && (
                <p className="wow fadeInUp mt-4" data-wow-delay=".5s">
                  {parse(heroContent.content)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;

