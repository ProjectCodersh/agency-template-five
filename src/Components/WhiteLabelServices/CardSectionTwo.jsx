import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

/**
 * CardSectionTwo
 * - Fully driven by `data` prop (no internal defaults)
 * - If no data or no cards, returns null
 *
 * Expected `data` shape:
 * {
 *   "bg": "/assets/img/team/team-bg.jpg",
 *   "heading": {
 *     "subtitle": "WHY we do",
 *     "title": "Use SEO to Drive Growth <br/> at Your Business",
 *     "content": "The a long established fact that a reader will be <br/> distracted the readable content of page when <br/> looking at layout the point.",
 *     "img": "/assets/img/feature-img.png"
 *   },
 *   "cards": [
 *     {
 *       "iconclass": "bi bi-people",
 *       "title": "Better audiences",
 *       "content": "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."
 *     },
 *     ...
 *   ]
 * }
 */
const CardSectionTwo = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { bg, heading = {}, cards = [] } = data;
  const { subtitle, title, content, img } = heading;

  const hasHeading = subtitle || title || content;
  const hasCards = Array.isArray(cards) && cards.length > 0;

  if (!hasHeading && !hasCards) {
    return null;
  }

  return (
    <section className="feature-secton section-padding fix" data-background={bg || ''}>
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
            {cards.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="feature-box-items">
                  {item.iconclass && (
                    <div className="icon">
                      <i className={item.iconclass}></i>
                    </div>
                  )}
                  <div className="content">
                    {item.title && <h3>{item.title}</h3>}
                    {item.content && <p>{item.content}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardSectionTwo;
