import React from 'react';
import goDaddyLogo from '/assets/img/tools/thumbnails/godaddy-thumbnail.webp';
import flyWheelLogo from '/assets/img/tools/thumbnails/Flywheel-thumbnail.webp';
import HighLevelLogo from '/assets/img/tools/thumbnails/highlevel-thumbnail.webp';
import HostingerLogo from '/assets/img/tools/thumbnails/hostinger-thumbnail.webp';
import blueHostLogo from '/assets/img/tools/thumbnails/bluehost-thumbnail.webp';
import kinstaLogo from '/assets/img/tools/thumbnails/kinsta-thumbnail.webp';
import namecheapLogo from '/assets/img/tools/thumbnails/namecheap-thumbnail.webp';
import onetwothreeRegLogo from '/assets/img/tools/thumbnails/123REG-thumbnail.webp';

const chooseHeading = {
  subtitle: 'Our Services',
  title: 'Domain / Hosting / SSL & Email Management Tools',
  content: '',
  plantitle1: 'We recommend For you',
  plantitle2: 'We are Also compatible with',
};

const recommended = [
  {
    title: 'GoDaddy',
    content: 'Domain & hosting provider',
    logo: goDaddyLogo,
  },
  {
    title: 'Flywheel',
    content: 'Managed WordPress hosting',
    logo: flyWheelLogo,
  },
  {
    title: 'HighLevel',
    content: 'CRM & marketing platform',
    logo: HighLevelLogo,
  },
  {
    title: 'Hostinger',
    content: 'Affordable hosting services',
    logo: HostingerLogo,
  },
];

const compatible = [
  {
    title: 'Bluehost',
    content: 'WordPress hosting provider',
    logo: blueHostLogo,
  },
  {
    title: 'Kinsta',
    content: 'Premium managed hosting',
    logo: kinstaLogo,
  },
  {
    title: 'Namecheap',
    content: 'Domains & hosting',
    logo: namecheapLogo,
  },
  {
    title: '123Reg',
    content: 'Domain registration service',
    logo: onetwothreeRegLogo,
  },
];

// Matches your finalized ToolGrid structure
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

const BrandSection2 = () => {
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

export default React.memo(BrandSection2);
