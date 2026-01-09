import { useState } from 'react';
import PropTypes from 'prop-types';

const AppShowcaseSection = ({ data }) => {
  const [activePreview, setActivePreview] = useState(0);

  // Default data structure
  const defaultData = {
    title: 'Shopify Video with Text Section',
    description:
      'Present your message with impact using a structured video and text layout. This section combines visual storytelling with clear content, making it ideal for showcasing products, explaining features, or sharing brand stories in a focused and professional way.',
    badge: 'Add to Your Store',
    appInfo: {
      icon: '/assets/img/shopify-sections/app-icon.png',
      name: 'MIT Sections Pro App',
      subtext: 'Custom Shopify App',
      price: '$0.00',
    },
    features: [
      'No coding required',
      'Easy to manage from the Theme Editor',
      'Designed for modern Shopify storefronts',
    ],
    ctaButton: {
      text: 'Hire a Shopify developer to add this section. ',
      link: '#',
    },
    featureIcons: [
      { icon: 'bi-phone', label: 'Mobile Responsive' },
      { icon: 'bi-code-slash', label: 'Clean Code' },
      { icon: 'bi-speedometer2', label: 'Speed Optimized' },
      { icon: 'bi-headset', label: 'Expert Support' },
    ],
    previews: [
      {
        type: 'tablet',
        image: '/assets/img/shopify-sections/section-23.png',
        alt: 'Collection Showcase - Tablet View',
      },
      {
        type: 'tablet-cropped',
        image: '/assets/img/shopify-sections/section-23.png',
        alt: 'Collection Showcase - Tablet View',
      },
      {
        type: 'mobile',
        image: '/assets/img/shopify-sections/section-23.png',
        alt: 'Collection Showcase - Mobile View',
      },
    ],
  };

  const sectionData = data || defaultData;

  return (
    <section className="shopify-app-showcase section-padding">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Visual Preview Section - Left Column */}
          <div className="col-12 col-lg-7 mt-lg-0 mt-2">
            <div className="visual-preview-container">
              {/* Main Preview */}
              <div className="main-preview-wrapper mb-3">
                <div
                  className="device-mockup"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    padding: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Device Frame - Three Dots */}
                  <div
                    className="device-frame-dots"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'flex',
                      gap: '6px',
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#D1D1D1',
                      }}
                    />
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#D1D1D1',
                      }}
                    />
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#D1D1D1',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={sectionData.previews[activePreview].image}
                      alt={sectionData.previews[activePreview].alt}
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="thumbnail-gallery d-flex gap-3 justify-content-center">
                {sectionData.previews.map((preview, index) => (
                  <button
                    key={index}
                    type="button"
                    className="thumbnail-btn border-0 bg-transparent p-0"
                    onClick={() => setActivePreview(index)}
                    style={{
                      cursor: 'pointer',
                      opacity: activePreview === index ? 1 : 0.7,
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <div
                      style={{
                        width: '100px',
                        height: 'auto',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        backgroundColor: '#FFFFFF',
                        boxShadow:
                          activePreview === index
                            ? '0 4px 16px rgba(0,0,0,0.15)'
                            : '0 2px 8px rgba(0,0,0,0.08)',
                        border: activePreview === index ? '2px solid #1A1A1A' : '1px solid #E0E0E0',
                        transition: 'all 0.2s ease-in-out',
                        padding: '4px',
                      }}
                    >
                      <img
                        src={preview.image}
                        alt={preview.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Information Panel - Right Column */}
          <div className="col-12 col-lg-5 mt-lg-0 mt-2">
            <div className="information-panel">
              {/* Title */}
              <h2 className="section-title mb-3">{sectionData.title}</h2>

              {/* Description */}
              <p className="section-description mb-4">
                {typeof sectionData.description === 'string'
                  ? sectionData.description
                  : sectionData.description}
              </p>

              {/* Badge */}
              {/* <div className="badge-wrapper mb-3">
                <span
                  className="badge-text d-inline-block"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    backgroundColor: '#2D2D2D',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {' '}
                  {sectionData.badge}
                </span>
              </div> */}

              <div className="section-title mb-0">
                <div className="sub-title wow fadeInUp">
                  <span>{sectionData.badge}</span>
                </div>
              </div>

              {/* App Info Card */}
              <div
                className="app-info-card mb-4"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0E0E0',
                  borderRadius: '10px',
                  padding: '28px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="app-icon"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '8px',
                        backgroundColor: '#6a47ed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '24px',
                        fontWeight: 700,
                      }}
                    >
                      {/* <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"
                          fill="currentColor"
                        />
                        <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z" fill="currentColor" />
                      </svg> */}
                      <img
                        src="/assets/img/icon/shopify-icon-50.png"
                        alt="Shopify Icon"
                        className="img-fluid"
                        style={{
                          width: '40px',
                          height: '40px',
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="mb-1">{sectionData.appInfo.name}</h4>
                      <p
                        className="app-subtext mb-0"
                        style={{
                          fontSize: '12px',
                          color: '#6B6B6B',
                          margin: 0,
                        }}
                      >
                        {sectionData.appInfo.subtext}
                      </p>
                    </div>
                  </div>
                  <div
                    className="app-price"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#1A1A1A',
                    }}
                  >
                    {sectionData.appInfo.price}
                  </div>
                </div>

                {/* Feature List */}
                <ul
                  className="feature-list mt-4 mb-0"
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {sectionData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center gap-2 mb-1"
                      style={{
                        fontSize: '14px',
                        color: '#2D2D2D',
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: '#28A745',
                          fontSize: '18px',
                        }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className="cta-button w-100 mb-4 border-0"
                style={{
                  height: '52px',
                  backgroundColor: '#6a47ed',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (sectionData.ctaButton?.link) {
                    window.open(sectionData.ctaButton.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2D2D2D';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6a47ed';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {sectionData.ctaButton.text}
              </button>

              {/* Feature Icons Grid */}
              <div className="feature-icons-grid">
                <div className="row gx-1 gy-1">
                  {sectionData.featureIcons.map((item, index) => (
                    <div key={index} className="col-6">
                      <div
                        className="d-flex align-items-center gap-2"
                        style={{
                          fontSize: '13px',
                          color: '#6B6B6B',
                          width: '100%',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <i className={`bi ${item.icon}`} style={{ fontSize: '18px' }} />
                        <span>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .device-mockup {
            aspect-ratio: 16 / 10;
            min-height: 400px;
          }

          .device-mockup > div:last-child {
            width: 100%;
            height: 100%;
          }

          .device-mockup img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .thumbnail-btn > div {
            aspect-ratio: 16 / 10;
            min-width: 100px;
          }

          .thumbnail-btn img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 991px) {
            .section-title {
              font-size: 28px !important;
            }

            .visual-preview-container {
              margin-bottom: 32px;
            }

            .device-mockup {
              min-height: 350px;
            }
          }

          @media (max-width: 575px) {
            .section-title {
              font-size: 24px !important;
            }

            .device-mockup {
              min-height: 280px;
              padding: 8px !important;
            }

            .thumbnail-btn > div {
              width: 80px !important;
              min-width: 80px;
            }

            .app-info-card {
              padding: 20px !important;
            }

            .device-frame-dots {
              top: 12px !important;
              left: 12px !important;
            }

            .device-frame-dots > div {
              width: 10px !important;
              height: 10px !important;
            }
          }

          .thumbnail-btn:hover {
            opacity: 1 !important;
          }

          .thumbnail-btn:hover > div {
            border-color: #1A1A1A !important;
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(0,0,0,0.2) !important;
          }
        `}
      </style>
    </section>
  );
};

AppShowcaseSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    badge: PropTypes.string,
    appInfo: PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
      subtext: PropTypes.string,
      price: PropTypes.string,
    }),
    features: PropTypes.arrayOf(PropTypes.string),
    ctaButton: PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    }),
    featureIcons: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    previews: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        image: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
  }),
};

AppShowcaseSection.defaultProps = {
  data: null,
};

export default AppShowcaseSection;
