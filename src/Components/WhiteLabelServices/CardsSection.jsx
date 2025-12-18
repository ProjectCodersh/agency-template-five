import { memo } from 'react';
import parse from 'html-react-parser';

/**
 * CardsSection
 * - Fully driven by `data` prop (no internal defaults)
 * - If no data or no cards, returns null
 *
 * Expected `data` shape:
 * {
 *   "bgShape": "/assets/img/service/bg-shape.png", // optional
 *   "heading": {
 *     "subtitle": "Built for Agencies",
 *     "title": "Who Is This Service For?",
 *     "content": "If Shopify is part of your offering, <br/>Codersh is your backend team.</b>"
 *   },
 *   "cards": [
 *     { "img": "/path/to/img.webp", "title": "Card Title (HTML allowed)" },
 *     ...
 *   ]
 * }
 */
const CardsSection = ({ data }) => {
  if (!data) return null;

  const { bgShape, heading = {}, cards = [] } = data;
  const { subtitle, title, content } = heading;

  const hasHeading = subtitle || title || content;
  const hasCards = Array.isArray(cards) && cards.length > 0;

  if (!hasHeading && !hasCards) {
    return null;
  }

  return (
    <section className="service-section fix section-padding">
      <div className="bg-shape">
        {bgShape && (
          <img
            src={bgShape}
            alt="Background Decorative Shape"
            className="img-fluid"
            loading="lazy"
          />
        )}
      </div>

      <div className="container px-3">
        {hasHeading && (
          <div className="section-title-area">
            <div className="section-title">
              {subtitle && (
                <div className="sub-title wow fadeInUp">
                  <span>{subtitle}</span>
                </div>
              )}

              {title && (
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  {parse(title)}
                </h2>
              )}
            </div>

            {content && (
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {parse(content)}
              </p>
            )}
          </div>
        )}

        {hasCards && (
          <div className="row">
            {cards.map((item, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
              >
                <div className="service-box-items text-center flex-column">
                  <div className="icon">
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="icon-img img-fluid"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {item.title && (
                    <div className="content">
                      <h4>{parse(item.title)}</h4>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(CardsSection);
