/**
 * WhyChooseSection.jsx  —  "Why choose us" split layout with advantages list
 *
 * Props: data (object from JSON) | null/undefined → renders nothing
 *
 * JSON shape:
 * {
 *   badge, title (HTML), introContent (HTML),
 *   advantageTitle, advantages: string[],
 *   sectionImage: { src, alt }
 * }
 */
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';

const CheckCircleIcon = () => (
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
      fill="#fff"
    />
  </svg>
);

const WhyChooseSection = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { badge, title, introContent, advantageTitle, advantages, sectionImage } = data;

  const hasAdvantages = Array.isArray(advantages) && advantages.length > 0;

  if (!badge && !title && !introContent && !hasAdvantages) return null;

  return (
    <section
      className="shopify-partners-section fix section-padding"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #ffffff 0%, #f6f3fe 50%, #ffffff 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Dot-grid background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(106, 71, 237, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container px-3" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row g-5 align-items-center">
          {/* LEFT — image */}
          {sectionImage?.src && (
            <div className="col-lg-6 order-2 order-lg-1">
              <div
                className="section-image-wrapper wow fadeInLeft"
                data-wow-delay=".2s"
                style={{ position: 'relative' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '10%',
                    background:
                      'radial-gradient(circle, rgba(106, 71, 237, 0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />
                <img
                  src={sectionImage.src}
                  alt={sectionImage.alt || ''}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1,
                    maxHeight: '520px',
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* RIGHT — content */}
          <div className={`col-lg-6 order-1 order-lg-2${!sectionImage?.src ? ' offset-lg-3' : ''}`}>
            <div className="team-content" style={{ position: 'relative' }}>
              <div className="section-title">
                {badge && (
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
                      {badge}
                    </span>
                  </div>
                )}
                {title && (
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
                )}
              </div>

              {introContent && (
                <p
                  className="wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginBottom: '32px' }}
                >
                  {parse(introContent)}
                </p>
              )}

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
                  {/* Decorative corner */}
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
                            <CheckCircleIcon />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .shopify-partners-section .section-image-wrapper {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;
