import { useEffect, useRef, useState } from 'react';
import parser from 'html-react-parser';

// ─── Static Data ────────────────────────────────────────────────────────────
const SECTION_DATA = {
  faq: {
    faqtitle: 'FAQ',
    faqsubtitle: 'Frequently Asked <br/> Questions',
  },
  faqlist: [
    {
      title: 'What is SEO and why is it important for my business?',
      content:
        "SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines like Google. It helps drive organic traffic, increase brand awareness, and generate leads without paying for ads.",
    },
    {
      title: 'How long does it take to see results from SEO?',
      content:
        'SEO is a long-term strategy. Most businesses start seeing noticeable improvements within <strong>3 to 6 months</strong>, depending on competition, current website health, and the consistency of efforts applied.',
    },
    {
      title: 'What services are included in your digital marketing package?',
      content:
        'Our digital marketing packages include SEO, content marketing, social media management, pay-per-click (PPC) advertising, email marketing, and detailed monthly performance reporting.',
    },
    {
      title: 'Do you offer custom strategies for different industries?',
      content:
        'Yes! Every business is unique. We craft tailored strategies based on your industry, target audience, competitors, and business goals to ensure maximum ROI.',
    },
    {
      title: 'How do I get started with your services?',
      content:
        'Simply reach out to us via our contact form or book a free consultation call. Our team will assess your current digital presence and recommend the best plan for your growth.',
    },
  ],
};
// ────────────────────────────────────────────────────────────────────────────

const SMFaqSection = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);
  const accordionContentRefs = useRef([]);
  const [contentHeights, setContentHeights] = useState([]);

  const { faq, faqlist } = SECTION_DATA;

  useEffect(() => {
    const newHeights = faqlist.map((_, i) => {
      const el = accordionContentRefs.current[i];
      return el ? `${el.scrollHeight}px` : '0px';
    });
    setContentHeights(newHeights);
  }, [openItemIndex]);

  return (
    <section className="fix section-padding" data-background="/assets/img/team/team-bg.jpg">
      <div className="faq-shape"></div>
      <div className="container px-3">
        <div className="section-title-area text-center justify-content-center mb-4">
          <div className="section-title">
            <div className="sub-title bg-color-2 wow fadeInUp">
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

export default SMFaqSection;
