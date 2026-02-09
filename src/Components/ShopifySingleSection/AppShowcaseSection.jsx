import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/ShopifySectionPopup.css';

const AppShowcaseSection = ({ data }) => {
  const [activePreview, setActivePreview] = useState(0);

  // --- NEW STATE FOR MODAL & FLOW ---
  const [showModal, setShowModal] = useState(false);
  const [formStep, setFormStep] = useState('email'); // 'email' or 'install'
  const [emailInput, setEmailInput] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // --- MOCK DATA FOR DEMO (Later this comes from ACF) ---
  const mockLiquidCode = `
{% schema %}
{
  "name": "Video with Text",
  "settings": [
    {
      "type": "video_url",
      "id": "video_url",
      "label": "Video link",
      "accept": ["youtube", "vimeo"]
    }
  ]
}
{% endschema %}

<div class="video-section">
  <h2>{{ section.settings.heading }}</h2>
</div>
  `.trim();

  // Default data structure
  const defaultData = {
    title: 'Shopify Video with Text Section',
    description:
      'Present your message with impact using a structured video and text layout. This section combines visual storytelling with clear content.',
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
      text: 'Get This Section Free', // UPDATED TEXT
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
        type: 'mobile',
        image: '/assets/img/shopify-sections/section-23.png', // Duplicated for demo
        alt: 'Collection Showcase - Mobile View',
      },
      {
        type: 'mobile',
        image: '/assets/img/shopify-sections/section-23.png', // Duplicated for demo
        alt: 'Collection Showcase - Mobile View',
      },
    ],
  };

  const sectionData = data || defaultData;

  // --- HANDLERS ---
  const handleOpenModal = () => {
    setShowModal(true);
    setFormStep('email'); // Always reset to email step on open
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim() !== '') {
      // API CALL TO SAVE EMAIL WOULD GO HERE
      console.log('Lead Captured:', emailInput);
      setFormStep('install'); // Switch to code view
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(mockLiquidCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="shopify-app-showcase section-padding">
      <div className="container">
        <div className="row g-4 g-xl-5">
          {/* Visual Preview Section - Left Column */}
          <div className="col-12 col-xl-7 mt-lg-0 mt-2">
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
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
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
          <div className="col-12 col-xl-5 mt-lg-0 mt-4 xl:mt-2 ">
            <div className="information-panel">
              <h2 className="section-title mb-3">{sectionData.title}</h2>
              <p className="section-description mb-4">
                {sectionData.description}
              </p>

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
                      <img
                        src="/assets/img/icon/shopify-icon-50.png"
                        alt="Shopify Icon"
                        className="img-fluid"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </div>
                    <div>
                      <h4 className="mb-1">{sectionData.appInfo.name}</h4>
                      <p
                        className="app-subtext mb-0"
                        style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}
                      >
                        {sectionData.appInfo.subtext}
                      </p>
                    </div>
                  </div>
                  <div
                    className="app-price"
                    style={{ fontSize: '24px', fontWeight: 700, color: '#1A1A1A' }}
                  >
                    {sectionData.appInfo.price}
                  </div>
                </div>

                <ul className="feature-list mt-4 mb-0" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sectionData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center gap-2 mb-1"
                      style={{ fontSize: '14px', color: '#2D2D2D' }}
                    >
                      <i className="bi bi-check-circle-fill" style={{ color: '#28A745', fontSize: '18px' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button - UPDATED TO TRIGGER MODAL */}
              <button
                type="button"
                className="cta-button w-100 mb-2 border-0"
                style={{
                  height: '52px',
                  backgroundColor: '#6a47ed',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onClick={handleOpenModal} // Triggers the modal
              >
                {sectionData.ctaButton.text}
              </button>

              {/* Secondary Link for Agency Services */}
              <div className="text-center mb-4">
                <a href="/contact" style={{ fontSize: '13px', color: '#6B6B6B', textDecoration: 'underline' }}>
                  Need help installing? Hire our developers.
                </a>
              </div>

              {/* Feature Icons Grid */}
              <div className="feature-icons-grid">
                <div className="row gx-1 gy-1">
                  {sectionData.featureIcons.map((item, index) => (
                    <div key={index} className="col-6">
                      <div
                        className="d-flex align-items-center gap-2"
                        style={{ fontSize: '13px', color: '#6B6B6B', width: '100%', justifyContent: 'flex-start' }}
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

      {/* --- LEAD GEN & INSTALLATION MODAL --- */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <button className="close-btn" onClick={handleCloseModal}>&times;</button>

            {formStep === 'email' ? (
              // STEP 1: EMAIL CAPTURE
              <div className="modal-step-email">
                <div className="modal-header-icon">
                  <i className="bi bi-gift-fill"></i>
                </div>
                <h3>Send me this Section</h3>
                <p>Enter your email address to unlock the code snippet and installation video instantly.</p>
                <form onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    placeholder="name@business.com"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <button type="submit" className="modal-cta-btn">Unlock Code</button>
                </form>
                <div className="secure-badge">
                  <i className="bi bi-shield-lock"></i> 100% Secure & Free
                </div>
              </div>
            ) : (
              // STEP 2: INSTALLATION GUIDE
              <div className="modal-step-install">
                <h3>Installation Guide</h3>
                <p className="sub-text">Follow the video or copy the code below.</p>

                {/* 1. Video Placeholder */}
                <div className="video-placeholder">
                  <div className="play-btn"><i className="bi bi-play-fill"></i></div>
                  <span>Watch Tutorial (1:30)</span>
                </div>

                {/* 2. Code Snippet Area */}
                <div className="code-block-wrapper">
                  <div className="code-header">
                    <span>liquid-section.liquid</span>
                    <button onClick={handleCopyCode} className={isCopied ? 'copied' : ''}>
                      {isCopied ? <><i className="bi bi-check"></i> Copied</> : <><i className="bi bi-clipboard"></i> Copy</>}
                    </button>
                  </div>
                  <pre className="code-content">
                    {mockLiquidCode}
                  </pre>
                </div>

                <div className="download-row">
                  <a href="#" className="download-link"><i className="bi bi-download"></i> Download .zip file</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>

      </style>
    </section>
  );
};

AppShowcaseSection.propTypes = {
  data: PropTypes.object,
};

AppShowcaseSection.defaultProps = {
  data: null,
};

export default AppShowcaseSection;