import { memo } from 'react';
import parse from 'html-react-parser';

const WhatWeDo = () => {
  const heading = {
    subtitle: 'What We Do',
    title: 'What’s Included in <br> Our WordPress Services',
    content: '',
  };

  const whyContent = [
    {
      img: '/assets/img/serviceIcon/psd.webp',
      title: 'Pixel perfect PSD to wordpress conversion',
    },
    {
      img: '/assets/img/serviceIcon/cms.webp',
      title: 'Wordpress CMS Setup and Configuration',
    },
    {
      img: '/assets/img/serviceIcon/maintenance.webp',
      title: 'Wordpress plugin development Service',
    },
    {
      img: '/assets/img/serviceIcon/layout-1.webp',
      title: 'Wordpress theme development & customization',
    },
    {
      img: '/assets/img/serviceIcon/migration.webp',
      title: 'Wordpress migration and maintenance services',
    },
    {
      img: '/assets/img/serviceIcon/service.webp',
      title: 'Woocommerce Development Service',
    },
    {
      img: '/assets/img/serviceIcon/blogging-1.webp',
      title: 'Wordpress Blog Development Service',
    },
    {
      img: '/assets/img/serviceIcon/integration.webp',
      title: 'Wordpress API Integration Service',
    },
  ];

  return (
    <section className="service-section fix section-padding">
      <div className="bg-shape">
        <img
          src="/assets/img/service/bg-shape.png"
          alt="Background Decorative Shape"
          loading="lazy"
        />
      </div>

      <div className="container px-3">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>{heading.subtitle}</span>
            </div>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(heading.title)}
            </h2>
          </div>

          {heading.content && (
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {parse(heading.content)}
            </p>
          )}
        </div>

        <div className="row">
          {whyContent.map((item, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
            >
              <div className="service-box-items text-center flex-column">
                <div className="icon">
                  <img src={item.img} alt={item.title} className="icon-img" loading="lazy" />
                </div>

                <div className="content">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WhatWeDo);
