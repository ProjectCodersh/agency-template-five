import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router-dom';

/**
 * CTASection
 * - Fully driven by `data` prop (no internal defaults)
 * - If no data, returns null
 *
 * Expected `data` shape:
 * {
 *   "subtitle": "Contact US",
 *   "title": "24/7 Expert Hosting Support Our Customers Love",
 *   "buttonText": "Talk to a Specialist",
 *   "buttonLink": "/contact",
 *   "bg": "/assets/img/cta-contact-bg.jpg",
 *   "img": "/assets/img/contact-img.png"
 * }
 */
const CTASection = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { subtitle, title, buttonText, buttonLink, bg, img } = data;

  const hasContent = subtitle || title || (buttonText && buttonLink);

  if (!hasContent) return null;

  return (
    <section className="cta-contact-section fix section-padding">
      <div className="container px-3">
        <div
          className="cta-contact-wrapper bg-cover"
          data-background={bg || '/assets/img/cta-contact-bg.jpg'}
        >
          {img && (
            <div
              className="cta-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <img src={img} alt="cta" />
            </div>
          )}
          <div className="section-title mb-0">
            {subtitle && (
              <div className="sub-title bg-color-3 wow fadeInUp">
                <span>{subtitle}</span>
              </div>
            )}
            {title && (
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                {title}
              </h2>
            )}
          </div>
          {buttonText && buttonLink && (
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Link to={buttonLink}>
                <span className="theme-btn">{buttonText}</span>
                <span className="arrow-btn">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
