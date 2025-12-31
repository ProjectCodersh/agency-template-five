import PropTypes from 'prop-types';

const FeatureDocumentationSection = ({ data }) => {
  // Default data structure
  const defaultData = {
    mainContent: {
      heading: 'What is the Collection Showcase Section?',
      paragraphs: [
        'The Shopify Collection Showcase section is a dynamic and visually appealing way to display your product collections on your storefront. This section allows you to showcase multiple collections with ease, making it simple to change images and highlight your best-selling items or new arrivals. Built with Shopify Liquid customization, it provides a user-friendly layout with collapsible accordions that improve navigation and organization.',
        'This section is perfect for stores looking to create curated collections with dynamic visuals and interactive elements. It enhances customer browsing experience, drives engagement without requiring complex coding, and provides a polished, modern look while simplifying content management.',
      ],
      subheading: 'Customization Options',
      features: [
        {
          title: 'Typography Settings',
          description: 'Control heading text, size, and font style',
        },
        {
          title: 'Image Styling',
          description: 'Show main image with border & rounded corners',
        },
        {
          title: 'Content Tabs',
          description: 'Show content with tabs and hover effects',
        },
        {
          title: 'Layout & Spacing',
          description: 'Adjust alignment, image size, and spacing',
        },
      ],
    },
    instructions: {
      heading: 'How to Add This Section to Shopify?',
      steps: [
        {
          number: 1,
          title: 'Install App',
          description: 'Get MIT Sections Pro from the Shopify App Store.',
        },
        {
          number: 2,
          title: 'Explore Section',
          description: 'Browse our complete library of premium sections.',
        },
        {
          number: 3,
          title: 'Try & Buy',
          description: 'Test any section for free in your theme before buying.',
        },
        {
          number: 4,
          title: 'Customize & Publish',
          description: 'Visually add content in the Theme Editor. No code required.',
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
                          backgroundColor: '#F8F9FA',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px',
                          padding: '22px',
                          minHeight: '100%',
                        }}
                      >
                        <h5 className="fw-bold mb-2">{feature.title}</h5>
                        <p className=" mb-0">{feature.description}</p>
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
              padding: 18px !important;
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
