import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Footer2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div>
      <section className="cta-section section-padding pb-0">
        <div className="rokect-shape float-bob-y">
          {/* <img src="/assets/img/rokect.png" alt="img" /> */}
        </div>
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
              <Link to="/contact-us">
                <span className="theme-btn">Let&#39;s Collaborate</span>
              </Link>
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
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.facebook.com/Codershweb/">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://x.com/CodershWeb/">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/codersh.web/">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F30213091%2Fadmin%2Fanalytics%2Ffollowers%2F">
                        <i className="bi bi-linkedin"></i>
                      </a>
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
                      <Link to="/case-study">
                        <i className="bi bi-arrow-right"></i>
                        Case Study
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing">
                        <i className="bi bi-arrow-right"></i>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <a href="https://calendly.com/codersh-web-services/15min" target='_blank'>
                        <i className="bi bi-arrow-right"></i>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Recent Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-post-items">
                                            <div className="thumb">
                                                <img src="/assets/img/news/pp1.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2"></i>
                                                        20 Feb, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link to="/blog/blog-details">
                                                        Top 5 Most Famous <br />
                                                        Technology Trend In 2024
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-post-items mb-0">
                                            <div className="thumb">
                                                <img src="/assets/img/news/pp2.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2"></i>
                                                        15 Dec, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link to="/blog/blog-details">
                                                        The Surfing Man Will Blow <br />
                                                        Your Mind
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Contact Us</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        <i className="bi bi-envelope"></i>
                        <a href="mailto:bdm.codersh@gmail.com">bdm.codersh@gmail.com</a>
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
                              href="https://www.google.com/maps?q=A-307,+Empire+Business+Hub,+Science+City+Rd,+Sola,+Ahmedabad"
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

                      {/* USA Address */}
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

                    {/* <div className="footer-input">
                                            <input type="email" id="email2" placeholder="Your email address" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I agree to the <a href="#">Privacy Policy.</a>
                                            </label>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container px-3">
            <div className="footer-wrapper d-flex align-items-center justify-content-center">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © 2014 – 2025. All Rights Reserved.{' '}
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Codersh Web Services
                </Link>
                .
              </p>
            </div>
          </div>
          <a href="#" id="scrollUp" className="scroll-icon">
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer2;
