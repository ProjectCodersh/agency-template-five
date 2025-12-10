import { Link, useLocation } from 'react-router-dom';

const Nav = ({ setMobileToggle, headerType }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => (currentPath === path ? `active ${headerType}-active` : '');

  return (
    <>
      <ul className={`cs_nav_list`}>
        <li>
          <Link to="/" onClick={() => setMobileToggle(false)} className={getActiveClass('/')}>
            Unlimited Wordpress
          </Link>
        </li>

        <li>
          <Link
            to="/unlimited-shopify"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/unlimited-shopify')}
          >
            Unlimited Shopify
          </Link>
        </li>

        <li>
          <Link
            to="/work"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/work')}
          >
            Work
          </Link>
        </li>

        <li>
          <Link
            to="/case-study"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/case-study')}
          >
            Case Study
          </Link>
        </li>

        {/* <li>
          <Link
            to="/pricing"
            onClick={() => setMobileToggle(false)}
            className={getActiveClass('/pricing')}
          >
            Pricing
          </Link>
        </li> */}

        <div className="main-button d-flex d-xl-none">
          <a
            href="https://calendly.com/codersh-web-services/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="theme-btn-contact">Free Consultation</span>
          </a>
        </div>
      </ul>
    </>
  );
};

export default Nav;
