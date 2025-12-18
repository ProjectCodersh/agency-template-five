import { useRef, useState } from 'react';

/**
 * FAQSection
 * - Fully driven by `data` prop (no internal defaults)
 * - If no data or no FAQs, returns null
 *
 * Expected `data` shape:
 * {
 *   "addclass": "optional-css-class",
 *   "backgroundColor": "#f6f3fe",
 *   "borderBottom": "1px solid #e5e5e5",
 *   "heading": {
 *     "subtitle": "Need Clarity?",
 *     "subtitleBgColor": "#384bff1a",
 *     "title": "Frequently Asked Questions"
 *   },
 *   "faqs": [
 *     {
 *       "title": "Question text",
 *       "content": "Answer text"
 *     },
 *     ...
 *   ]
 * }
 */
const FAQSection = ({ data }) => {
  // Hooks must be called before any early returns
  const [openItemIndex, setOpenItemIndex] = useState(0);
  const contentRefs = useRef([]);

  if (!data) return null;

  const {
    addclass = '',
    backgroundColor = '#f6f3fe',
    borderBottom = '1px solid #e5e5e5',
    heading = {},
    faqs = [],
  } = data;

  const { subtitle, subtitleBgColor = '#384bff1a', title } = heading;

  const hasHeading = subtitle || title;
  const hasFaqs = Array.isArray(faqs) && faqs.length > 0;

  if (!hasHeading && !hasFaqs) {
    return null;
  }

  // Split FAQs into two columns (first 5, then rest)
  const midPoint = Math.ceil(faqs.length / 2);
  const firstColumnFaqs = faqs.slice(0, midPoint);
  const secondColumnFaqs = faqs.slice(midPoint);

  const setContentRef = (el, index) => {
    contentRefs.current[index] = el;
  };

  const handleItemClick = (index) => {
    setOpenItemIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className={`${addclass} section-padding`} style={{ borderBottom, backgroundColor }}>
      <div className="container px-3">
        {hasHeading && (
          <div className="section-title text-center mb-5">
            {subtitle && (
              <div className="sub-title" style={{ backgroundColor: subtitleBgColor }}>
                <span>{subtitle}</span>
              </div>
            )}
            {title && <h2>{title}</h2>}
          </div>
        )}

        {hasFaqs && (
          <div className="faq-wrapper">
            <div className="row g-4">
              {/* LEFT COLUMN */}
              <div className="col-lg-6">
                <div className="accordion">
                  {firstColumnFaqs.map((item, index) => {
                    const isOpen = index === openItemIndex;

                    return (
                      <div key={index} className={`accordion-item mb-3 ${isOpen ? 'active' : ''}`}>
                        <h5 className="accordion-header" onClick={() => handleItemClick(index)}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            style={{ textTransform: 'none' }}
                          >
                            {item.title}
                          </button>
                        </h5>

                        <div
                          ref={(el) => setContentRef(el, index)}
                          className="accordion-collapse"
                          style={{
                            overflow: 'hidden',
                            transition: 'max-height 0.4s ease',
                            maxHeight: isOpen
                              ? `${contentRefs.current[index]?.scrollHeight}px`
                              : '0px',
                          }}
                        >
                          <div className="accordion-body">{item.content}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              {secondColumnFaqs.length > 0 && (
                <div className="col-lg-6">
                  <div className="accordion">
                    {secondColumnFaqs.map((item, index) => {
                      const actualIndex = index + midPoint;
                      const isOpen = actualIndex === openItemIndex;

                      return (
                        <div
                          key={actualIndex}
                          className={`accordion-item mb-3 ${isOpen ? 'active' : ''}`}
                        >
                          <h5
                            className="accordion-header"
                            onClick={() => handleItemClick(actualIndex)}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              style={{ textTransform: 'none' }}
                            >
                              {item.title}
                            </button>
                          </h5>

                          <div
                            ref={(el) => setContentRef(el, actualIndex)}
                            className="accordion-collapse"
                            style={{
                              overflow: 'hidden',
                              transition: 'max-height 0.4s ease',
                              maxHeight: isOpen
                                ? `${contentRefs.current[actualIndex]?.scrollHeight}px`
                                : '0px',
                            }}
                          >
                            <div className="accordion-body">{item.content}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
