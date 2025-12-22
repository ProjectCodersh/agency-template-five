import React from 'react';

const chooseHeading = {
  subtitle: 'Partners & Integrations',
  title: 'E-Commerce & Marketing',
  content: '',
  plantitle1: 'E-Commerce Platforms',
  plantitle2: 'Marketing & Productivity Tools',
};

// E-Commerce Platforms
const recommended = [
  {
    title: 'Squarespace',
    content: 'E-commerce website builder',
    logo: '/assets/img/partners/squarespace.png',
  },
  {
    title: 'Dirctorist',
    content: 'Directory plugin for WordPress',
    logo: '/assets/img/partners/dictorist.png',
  },
];

// Marketing & Productivity Tools
const compatible = [
  {
    title: 'ClickUp',
    content: 'Project management and collaboration tool',
    logo: '/assets/img/partners/clickup.png',
  },
  {
    title: 'Impact',
    content: 'Affiliate marketing platform',
    logo: '/assets/img/partners/impact.png',
  },
];

// New ToolGrid based on your provided structure
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

const PartnersSection3 = () => {
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

        {/* Recommended Section */}
        <div className="mb-4">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <ToolGrid tools={recommended} />
        </div>

        {/* Compatible Section */}
        <div>
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
              <span>{chooseHeading.plantitle2}</span>
            </div>
          </div>
          <ToolGrid tools={compatible} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnersSection3);








