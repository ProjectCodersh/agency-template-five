import { memo } from 'react';
import parse from 'html-react-parser';

const WhatWeDo = () => {
  const heading = {
    subtitle: 'Shopify Development Service',
    title: 'Feature Services',
    // content:
    //   'Scale your online business with Codersh Web Services, your trusted partner in delivering high-performance and conversion-focused Shopify stores. Whether you’re launching a new brand, migrating from another platform, or optimizing your existing store, our Shopify experts ensure a smooth, powerful, and growth-ready online presence tailored to your business needs.',
  };

  const whyContent = [
    {
      img: '/assets/img/serviceIcon/web-programming.webp',
      title: 'Custom Store Project',
      description:
        'Get a fully custom-designed Shopify store built from scratch; crafted for conversions, speed, and a seamless brand experience.',
    },
    {
      img: '/assets/img/serviceIcon/migration-1.webp',
      title: 'Shopify Migrations',
      description:
        'Migrate from WooCommerce, WordPress, Magento, BigCommerce, or any platform to Shopify with zero data loss and minimal downtime.',
    },
    {
      img: '/assets/img/serviceIcon/maintenance.webp',
      title: 'Headless & Shopify',
      description:
        'Unlock next-level performance with headless Shopify setups using React, Next.js, Hydrogen, or custom front-end frameworks.',
    },
    {
      img: '/assets/img/serviceIcon/add-to-cart-1.webp',
      title: 'Shopify Plus',
      description:
        'Leverage enterprise-grade Shopify Plus features with automation, custom checkout, multi-store setups, and advanced scaling support.',
    },
    {
      img: '/assets/img/serviceIcon/maintenance-2.webp',
      title: 'Support & Maintenance',
      description:
        'Keep your Shopify store updated, secure, and running smoothly with ongoing technical support, fixes, monitoring, and enhancements.',
    },
    {
      img: '/assets/img/serviceIcon/recruitment-1.webp',
      title: 'Shopify CRO Agency',
      description:
        'Boost conversions with UX improvements, A/B testing, speed optimization, funnel improvement, and strategic data-driven CRO.',
    },
    {
      img: '/assets/img/serviceIcon/international.webp',
      title: 'Internationalization',
      description:
        'Scale globally with multi-language, multi-currency, localized content, and region-specific storefront configurations.',
    },
    {
      img: '/assets/img/serviceIcon/clipboard.webp',
      title: 'Subscriptions',
      description:
        'Set up subscription models with Recharge, Bold, or custom setups, ideal for recurring revenue and customer retention.',
    },
    {
      img: '/assets/img/serviceIcon/seo.webp',
      title: 'Email & SMS Marketing',
      description:
        'Grow your revenue with automated email flows, SMS campaigns, segmentation, and personalized customer journeys.',
    },
    {
      img: '/assets/img/serviceIcon/mobile-development.webp',
      title: 'Shopify App Development',
      description:
        'Build scalable and secure custom Shopify apps tailored to your business workflows or storefront features.',
    },
    {
      img: '/assets/img/serviceIcon/seo-2.webp',
      title: 'Commerce SEO',
      description:
        'Improve visibility and traffic with eCommerce-focused SEO, site structure optimization, schema, and product-level SEO.',
    },
    {
      img: '/assets/img/serviceIcon/b2b.webp',
      title: 'Shopify B2B & Wholesale',
      description:
        'Set up B2B and wholesale solutions with custom pricing, customer-specific catalogs, gated storefronts, and bulk ordering systems.',
    },
  ];

  return (
    <section className="service-section fix section-padding">
      <div className="bg-shape">
        {/* <img
          src="/assets/img/service/bg-shape.png"
          alt="Background Decorative Shape"
          loading="lazy"
        /> */}
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
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + (index % 4) * 0.1}s`}
            >
              <div className="service-box-items flex-column">
                <div className="icon">
                  <img src={item.img} alt={item.title} className="icon-img" loading="lazy" />
                </div>

                <div className="content">
                  <h4>{item.title}</h4>
                  {item.description && <p className="fw-normal">{item.description}</p>}
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
