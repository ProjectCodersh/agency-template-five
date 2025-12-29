import React from 'react';

/**
 * PartnersSectionDynamic - Dynamic Partners Section Component
 * Accepts data from Sanity CMS and renders partner sections
 */
const ToolGrid = ({ tools }) => (
  <div className="row gy-4">
    {Array.isArray(tools) &&
      tools.map((item, i) => (
        <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-6 wow fadeInUp" data-wow-delay=".3s">
          <div className="service-box-items text-center flex-column brandsection-box brandsection-box-mb">
            <div className="d-flex justify-content-center justify-content-md-start service-box-items-icon">
              <div
                className="d-flex justify-content-center align-items-center w-100"
                style={{ fontSize: '40px', color: '#6a47ed', gap: '20px' }}
              >
                {item.logo && (
                  <img
                    className="brandsection-img"
                    src={item.logo}
                    alt={item.alt || item.title}
                    loading="lazy"
                  />
                )}
                <h3 className="text-center text-md-start">{item.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);

const PartnersSectionDynamic = ({ data }) => {
  if (!data) return null;

  const { title, subtitle, content, sectionBgColor, chipBgColor, subsection1, subsection2 } = data;

  return (
    <section
      className="section-padding brand-section fix"
      style={{ backgroundColor: sectionBgColor || '#ffffff' }}
    >
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            {subtitle && (
              <div
                className="sub-title wow fadeInUp"
                style={{ backgroundColor: chipBgColor || '#384bff1a' }}
              >
                <span>{subtitle}</span>
              </div>
            )}

            {title && (
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {title}
              </h2>
            )}
          </div>

          {content && (
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {content}
            </p>
          )}
        </div>

        {/* First Subsection */}
        {subsection1 && (
          <div className="mb-4">
            <div className="section-title mb-0">
              <div
                className="sub-title wow fadeInUp my-4"
                style={{ backgroundColor: chipBgColor || '#384bff1a' }}
              >
                <span>{subsection1.title}</span>
              </div>
            </div>
            <ToolGrid
              tools={subsection1.partners?.map((partner) => ({
                title: partner.title,
                content: partner.content,
                logo: partner.logo,
                alt: partner.alt || partner.title,
              }))}
            />
          </div>
        )}

        {/* Second Subsection */}
        {subsection2 && (
          <div>
            <div className="section-title mb-0">
              <div
                className="sub-title wow fadeInUp my-4"
                style={{ backgroundColor: chipBgColor || '#384bff1a' }}
              >
                <span>{subsection2.title}</span>
              </div>
            </div>
            <ToolGrid
              tools={subsection2.partners?.map((partner) => ({
                title: partner.title,
                content: partner.content,
                logo: partner.logo,
                alt: partner.alt || partner.title,
              }))}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(PartnersSectionDynamic);
