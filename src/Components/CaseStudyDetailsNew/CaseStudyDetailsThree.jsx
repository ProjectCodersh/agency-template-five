import React from 'react';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

function CaseStudyDetailsThirdTemplate({ data, list = [] }) {
  const navigate = useNavigate();

  if (!data) return null;

  const {
    title,
    location,
    projectname,
    url,
    overview,
    objective = [],
    challenges = [],
    solution = [],
    implementation = [],
    results = [],
    techStack = [],
    images = [],
    slug,
  } = data;

  const currentIndex = list?.length ? list.findIndex((item) => item.slug === slug) : -1;
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
          {/* =================== Project Header =================== */}
          <div className="project-details-items mb-4">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="details-top-items">
                  <div className="details-left">
                    <h2 style={{ maxWidth: '800px' }}>{parse(title || '')}</h2>
                  </div>
                  <div className="details-right">
                    <ul className="client-details">
                      {location && (
                        <li>
                          Location: <span>{location}</span>
                        </li>
                      )}
                      {projectname && (
                        <li>
                          Project Name: <span>{projectname}</span>
                        </li>
                      )}
                      {url && (
                        <li>
                          URL:{' '}
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fw-medium"
                          >
                            {url}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================== Overview =================== */}
          {overview && (
            <div className="project-details-content">
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          )}

          {/* =================== Objective =================== */}
          {/* {objective.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Objective</h3>
              <ul className="list-items flex-column align-items-start">
                {objective.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )} */}

          {objective.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Objective</h3>
              <div className="row g-5">
                {[0, 1].map((colIndex) => {
                  const half = Math.ceil(objective.length / 2);
                  const start = colIndex * half;
                  const end = start + half;
                  return (
                    <div key={colIndex} className="col-lg-6">
                      <ul className="list-items flex-column align-items-start">
                        {objective.slice(start, end).map((item, idx) => (
                          <li key={idx} style={{ textTransform: 'none' }}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================== Challenges =================== */}
          {/* {challenges.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Challenges</h3>
              <ul className="list-items flex-column align-items-start">
                {challenges.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )} */}

          {challenges.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Challenges</h3>
              <div className="row g-5">
                {[0, 1].map((colIndex) => {
                  const half = Math.ceil(challenges.length / 2);
                  const start = colIndex * half;
                  const end = start + half;
                  return (
                    <div key={colIndex} className="col-lg-6">
                      <ul className="list-items flex-column align-items-start">
                        {challenges.slice(start, end).map((item, idx) => (
                          <li key={idx} style={{ textTransform: 'none' }}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================== Solution =================== */}
          {/* {solution.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Solution</h3>
              <ul className="list-items flex-column align-items-start">
                {solution.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )} */}

          {solution.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Solution</h3>
              <div className="row g-5">
                {[0, 1].map((colIndex) => {
                  const half = Math.ceil(solution.length / 2);
                  const start = colIndex * half;
                  const end = start + half;
                  return (
                    <div key={colIndex} className="col-lg-6">
                      <ul className="list-items flex-column align-items-start">
                        {solution.slice(start, end).map((item, idx) => (
                          <li key={idx} style={{ textTransform: 'none' }}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================== Implementation =================== */}
          {implementation.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Implementation</h3>
              <div className="row g-4">
                {implementation.map((section, i) => (
                  <div key={i} className="col-lg-6 col-md-12">
                    <div className="implementation-block">
                      <h5 className="fw-semibold mb-3">
                        {section.heading && `${section.heading}:`}
                      </h5>
                      <ul className="ps-3">
                        {section.points?.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =================== Results =================== */}
          {/* {results.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Results</h3>
              <ul className="list-items flex-column align-items-start">
                {results.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )} */}

          {results.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Results</h3>
              <div className="row g-5">
                {[0, 1].map((colIndex) => {
                  const half = Math.ceil(results.length / 2);
                  const start = colIndex * half;
                  const end = start + half;
                  return (
                    <div key={colIndex} className="col-lg-6">
                      <ul className="list-items flex-column align-items-start">
                        {results.slice(start, end).map((item, idx) => (
                          <li key={idx} style={{ textTransform: 'none' }}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================== Tech Stack =================== */}
          {/* {techStack.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Tech Stack</h3>
              <div className="row g-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="col-lg-6 col-md-12">
                    <p>
                      <strong className="ms-3">{tech.heading}:</strong> {tech.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {techStack.length > 0 && (
            <div className="project-details-content mt-5">
              <h3>Tech Stack</h3>
              <div className="row g-5">
                {[0, 1].map((colIndex) => {
                  const half = Math.ceil(techStack.length / 2);
                  const start = colIndex * half;
                  const end = start + half;
                  return (
                    <div key={colIndex} className="col-lg-6">
                      {techStack.slice(start, end).map((tech, i) => (
                        <p key={i}>
                          <strong className="ms-3">{tech.heading}:</strong> {tech.text}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================== Images =================== */}
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

          {/* =================== Navigation =================== */}
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

export default React.memo(CaseStudyDetailsThirdTemplate);
