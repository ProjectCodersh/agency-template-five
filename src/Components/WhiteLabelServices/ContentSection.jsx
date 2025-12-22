import parse from 'html-react-parser';

/**
 * ContentSection
 *
 * Clean, professional content layout inspired by CaseStudyDetailsThree.jsx
 * Uses project-details-content styling for a clean, text-focused design.
 *
 * 🔹 Fully driven by `data` prop – no hard‑coded copy.
 *
 * Expected `data` shape:
 * {
 *   "overview": "Optional overview paragraph",
 *   "columns": [
 *     {
 *       "subtitle": "What Does a Shopify Subscription Service Offer?",
 *       "content": "<p>Long‑form HTML or text…</p>",
 *       "highlights": [
 *         "Increase lifetime value (LTV)",
 *         "Predictable recurring revenue",
 *         "Frictionless re‑ordering experience"
 *       ]
 *     },
 *     ...
 *   ]
 * }
 */

const ContentSection = ({ data }) => {
  if (!data) return null;

  const { bg, heading = {}, overview, columns = [] } = data;
  const { subtitle, title } = heading;

  const hasHeading = subtitle || title;
  const hasOverview = overview && overview.trim();
  const hasColumns = Array.isArray(columns) && columns.length > 0;

  if (!hasHeading && !hasOverview && !hasColumns) return null;

  return (
    <section className="project-details-section fix section-padding" data-background={bg || ''}>
      <div className="container px-3">
        <div className="project-details-wrapper">
          {/* Section Title Area */}
          {hasHeading && (
            <div className="section-title-area w-full">
              <div className="section-title">
                {subtitle && (
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>{subtitle}</span>
                  </div>
                )}
                {title && (
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {parse(title)}
                  </h2>
                )}
              </div>
            </div>
          )}

          {/* Overview Section
          {hasOverview && (
            <div className="project-details-content">
              <h3>Overview</h3>
              <p>{parse(overview)}</p>
            </div>
          )} */}

          {/* Main two-column content grid */}
          {hasColumns && (
            <div className="project-details-content mt-5">
              <div className="row g-5">
                {columns.map((col, idx) => {
                  const hasHighlights = Array.isArray(col.highlights) && col.highlights.length > 0;

                  return (
                    <div key={col.subtitle || idx} className="col-lg-6">
                      <div className="mb-4">
                        {/* Heading with optional numbered badge icon */}
                        {col.subtitle && (
                          <h4 className="fw-bold mb-2">
                            {col.icon && (
                              <span
                                className="d-inline-flex align-items-center justify-content-center me-2 mb-2"
                                style={{
                                  width: 40,
                                  height: 40,
                                  backgroundColor: '#6A47ED',
                                  color: '#fff',
                                  fontWeight: 700,
                                  fontSize: 16,
                                  flexShrink: 0,
                                  borderRadius: '8px',
                                  lineHeight: 1,
                                }}
                              >
                                {col.icon}
                              </span>
                            )}
                            {parse(col.subtitle)}
                          </h4>
                        )}

                        {/* Content paragraph */}
                        {col.content && (
                          <div className="mb-3" style={{ color: '#17012c' }}>
                            {parse(col.content)}
                          </div>
                        )}

                        {/* Highlights list using project-details-content list-items style */}
                        {hasHighlights && (
                          <ul className="list-items flex-column align-items-start">
                            {col.highlights.map((point, i) => (
                              <li key={`${point}-${i}`}>
                                <span>{parse(point)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
