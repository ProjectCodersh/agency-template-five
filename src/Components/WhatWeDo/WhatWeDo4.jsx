import parse from 'html-react-parser';

const WhatWeDo4 = () => {
  const heading = {
    subtitle: 'WHY Choose US',
    title: 'What’s Included in <br> Our Shopify SEO Services',
    content: '',
  };

  const whyContent = [
    {
      img: '/assets/img/serviceIcon/web-programming.webp',
      title: 'Custom Store Project',
      content:
        'Get a detailed SEO audit that covers critical issues affecting your clients’ sites. By fixing these issues, we enhance site performance, leading to higher rankings and increased traffic.',
    },
    {
      img: '/assets/img/serviceIcon/migration.webp',
      title: 'Shopify Migration',
      content:
        'Increase your clients’ local visibility and attract more customers. Our local SEO services ensure your clients stand out in local searches.',
    },
    {
      img: '/assets/img/serviceIcon/maintenance.webp',
      title: 'Headless Shopify',
      content:
        'Our Shopify SEO experts optimize your clients’ content and site structure, internal linking, ensuring top crawlability and rankings. This enhances user experience and boosts search engine performance.',
    },
    {
      img: '/assets/img/serviceIcon/add-to-cart.webp',
      title: 'Shopify Plus',
      content:
        'Get a detailed SEO audit that covers critical issues affecting your clients’ sites. By fixing these issues, we enhance site performance, leading to higher rankings and increased traffic.',
    },
    {
      img: '/assets/img/serviceIcon/maintenance-2.webp',
      title: 'Support & Maintenance',
      content:
        'Increase your clients’ local visibility and attract more customers. Our local SEO services ensure your clients stand out in local searches.',
    },
    {
      img: '/assets/img/serviceIcon/recruitment.webp',
      title: 'Shopify CRO Agency',
      content:
        'Our Shopify SEO experts optimize your clients’ content and site structure, internal linking, ensuring top crawlability and rankings. This enhances user experience and boosts search engine performance.',
    },
    {
      img: '/assets/img/serviceIcon/international.webp',
      title: 'Internationalization',
      content:
        'Get a detailed SEO audit that covers critical issues affecting your clients’ sites. By fixing these issues, we enhance site performance, leading to higher rankings and increased traffic.',
    },
    {
      img: '/assets/img/serviceIcon/clipboard.webp',
      title: 'Subscriptions',
      content:
        'Increase your clients’ local visibility and attract more customers. Our local SEO services ensure your clients stand out in local searches.',
    },
    {
      img: '/assets/img/serviceIcon/seo.webp',
      title: 'Email & SMS Marketing',
      content:
        'Our Shopify SEO experts optimize your clients’ content and site structure, internal linking, ensuring top crawlability and rankings. This enhances user experience and boosts search engine performance.',
    },
    {
      img: '/assets/img/serviceIcon/mobile-development.webp',
      title: 'Shopify App Development',
      content:
        'Get a detailed SEO audit that covers critical issues affecting your clients’ sites. By fixing these issues, we enhance site performance, leading to higher rankings and increased traffic.',
    },
    {
      img: '/assets/img/serviceIcon/seo-2.webp',
      title: 'E-Commerce SEO',
      content:
        'Increase your clients’ local visibility and attract more customers. Our local SEO services ensure your clients stand out in local searches.',
    },
    {
      img: '/assets/img/serviceIcon/b2b.webp',
      title: 'Shopify B2B & Wholesale',
      content:
        'Our Shopify SEO experts optimize your clients’ content and site structure, internal linking, ensuring top crawlability and rankings. This enhances user experience and boosts search engine performance.',
    },
  ];

  return (
    <section className="service-section fix section-padding">
      <div className="left-shape float-bob-y">
        {/* <img src="/assets/img/service/left-shape.webp" alt="img" /> */}
      </div>
      <div className="right-shape">
        {/* <img src="/assets/img/service/right-shape.webp" alt="img" /> */}
      </div>
      <div className="bg-shape">
        <img src="/assets/img/service/bg-shape.png" alt="img" />
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
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {parse(heading.content)}
          </p>
        </div>
        <div className="row">
          {whyContent.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-box-items d-flex flex-column text-center">
                <div className="icon">
                  <img src={item.img} alt="img" className="icon-img" />
                </div>
                <div className="content">
                  <h4>{item.title}</h4>
                  {/* <p>{item.content}</p> */}
                  {/* <Link to="/service/service-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo4;
