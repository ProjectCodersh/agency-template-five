import { memo } from 'react';
import parse from 'html-react-parser';

const SMSectionOne = () => {
  const heading = {
    subtitle: 'WHAT WE DO FOR YOU',
    title: 'Our Core SEO Services',
    // content:
    //   'Scale your online business with Codersh Web Services, your trusted partner in delivering high-performance and conversion-focused Shopify stores. Whether you’re launching a new brand, migrating from another platform, or optimizing your existing store, our Shopify experts ensure a smooth, powerful, and growth-ready online presence tailored to your business needs.',
  };

  const whyContent = [
    {
      img: '/assets/img/serviceIcon/web-programming.webp',
      title: 'Finding High-Value Keywords Your Ideal Customers Actually Search For',
    },
    {
      img: '/assets/img/serviceIcon/migration-1.webp',
      title: 'Discover Competitor Gaps You Can Easily Outrank',
    },
    {
      img: '/assets/img/serviceIcon/maintenance.webp',
      title: 'Map Every Keyword to the Right Page for Better Rankings',
    },
    {
      img: '/assets/img/serviceIcon/add-to-cart-1.webp',
      title: 'Target Keywords That Drive Revenue - Not Just Traffic',
    },
    {
      img: '/assets/img/serviceIcon/maintenance-2.webp',
      title: 'Crafting Titles, Meta Descriptions & Headings That Get Clicked',
    },
    {
      img: '/assets/img/serviceIcon/recruitment-1.webp',
      title: 'Building Quality Backlinks That Strengthen Your Authority',
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

export default memo(SMSectionOne);
