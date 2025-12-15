import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 500,
    });
  };

  return (
    <div>
      <section className="cta-section section-bg section-padding pb-0">
        <div className="rokect-shape float-bob-y"></div>
        <div className="container px-3">
          <div
            className="cta-wrapper bg-cover mt-1 mt-xl-0"
            data-background="/assets/img/cta-bg.jpg"
          >
            <div
              className="cta-img wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <img src="/assets/img/HarshShah.png" alt="img" />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Stay Connected With <br /> Cutting Edge IT
            </h2>
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <a href="https://calendly.com/codersh-web-services/15min" target="_blank">
                <span className="theme-btn">Let&#39;s Collaborate</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section footer-bg fix">
        <div className="container px-3">
          <div className="footer-widgets-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <a href="index.html">
                      <img src="/assets/img/logo/Vector.svg" alt="img" />
                    </a>
                  </div>

                  <div className="footer-content">
                    <p>
                      We are a web design and development company aiming to provide high quality
                      website development to its clients.
                    </p>

                    <div className="social-icon d-flex align-items-center mb-3">
                      <a href="https://www.facebook.com/Codershweb/">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://x.com/CodershWeb/">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="https://www.instagram.com/codersh.web/">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F30213091%2Fadmin%2Fanalytics%2Ffollowers%2F">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://wa.me/9998134094?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20services.">
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </div>

                    {/* Reviews Section (moved under social icons, stacked vertically) */}
                    <div
                      className="footer-reviews-container"
                      style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}
                    >
                      {[
                        {
                          id: 'clutch',
                          name: 'Clutch',
                          logo: '/assets/img/footer/clutch-footer-1.png',
                          rating: 5.0,
                        },
                        {
                          id: 'goodfirms',
                          name: 'GoodFirms',
                          logo: '/assets/img/footer/goodfirms-footer.png',
                          rating: 5.0,
                        },
                        {
                          id: 'upwork',
                          name: 'Upwork',
                          logo: '/assets/img/footer/upwork-footer-1.png',
                          rating: 5.0,
                        },
                      ].map((platform, index) => (
                        <div
                          key={platform.id}
                          className="footer-review-item wow fadeInUp"
                          data-wow-delay={`${0.3 + index * 0.1}s`}
                        >
                          <div className="footer-review-rating">
                            <div className="footer-rating-stars">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  width="14"
                                  height="14"
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
                            <span className="footer-rating-value">{platform.rating}</span>
                          </div>
                          <div className="footer-review-logo">
                            <img
                              src={platform.logo}
                              alt={platform.name}
                              className="footer-platform-logo"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="/">
                        <i className="bi bi-arrow-right"></i>
                        Unlimited Wordpress
                      </Link>
                    </li>
                    <li>
                      <Link to="/unlimited-shopify">
                        <i className="bi bi-arrow-right"></i>
                        Unlimited Shopify
                      </Link>
                    </li>
                    <li>
                      <Link to="/work">
                        <i className="bi bi-arrow-right"></i>
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-study">
                        <i className="bi bi-arrow-right"></i>
                        Case Study
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/pricing">
                        <i className="bi bi-arrow-right"></i>
                        Pricing
                      </Link>
                    </li> */}
                    {/* <li>
                      <li>
                        <a href="https://calendly.com/codersh-web-services/15min" target='_blank'>
                          <i className="bi bi-arrow-right"></i>
                          Contact
                        </a>
                      </li>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Contact Us</h3>
                  </div>

                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        <i className="bi bi-envelope"></i>
                        {/* <a href="mailto:bdm.codersh@gmail.com">bdm.codersh@gmail.com</a> */}
                        <a href="mailto:arvind@codersh.com">arvind@codersh.com</a>
                      </li>
                      <li>
                        <i className="bi bi-telephone"></i>
                        <a href="tel:+9998134094">+91 99981 34094</a>
                      </li>

                      {/* India Address */}
                      <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <img
                          src="/assets/img/india.svg"
                          alt="India Flag"
                          style={{
                            width: '20px',
                            height: '14px',
                            marginRight: '8px',
                            marginTop: '8px',
                          }}
                        />

                        <div>
                          <strong>INDIA:</strong>
                          <div style={{ color: 'white' }}>
                            <a
                              href="https://maps.app.goo.gl/TJP3CFjW6jSKHwsA6"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'white', textDecoration: 'none' }}
                            >
                              A-307, Empire Business Hub,
                              <br />
                              Science City Rd, Sola, Ahmedabad
                            </a>
                          </div>
                        </div>
                      </li>

                      {/* USA ADDRESS */}
                      <li style={{ display: 'flex', alignItems: 'flex-start', marginTop: '8px' }}>
                        <img
                          src="/assets/img/united-states.svg"
                          alt="USA Flag"
                          style={{
                            width: '20px',
                            height: '14px',
                            marginRight: '8px',
                            marginTop: '8px',
                          }}
                        />

                        <div>
                          <strong>USA:</strong>
                          <div style={{ color: 'white' }}>
                            <a
                              href="https://www.google.com/maps?q=400+Boren+Ave+N,+Apt+426,+Seattle,+WA+98109"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'white', textDecoration: 'none' }}
                            >
                              400 Boren Ave N, Apt 426,
                              <br />
                              Seattle WA – 98109 – USA
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container px-3">
            <div className="footer-wrapper d-flex align-items-center justify-content-center">
              <p className="wow fadeInLeft color-2 footer-rights-text" data-wow-delay=".3s">
                © 2014 – 2025. All Rights Reserved.{' '}
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Codersh Web Services
                </Link>
                .
              </p>
            </div>
          </div>

          <button
            onClick={handleScrollToTop}
            id="scrollUp"
            className="scroll-icon"
            title="Scroll to top"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Footer1;
