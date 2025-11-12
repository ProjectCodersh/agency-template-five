import React from 'react';
import goDaddyLogo from '/assets/img/tools/godaddy-logo.webp';
import flyWheelLogo from '/assets/img/tools/flywheel-logo.webp';
import HighLevelLogo from '/assets/img/tools/highlevel-logo.webp';
import HostingerLogo from '/assets/img/tools/hostinger-logo.webp';
import blueHostLogo from '/assets/img/tools/bluehost-logo.webp';
import kinstaLogo from '/assets/img/tools/kinsta-logo.webp';
import namecheapLogo from '/assets/img/tools/namecheap-logo.webp';
import onetwothreeRegLogo from '/assets/img/tools/123reg-logo.webp';

const recommended = [
  { name: 'GoDaddy', logo: goDaddyLogo },
  { name: 'Flywheel', logo: flyWheelLogo },
  { name: 'HighLevel', logo: HighLevelLogo },
  { name: 'Hostinger', logo: HostingerLogo },
];

const compatible = [
  { name: 'Bluehost', logo: blueHostLogo },
  { name: 'Kinsta', logo: kinstaLogo },
  { name: 'Namecheap', logo: namecheapLogo },
  { name: '1-2-3 Reg', logo: onetwothreeRegLogo },
];

const chooseHeading = {
  subtitle: 'Our Services',
  title: 'Domain / Hosting / SSL & Email Management Tools',
  content: ``,
  plantitle1: 'We recommend for you',
  plantitle2: 'We are also compatible with',
};

const ToolGrid = ({ tools }) => (
  <div className="row gy-4">
    {tools.map((tool) => (
      <div
        key={tool.name}
        className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column"
      >
        <img
          src={tool.logo}
          alt={tool.name}
          loading="lazy"
          className="img-fluid mb-2 brandsection-brands-two px-3 px-md-0"
        />
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
            <h2 className="wow fadeInUp text-break" data-wow-delay=".3s">
              {chooseHeading.title}
            </h2>
            <p
              className="wow fadeInUp mt-3 text-muted"
              data-wow-delay=".5s"
              style={{ whiteSpace: 'pre-line' }}
            >
              {chooseHeading.content}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#f6f3fe' }}>
              <span>{chooseHeading.plantitle1}</span>
            </div>
          </div>
          <ToolGrid tools={recommended} />
        </div>

        <div>
          <div className="section-title mb-0">
            <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#f6f3fe' }}>
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
