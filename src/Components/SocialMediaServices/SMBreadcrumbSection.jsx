import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const SMBreadcrumbSection = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const heroContent = {
    bg: '/assets/img/hero/hero-bg-3.jpg',
    subtitle: 'RANK HIGHER. GROW FASTER.',
    // title: ' Achieve <span>Top Search </span> Rankings With Our <br/> SEO services',
    title: ' Your Trusted <span> SEO Partner </span> for Sustainable Growth',
    content:
      "Every customer journey starts with a Google search - and if you're not showing up, your competitors are winning that sale. We go beyond rankings to bring the right visitors to your site and turn them into paying customers. Through smart strategy, compelling content, and deep technical optimization, we grow your organic presence on any platform - WordPress, Shopify, or React/Next.js.",
    img: '/assets/img/newservices/shopify-service-vector-1.png',
    btnname: 'HIRE EXPERTS',
    linkname: 'VIEW OUR WORK',
    linkurl: '/work',
    btnurl: 'https://calendly.com/codersh-web-services/15min',
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
                {heroContent.content}
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
              <img src={heroContent.img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMBreadcrumbSection;
