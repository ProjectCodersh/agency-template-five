import React from 'react';
import figmaLogo from '/assets/img/tools/figma-icon.webp';
import canvaLogo from '/assets/img/tools/canva-icon.webp';
import photoshopLogo from '/assets/img/tools/photoshop-icon.webp';
import adobeLogo from '/assets/img/tools/adobecloud-icon.webp';

const chooseHeading = {
  subtitle: 'Our Services',
  title: 'Design & Prototype Tools',
  content: '',
  plantitle1: 'We recommend For you',
  plantitle2: 'We are Also compatible with',
};

const recommended = [
  {
    title: 'Figma',
    content: 'UI/UX design & prototyping',
    logo: figmaLogo,
  },
];

const compatible = [
  {
    title: 'Canva',
    content: 'Easy graphic design tool',
    logo: canvaLogo,
  },
  {
    title: 'Photoshop',
    content: 'Advanced editing software',
    logo: photoshopLogo,
  },
  {
    title: 'Adobe Cloud',
    content: 'Creative software suite',
    logo: adobeLogo,
  },
];

// Combined tools for XL layout
const tools = [...recommended, ...compatible];

// Same standardized grid layout from your finalized design
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
                <img className="brandsection-img" src={item.logo} alt={item.title} />
                <h3 className="text-center text-md-start">{item.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);

const BrandSection6 = () => {
  return (
    <section className="section-padding brand-section fix">
      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {chooseHeading.title}
            </h2>
          </div>
        </div>

        {/* XL and above: Single row section for all 4 items */}
        <div className="mb-4 d-none d-xl-block">
          <div className="section-title mb-0 row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <div className="sub-title wow fadeInUp my-4">
                <span>{chooseHeading.plantitle1}</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <div className="sub-title wow fadeInUp my-4">
                <span>{chooseHeading.plantitle2}</span>
              </div>
            </div>
          </div>

          <ToolGrid tools={tools} />
        </div>

        {/* Below XL: Stacked sections like Brandsection1 */}
        {/* Recommended Section */}
        <div className="mb-4 d-xl-none">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4">
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <ToolGrid tools={recommended} />
        </div>

        {/* Compatible Section */}
        <div className="d-xl-none">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4">
              <span>{chooseHeading.plantitle2}</span>
            </div>
          </div>
          <ToolGrid tools={compatible} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(BrandSection6);
