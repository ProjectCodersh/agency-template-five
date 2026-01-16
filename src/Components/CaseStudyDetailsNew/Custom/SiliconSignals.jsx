import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Static content extracted for better performance and maintainability
const STATIC_CONTENT = {
  slug: 'silicon-signals',
  projectSummary: {
    title: 'Project Summary',
    description:
      "Silicon Signals came to us at a time when their business was getting real traction at tech events in Germany and India. Their products and services were strong, their team was solid, but their website didn't match the level of their work. They needed something modern, smooth, and trustworthy so they could confidently promote themselves at events and online. That's where we stepped in.",
  },
  problemStatement: {
    title: 'Problem Statement',
    description:
      'The main issue was simple:"Great company, average website". Their old website looked outdated, lacked performance, and wasn\'t ready for heavy marketing activities. They didn\'t have technical SEO in place, and tracking tools like Google Analytics and Search Console were missing.Updating content was a headache because everything required technical help.',
  },
  challenges: {
    title: 'Challenges Identified',
    items: [
      "The site wasn't visually appealing enough for international event visitors.",
      'Mobile experience felt slow and clunky.',
      'No analytics tracking or Technical SEO foundation for marketing campaigns.',
      "The team couldn't update content without waiting for a developer.",
      "The overall web presentation didn't reflect the quality of their product.",
    ],
  },
  features: {
    title: 'Features and Functionality Integrated',
    intro:
      'Once we agreed on timelines and pricing, we rebuilt their website from the ground up with features that actually matter to a tech company:',
    items: [
      'Modern, clean, high-performance layout',
      'Technical SEO setup to support marketing',
      'Smooth user flow that feels professional and trustworthy',
      'High-speed optimization across all devices',
      'Redesigned the services sections, clean and minimal ui with hover animations',
      'Dynamic content structure — update anything, anytime',
      'Technical SEO setup to support marketing',
      'Fully mobile-responsive layout which auto-adjusts to any device',
    ],
    images: [
      {
        src: '/assets/img/casestudy/case-silicon-thumb-3.webp',
        alt: 'Silicon Signals Feature 1',
      },
      {
        src: '/assets/img/casestudy/case-silicon-thumb-4.webp',
        alt: 'Silicon Signals Feature 2',
      },
    ],
  },
  techStack: {
    title: 'Tech Stack',
    items: [
      'Figma, WordPress, Elementor Pro, Wordfence, Custom HTML, CSS, JavaScript, PHP Functions, Gravity forms.',
      'Google Analytics, Google Search Console, Google Page Insights, GA4 Tags, Pixel Tracking codes. Gtmatrix.',
    ],
  },
  outcomes: {
    title: 'Project Outcomes',
    paragraphs: [
      'The result was a website that finally matched the quality of their products. More importantly, it became event-ready . They could confidently showcase their work at the Germany and India expos with a fast, polished, well-structured website behind them.',
      'Their marketing became smoother, their tracking became accurate, and they no longer needed technical help for small content updates.',
      {
        text: 'The entire redesign became a',
        bold: ' value-for-money investment',
        rest: ', not just a website cost.',
      },
    ],
    images: [
      {
        src: '/assets/img/casestudy/case-silicon-thumb-1.webp',
        alt: 'Silicon Signals Outcome 1',
      },
      {
        src: '/assets/img/casestudy/case-silicon-thumb-2.webp',
        alt: 'Silicon Signals Outcome 2',
      },
    ],
  },
  testimonial: {
    title: 'Client Testimonial',
    quote:
      '"The new setup helped us breathe easier. For the first time in months, our internal team could update pages without worrying about breaking something. Thank you for stabilizing the chaos!"',
    author: '— JCC Admin Team',
  },
};

function SiliconSignals({ list = [] }) {
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

          {/* =================== Problem Statement =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">{STATIC_CONTENT.problemStatement.title}</h3>
            <p>{STATIC_CONTENT.problemStatement.description}</p>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6">
                <ul className="list-items flex-column align-items-start">
                  {STATIC_CONTENT.challenges.items.slice(3).map((item, index) => (
                    <li key={index + 3} style={{ textTransform: 'none', color: '#504E4E' }}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =================== Features and Functionality Integrated =================== */}
          <div className="project-details-content mb-5">
            <h3 className="mt-5">{STATIC_CONTENT.features.title}</h3>
            <div className="row g-5">
              <p>{STATIC_CONTENT.features.intro}</p>
              {/* Column 1 */}
              <div className="col-lg-6 mt-4">
                <ul className="list-items flex-column align-items-start">
                  {STATIC_CONTENT.features.items.slice(0, 4).map((item, index) => (
                    <li key={index} style={{ textTransform: 'none', color: '#504E4E' }}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6 mt-4">
                <ul className="list-items flex-column align-items-start">
                  {STATIC_CONTENT.features.items.slice(4).map((item, index) => (
                    <li key={index + 4} style={{ textTransform: 'none', color: '#504E4E' }}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row g-4 mt-4">
              {STATIC_CONTENT.features.images.map((image, index) => (
                <div key={index} className="col-lg-6">
                  <div className="mb-5">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid shadow-sm"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding={index === 0 ? 'sync' : 'async'}
                      fetchPriority={index === 0 ? 'high' : 'low'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================== Tech Stack =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">{STATIC_CONTENT.techStack.title}</h3>
            {STATIC_CONTENT.techStack.items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          {/* =================== Project Outcomes =================== */}
          <div className="project-details-content mb-5">
            <h3 className="fw-bold mb-3">{STATIC_CONTENT.outcomes.title}</h3>
            {STATIC_CONTENT.outcomes.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {typeof paragraph === 'string' ? (
                  paragraph
                ) : (
                  <>
                    {paragraph.text}
                    <b>{paragraph.bold}</b>
                    {paragraph.rest}
                  </>
                )}
              </p>
            ))}

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
            <div className="row g-4">
              <div className="col-lg-12">
                <blockquote className="mt-3 ps-3 border-start border-3 border-dark">
                  <p className="fst-italic">{STATIC_CONTENT.testimonial.quote}</p>
                  <footer className="fw-semibold">{STATIC_CONTENT.testimonial.author}</footer>
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
