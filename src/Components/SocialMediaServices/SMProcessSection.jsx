import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

// ─── Static Data ────────────────────────────────────────────────────────────
const SECTION_DATA = {
  bg: true,
  heading: {
    subtitle: 'OUR SEO APPROACH',
    title: 'A Clear SEO Process That <br/> Delivers Real, Lasting Results',
    content:
      'transparent step-by-step process so you always know <br/>exactly where your growth is coming from. SEO isn’t a one time fix -<br/> it’s a continuous process focused on steady, long-term growth',
    img: '/assets/img/feature-img.png',
  },
  cards: [
    {
      iconclass: 'bi bi-people',
      title: 'Audit & Analysis',
      content:
        "We dig deep into your website, competitors, and current rankings to uncover exactly what's holding you back.",
    },
    {
      iconclass: 'bi bi-bar-chart-line',
      title: 'Strategy Planning',
      content:
        'We build a custom SEO roadmap tailored to your business goals — no cookie-cutter plans, ever.',
    },
    {
      iconclass: 'bi bi-megaphone',
      title: 'Implementation',
      content:
        'We optimize your content, site structure, and all technical elements for better rankings.',
    },
    {
      iconclass: 'bi bi-graph-up-arrow',
      title: 'Content & Authority Building',
      content:
        'We continuously strengthen your content and earn high-quality backlinks that compounds your authority.',
    },
    {
      iconclass: 'bi bi-search',
      title: 'Monitoring & Optimization',
      content:
        'We monitor results, adjust strategy, and keep refining over time - because SEO never stops working',
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
                <div key={i} className={colClass} data-wow-delay=".2s">
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
