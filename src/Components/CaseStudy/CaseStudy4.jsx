import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaseStudy4 = () => {
  const chooseContent = [
    {
      slug: 'shopify-based-wine-store',
      title: 'Shopify Based Wine Store',
      subtitle: 'Wine Brand (LGBTQ+ Focused)',
      img: '/assets/img/casestudy/new-imgs/shopify-based-wine-store-1.webp',
      description:
        'LGBTQ+ Focused Wine Brand is a bold, innovative wine brand celebrating individuality and the LGBTQ+ community. More than just a beverage, it represents a movement toward authenticity and inclusivity',
    },
    {
      slug: 'e-commerce-cocktail-shop',
      title: 'E-Commerce Cocktail Shop',
      subtitle: 'E-Commerce (cocktail store)',
      img: '/assets/img/casestudy/new-imgs/e-commerce-cocktail-shop-2.webp',
      description:
        'Cocktail Shop is a premium pre-mixed cocktail brand known for delivering exceptional taste and convenience. To elevate their online presence, Liberation Cocktails partnered',
    },
    {
      slug: 'sparkling-wine-store',
      title: 'Sparkling Wine Store',
      subtitle: 'E-Commerce (wine store)',
      img: '/assets/img/casestudy/new-imgs/sparkling-wine-store-3.webp',
      description:
        'Sparkling Wine Store is a vibrant South African brand crafting sparkling wines that bring a sense of fun to everyday moments. Their existing Shopify store wasn’t capturing the energy or quality of',
    },
    {
      slug: 'grocery-remittance-platform',
      title: 'Grocery & Remittance Platform',
      subtitle: 'Wordpress',
      img: '/assets/img/casestudy/new-imgs/grocery-remittance-platform-4.webp',
      description:
        'Grocery & Remittance Platform is an innovative platform bridging families across borders by enabling US-based customers to send groceries and money to loved ones in Cuba. Evolving from a simple',
    },
    {
      slug: 'financial-services-platform',
      title: 'Financial Services Platform',
      subtitle: 'Financial Services',
      img: '/assets/img/casestudy/new-imgs/financial-services-platform-5.webp',
      description:
        'Financial Services Platform serves as a beacon of hope for individuals striving to improve their credit scores and achieve financial security. The project focused on building a digital platform that',
    },
    {
      slug: 'baseball-bat-store-two',
      title: 'Baseball Bat Store',
      subtitle: 'E-Commerce',
      img: '/assets/img/casestudy/new-imgs/baseball-bat-store-two-6.webp',
      description:
        'Baseball Bat Store is a premium baseball bat company renowned for its highly customizable products. To better support their complex product configurations and enhance the customer',
    },
    {
      slug: 'helmsford',
      title: 'Helmsford',
      subtitle: 'Wordpress (Associate Locator)',
      img: '/assets/img/casestudy/HelmsBriscoe-casestudy.webp',
      description:
        'Helms Ford, a global leader in hotel and meeting planning services, needed a powerful associate locator tool to connect clients with their worldwide network of hospitality professionals. The solution had to be scalable, searchable, and visually interactive, enabling users to easily find the right associate by name, region, or expertise.',
    },
    {
      slug: 'tirebase',
      title: 'TireBase',
      subtitle: 'Scrap Tire & Rubber Users Portal',
      img: '/assets/img/casestudy/Tirepages-casestudy.webp',
      description:
        'The client required a dedicated business portal for the scrap tire and rubber recycling industry nationwide in the USA. Instead of being just a listing website, the goal was to build a comprehensive platform where recyclers, manufacturers, and buyers could connect, manage their profiles, and explore opportunities in real time.',
    },
    {
      slug: 'design-nexus',
      title: 'Design Nexus',
      subtitle: 'Business Directory',
      img: '/assets/img/casestudy/05-Redsign-Hub.webp',
      description:
        'The client required a centralized business directory for architects, interior designers, and vendors in Miami. The platform had to connect professionals, brands, and showrooms, making it easier for users to discover and collaborate on design and construction projects.',
    },
    {
      slug: 'fitness-retailer-store',
      title: 'Fitness Retailer Store',
      subtitle: 'E-Commerce (Fitness Equipment)',
      img: '/assets/img/casestudy/SplitGrip-casestudy.webp',
      description:
        'Split Grip is a premium fitness equipment retailer offering over 300 SKUs for home and commercial gyms. Facing growth challenges, the brand needed a more robust e-commerce platform to handle complex product data, enhance customer experience, and scale operations efficiently.',
    },
    // {
    //   slug: 'baseball-bat-store',
    //   title: 'Baseball Bat Store',
    //   subtitle: 'E-Commerce',
    //   img: '/assets/img/casestudy/new-imgs/baseball-bat-store-two-6.webp',
    //   description:
    //     'Baseball Bat Store, a premium baseball bat company, required a more robust e-commerce solution to handle their complex product customization options. The project involved migrating their entire store from WordPress to Shopify while enhancing their custom bat builder experience.',
    // },
    {
      slug: 'jcc-site',
      title: 'JCC Site',
      subtitle: 'E-Commerce',
      img: '/assets/img/casestudy/RosenJcc-casestudy.webp',
      description:
        'The website was suffering from legacy bloat, poor performance, and disjointed user experiences. Admins struggled with inconsistent backend tools, while users encountered login friction and outdated donation flows. Scalability was nearly impossible without a structured cleanup and short-term system upgrades.',
    },
    {
      slug: 'silicon-signals',
      title: 'Silicon Signals',
      subtitle: 'technology solutions platform',
      img: '/assets/img/casestudy/RosenJcc-casestudy.webp',
      description:
        ' Silicon Signals came to us at a time when their business was getting real traction at tech events in Germany and India. Their products and services were strong, their team was solid, but their website didn’t match the level of their work. They needed something modern, smooth, and trustworthy so they could confidently promote themselves at events and online. That’s where we stepped in.',
    },
  ];

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem('caseStudyCurrentPage');
    return savedPage ? Number(savedPage) : 1;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(chooseContent.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = chooseContent.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      sessionStorage.setItem('caseStudyCurrentPage', pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="case-studies-section-4 fix section-padding pb-0">
      <div className="container">
        <div className="row g-4">
          {currentItems.map((item, i) => (
            <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-5">
              <div className="case-studies-card-items mt-0">
                <div className="thumb case-studies-card-items-imgbox">
                  <img
                    src={item.img}
                    alt={
                      item.img
                        ? item.img.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
                        : 'case study image'
                    }
                    className="case-studies-card-items-coverimg"
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <h3>
                      <Link to={`/case-study/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p>{item.subtitle}</p>
                    <p className="clamp-2-lines">{item.description}</p>
                  </div>
                  <Link
                    to={`/case-study/${item.slug}`}
                    className="icon"
                    style={{ minWidth: '52px', height: '52px' }}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="slider-button d-flex align-items-center justify-content-between mt-5">
            {/* Prev */}
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <button
                className="cmn-prev cmn-border d-center"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <span className="fw-bold white-clr previus-text text-capitalize">
                {currentPage > 1 ? 'Previous' : ''}
              </span>
            </div>

            {/* Center Page Numbers */}
            <div className="d-flex align-items-center gap-2 ">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  className={`pagination-btn cmn-border d-flex align-items-center justify-content-center rounded-circle cmn-numbers ${
                    currentPage === pageNum ? 'active' : ''
                  }`}
                  onClick={() => goToPage(pageNum)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontWeight: currentPage === pageNum ? 'bold' : 'normal',
                    background: currentPage === pageNum ? 'var(--black)' : '',
                    color: currentPage === pageNum ? 'var(--white)' : '',
                  }}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next */}
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <span className="fw-bold white-clr previus-text text-capitalize">
                {currentPage < totalPages ? 'Next' : ''}
              </span>
              <button
                className="cmn-next cmn-border d-center"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudy4;
