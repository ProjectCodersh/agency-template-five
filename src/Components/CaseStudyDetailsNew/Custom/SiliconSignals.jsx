import React from 'react';
import { useNavigate } from 'react-router-dom';

function SiliconSignals({ list = [] }) {
  const navigate = useNavigate();
  const slug = 'silicon-signals';
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
          {/* =================== Project Header =================== */}
          {/* <div className="project-details-items mb-4">
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
          </div> */}

          {/* =================== Project Summary =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">Project Summary</h3>
            {/* <h5 className="fw-semibold">Problem Statement:</h5> */}
            <p>
              Silicon Signals came to us at a time when their business was getting real traction at
              tech events in Germany and India. Their products and services were strong, their team
              was solid, but their website didn’t match the level of their work. They needed
              something modern, smooth, and trustworthy so they could confidently promote themselves
              at events and online. That’s where we stepped in.
            </p>
          </div>

          {/* =================== Problem Statement =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">Problem Statement</h3>
            {/* <h5 className="fw-semibold">Problem Statement:</h5> */}
            <p>
              The main issue was simple:"Great company, average website". Their old website looked
              outdated, lacked performance, and wasn’t ready for heavy marketing activities. They
              didn’t have technical SEO in place, and tracking tools like Google Analytics and
              Search Console were missing.Updating content was a headache because everything
              required technical help.
            </p>
          </div>

          {/* =================== Challenges =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">Challenges Identified</h3>
            <div className="row g-5">
              {/* Column 1 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  <li>
                    <span>
                      The site wasn’t visually appealing enough for international event visitors.
                    </span>
                  </li>
                  <li>
                    <span>Mobile experience felt slow and clunky.</span>
                  </li>
                  <li>
                    <span>
                      No analytics tracking or Technical SEO foundation for marketing campaigns.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  <li>
                    <span>The team couldn’t update content without waiting for a developer.</span>
                  </li>
                  <li>
                    <span>
                      The overall web presentation didn’t reflect the quality of their product.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* =================== Features and Functionality Integrated =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">Features and Functionality Integrated</h3>
            <div className="row g-5">
              <p>
                The main issue was simple:"Great company, average website". Their old website looked
                outdated, lacked performance, and wasn’t ready for heavy marketing activities. They
                didn’t have technical SEO in place, and tracking tools like Google Analytics and
                Search Console were missing.Updating content was a headache because everything
                required technical help.
              </p>
              {/* Column 1 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  <li>
                    <span>Modern, clean, high-performance layout</span>
                  </li>
                  <li>
                    <span>Technical SEO setup to support marketing</span>
                  </li>
                  <li>
                    <span>Smooth user flow that feels professional and trustworthy</span>
                  </li>
                  <li>
                    <span>High-speed optimization across all devices </span>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  <li>
                    <span>
                      Redesigned the services sections, clean and minimal ui with hover animations
                    </span>
                  </li>
                  <li>
                    <span> Dynamic content structure — update anything, anytime </span>
                  </li>
                  <li>
                    <span> Technical SEO setup to support marketing </span>
                  </li>
                  <li>
                    <span>Fully mobile-responsive layout which auto-adjusts to any device</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-lg-6">
                <div className="mb-5">
                  <img
                    alt="Stripe Integration"
                    className="img-fluid shadow-sm"
                    src="/assets/img/casestudy/RosenJcc-casestudy-2.webp"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-5">
                  <img
                    alt="Extra Feature"
                    className="img-fluid shadow-sm"
                    src="/assets/img/casestudy/RosenJcc-casestudy-3.webp"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================== Problem Statement =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">Tech Stack</h3>
            {/* <h5 className="fw-semibold">Problem Statement:</h5> */}
            <p>
              Figma, WordPress, Elementor Pro, Wordfence, Custom HTML, CSS, JavaScript, PHP
              Functions, Gravity forms.
            </p>
            <p>
              Google Analytics, Google Search Console, Google Page Insights, GA4 Tags, Pixel
              Tracking codes. Gtmatrix.
            </p>
          </div>

          {/* =================== Project Outcomes =================== */}

          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">Project Outcomes</h3>
            {/* <h5 className="fw-semibold">Problem Statement:</h5> */}
            <p>
              The result was a website that finally matched the quality of their products. More
              importantly, it became event-ready . They could confidently showcase their work at the
              Germany and India expos with a fast, polished, well-structured website behind them.
            </p>
            <p>
              Their marketing became smoother, their tracking became accurate, and they no longer
              needed technical help for small content updates.
            </p>
            <p>
              The entire redesign became a<b> value-for-money investment</b>, not just a website
              cost.
            </p>

            <div className="row g-4 mt-3">
              <div className="col-lg-6">
                <div className="mb-5">
                  <img
                    alt="Stripe Integration"
                    className="img-fluid shadow-sm"
                    src="/assets/img/casestudy/RosenJcc-casestudy-2.webp"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-5">
                  <img
                    alt="Extra Feature"
                    className="img-fluid shadow-sm"
                    src="/assets/img/casestudy/RosenJcc-casestudy-3.webp"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =================== Testimonial =================== */}
          <div className="project-details-content">
            <h3 className="fw-semibold">Client Testimonial</h3>
            <div className="row g-4 mt-3">
              <div className="col-lg-4">
                <div className="mb-5">
                  <img
                    alt="Stripe Integration"
                    className="img-fluid shadow-sm"
                    src="/assets/img/casestudy/RosenJcc-casestudy-2.webp"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <blockquote className="mt-3 ps-3 border-start border-3 border-dark">
                  <p className="fst-italic">
                    “The new setup helped us breathe easier. For the first time in months, our
                    internal team could update pages without worrying about breaking something.
                    Thank you for stabilizing the chaos!”
                  </p>
                  <footer className="fw-semibold">— JCC Admin Team</footer>
                </blockquote>
              </div>
            </div>
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

export default React.memo(SiliconSignals);
