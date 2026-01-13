import React from 'react';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

function CaseStudyDetailsNew({ data, list = [] }) {
  const navigate = useNavigate();

  if (!data) return null;

  const {
    title,
    location,
    projectname,
    url,
    overview,
    features = [],
    techStack = [],
    resultData = [],
    images = [],
    slug,
  } = data;

  const currentIndex = list && list.length ? list.findIndex((item) => item.slug === slug) : -1;
  const prevItem = currentIndex > 0 ? list[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < list.length - 1 ? list[currentIndex + 1] : null;

  const goTo = (targetSlug) => {
    if (targetSlug) navigate(`/case-study/${targetSlug}`);
  };

  return (
    <section className="project-details-section fix section-padding">
      <div className="container px-3">
        <div className="project-details-wrapper">
          {/* ============ Project Header ============ */}
          <div className="project-details-items">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="details-top-items">
                  <div className="details-left">
                    <h2 style={{ maxWidth: '800px' }}>{parse(title || '')}</h2>
                  </div>
                  <div className="details-right">
                    <ul className="client-details">
                      <li>
                        Location: <span>{location || ''}</span>
                      </li>
                      <li>
                        Project Name: <span>{projectname || ''}</span>
                      </li>
                      {url && (
                        <li>
                          URL:{' '}
                          <span>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                              {url}
                            </a>
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============ Overview Section ============ */}
          <div className="project-details-content">
            <h3>Overview</h3>
            <p>{overview}</p>

            {/* ============ Key Features Section ============ */}
            {features && features.length > 0 && (
              <>
                <h3 className="mt-5">Features</h3>
                <div className="row g-4 mt-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="col-lg-6 col-md-12">
                      <ul className="list-items flex-column align-items-start mb-0">
                        <li style={{ textTransform: 'none' }}>
                          <strong className="ms-3">{feature.heading}:</strong> {feature.text}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ============ Tech Stack Section ============ */}
            {techStack && techStack.length > 0 && (
              <>
                <h3 className="mt-5">Tech Stack</h3>
                <div className="row g-4 mt-3">
                  {techStack.map((tech, i) => (
                    <div key={i} className="col-lg-6 col-md-12">
                      <ul className="list-items flex-column align-items-start mb-0">
                        <li style={{ textTransform: 'none' }}>
                          <strong className="ms-3">{tech.heading}:</strong> {tech.text}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ============ Project Outcomes ============ */}
            {resultData.length > 0 && (
              <>
                <h3 className="mt-5">Project Outcomes</h3>
                <div className="row g-4 mt-3">
                  {resultData.map((result, i) => (
                    <div key={i} className="col-lg-6 col-md-12">
                      <p>{result.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ============ Images Section ============ */}
            {images.length > 0 && (
              <div className="row g-4 mt-4">
                {images.map((imgSrc, index) => (
                  <div key={index} className="col-md-6">
                    <div className="details-image">
                      <img
                        src={imgSrc}
                        alt={
                          imgSrc
                            ? imgSrc.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
                            : `case-study-img-${index}`
                        }
                        loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ============ Navigation Buttons ============ */}
          <div className="slider-button d-flex align-items-center justify-content-between mt-5">
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <button
                className="cmn-prev cmn-border d-center"
                onClick={() => prevItem && goTo(prevItem.slug)}
                disabled={!prevItem}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <span className="fw-bold white-clr previus-text text-capitalize">
                {prevItem ? 'Previous' : ''}
              </span>
            </div>
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <span className="fw-bold white-clr previus-text text-capitalize">
                {nextItem ? 'Next' : ''}
              </span>
              <button
                className="cmn-next cmn-border d-center"
                onClick={() => nextItem && goTo(nextItem.slug)}
                disabled={!nextItem}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(CaseStudyDetailsNew);
