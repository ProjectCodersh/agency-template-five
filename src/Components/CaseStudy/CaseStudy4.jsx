import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaseStudy4 = () => {
  const chooseContent = [
    {
      slug: 'madame-f',
      title: 'Madame',
      subtitle: 'Wine Brand (LGBTQ+ Focused)',
      img: '/assets/img/casestudy/madamef-casestudy.webp',
      description:
        'MADAME F is a bold, innovative wine brand celebrating individuality and the LGBTQ+ community. More than just a beverage, it represents a movement toward authenticity and inclusivity',
    },
    {
      slug: 'liberation-cocktails',
      title: 'Liberation Cocktails',
      subtitle: 'E-Commerce (cocktail store)',
      img: '/assets/img/casestudy/liberation-casestudy.webp',
      description:
        'Liberation Cocktails is a premium pre-mixed cocktail brand known for delivering exceptional taste and convenience. To elevate their online presence, Liberation Cocktails partnered',
    },
    {
      slug: 'van-hunks',
      title: 'Van Hunks',
      subtitle: 'E-Commerce (wine store)',
      img: '/assets/img/casestudy/van-hunks-casestudy.webp',
      description:
        'Van Hunks is a vibrant South African brand crafting sparkling wines that bring a sense of fun to everyday moments. Their existing Shopify store wasn’t capturing the energy or quality of',
    },
    {
      slug: 'pa-mi-gente',
      title: 'Pa Mi Gente',
      subtitle: 'Wordpress',
      img: '/assets/img/casestudy/pami-gente-casestudy.webp',
      description:
        'Pa Mi Gente is an innovative platform bridging families across borders by enabling US-based customers to send groceries and money to loved ones in Cuba. Evolving from a simple',
    },
    {
      slug: 'stellar-credit',
      title: 'Stellar Credit',
      subtitle: 'Financial Services',
      img: '/assets/img/casestudy/stellar-credit-casestudy.webp',
      description:
        'Stellar Credit serves as a beacon of hope for individuals striving to improve their credit scores and achieve financial security. The project focused on building a digital platform that',
    },
    {
      slug: 'bergbat',
      title: 'Bergbat',
      subtitle: 'E-Commerce',
      img: '/assets/img/casestudy/bergbat-casestudy.webp',
      description:
        'Bergbat is a premium baseball bat company renowned for its highly customizable products. To better support their complex product configurations and enhance the customer',
    },
    {
      slug: 'helmsford',
      title: 'Helmsford',
      subtitle: 'Wordpress (Associate Locator)',
      img: '/assets/img/casestudy/helmsford-casestudy.webp',
      description:
        'Helms Ford, a global leader in hotel and meeting planning services, needed a powerful associate locator tool to connect clients with their worldwide network of hospitality professionals. The solution had to be scalable, searchable, and visually interactive, enabling users to easily find the right associate by name, region, or expertise.',
    },
    {
      slug: 'tirebase',
      title: 'TireBase',
      subtitle: 'Scrap Tire & Rubber Users Portal',
      img: '/assets/img/casestudy/tirebase-casestudy.webp',
      description:
        'The client required a dedicated business portal for the scrap tire and rubber recycling industry nationwide in the USA. Instead of being just a listing website, the goal was to build a comprehensive platform where recyclers, manufacturers, and buyers could connect, manage their profiles, and explore opportunities in real time.',
    },
    {
      slug: 'design-nexus',
      title: 'Design Nexus',
      subtitle: 'Business Directory',
      img: '/assets/img/casestudy/design-nexus-casestudy.webp',
      description:
        'The client required a centralized business directory for architects, interior designers, and vendors in Miami. The platform had to connect professionals, brands, and showrooms, making it easier for users to discover and collaborate on design and construction projects.',
    },
    {
      slug: 'fitness-retailer-store',
      title: 'Fitness Retailer Store',
      subtitle: 'E-Commerce (Fitness Equipment)',
      img: '/assets/img/casestudy/fitness-retailer-store-casestudy.webp',
      description:
        'Split Grip is a premium fitness equipment retailer offering over 300 SKUs for home and commercial gyms. Facing growth challenges, the brand needed a more robust e-commerce platform to handle complex product data, enhance customer experience, and scale operations efficiently.',
    },
    {
      slug: 'baseball-bat-store',
      title: 'Baseball Bat Store',
      subtitle: 'E-Commerce',
      img: '/assets/img/casestudy/baseball-bat-store-casestudy.webp',
      description:
        'Baseball Bat Store, a premium baseball bat company, required a more robust e-commerce solution to handle their complex product customization options. The project involved migrating their entire store from WordPress to Shopify while enhancing their custom bat builder experience.',
    },
    {
      slug: 'jcc-site',
      title: 'JCC Site',
      subtitle: 'E-Commerce',
      img: '/assets/img/casestudy/jcc-site-casestudy.webp',
      description:
        'The website was suffering from legacy bloat, poor performance, and disjointed user experiences. Admins struggled with inconsistent backend tools, while users encountered login friction and outdated donation flows. Scalability was nearly impossible without a structured cleanup and short-term system upgrades.',
    },
  ];

  // ✅ Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(chooseContent.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = chooseContent.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
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

        {/* ✅ Custom Pagination using your slider-button design */}
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
