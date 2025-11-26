
const ShopifyPartnerHero = () => {
  // Review platforms data
  const reviewPlatforms = [
    {
      id: 'clutch',
      name: 'Clutch',
      reviews: '120 Reviews',
      rating: 5.0,
      badgeColor: 'purple',
      logo: 'Clutch',
      url: '/assets/img/shopify-section/clutch-shopify-section.png',
    },
    {
      id: 'upwork',
      name: 'Upwork',
      reviews: '2000+ Reviews',
      rating: 5.0,
      badgeColor: 'purple',
      logo: 'Upwork',
      url: '/assets/img/shopify-section/upwork-shopify-section.png',
    },
    {
      id: 'goodfirms',
      name: 'GoodFirms',
      reviews: '169 Reviews',
      rating: 5.0,
      badgeColor: 'purple',
      logo: 'GoodFirms',
      url: '/assets/img/shopify-section/goodfirms-shopify-section.png',
    },
  ];

  // Team image
  const teamImage = '/assets/img/team/team.webp';

  return (
    <section className="shopify-partner-hero section-padding">
      <div className="container px-3">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Content Section */}
          <div className="col-12 col-lg-6">
            <div className="partner-hero-content">
              {/* Headline */}
              <h1 className="partner-hero-headline wow fadeInUp" data-wow-delay=".2s">
                Proud Shopify Premier Partner
              </h1>

              {/* Body Paragraph 1 */}
              <p className="partner-hero-text wow fadeInUp" data-wow-delay=".3s">
                Codersh Web Services delivers expert Shopify Plus eCommerce design and development.
                With a team of <strong>150+ Shopify developers</strong>, we&apos;ve delivered{' '}
                <strong>1,000+ Shopify stores</strong> across D2C and B2B in industries like{' '}
                <strong>
                  fashion, cosmetics & beauty, health & wellness, electronics, home & lifestyle, and
                  luxury goods.
                </strong>
              </p>

              {/* Body Paragraph 2 */}
              <p className="partner-hero-text wow fadeInUp" data-wow-delay=".4s">
                Our Shopify clients have collectively generated over{' '}
                <strong>$1 billion in revenue</strong>, achieving measurable growth and long-term
                success.
              </p>

              {/* CTA Button */}
              <div className="partner-hero-cta wow fadeInUp" data-wow-delay=".5s">
                <a
                  href="https://calendly.com/codersh-web-services/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-cta-button"
                >
                  LET&apos;S GET IN TOUCH
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-12 col-lg-6">
            <div className="partner-hero-image wow fadeInUp" data-wow-delay=".4s">
              <div className="team-image-card">
                <img src={teamImage} alt="Codersh Web Services Team" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Cards Section */}
        <div className="row g-4 mt-4 mt-lg-5">
          <div className="col-12">
            <div className="partner-review-cards">
              {reviewPlatforms.map((platform, index) => (
                <div
                  key={platform.id}
                  className="review-card wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.1}s`}
                >
                  <div className={`review-badge badge-${platform.badgeColor}`}>
                    {platform.reviews}
                  </div>
                  <div className="review-platform">
                    <img src={platform.url} alt={platform.name} className="img-fluid" />
                  </div>
                  <div className="review-rating">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="rating-score">{platform.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyPartnerHero;
