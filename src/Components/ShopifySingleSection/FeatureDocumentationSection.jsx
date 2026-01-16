import PropTypes from 'prop-types';

const FeatureDocumentationSection = ({ data }) => {
  // Default data structure
  const defaultData = {
    mainContent: {
      heading: 'What is the Video with Text Section??',
      paragraphs: [
        'The Video with Text section is a flexible Shopify section that allows you to display a video alongside structured text content in a clean, balanced layout.',
        'It helps store owners communicate important information clearly by combining motion with readable content. Whether you want to highlight a product feature, explain a process, or introduce your brand, this section keeps the message focused and visually engaging.',
        'The layout is designed to fit naturally into any storefront and works well for both promotional and informational content, without overwhelming visitors.',
      ],
      subheading: 'Customization Options',
      features: [
        {
          title: 'Flexible Background',
          description:
            'Use an image, hosted video, or video URL as the background to match your brand or campaign.',
        },
        {
          title: 'Layout & Styling',
          description:
            'Control section height, spacing, borders, and visual balance for the video area.',
        },
        {
          title: 'Content Controls',
          description:
            'Easily manage headings, text, colors, font sizes, and alignment for clear readability.',
        },
        {
          title: 'Interactive Elements',
          description:
            'Optional buttons and controls to guide users or encourage action without clutter.',
        },
      ],
    },
    instructions: {
      heading: 'How to Add This Section to Shopify?',
      steps: [
        {
          number: 1,
          title: 'Get in Touch',
          description: 'Get in touch to discuss your requirements and confirm the purchase.',
        },
        {
          number: 2,
          title: 'Receive the Section',
          description:
            'Once the purchase is finalized, the section is added to your Shopify storefront by our team.',
        },
        {
          number: 3,
          title: 'Section Setup',
          description:
            'Adjust the section settings in the Theme Editor to match your layout and content, No code required.',
        },
        {
          number: 4,
          title: 'Review & Publish',
          description: 'Review the section in your store and publish it to your live storefront.',
        },
      ],
    },
  };

  const sectionData = data || defaultData;

  return (
    <section
      className="feature-documentation-section section-padding"
      style={{ backgroundColor: '#f6f3fe' }}
    >
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Main Content - Left Column (Wider) */}
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="main-content">
              {/* Main Heading */}
              <h2 className=" mb-4">{sectionData.mainContent.heading}</h2>

              {/* Body Paragraphs */}
              <div className=" mb-5">
                {sectionData.mainContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4"
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#4A4A4A',
                      lineHeight: '1.7',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Sub-heading */}
              <h3 className="mb-4">{sectionData.mainContent.subheading}</h3>

              {/* Feature Grid */}
              <div className="feature-grid">
                <div className="row g-4">
                  {sectionData.mainContent.features.map((feature, index) => (
                    <div key={index} className="col-12 col-md-6">
                      <div
                        className="feature-card h-100"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '28px',
                          minHeight: '100%',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <h5
                          className="fw-bold mb-3"
                          style={{
                            color: '#330066',
                            fontSize: '24px',
                            fontWeight: 700,
                            lineHeight: '1.3',
                          }}
                        >
                          {feature.title}
                        </h5>
                        <p
                          className="mb-0"
                          style={{
                            color: '#666666',
                            fontSize: '16px',
                            lineHeight: '1.6',
                            fontWeight: 400,
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Instruction Sidebar - Right Column (Narrower) */}
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="instruction-sidebar">
              {/* Sidebar Heading */}
              <h4 className=" mb-4">{sectionData.instructions.heading}</h4>

              {/* Step List */}
              <div className="step-list">
                {sectionData.instructions.steps.map((step, index) => (
                  <div
                    key={index}
                    className="step-item mb-4"
                    style={{
                      display: 'flex',
                      gap: '18px',
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* Step Number */}
                    <div
                      className="step-number"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#6a47ed',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="step-content" style={{ flex: 1 }}>
                      <h5 className="fw-bold mb-2">{step.title}</h5>
                      <p className="mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`


          @media (max-width: 991px) {


            .main-heading {
              font-size: 28px !important;
            }

            .section-subheading {
              font-size: 20px !important;
            }

            .sidebar-heading {
              font-size: 20px !important;
            }

            .instruction-sidebar {
              margin-top: 40px;
            }
          }

          @media (max-width: 767px) {


            .main-heading {
              font-size: 24px !important;
            }

            .body-paragraphs p {
              font-size: 15px !important;
            }

            .feature-card {
              padding: 24px !important;
            }

            .step-item {
              margin-bottom: 24px !important;
            }
          }

          @media (max-width: 575px) {
            .main-heading {
              font-size: 22px !important;
            }

            .section-subheading {
              font-size: 18px !important;
              margin-top: 32px !important;
            }

            .sidebar-heading {
              font-size: 18px !important;
            }

            .step-number {
              width: 32px !important;
              height: 32px !important;
              font-size: 14px !important;
            }

            .step-title {
              font-size: 16px !important;
            }

            .step-description {
              font-size: 13px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

FeatureDocumentationSection.propTypes = {
  data: PropTypes.shape({
    mainContent: PropTypes.shape({
      heading: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      subheading: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    }),
    instructions: PropTypes.shape({
      heading: PropTypes.string,
      steps: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    }),
  }),
};

FeatureDocumentationSection.defaultProps = {
  data: null,
};

export default FeatureDocumentationSection;
