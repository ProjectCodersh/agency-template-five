import { useEffect, useRef, useState } from 'react';

const Faq1 = ({ addclass }) => {
  const faqContent = [
    {
      title: 'Can I assign unlimited WordPress tasks?',
      content:
        'Yes! You can assign unlimited WordPress tasks to our expert developers. We handle one task at a time to ensure quality work.',
    },
    {
      title: 'How long does it take to complete different types of tasks?',
      content:
        'Simple tasks take 24-48 hours, medium projects need 5-7 business days. Full website builds typically require 3-4 weeks, depending on complexity.',
    },
    {
      title: 'What types of WordPress tasks can I assign to Codersh?',
      content:
        "Any WordPress-related work including development, customization, plugins, security, SEO, and maintenance. We don't restrict the type of development work you can assign.",
    },
    {
      title: 'How do I track my project progress?',
      content:
        'You can track progress in real-time and receive regular updates from our dedicated project manager via emails',
    },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const contentRefs = useRef([]);

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
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <section
      className={`${addclass} section-padding `}
      style={{ borderBottom: '1px solid #e5e5e5' }}
    >
      {/* <div className="faq-overlay">
        <img src="/assets/img/faq-overlay.png" alt="img" />
      </div>
      <div className="faq-shape">
        <img src="/assets/img/faq-shape.png" alt="img" />
      </div> */}
      <div className="container px-3">
        <div className="faq-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <div
                    className="sub-title bg-color-2 wow fadeInUp"
                    style={{ backgroundColor: '#f6f3fe' }}
                  >
                    <span>FAQs</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Let’s make something awesome together
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We are Codersh Web Services, your trusted digital solutions partner since 2014.
                  Our team delivers measurable results that boost your business forward.
                </p>
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
                    {faqContent.map((item, index) => {
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

export default Faq1;
