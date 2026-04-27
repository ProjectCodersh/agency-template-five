/**
 * BreadcrumbSection.jsx
 *
 * Props: data (object from JSON) | null/undefined → renders nothing
 *
 * JSON shape:
 * {
 *   bg, subtitle, title (HTML string), content,
 *   img, btnname, btnurl, linkname, linkurl
 * }
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

const BreadcrumbSection = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { bg, subtitle, title, content, img, btnname, btnurl, linkname, linkurl } = data;

  return (
    <section className="hero-section hero-3" data-background={bg}>
      <div className="container-fluid">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" style={{ maxWidth: '640px' }}>
              {subtitle && <h6 className="wow fadeInUp">{subtitle}</h6>}
              {title && (
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {parse(title)}
                </h1>
              )}
              {content && (
                <p className="wow fadeInUp mt-4" data-wow-delay=".5s">
                  {content}
                </p>
              )}
              {(btnname || linkname) && (
                <div className="hero-button">
                  {btnname && btnurl && (
                    <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                      <Link to={btnurl}>
                        <span className="theme-btn">{btnname}</span>
                      </Link>
                    </div>
                  )}
                  {linkname && linkurl && (
                    <Link
                      to={linkurl}
                      className="link-btn wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      {linkname}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
          {img && (
            <div className="col-lg-5">
              <div
                className="hero-image wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img src={img} alt="Hero illustration" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
