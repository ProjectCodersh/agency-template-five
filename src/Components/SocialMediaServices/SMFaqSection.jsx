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
      title: 'What is SEO and why does my business need it?',
      content:
        'SEO (Search Engine Optimization) helps your website rank higher on Google so potential customers can find you. Without SEO, even a well-designed website may not get traffic or leads.',
    },
    {
      title: 'How long does SEO take to show results?',
      content:
        'SEO is a long-term strategy. You can typically start seeing improvements in <strong>2–3 months</strong>, but significant results usually take <strong>4–6 months</strong> depending on your industry and competition.',
    },
    {
      title: "What's included in your SEO services?",
      content:
        'Our SEO covers keyword research, content optimization, technical fixes, on-page SEO, backlink building, and ongoing performance tracking.',
    },
    {
      title: 'Will SEO increase my sales or just traffic?',
      content:
        'Our focus is on attracting the <em>right</em> traffic. That means users who are more likely to convert into leads or customers, not just increasing visitor numbers.',
    },
    {
      title: 'What is technical SEO and why is it important?',
      content:
        'Technical SEO ensures your website is fast, mobile-friendly, and easy for search engines to crawl and index. Without it, your rankings can suffer even if your content is good.',
    },
    {
      title: 'Do you guarantee first-page rankings?',
      content:
        'No genuine SEO provider can guarantee rankings. What we do guarantee is a proven strategy, consistent improvements, and transparent reporting.',
    },
    {
      title: 'Is SEO a one-time process or ongoing?',
      content:
        'SEO is ongoing. Search engines update constantly, and competitors are always optimizing, so continuous improvement is necessary to maintain and grow rankings.',
    },
    {
      title: 'Can you fix SEO issues on my existing website?',
      content:
        'Yes. We can audit your current website, identify issues, and implement fixes to improve performance and rankings.',
    },
    {
      title: 'What makes your SEO approach different?',
      content: 'We combine SEO with development expertise and a conversion-focused mindset.',
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
