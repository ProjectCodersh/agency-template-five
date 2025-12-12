import React from 'react';

const chooseHeading = {
  subtitle: 'Partners & Integrations',
  title: 'Website Builders & Design Tools',
  content: '',
  plantitle1: 'Website Builders',
  plantitle2: 'WordPress Plugins & Tools',
};

// Website Builders
const recommended = [
  {
    title: 'Shift4Shop',
    content: 'E-commerce platform',
    logo: '/assets/img/partners/shift4shop.png',
  },
  {
    title: 'Webflow',
    content: 'Website design and development platform',
    logo: '/assets/img/partners/webflow.png',
  },
  {
    title: 'Frammer',
    content: 'Website design and development tool',
    logo: '/assets/img/partners/frammer.png',
  },
  {
    title: 'WIX',
    content: 'Website building platform',
    logo: '/assets/img/partners/wix.png',
  },
  {
    title: 'Squarespace',
    content: 'Website builder with templates',
    logo: '/assets/img/partners/squarespace.png',
  },
];

// WordPress Plugins & Tools
const compatible = [
  {
    title: 'ACF',
    content: 'Advanced Custom Fields - WordPress plugin for adding custom fields',
    logo: '/assets/img/partners/acf.png',
  },
  {
    title: 'Elementor',
    content: 'WordPress page builder plugin',
    logo: '/assets/img/partners/elementor.png',
  },
  {
    title: 'WP Rocket',
    content: 'WordPress performance optimization plugin',
    logo: '/assets/img/partners/wprocket.png',
  },
  {
    title: 'Wordfence',
    content: 'WordPress security plugin',
    logo: '/assets/img/partners/wordfence.png',
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

const ParntersSection2 = () => {
  return (
    <section className="section-padding brand-section fix" style={{ backgroundColor: '#f6f3fe' }}>
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

export default React.memo(ParntersSection2);
