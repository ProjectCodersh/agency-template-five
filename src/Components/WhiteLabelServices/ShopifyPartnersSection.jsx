import { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

/*--- Reusable SVG Icon Component  --*/
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064Z"
      fill="#6A47ED"
    />
  </svg>
);

/*--- Decorative Gradient Shape Component  --*/
const GradientShape = ({ position = 'top-right' }) => {
  const positions = {
    'top-right': { top: '-10%', right: '-5%' },
    'bottom-left': { bottom: '-10%', left: '-5%' },
    center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  return (
    <div
      className="gradient-shape"
      style={{
        position: 'absolute',
        ...positions[position],
        width: '400px',
        height: '400px',
        background:
          'linear-gradient(135deg, rgba(106, 71, 237, 0.15) 0%, rgba(149, 120, 255, 0.1) 100%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

/*--- Floating Badge Component  --*/
const FloatingBadge = ({ children, delay = 0 }) => (
  <div
    className="floating-badge wow fadeInUp"
    data-wow-delay={`${delay}s`}
    style={{
      position: 'absolute',
      top: '-15px',
      right: '-15px',
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #6A47ED 0%, #9578FF 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '700',
      fontSize: '20px',
      boxShadow: '0 8px 24px rgba(106, 71, 237, 0.3)',
      zIndex: 2,
      animation: 'float 3s ease-in-out infinite',
    }}
  >
    {children}
  </div>
);

/*--- Main Component  --*/
const ShopifyPartnersSection = ({ data }) => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // If no data is provided, don't render the block at all
  if (!data) return null;

  const { bg, title, introContent, advantageTitle, advantages = [], conclusionContent } = data;

  // If there is effectively no content, don't render the block
  const hasTextContent = title || introContent || conclusionContent;
  const hasAdvantages = Array.isArray(advantages) && advantages.length > 0;
  const hasLogos = Array.isArray(data.logos) && data.logos.length > 0;

  if (!hasTextContent && !hasAdvantages && !hasLogos) {
    return null;
  }

  return (
    <section
      className="shopify-partners-section fix section-padding"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, #f6f3fe 50%, #ffffff 100%)',
        overflow: 'hidden',
      }}
      data-background={bg || ''}
    >
      {/* Decorative Background Shapes */}
      <GradientShape position="top-right" />
      <GradientShape position="bottom-left" />

      {/* Animated Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(106, 71, 237, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container px-3" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row g-5 align-items-center">
          {/* LEFT COLUMN - ENHANCED LOGOS GRID */}
          {hasLogos && (
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="partners-logo-wrapper" style={{ position: 'relative' }}>
                {/* Floating Badge */}
                <FloatingBadge delay={0.2}>9+</FloatingBadge>

                {/* Glassmorphism Container */}
                <div
                  className="partners-grid-container"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: '40px 30px',
                    border: '1px solid rgba(106, 71, 237, 0.1)',
                    boxShadow: '0 8px 32px rgba(106, 71, 237, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Inner Glow Effect */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background:
                        'radial-gradient(circle, rgba(106, 71, 237, 0.1) 0%, transparent 70%)',
                      animation: 'rotate 20s linear infinite',
                      pointerEvents: 'none',
                    }}
                  />

                  <div className="row g-3" style={{ position: 'relative', zIndex: 1 }}>
                    {data.logos.map((logo, index) => {
                      const isHovered = hoveredLogo === index;
                      const row = Math.floor(index / 3);
                      const col = index % 3;

                      return (
                        <div
                          key={index}
                          className="col-4 wow fadeInUp"
                          data-wow-delay={`${0.1 + index * 0.08}s`}
                          onMouseEnter={() => setHoveredLogo(index)}
                          onMouseLeave={() => setHoveredLogo(null)}
                        >
                          <div
                            className="partner-logo-card-enhanced"
                            style={{
                              backgroundColor: '#ffffff',
                              borderRadius: '16px',
                              padding: '24px 16px',
                              boxShadow: isHovered
                                ? '0 12px 40px rgba(106, 71, 237, 0.2)'
                                : '0 4px 16px rgba(0, 0, 0, 0.06)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minHeight: '140px',
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: isHovered
                                ? 'translateY(-8px) scale(1.05) rotateY(5deg)'
                                : 'translateY(0) scale(1) rotateY(0deg)',
                              border: isHovered
                                ? '2px solid rgba(106, 71, 237, 0.3)'
                                : '2px solid transparent',
                              position: 'relative',
                              overflow: 'hidden',
                              cursor: 'pointer',
                            }}
                          >
                            {/* Hover Gradient Overlay */}
                            {isHovered && (
                              <div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background:
                                    'linear-gradient(135deg, rgba(106, 71, 237, 0.05) 0%, rgba(149, 120, 255, 0.05) 100%)',
                                  zIndex: 0,
                                }}
                              />
                            )}

                            {/* Logo Image */}
                            <img
                              src={logo.img || logo}
                              alt={logo.alt || logo.name || `Partner ${index + 1}`}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '70px',
                                objectFit: 'contain',
                                filter: logo.color === 'monochrome' ? 'grayscale(100%)' : 'none',
                                transition: 'all 0.4s ease',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                position: 'relative',
                                zIndex: 1,
                              }}
                              loading="lazy"
                            />

                            {/* Shine Effect on Hover */}
                            {isHovered && (
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-50%',
                                  left: '-50%',
                                  width: '200%',
                                  height: '200%',
                                  background:
                                    'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                                  animation: 'shine 0.6s ease-in-out',
                                  zIndex: 2,
                                }}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT COLUMN - ENHANCED CONTENT */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="team-content" style={{ position: 'relative' }}>
              {/* Content Badge */}
              {title && (
                <div className="section-title">
                  <div
                    className="sub-title wow fadeInUp mb-3"
                    style={{
                      backgroundColor: 'rgba(106, 71, 237, 0.1)',
                      padding: '8px 24px',
                      borderRadius: '100px',
                      display: 'inline-block',
                    }}
                  >
                    <span style={{ color: '#6A47ED', fontWeight: '700', fontSize: '14px' }}>
                      SHOPIFY EXPERTISE
                    </span>
                  </div>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      fontSize: 'clamp(28px, 4vw, 42px)',
                      fontWeight: '700',
                      lineHeight: '1.3',
                      marginBottom: '24px',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {parse(title)}
                  </h2>
                </div>
              )}

              {introContent && (
                <p
                  className="wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#4a5568',
                    marginBottom: '32px',
                  }}
                >
                  {parse(introContent)}
                </p>
              )}

              {/* ADVANTAGES SECTION - Enhanced */}
              {hasAdvantages && (
                <div
                  className="mt-4 wow fadeInUp advantages-container"
                  data-wow-delay=".7s"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(106, 71, 237, 0.05) 0%, rgba(149, 120, 255, 0.05) 100%)',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid rgba(106, 71, 237, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative Corner */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '100px',
                      height: '100px',
                      background:
                        'linear-gradient(135deg, rgba(106, 71, 237, 0.1) 0%, transparent 100%)',
                      borderRadius: '0 20px 0 100px',
                    }}
                  />

                  {advantageTitle && (
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        color: '#1a1a1a',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {advantageTitle}
                    </h3>
                  )}

                  <div className="list-items" style={{ position: 'relative', zIndex: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {advantages.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 0',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2d3748',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(8px)';
                            e.currentTarget.style.color = '#6A47ED';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0)';
                            e.currentTarget.style.color = '#2d3748';
                          }}
                        >
                          <div
                            style={{
                              flexShrink: 0,
                              width: '24px',
                              height: '24px',
                              background: 'linear-gradient(135deg, #6A47ED 0%, #9578FF 100%)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 12px rgba(106, 71, 237, 0.3)',
                            }}
                          >
                            <CheckIcon />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {conclusionContent && (
                <p
                  className="mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#4a5568',
                    fontStyle: 'italic',
                    paddingLeft: '24px',
                    borderLeft: '4px solid #6A47ED',
                    background: 'rgba(106, 71, 237, 0.03)',
                    padding: '20px 24px',
                    borderRadius: '12px',
                  }}
                >
                  {parse(conclusionContent)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .shopify-partners-section .partner-logo-card-enhanced:hover {
          z-index: 10;
        }

        @media (max-width: 991px) {
          .shopify-partners-section .gradient-shape {
            display: none;
          }
          
          .shopify-partners-section .floating-badge {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ShopifyPartnersSection;
