import React from 'react';
import figmaLogo from '/assets/img/tools/figma-icon.webp';
import canvaLogo from '/assets/img/tools/canva-icon.webp';
import photoshopLogo from '/assets/img/tools/photoshop-icon.webp';
import adobeLogo from '/assets/img/tools/adobecloud-icon.webp';

const ToolGrid = ({ tools, cols }) => (
  <div className="row gy-4">
    {tools.map((tool) => (
      <div
        key={tool.name}
        className={`${cols} text-center d-flex align-items-center justify-content-center flex-column`}
      >
        <img
          src={tool.logo}
          alt={tool.name}
          loading="lazy"
          className="img-fluid mb-2 px-2 px-md-0 brandsection-brands-three"
        />
      </div>
    ))}
  </div>
);

const BrandSection3 = () => {
  const recommended = [{ name: 'Figma', logo: figmaLogo }];
  const compatible = [
    { name: 'Canva', logo: canvaLogo },
    { name: 'Photoshop', logo: photoshopLogo },
    { name: 'Adobe Cloud', logo: adobeLogo },
  ];

  const heading = {
    title: 'Design & Prototype Tools',
    content: ``,
    planTitle1: 'We recommend for you',
    planTitle2: 'We are also compatible with',
  };

  return (
    <section className="section-padding brand-section fix" style={{ backgroundColor: '#f6f3fe' }}>
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {heading.title}
            </h2>
            <p
              className="wow fadeInUp mt-3 text-muted"
              data-wow-delay=".5s"
              style={{ whiteSpace: 'pre-line' }}
            >
              {heading.content}
            </p>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="section-title mb-0">
              <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
                <span>{heading.planTitle1}</span>
              </div>
            </div>
            <ToolGrid tools={recommended} cols="col-6 col-sm-4 col-md-4 col-lg-3" />
          </div>

          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="section-title mb-0">
              <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
                <span>{heading.planTitle2}</span>
              </div>
            </div>
            <ToolGrid tools={compatible} cols="col-4 col-sm-4 col-md-4 col-lg-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BrandSection3);
