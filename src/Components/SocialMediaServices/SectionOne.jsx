/**
 * SectionOne.jsx  —  Icon-card grid of core services
 *
 * Props: data (object from JSON) | null/undefined → renders nothing
 *
 * JSON shape:
 * {
 *   subtitle, title (HTML string), content (HTML string | null),
 *   cards: [{ img, title, description? }]
 * }
 */
import { memo } from 'react';
import parse from 'html-react-parser';

const SectionOne = ({ data }) => {
  if (!data) return null;

  const { subtitle, title, content, cards } = data;

  // Don't render the section if there are no cards AND no heading text
  if (!subtitle && !title && (!Array.isArray(cards) || cards.length === 0)) return null;

  return (
    <section className="service-section fix section-padding">
      <div className="bg-shape" />
      <div className="container px-3">
        {(subtitle || title || content) && (
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

        {Array.isArray(cards) && cards.length > 0 && (
          <div className="row">
            {cards.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
              >
                <div className="service-box-items flex-column" style={{ minHeight: 'stretch' }}>
                  {item.img && (
                    <div className="icon">
                      <img src={item.img} alt={item.title} className="icon-img" loading="lazy" />
                    </div>
                  )}
                  <div className="content">
                    {item.title && <h4>{item.title}</h4>}
                    {item.description && <p className="fw-normal">{item.description}</p>}
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

export default memo(SectionOne);
