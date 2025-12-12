import React from 'react';

const chooseHeading = {
  subtitle: 'Partners & Integrations',
  title: 'Web Hosting & Domain Management',
  content: '',
  plantitle1: 'Hosting Providers',
  plantitle2: 'Domain & Marketplace Services',
};

// Web Hosting Providers
const recommended = [
  {
    title: 'Bluehost',
    content: 'Web hosting service',
    logo: '/assets/img/partners/bluehost.png',
  },
  {
    title: 'GoDaddy',
    content: 'Domain registrar and hosting provider',
    logo: '/assets/img/partners/godaddy.png',
  },
  {
    title: 'Hostinger',
    content: 'Web hosting service',
    logo: '/assets/img/partners/hostinger.png',
  },
  {
    title: 'Siteground',
    content: 'Web hosting provider',
    logo: '/assets/img/partners/siteground.png',
  },
  {
    title: 'IONOS',
    content: 'Web hosting and domain service',
    logo: '/assets/img/partners/ionos.png',
  },
  {
    title: 'NameCheap',
    content: 'Domain registration and hosting',
    logo: '/assets/img/partners/namechip.png',
  },
  {
    title: 'FLYWheel',
    content: 'Managed WordPress hosting',
    logo: '/assets/img/partners/flywheel.png',
  },
];

// Domain & Marketplace Services
const compatible = [
  {
    title: 'ThemeForest',
    content: 'Marketplace for website themes and templates',
    logo: '/assets/img/partners/themeforest.png',
  },
  {
    title: 'Envato Elements',
    content: 'Asset marketplace for creative resources',
    logo: '/assets/img/partners/envanto.png',
  },
  {
    title: 'Codecanyon',
    content: 'Marketplace for plugins, scripts, and code',
    logo: '/assets/img/partners/codecanyon.png',
  },
  {
    title: 'Google Workspace',
    content: 'Cloud-based productivity suite (email, docs, etc.)',
    logo: '/assets/img/partners/goggle.png',
  },
  {
    title: 'Go High Level',
    content: 'CRM and marketing automation platform',
    logo: '/assets/img/partners/gohighlevel.png',
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

const PartnersSection = () => {
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
            <div className="sub-title wow fadeInUp my-4">
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <ToolGrid tools={recommended} />
        </div>

        {/* Compatible Section */}
        <div>
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

export default React.memo(PartnersSection);
