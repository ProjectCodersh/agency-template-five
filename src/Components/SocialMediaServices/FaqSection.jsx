/**
 * FaqSection.jsx  —  Animated accordion FAQ
 *
 * Props: data (object from JSON) | null/undefined → renders nothing
 *
 * JSON shape:
 * {
 *   title, subtitle (HTML),
 *   items: [{ title, content (HTML) }]
 * }
 */
import { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';

const FaqSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    if (!data?.items) return;
    const newHeights = data.items.map((_, i) => {
      const el = contentRefs.current[i];
      return el ? `${el.scrollHeight}px` : '0px';
    });
    setHeights(newHeights);
  }, [openIndex, data]);

  if (!data) return null;

  const { title, subtitle, items } = data;
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="fix section-padding" data-background="/assets/img/team/team-bg.jpg">
      <div className="faq-shape" />
      <div className="container px-3">
        {(title || subtitle) && (
          <div className="section-title-area text-center justify-content-center mb-4">
            <div className="section-title">
              {title && (
                <div className="sub-title bg-color-2 wow fadeInUp">
                  <span>{title}</span>
                </div>
              )}
              {subtitle && (
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
            </div>
          </div>
        )}

        <div className="faq-wrapper newservice-faq-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-12 col-lg-12 col-xl-8 offset-xl-2">
              <div className="faq-accordion-items">
                <div className="faq-accordion">
                  <div className="accordion" id="faq-accordion">
                    {items.map((item, index) => {
                      const isOpen = index === openIndex;
                      return (
                        <div
                          key={index}
                          className={`accordion-item mb-3 ${isOpen ? 'active' : ''}`}
                        >
                          <h5
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className="accordion-header"
                          >
                            <button
                              className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                              type="button"
                            >
                              {item.title}
                            </button>
                          </h5>
                          <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="accordion-collapse"
                            style={{
                              maxHeight: isOpen ? (heights[index] ?? 'none') : '0px',
                              overflow: 'hidden',
                              transition: 'max-height 0.4s ease',
                            }}
                          >
                            <div className="accordion-body">
                              {parse(item.content ?? '')}
                            </div>
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

export default FaqSection;
