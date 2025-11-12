import { useEffect, useRef, useState } from 'react';
import parser from 'html-react-parser';

const ServiceTechExcellence = ({ data }) => {
  const [openItemIndex, setOpenItemIndex] = useState(0);
  const accordionContentRefs = useRef([]);
  const [contentHeights, setContentHeights] = useState([]);

  const faqlist = data?.faqlist || [];
  const faq = data?.faq || {};

  useEffect(() => {
    // Update scrollHeight for each accordion panel
    const newHeights = faqlist.map((_, i) => {
      const el = accordionContentRefs.current[i];
      return el ? `${el.scrollHeight}px` : '0px';
    });
    setContentHeights(newHeights);
  }, [faqlist, openItemIndex]);

  if (!data || !data.faq || !faqlist.length) {
    return <></>; // or null
  }

  return (
    <section className="fix section-padding">
      <div className="faq-shape"></div>
      <div className="container px-3">
        <div className="section-title-area text-center justify-content-center mb-4">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>{faq.faqtitle}</span>
            </div>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              dangerouslySetInnerHTML={{ __html: faq.faqsubtitle }}
            />
          </div>
        </div>

        <div className="faq-wrapper newservice-faq-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-12 col-lg-12 col-xl-8 offset-xl-2">
              <div className="faq-accordion-items">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqlist.map((item, index) => {
                      const isOpen = index === openItemIndex;
                      const collapseId = `faq${index}`;

                      return (
                        <div
                          key={index}
                          className={`accordion-item mb-3 ${isOpen ? 'active' : ''}`}
                          data-wow-delay=".3s"
                        >
                          <h5
                            onClick={() => setOpenItemIndex(isOpen ? -1 : index)}
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
                            ref={(el) => (accordionContentRefs.current[index] = el)}
                            id={collapseId}
                            className="accordion-collapse"
                            style={{
                              maxHeight: isOpen ? contentHeights[index] : '0px',
                              overflow: 'hidden',
                              transition: 'max-height 0.4s ease',
                            }}
                          >
                            <div className="accordion-body">{parser(item.content)}</div>
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

export default ServiceTechExcellence;
