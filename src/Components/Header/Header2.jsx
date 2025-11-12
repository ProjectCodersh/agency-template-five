import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

export default function Header2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  const navRef = useRef();
  const location = useLocation();

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileToggle(false);
  }, [location.pathname]);

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 cs_style_1 cs_style_2 header_sticky_style2 ${
          variant ? variant : ''
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? 'cs_mobile_toggle_active' : ''
        } ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_main_header">
          <div className="container px-3">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src="/assets/img/logo/Vector-black.svg" alt="Logo" className="agencyLogo" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} headerType="header2" />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  {/* <a onClick={() => setSearchToggle(!searchToggle)} className="search-trigger search-icon"><i className="bi bi-search"></i></a> */}

                  <div className="main-button main-btn-area2">
                    <Link to="/contact-us">
                      {' '}
                      <span className="theme-btn"> Contact Us </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
        <div className="search-inner">
          <i
            onClick={() => setSearchToggle(!searchToggle)}
            className="bi bi-x-lg search-close"
            id="search-close"
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="cs_site_header_spacing_130"></div>
    </div>
  );
}
