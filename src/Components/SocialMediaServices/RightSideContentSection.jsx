/**
 * RightSideContentSection.jsx  —  Text on LEFT, image on RIGHT
 *
 * Props: data (object from JSON) | null/undefined → renders nothing
 *
 * JSON shape:
 * {
 *   subtitle, title, content,
 *   img, listItems: string[],
 *   btnText, btnUrl
 * }
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import CheckIcon from './CheckIcon';

const RightSideContentSection = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { subtitle, title, content, img, listItems, btnText, btnUrl } = data;

  // Split list into two columns
  const items = Array.isArray(listItems) ? listItems : [];
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);

  return (
    <section
      className="team-section fix section-padding bg-cover"
      data-background="/assets/img/team/team-bg.jpg"
    >
      <div className="container px-3">
        <div className="team-wrapper style-3">
          <div className="row g-4">
            {/* Left — text content */}
            <div className="col-lg-6">
              <div className="team-content">
                <div className="section-title">
                  {subtitle && (
                    <div className="sub-title bg-color-2 wow fadeInUp">
                      <span>{subtitle}</span>
                    </div>
                  )}
                  {title && (
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {title}
                    </h2>
                  )}
                </div>
                {content && (
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {content}
                  </p>
                )}

                {items.length > 0 && (
                  <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                    <ul>
                      {col1.map((item, i) => (
                        <li key={`c1-${i}`}>
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {col2.length > 0 && (
                      <ul>
                        {col2.map((item, i) => (
                          <li key={`c2-${i}`}>
                            <CheckIcon />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {btnText && btnUrl && (
                  <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                    <Link to={btnUrl}>
                      <span className="theme-btn">{btnText}</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right — image */}
            {img && (
              <div className="col-lg-6">
                <div className="text-center">
                  <img
                    src={img}
                    alt=""
                    className="wow img-custom-anim-left"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                    style={{ maxWidth: 'stretch' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSideContentSection;
