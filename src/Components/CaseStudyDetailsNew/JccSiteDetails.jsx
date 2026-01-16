import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Static content extracted for better performance and maintainability
const STATIC_CONTENT = {
  slug: 'jcc-site',
  projectSummary: {
    title: 'Project Summary',
    description:
      'The website was suffering from legacy bloat, poor performance, and disjointed user experiences. Admins struggled with inconsistent backend tools, while users encountered login friction and outdated donation flows. Scalability was nearly impossible without a structured cleanup and short-term system upgrades.',
  },
  challenges: {
    title: 'Challenges Identified',
    items: [
      {
        title: 'Disorganized Backend:',
        description: 'Pages built with mixed editors and inconsistent structures.',
      },
      {
        title: 'Legacy Plugins:',
        description: 'Outdated or unsupported plugins affecting functionality and speed.',
      },
      {
        title: 'Bloated Content:',
        description: 'Accumulation of spam comments, unused files, and orphaned posts.',
      },
      {
        title: 'Slow Performance:',
        description: 'Poor loading speed due to unoptimized assets and lack of caching.',
      },
      {
        title: 'No Scalability Roadmap:',
        description: 'Future changes bottlenecked by legacy code.',
      },
    ],
  },
  features: {
    title: 'Features and Functionality Integrated:',
    items: [
      {
        title: '1. Auth0 Integration :',
        image: '/assets/img/casestudy/jcc-image-1.webp',
        alt: 'Auth0 Integration',
      },
      {
        title: '2. Daxko Integration :',
        image: '/assets/img/casestudy/jcc-image-2.webp',
        alt: 'Daxko Integration',
      },
      {
        title: '3. Stripe Integration :',
        image: '/assets/img/casestudy/jcc-image-3.webp',
        alt: 'Stripe Integration',
      },
      {
        title: '4. Results :',
        image: '/assets/img/casestudy/jcc-image-4.webp',
        alt: 'Results',
      },
    ],
  },
  outcomes: {
    title: 'Project Outcomes:',
    images: [
      {
        src: '/assets/img/casestudy/RosenJcc-casestudy-2.webp',
        alt: 'Project Outcome 1',
      },
      {
        src: '/assets/img/casestudy/RosenJcc-casestudy-3.webp',
        alt: 'Project Outcome 2',
      },
    ],
  },
  testimonial: {
    title: 'Client Testimonial :',
    quote:
      '"The new setup helped us breathe easier. For the first time in months, our internal team could update pages without worrying about breaking something. Thank you for stabilizing the chaos!"',
    author: '— JCC Admin Team',
  },
};

function JccSiteDetails({ list = [] }) {
  const navigate = useNavigate();

  // Memoize navigation items to prevent recalculation on every render
  const { prevItem, nextItem } = useMemo(() => {
    const currentIndex = list.findIndex((item) => item.slug === STATIC_CONTENT.slug);
    return {
      prevItem: currentIndex > 0 ? list[currentIndex - 1] : null,
      nextItem: currentIndex < list.length - 1 ? list[currentIndex + 1] : null,
    };
  }, [list]);

  // Memoize navigation callback
  const goTo = useCallback(
    (targetSlug) => {
      if (targetSlug) navigate(`/case-study/${targetSlug}`);
    },
    [navigate]
  );

  return (
    <section className="project-details-section fix section-padding">
      <div className="container px-3">
        <div className="project-details-wrapper">
          {/* =================== Project Summary =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">{STATIC_CONTENT.projectSummary.title}</h3>
            <p>{STATIC_CONTENT.projectSummary.description}</p>
          </div>

          {/* =================== Challenges =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">{STATIC_CONTENT.challenges.title}</h3>
            <div className="row g-5">
              {/* Column 1 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  {STATIC_CONTENT.challenges.items.slice(0, 3).map((item, index) => (
                    <li key={index} style={{ textTransform: 'none', color: '#504E4E' }}>
                      <span>
                        <b style={{ color: '#17012c' }}>{item.title}</b> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  {STATIC_CONTENT.challenges.items.slice(3).map((item, index) => (
                    <li key={index + 3} style={{ textTransform: 'none', color: '#504E4E' }}>
                      <span>
                        <b style={{ color: '#17012c' }}>{item.title}</b> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =================== Features & Functionality =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">{STATIC_CONTENT.features.title}</h3>
            <div className="row g-5 mt-4">
              {/* Left Column */}
              <div className="col-lg-6">
                {STATIC_CONTENT.features.items.slice(0, 2).map((feature, index) => (
                  <div key={index} className="mb-5">
                    <h6 className="fw-bold mb-3">{feature.title}</h6>
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="img-fluid rounded-3 shadow-sm"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding={index === 0 ? 'sync' : 'async'}
                      fetchPriority={index === 0 ? 'high' : 'low'}
                    />
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                {STATIC_CONTENT.features.items.slice(2).map((feature, index) => (
                  <div key={index + 2} className="mb-5">
                    <h6 className="fw-bold mb-3">{feature.title}</h6>
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="img-fluid rounded-3 shadow-sm"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================== Outcomes =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-semibold">{STATIC_CONTENT.outcomes.title}</h3>

            <div className="row g-4 mt-3">
              {STATIC_CONTENT.outcomes.images.map((image, index) => (
                <div key={index} className="col-lg-6">
                  <div className="mb-5">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid shadow-sm"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================== Testimonial =================== */}
          <div className="project-details-content">
            <h3 className="fw-semibold">{STATIC_CONTENT.testimonial.title}</h3>
            <blockquote className="mt-3 ps-3 border-start border-3 border-dark">
              <p className="fst-italic">
                “The new setup helped us breathe easier. For the first time in months, our internal
                team could update pages without worrying about breaking something. Thank you for
                stabilizing the chaos!”
              </p>
              <footer className="fw-semibold">{STATIC_CONTENT.testimonial.author}</footer>
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
