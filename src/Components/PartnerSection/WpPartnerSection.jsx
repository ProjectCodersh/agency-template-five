function WpPartnerSection() {
  const reviewPlatforms = [
    {
      id: 'clutch',
      name: 'Clutch',
      logo: '/assets/img/clutchlogo.webp',
      reviews: '120 Reviews',
      rating: 5.0,
    },
    {
      id: 'upwork',
      name: 'Upwork',
      logo: '/assets/img/upwork.webp',
      reviews: '2000+ Reviews',
      rating: 5.0,
    },
    {
      id: 'goodfirms',
      name: 'GoodFirms',
      logo: '/assets/img/goodfirmslogo.webp',
      reviews: '169 Reviews',
      rating: 5.0,
    },
  ];

  const videoThumbnail = '/assets/img/team/team.webp';

  return (
    <section className="section-padding bg-[#f6f3fe]">
      <div className="container px-3">
        <div className="section-title mb-0">
          <div className="sub-title wow fadeInUp mb-4 bg-[#384bff1a]">
            <span>Trusted Wordpress Partner</span>
          </div>
        </div>

        <div className="row g-4 g-lg-5">
          {/* Left Column */}
          <div className="col-12 col-lg-6 mt-4 lg:mt-6">
            <div className="partner-section-content text-start">
              <h1 className="partner-section-headline wow fadeInUp" data-wow-delay=".2s">
                Proud WordPress Development Partner
              </h1>

              <p className="partner-section-text wow fadeInUp" data-wow-delay=".3s">
                With a team of{' '}
                <strong>15+ WordPress specialists and 100+ WordPress websites</strong>, Codersh Web
                Services helps brands create fast, secure, and scalable WordPress websites that
                attract visitors and drive conversions across industries, including{' '}
                <strong> healthcare, technology, corporate, real estate, and hospitality</strong>.
              </p>

              <p className="partner-section-text wow fadeInUp" data-wow-delay=".4s">
                Our WordPress clients have collectively achieved{' '}
                <strong>
                  {' '}
                  higher traffic, better user engagement, and increased conversion rates
                </strong>
                , driving sustainable long-term growth through powerful digital experiences.
              </p>

              <div
                className="main-button main-btn-area2 wow fadeInUp"
                style={{ width: 'fit-content' }}
                data-wow-delay=".5s"
              >
                <a
                  href="https://calendly.com/codersh-web-services/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <span className="theme-btn">Partner With Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-6 mt-4 lg:mt-6">
            <div className="partner-section-right">
              {/* Thumbnail */}
              <div className="video-thumbnail-wrapper wow fadeInUp" data-wow-delay=".4s">
                <div className="video-thumbnail-container">
                  <img
                    src={videoThumbnail}
                    alt="Codersh Web Services Office"
                    className="video-thumbnail-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Review Widgets */}
              <div className="review-widgets-container">
                {reviewPlatforms.map((platform, index) => (
                  <div
                    key={platform.id}
                    className="review-widget wow fadeInUp"
                    data-wow-delay={`${0.5 + index * 0.1}s`}
                  >
                    <div className="review-widget-badge">{platform.reviews}</div>

                    <div className="review-widget-logo">
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="platform-logo-img"
                        loading="lazy"
                      />
                    </div>

                    <div className="review-widget-rating">
                      <div className="rating-stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="rating-value">{platform.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WpPartnerSection;
