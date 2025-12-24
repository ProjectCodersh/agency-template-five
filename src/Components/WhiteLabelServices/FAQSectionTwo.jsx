import { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';

/**
 * FAQSectionTwo
 * - Fully driven by `data` prop (no internal defaults)
 * - If no data or no FAQs, returns null
 *
 * Expected `data` shape:
 * {
 *   "addclass": "optional-css-class",
 *   "bg": "/assets/img/team/team-bg.jpg",
 *   "heading": {
 *     "subtitle": "FAQs",
 *     "subtitleBgColor": "#f6f3fe",
 *     "title": "Let's make something awesome together",
 *     "description": "We are Codersh Web Services, your trusted digital solutions partner since 2014. Our team delivers measurable results that boost your business forward."
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
const FAQSectionTwo = ({ data, addclass = '' }) => {
  // Hooks must be called before any early returns
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const contentRefs = useRef([]);

  // Calculate hasFaqs early for useEffect
  const hasFaqs = data && Array.isArray(data.faqs) && data.faqs.length > 0;

  useEffect(() => {
    if (firstItemOpen && hasFaqs) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen, hasFaqs]);

  if (!data) return null;

  const { bg, heading, faqs = [] } = data;
  // Ensure heading is always an object (handle null/undefined cases)
  const headingData = heading && typeof heading === 'object' ? heading : {};
  const { subtitle, title, description } = headingData;

  const hasHeading = subtitle || title || description;

  if (!hasHeading && !hasFaqs) {
    return null;
  }

  // Background image: if bg is true (toggle enabled), use default path; otherwise no background
  const backgroundImage = bg === true ? '/assets/img/team/team-bg.jpg' : '';

  const setContentRef = (el, index) => {
    contentRefs.current[index] = el;
  };

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <section className={`${addclass} section-padding `} data-background={backgroundImage}>
      <div className="container px-3">
        <div className="faq-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-content">
                {hasHeading && (
                  <>
                    <div className="section-title">
                      {subtitle && (
                        <div
                          className="sub-title bg-color-2 wow fadeInUp"
                          style={
                            bg === true
                              ? { backgroundColor: '#384bff1a' }
                              : { backgroundColor: '#f6f3fe' }
                          }
                        >
                          <span>{subtitle}</span>
                        </div>
                      )}
                      {title && (
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          {parse(title)}
                        </h2>
                      )}
                    </div>
                    {description && (
                      <p className="wow fadeInUp" data-wow-delay=".5s">
                        {parse(description)}
                      </p>
                    )}
                  </>
                )}
                {/* <ul className="faq-list">
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    <i className="bi bi-check-circle"></i>
                    Top quality service
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <i className="bi bi-check-circle"></i>
                    Intermodal Shipping
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="faq-accordion-items">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqs.map((item, index) => {
                      const isOpen = index === openItemIndex;

                      return (
                        <div
                          key={index}
                          className={`accordion-item mb-3 ${isOpen ? 'active' : ''}`}
                          data-wow-delay=".3s"
                        >
                          <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                            <button className="accordion-button collapsed" type="button">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionTwo;
