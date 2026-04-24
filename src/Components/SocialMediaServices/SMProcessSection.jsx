import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

// ─── Static Data ────────────────────────────────────────────────────────────
const SECTION_DATA = {
  bg: true,
  heading: {
    subtitle: 'WHY we do',
    title: 'Use SEO to Drive Growth <br/> at Your Business',
    content:
      'The a long established fact that a reader will be <br/> distracted the readable content of page when <br/> looking at layout the point.',
    img: '/assets/img/feature-img.png',
  },
  cards: [
    {
      iconclass: 'bi bi-people',
      title: 'Better Audiences',
      content:
        'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.',
    },
    {
      iconclass: 'bi bi-bar-chart-line',
      title: 'Data Insights',
      content:
        'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables.',
    },
    {
      iconclass: 'bi bi-megaphone',
      title: 'Smart Marketing',
      content:
        'Objectively innovate empowered manufactured products whereas parallel platforms remain proactive.',
    },
    {
      iconclass: 'bi bi-graph-up-arrow',
      title: 'Growth Strategy',
      content:
        'Proactively envisioned multimedia based expertise and cross-media growth strategies for business.',
    },
    {
      iconclass: 'bi bi-search',
      title: 'SEO Optimized',
      content:
        'We embed SEO best practices so you maintain and grow your organic traffic post-redesign.',
    },
  ],
};
// ────────────────────────────────────────────────────────────────────────────

const SMProcessSection = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const { bg, heading = {}, cards = [] } = SECTION_DATA;
  const { subtitle, title, content, img: headingImg } = heading;

  const hasHeading = subtitle || title || content || headingImg;
  const hasCards = Array.isArray(cards) && cards.length > 0;

  const backgroundImage = bg === true ? '/assets/img/team/team-bg.jpg' : '';

  return (
    <section className="feature-secton section-padding fix" data-background={backgroundImage}>
      <div className="container px-3">
        {hasHeading && (
          <div className="section-title-area">
            <div className="section-title">
              {subtitle && (
                <div
                  className="sub-title wow fadeInUp"
                  style={bg === true ? { backgroundColor: '#384bff1a' } : undefined}
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
              const hasIcon = !!item.iconclass;
              const cardNumber = String(i + 1).padStart(2, '0');
              const isBottomRow = i >= 3;
              const colClass = isBottomRow
                ? 'sm-process-card-col sm-process-card-col--bottom wow fadeInUp'
                : 'sm-process-card-col wow fadeInUp';

              return (
                <div
                  key={i}
                  className={colClass}
                  data-wow-delay=".2s"
                >
                  <div
                    className="feature-box-items"
                    style={{ background: 'linear-gradient(125deg, #ffffff, #f6f3fe)' }}
                  >
                    {hasIcon && (
                      <div className="icon">
                        <i className={item.iconclass}></i>
                      </div>
                    )}
                    <div className="content">
                      {item.title && (
                        <h3>
                          <span style={{ color: '#6a47ed', marginRight: '10px' }}>
                            {cardNumber}
                          </span>{' '}
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

export default SMProcessSection;
