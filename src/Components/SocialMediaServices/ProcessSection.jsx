/**
 * ProcessSection.jsx  —  Numbered process-step cards
 *
 * Props: data (object from JSON) | null/undefined → renders nothing
 *
 * JSON shape:
 * {
 *   subtitle, title (HTML), content (HTML),
 *   cards: [{ iconclass, title, content }]
 * }
 */
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

const ProcessSection = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { subtitle, title, content, cards } = data;
  const hasCards = Array.isArray(cards) && cards.length > 0;

  if (!subtitle && !title && !content && !hasCards) return null;

  return (
    <section
      className="feature-secton section-padding fix"
      data-background="/assets/img/team/team-bg.jpg"
    >
      <div className="container px-3">
        {(subtitle || title || content) && (
          <div className="section-title-area">
            <div className="section-title">
              {subtitle && (
                <div
                  className="sub-title wow fadeInUp"
                  style={{ backgroundColor: '#384bff1a' }}
                >
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
          <div className="sm-process-cards-grid">
            {cards.map((item, i) => {
              const cardNumber = String(i + 1).padStart(2, '0');
              const isBottomRow = i >= 3;
              const colClass = `sm-process-card-col${isBottomRow ? ' sm-process-card-col--bottom' : ''} wow fadeInUp`;

              return (
                <div key={i} className={colClass} data-wow-delay=".2s">
                  <div
                    className="feature-box-items"
                    style={{
                      background: 'linear-gradient(125deg, #ffffff, #f6f3fe)',
                    }}
                  >
                    {item.iconclass && (
                      <div className="icon">
                        <i className={item.iconclass} />
                      </div>
                    )}
                    <div className="content">
                      {item.title && (
                        <h3>
                          <span style={{ color: '#6a47ed', marginRight: '10px' }}>
                            {cardNumber}
                          </span>
                          {parse(item.title)}
                        </h3>
                      )}
                      {item.content && <p>{item.content}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSection;
