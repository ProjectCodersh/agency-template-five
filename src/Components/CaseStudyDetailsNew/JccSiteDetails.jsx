import React from 'react';
import { useNavigate } from 'react-router-dom';

function JccSiteDetails({ list = [] }) {
  const navigate = useNavigate();
  const slug = 'jcc-site';
  const currentIndex = list.findIndex((item) => item.slug === slug);
  const prevItem = currentIndex > 0 ? list[currentIndex - 1] : null;
  const nextItem = currentIndex < list.length - 1 ? list[currentIndex + 1] : null;

  const goTo = (targetSlug) => {
    if (targetSlug) navigate(`/case-study/${targetSlug}`);
  };

  return (
    <section className="project-details-section fix section-padding">
      <div className="container px-3">
        <div className="project-details-wrapper">
          {/* =================== Project Summary =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">Project Summary</h3>
            {/* <h5 className="fw-semibold">Problem Statement:</h5> */}
            <p>
              The website was suffering from legacy bloat, poor performance, and disjointed user
              experiences. Admins struggled with inconsistent backend tools, while users encountered
              login friction and outdated donation flows. Scalability was nearly impossible without
              a structured cleanup and short-term system upgrades.
            </p>
          </div>

          {/* =================== Challenges =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">Challenges Identified</h3>
            <div className="row g-5">
              {/* Column 1 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  <li style={{ textTransform: 'none' }}>
                    <span>
                      <b>Disorganized Backend:</b> Pages built with mixed editors and inconsistent
                      structures.
                    </span>
                  </li>
                  <li style={{ textTransform: 'none' }}>
                    <span>
                      <b>Legacy Plugins:</b> Outdated or unsupported plugins affecting functionality
                      and speed.
                    </span>
                  </li>
                  <li style={{ textTransform: 'none' }}>
                    <span>
                      <b>Bloated Content:</b> Accumulation of spam comments, unused files, and
                      orphaned posts.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  <li style={{ textTransform: 'none' }}>
                    <span>
                      <b>Slow Performance:</b> Poor loading speed due to unoptimized assets and lack
                      of caching.
                    </span>
                  </li>
                  <li style={{ textTransform: 'none' }}>
                    <span>
                      <b>No Scalability Roadmap:</b> Future changes bottlenecked by legacy code.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* =================== Features & Functionality =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">Features and Functionality Integrated:</h3>
            <div className="row g-5 mt-4">
              {/* Left Column */}
              <div className="col-lg-6">
                <div className="mb-5">
                  <h6 className="fw-bold mb-3">1. Auth0 Integration :</h6>
                  <img
                    src="/assets/img/casestudy/jcc-image-1.webp"
                    alt="Auth0 Integration"
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>

                <div className="mb-5">
                  <h6 className="fw-bold mb-3">2. Daxko Integration :</h6>
                  <img
                    src="/assets/img/casestudy/jcc-image-2.webp"
                    alt="Daxko Integration"
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <div className="mb-5">
                  <h6 className="fw-bold mb-3">3. Stripe Integration :</h6>
                  <img
                    src="/assets/img/casestudy/jcc-image-3.webp"
                    alt="Stripe Integration"
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>

                <div className="mb-5">
                  <h6 className="fw-bold mb-3">4. Results :</h6>
                  <img
                    src="/assets/img/casestudy/jcc-image-4.webp"
                    alt="Extra Feature"
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================== Outcomes =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-semibold">Project Outcomes:</h3>

            <div className="row g-4 mt-3">
              <div className="col-lg-6">
                <div className="mb-5">
                  <img
                    src="/assets/img/casestudy/RosenJcc-casestudy-2.webp"
                    alt="Stripe Integration"
                    className="img-fluid shadow-sm"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-5">
                  <img
                    src="/assets/img/casestudy/RosenJcc-casestudy-3.webp"
                    alt="Extra Feature"
                    className="img-fluid shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================== Testimonial =================== */}
          <div className="project-details-content">
            <h3 className="fw-semibold">Client Testimonial :</h3>
            <blockquote className="mt-3 ps-3 border-start border-3 border-dark">
              <p className="fst-italic">
                “The new setup helped us breathe easier. For the first time in months, our internal
                team could update pages without worrying about breaking something. Thank you for
                stabilizing the chaos!”
              </p>
              <footer className="fw-semibold">— JCC Admin Team</footer>
            </blockquote>
          </div>

          {/* =================== Navigation Buttons =================== */}
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

export default React.memo(JccSiteDetails);
